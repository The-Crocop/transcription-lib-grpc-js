var PROTO_PATH = __dirname + '/../proto/live-subtitling.proto';
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var async = require('async');
const messages = require('./generated/live-subtitling_pb')

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
)
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var transcription= protoDescriptor.sftpprocessor
const token = process.env.API_KEY
const metaCallback  = (_params, callback) => {
    const meta = new grpc.Metadata();
    meta.add("Authorization", `Bearer ${token}`)
    callback(null, meta)
}
const insecure = grpc.credentials.createInsecure();
const auth = grpc.credentials.createFromMetadataGenerator(metaCallback)

var client = new transcription.LiveSubtitling('localhost:9090',insecure);

function startTranscription(callback) {

    var request = {
        externalReference: 'testlivenode',
        sourceUrl: 'rtmp://127.0.0.1:1935/live/swissinfo',
        sourceLanguage: 'DE'
    }
    var call = client.transcribe(request, {
        "Authorization": `Bearer ${token}`
    });
    call.on('data', function(result) {
        console.log(result.result);
    });
    call.on('end', function() {
        console.log('end')
        // The server has finished sending
    });
    call.on('error', function(e) {
        // An error has occurred and the stream has been closed.
        console.log('error')
    });
    call.on('status', function(status) {
        // process status
        console.log(status);
    });
}

async.series([startTranscription]);