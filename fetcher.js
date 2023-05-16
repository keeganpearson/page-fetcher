// import library for making HTTP requests
const request = require('request');
// import the 'fs' library file fs operations
const fs = require('fs');
// get command line arguments, URL and local file pat
const [url, filePath] = process.argv.slice(2);

// make HTTP request to given URL
request(url, (error, response, body) => {
  if (error) {
    // log error if request fails
    console.log(`Error fetching URL: ${error}`);
    return;
  }

  // if success, write response to local file path
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      // log error if file write fails
      console.error(`Error writing to file: ${err}`);
      return;
    }

    // figure out file size in bytes in response body
    const fileSize = Buffer.byteLength(body);

    // log indicating download, save, success
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);

  });

});