import { ActionTypes } from "../constain"
import axios from "axios"
export const listSong=()=>{
    return (dispatch)=>{
        return (
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-song`)
            .then(res => {
             dispatch({ 
                type:ActionTypes.GET_LIST,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    } 
}

export const hotSong=(list)=>dispatch=>{
    dispatch({
        type:ActionTypes.GET_LIST,
        payload:list
     })
}

