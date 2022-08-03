import { ActionTypes } from "../constain"
import axios from "axios"
import { data } from "autoprefixer"

export const addAlbum =(data)=>{
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/add-list",{
              name:data.name,
              user_id:data.user_id,
              status:1,
             
            })
            .then(res => {
             dispatch({ 
                type:ActionTypes.ADD_ALBUM,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    }
}

export const updateAlbum =(data)=>{
    console.log(data)
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/update-list",{
                id:data.id,
                name:data.name,
                user_id:data.user_id
            })
            .then(res => {
             dispatch({ 
                type:ActionTypes.UPDATE_ALBUM,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    }
}

export const deleteAlbum =(data)=>{
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/delete-list",{
                id:data.id,
                name:data.name,
                user_id:data.user_id
            })
            .then(res => {
             dispatch({ 
                type:ActionTypes.DELETE_ALBUM,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    }
}

export const getAllAlbum =(data)=>{
    return (dispatch)=>{
        return (
            axios.post("http://localhost:8080/all-list",{
              user_id:data.user_id
            })
            .then(res => {
             dispatch({ 
                type:ActionTypes.GET_ALL_ALBUM,
                payload:res.data})
            })
            .catch(error => console.log(error))
        )
    }
}