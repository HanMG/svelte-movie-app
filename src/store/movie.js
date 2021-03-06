import axios from 'axios'
import _unionBy from 'lodash/unionBy'
import _uniqBy from 'lodash/uniqBy'
import { writable, get } from 'svelte/store'

export const movies = writable([])
export const loading = writable(false)

export async function searchMovies(payload) {    
    if (get(loading)) return 
    loading.set(true)

    const { title, type, year, number } = payload
    const OMDB_API_KEY = '20f6531a'

    const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`)
    console.log(res)

    const { Search, totalResults } = res.data
    movies.set(_uniqBy(Search,'imdbID'))
    
    const pageLength = Math.ceil(totalResults / 10)

    if (pageLength > 1){
        for (let page = 2; page <= pageLength; page += 1){
            if(page > (number / 10)) break
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
            const { Search } = res.data

            movies.update($movies => _unionBy($movies, Search, 'imdbID'))
        }
    }

    console.log(get(movies))
    loading.set(false)
}