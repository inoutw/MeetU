/**
 * Created by qinai on 1/1/17.
 */
'use strict';

let fs = require('fs');
let path = require('path');
let http = require('http');

let staticBasePath = './';

let staticServe = function(req, res) {
    let fileLoc = path.resolve(staticBasePath);
    console.log(req);
    let url = req.url.split('/');
    url = url
        .filter((name) => name !== 'content-content' && name !== 'cms')
        .map((name) => name.split('?')[0]);
    url = url.join('/');

    fileLoc = path.join(fileLoc, url);

    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!' + err);
            return res.end();
        }

        res.statusCode = 200;

        res.write(data);
        return res.end();
    });
};

let httpServer = http.createServer(staticServe);

httpServer.listen(9997);
