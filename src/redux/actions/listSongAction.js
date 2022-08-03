import { ActionTypes } from "../constain"
export const listSong=(list)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.GET_LIST,
       payload:list
    })
}