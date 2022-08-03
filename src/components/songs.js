
import '../App.css';
import DetailSong from "./detailSong"
import ListSongs from './listSong';
import PlayerLayout from './playerLayout';
import {useDispatch} from "react-redux"

import allActions from '../redux/actions/index';

function Songs() {
  const dispatch=useDispatch();
 
  return (
    <div className="songs">
    
      {/* phần thân */}
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-play overflow-hidden'>
        <DetailSong/>
        <ListSongs/>
      </div>
      <PlayerLayout/>
    </div>
  );
}

export default Songs;
