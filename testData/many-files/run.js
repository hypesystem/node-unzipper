var fs = require('fs');
var stream = require('stream');
var path = require('path');
var unzipper = require('../../unzip.js');

var readStream = fs.createReadStream(path.join(__dirname, 'almostOneMillionFiles.zip'));
var voidStream = new stream.Writable({
	objectMode: true,
	write: (chunk, encoding, next) => {
		chunk.autodrain()
		next()
	},
})

readStream.pipe(unzipper.Parse()).pipe(voidStream)
