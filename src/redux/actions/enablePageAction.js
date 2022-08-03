import { ActionTypes } from "../constain"
export const enablePageAction=(status)=>dispatch=>{
  
    dispatch({
       type:ActionTypes.ENABLE_PAGE,
       payload:status
    })
}