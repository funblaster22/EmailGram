import {readable, writable} from "svelte/store";
import {subscribe} from "svelte/internal";
//TODO: rename every reference to 'album' with 'playlist'

export function deleteAlbum(albumID) {
  console.log("Deleting playlist", albumID);
  // TODO: delete referenced songs
  db.transaction('playlists', 'readwrite').objectStore('playlists').delete(albumID).onsuccess =
    reloadPlaylists;
  return -window.innerWidth;  // The return value tells ContextualSwipe what position to return to, in this case, all the way to the left
}

export function shareAlbum(albumID) {
  console.log("Sharing", albumID);
}

export function renameAlbum(albumID, newName) {
  console.log("Renaming playlist", albumID, "to", newName);
  const playlistStore = db.transaction('playlists', 'readwrite').objectStore('playlists');
  playlistStore.get(albumID).onsuccess = ev => {
    ev.target.result.name = newName;
    playlistStore.put(ev.target.result).onsuccess = reloadPlaylists;
  }
}

export function createPlaylist(name) {
  db.transaction('playlists', 'readwrite').objectStore('playlists').add({name: name, include: [], exclude: []})
    .onsuccess = reloadPlaylists;
}

export function addSong(albumId, songId, songName, songCover) {
  const transaction = db.transaction(['playlists', 'songs'], 'readwrite');
  const playlistStore = transaction.objectStore('playlists');
  const songStore = transaction.objectStore('songs');
  songStore.add({id: songId, name: songName, cover: songCover, albums: [albumId], artist: "???"});
  transaction.oncomplete = ev => reloadSongs(albumId);
}

export function renameSong(songID, newName) {
  console.log("Renaming song", songID, "to", newName);
}

export function deleteSong(songID) {
  console.log("Deleting song", songID);
  return -window.innerWidth;
}

function reloadPlaylists() {
  db.transaction('playlists').objectStore('playlists').getAll().onsuccess = ev => {
    editPlaylists.set(ev.target.result);
  };
}

function reloadSongs(albumID) {
  db.transaction('songs').objectStore('songs').index('albums').getAll(albumID).onsuccess = ev => {
    editSongs.set(ev.target.result);
  };
}

// Adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_complex_data_%E2%80%94_indexeddb
let db: IDBDatabase;
const editPlaylists = writable([]);
const editSongs = writable([]);
export const playlists = {subscribe: editPlaylists.subscribe};
export const songs = {subscribe: editSongs.subscribe};
export function openPlaylist(albumID) {
  console.log("MAKE SURE this function is only being called when isOpen changes in 'AlbumContents'");
  editSongs.set([]);
  reloadSongs(albumID);
}
let request = window.indexedDB.open('email-gram', 1);
request.onsuccess = function() {
  console.log('Database opened successfully');

  // Store the opened database object in the db variable. This is used a lot below
  db = request.result;

  const transaction = db.transaction(['playlists', 'songs'], 'readwrite');
  transaction.objectStore('playlists');
  transaction.objectStore('songs');

  reloadPlaylists();

  // const cursor = playlistStore.openCursor();
  // cursor.onerror = console.log;
  // cursor.onsuccess = ev => {
  //     /* TODO: @type? */
  //     const cursor = ev.target.result;
  //     console.log(ev);
  //     if (cursor) {
  //         // cursor.key is a name, like "Bill", and cursor.value is the whole object.
  //         console.log("ID: " + cursor.key + ", Name: " + cursor.value.name);
  //         cursor.continue();
  //     }
  // };
};

request.onerror = function(ev) {
  alert("Database permission is strongly recommended to reduce network requests and compute");
};

request.onupgradeneeded = function(e) {
  // Grab a reference to the opened database
  const db = e.target.result;

  // Create an objectStore to store our notes in (basically like a single table)
  // including a auto-incrementing key
  const threadStore = db.createObjectStore('playlists', { keyPath: 'id', autoIncrement: false });
  const messageStore = db.createObjectStore('songs', { keyPath: 'id', autoIncrement: false });

  // Define what data items the objectStore will contain
  threadStore.createIndex('participants', 'participants', { unique: true, multiEntry: true });

  console.log('Database setup complete');
};