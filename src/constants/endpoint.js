let REST_API_ENDPOINT = 'http://localhost:4000/api/'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
} else {
    // production code
    REST_API_ENDPOINT = 'https://ec2-15-164-165-139.ap-northeast-2.compute.amazonaws.com:4000/api/'
}

export default REST_API_ENDPOINT