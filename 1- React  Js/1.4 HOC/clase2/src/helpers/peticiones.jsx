import axios from "axios"

export const postData = async (url, obj)=>{
    try{
    const response = await axios.post(url, obj)
    console.log(response)
    }catch(error){
        console.log(error)
    }

}