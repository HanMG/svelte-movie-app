// nodejs에서 쓸수있는 require로 
const axios = require('axios')
const { OMDB_API_KEY } = process.env

exports.handler = async function(event, context) {
    const params = JSON.parse(event.body)
    const { title, type,year, page, id } = params    

    const url = id 
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&ploat=full`        
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}` 
    
    try{
        const res = await axios.get(url)
        console.log(res.data)

        // omdbApi에서 정상적인 응답으로 Error 메세지 보낼때
        if (res.data.Error) {
            // reject(res.data.Error)
            return {
                statusCode: 400,
                body: res.data.Error
            }
        }
        //resolve(res)
        return {
            statusCode: 200,
            body: JSON.stringify(res.data)
        }
    } catch (error) {
        console.log(error.response.status)
        // reject(error.message)
        return {
            statusCode: error.response.status,
            body: error.message
        }
    }
}