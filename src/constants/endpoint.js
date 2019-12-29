let REST_API_ENDPOINT = 'http://localhost:4000/api/'
export let PYTHON_SERVER_ENDPOINT = 'http://220.67.154.77:5001/'
export const KBU_CAFETERIA_ENDPOINT = 'http://220.67.154.74:8080/SchoolFood/ResultOutput.jsp'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    // REST_API_ENDPOINT = 'https://www.kbucard.com:4000/api/'
} else {
    // production code
    REST_API_ENDPOINT = 'https://www.kbucard.com:4000/api/'
}



export default REST_API_ENDPOINT