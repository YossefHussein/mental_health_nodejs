/// this class to make song information like id title author songLink
class Song {
  constructor({ id, title, author, songLink }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.songLink = songLink;
  }
}

module.exports = Song;
