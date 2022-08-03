import { ActionTypes } from "../constain"
import axios from "axios"
import { data } from "autoprefixer"

export const addSong =(data)=>{
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/add-song",{
              list_id:data.list_id,
              user_id:data.user_id,
              song_id:data.song_id
             
            })
            .then(res => {
                alert(res.data)
            })
            .catch(error => console.log(error))
        )
    }
}

export const getSong =(data)=>{
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/get-songs",{
              list_id:data.list_id,
              user_id:data.user_id,
             
            })
            .then(res => {
             dispatch({ 
                type:ActionTypes.GET_SONG,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    }
}

export const deleteSong =(data)=>{
    console.log(data)
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/delete-song",{
              list_id:data.list_id,
              user_id:data.user_id,
              id:data.id   
            })
            .then(res => {
                alert(res.data)
            })
            .catch(error => console.log(error))
        )
    }
}