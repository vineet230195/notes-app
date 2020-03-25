import Axios from 'axios'

const axios=Axios.create({
    baseURL:'http://localhost:3034',
})

export default axios