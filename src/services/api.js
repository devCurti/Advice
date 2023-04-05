import axios from 'axios'

//until 224


const api = axios.create({
    baseURL: "https://api.adviceslip.com/advice"
})


export default api;