import { combineReducers } from "redux";


const songReducer = () => {
    return [
        { title: 'No surbs', duration: '4.50' },
        { title: 'No herbs', duration: '4.70' },
        { title: 'No verbs', duration: '4.10' },
        { title: 'No lurvs', duration: '4.40' },
        { title: 'No blone', duration: '4.20' }

    ];
};

const selectiveSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectiveSongReducer
});