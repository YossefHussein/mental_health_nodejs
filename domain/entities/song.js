/// this class to make song information like id title author songLink
class Song {
  constructor({
    id,
    title,
    author,
    songLink,
    typeSong,
    colorTypeOfSong,
    thumbnail,
  }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.songLink = songLink;
    this.typeSong = typeSong;
    this.colorTypeOfSong = colorTypeOfSong;
    this.thumbnail = thumbnail;
  }
}

module.exports = Song;
