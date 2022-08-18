import axios from "axios"

const BASE_URL = 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/'


export const login = async(email,password) => {
    try{
        const res = await axios.post(`${BASE_URL}auth/signin`,{
            email,
            password
        })
        const {access_token} = res.data
        localStorage.set("token",JSON.stringify(access_token))
        return res.status
    }catch(error){
        return error.response
    }
}