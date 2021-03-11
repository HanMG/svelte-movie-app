import axios from 'axios'
import _unionBy from 'lodash/unionBy'
import _uniqBy from 'lodash/uniqBy'
import { writable, get } from 'svelte/store'

// 영화 검색시 목록을 넣을 배열 변수
export const movies = writable([])
// 목록을 다 가져왔는지 체크할 변수
export const loading = writable(false)
// 영화 클릭시 영화 상세정보를 담을 객체 변수
export const theMovie = writable({})
// 검색시 아무것도 안나오거나 에러가 나올때
export const message = writable('Search for the Movie title')

// 페이지 이동시 영화검색리스트 초기화
export function initMovies() {
    movies.set([])
    message.set('Search for the Movie title')
    loading.set(false)
}

// 영화 검색시 가져오는 함수
export async function searchMovies(payload) {    
    // 반복검색 제어
    if (get(loading)) return 
    loading.set(true)    
    message.set('')

    let total = 0

    try {
        // const res = await _fetchMovie({
        //     ...payload,
        //     page: 1
        // })
        const res = await axios.post('/.netlify/functions/movie', {
            ...payload,
            page: 1
        })
        const { Search, totalResults } = res.data
        movies.set(_uniqBy(Search,'imdbID'))
        message.set('')
        total = totalResults
    } catch (msg) {
        movies.set([])
        message.set(msg)
        loading.set(false)
        return 
    }    
    
    const pageLength = Math.ceil(total / 10)

    if (pageLength > 1){
        for (let page = 2; page <= pageLength; page += 1){
            if(page > (payload.number / 10)) break
            // const res = await _fetchMovie({
            //     ...payload,
            //     page
            // })
            const res = await axios.post('/.netlify/functions/movie', {
                ...payload,
                page
            })
            const { Search } = res.data
            movies.update($movies => _unionBy($movies, Search, 'imdbID'))
        }
    }

    console.log(get(movies))
    loading.set(false)
}

// imdbId를 통해 영화정보를 가져오는 함수
export async function searchMovieWithId(id) {
    if (get(loading)) return 
    loading.set(true)

    // const res = await _fetchMovie({
    //     id
    // })
    const res = await axios.post('/.netlify/functions/movie', {
        id
    })
    console.log(res)

    theMovie.set(res.data)
    loading.set(false)
}