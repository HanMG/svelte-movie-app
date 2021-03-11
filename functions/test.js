exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'HMG',
            age: 33,
            email: 'hanmoongoo@gmail.com'
        })
    }
}