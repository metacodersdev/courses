"use strict"
require('dotenv').config()
const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_KEY
});

youtube.search.list({
    part: 'id,snippet',
    q: 'Node.js',
}).then(res => {
    console.log(JSON.stringify(res.data));
})
.catch(error => {
    console.error(error);
});;
//"nextPageToken":"CAUQAA",