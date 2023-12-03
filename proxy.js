import VelocidroneClient  from "./VelocidroneClient.js";
import * as http from 'http'

import fs from "node:fs";

const RACEDATAKEYNAME = 'racedata';
const RACESTATUSKEYNAME = 'racestatus';
const RACEACTIONKEYNAME = 'raceaction';

function message(data){
    
    var d = data.toString();
    
    if (d.length == 0) return

    if (JSON.parse(d)["racedata"] == null) return;

    postMessage('/racedata', data);

}

function postMessage(url, data) {
    // Convert data to a JSON string
    const dataString = data.toString();

    var post_options = {
        host: '127.0.0.1',
        port: '3000',
        path: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(dataString)
        }
    };
  
    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    post_req.on('error', function (err) {
        console.log('Request error: ' + err.message);
    });

    // Write data to request body
    post_req.write(dataString);
    post_req.end();
}

//await VelocidroneClient.initialise("settings.json", message);

// fs.readFile("D:\\Code\\Velocidrone - socketTest\\V1data-test.txt",  "utf16le", (err, data) => {
//     let dataRows = data.split(/\r?\n/);
//     for (let row in dataRows)
//     {
//         var d = dataRows[row].toString().trim();
        
//         if (d.length == 0) continue;

//         if (JSON.parse(d)["racedata"] == null) continue;

//         postMessage('/racedata', d);
//     }

// });
