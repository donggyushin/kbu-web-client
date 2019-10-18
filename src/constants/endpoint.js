let REST_API_ENDPOINT = 'http://localhost:4000/api/'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
} else {
    // production code
    REST_API_ENDPOINT = 'server-uri'
}

export default REST_API_ENDPOINT