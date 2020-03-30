export const selectSong = song => {
    //Action creator  
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

