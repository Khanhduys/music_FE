import  {ActionTypes} from "../constain"
import DataSongs from "../../data/songs.json"
const getData=(DataSongs)=>{
    var listSong=[]
   
          
        DataSongs.map((song,index)=>{
               listSong=[...listSong,{...song,index:index+1}]
         })
         return listSong
}
const initialState={
    list:getData(DataSongs)
}

const listSongReducer= (state=initialState,action)=>{
 switch(action.type){
   case ActionTypes.GET_LIST:
    var listSong=[]
    action.payload.map((data,index)=>{
               listSong=[...listSong,{...data,index:index+1}]
        
     })
      return {
          ...state,
          list:listSong
      }
    
    case ActionTypes.GET_SONG:
        var listSong=[]
        var count=0
         action.payload.map((data)=>{
               
            state.list.map((song)=>{
                if(  data.song_id==song.id){
                    count+=1
                    listSong=[...listSong,{...song,index:count,idDB:data.id,idList:data.list_id}]
                }
              })
          })
          console.log(listSong)
        return {
           
            list:listSong
        }

 
 default : return state
    }
 
    
}
export default listSongReducer