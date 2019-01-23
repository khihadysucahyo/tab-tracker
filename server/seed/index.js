const {
  sequelize,
  Bookmark,
  Song,
  User
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({ force: true })
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(songs => {
        Song.create(songs)
      })
    )

    await Promise.all(
      bookmarks.map(bookmarks => {
        Bookmark.create(bookmarks)
      })
    )
  })
