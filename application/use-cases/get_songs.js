// import the song for make song info
const Song = require('../../domain/entities/song')
// import the interface to call execute function
const UseCaseInterFace = require('../interfaces/use_case_interface')

class GetSongs extends UseCaseInterFace {
    async execute() {
        // get song by api
        const songRow = await getAllSongs()
        // and for [songRow] by map function to [Song] class
        // and return to user
        return songRow.map(song => Song(
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