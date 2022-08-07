import { playSong } from "./playSongAction"
import { listSong } from "./listSongAction"
import { animationDisk } from "./animationDisk"
import { enablePageAction } from "./enablePageAction"
import { selectedItemAction } from "./selectedItemAction"
import { postRegisterAction } from "./registerAction"
import { loginAction } from "./loginAction"
import { enableAlbumAction } from "./enableCustomAlbumAction"
import { getAllAlbum,updateAlbum,deleteAlbum,addAlbum } from "./AlbumAction"
import { selectedAlbumAction } from "./selectAlbumAction"
import { addSong } from "./FavoriteSongAction"
import { getSong } from "./FavoriteSongAction"
import { deleteSong } from "./FavoriteSongAction"
import { hotSong } from "./listSongAction"
const allActions = {
    playSong,
    listSong,
    animationDisk,
    enablePageAction,
    selectedItemAction,
    postRegisterAction,
    loginAction,
    enableAlbumAction,
    getAllAlbum,
    updateAlbum,
    deleteAlbum,
    addAlbum,
    selectedAlbumAction,
    addSong,
    getSong,
    deleteSong,
    hotSong
}

export default allActions