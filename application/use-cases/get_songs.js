// import the song fo r make song info
const Song = require('../../domain/entities/song')
// import the interface to call execute function
const UseCaseInterFace = require('../interfaces/use_case_interface')

// this destruction objet to
// when pressed ctrl+right click you move to [getAllSong] function direct
// because the [getAllSong] is return in finally object
const {getAllSong} = require('../../infrastructure/db/query/song_query')

class GetSongs extends UseCaseInterFace {

    async execute() {
        // get song by api
        const songRow = await getAllSong()
        // and for [songRow] by map function to [Song] class
        // and return to user
        return songRow.map(song => new Song(
            {
                id: song.id,
                title: song.title,
                author: song.author,
                songLink: song.songLink,
            }
        ))
    }
}

module.exports = GetSongs

