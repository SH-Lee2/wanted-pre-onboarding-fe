import axios from "axios"

const BASE_URL = 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/'


export const login = async(email,password) => {
    try{
        const res = await axios.post(`${BASE_URL}auth/signin`,{
            email,
            password
        })
        return res
    }catch(error){
        return error.response
    }
}

export const join = async(email,password) => {
    try{
        const res = await axios.post(`${BASE_URL}auth/signup`,{
            email,
            password
        })
        return res 
    }catch(error){
        return error.response
    }
}