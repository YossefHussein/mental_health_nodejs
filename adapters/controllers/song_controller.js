const GetSongs = require("../../application/use-cases/get_songs")

class SongController {
    static async allSong(req, res) {
        try {
            const getSongs = new GetSongs()
            const songs = await getSongs.execute()
            res.json(songs)
        } catch (error) {
            res.status(500).send({error: error.message})
        }
    }
}

module.exports = SongController