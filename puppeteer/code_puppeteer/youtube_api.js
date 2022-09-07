"use strict"
const {google} = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCLfoH5LmI4oiEmGktTDOrfmPAXTr2IXxU'
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