import { combineReducers } from "redux";
import playSongReducer from "./playMusic";
import listSongReducer from "./listMusic";
import animationDiskReducer from "./animationDisk";
import  enablePageReduce  from "./enablePageReduce";
import selectedItemReduce from "./selectedItemReduce";
import registerReduce from "./registerReduce";
import LoginReduce from "./loginReduce";
import enableAlbumReduce from "./enableCustomAlbumReduce";
import albumReducer from "./albumReduce";
import selecteAlbumReduce from "./selectedAlbumReduce";

const rootReducer=combineReducers({
  playSong:playSongReducer,
  listSong:listSongReducer,
  animation:animationDiskReducer,
  page:enablePageReduce,
  selectedItem:selectedItemReduce,
  registerReduce:registerReduce,
  login:LoginReduce,
  album:enableAlbumReduce,
  albumReducer:albumReducer,
  selectedAlbum:selecteAlbumReduce,
  

})

export default rootReducer