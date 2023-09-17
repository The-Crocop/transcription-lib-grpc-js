import * as grpc from '@grpc/grpc-js'
import {LiveSubtitlingClient} from "./generated/live-subtitling_grpc_pb";
import {LiveTranscriptionReply, LiveTranscriptionRequest} from "./generated/live-subtitling_pb";
import {Language} from "./generated/language_pb";

const host = process.env.HOST ?? '0.0.0.0:9090';
const API_KEY = process.env.API_KEY;

// const metaCallback  = (_params, callback) => {
//     const meta = new grpc.Metadata();
//     meta.add("Authorization", `Bearer ${API_KEY}`)
//     callback(null, meta)
// }

const client = new LiveSubtitlingClient(host, grpc.credentials.createInsecure(),
{ // to configure timeouts, if you expect that there might be longer phases without text
   "grpc.http2.max_pings_without_data" : 0,
    "grpc.keepalive_time_ms": 10000,
    "grpc.keepalive_permit_without_calls" : 1

});

// const sampleVideoUrl = 'rtmp://127.0.0.1:1935/live/swissinfo'
// const sampleVideoUrl = "https://15595674c0604ed6.mediapackage.eu-central-1.amazonaws.com/out/v1/114a06d3e9d3458ea8ebf432d2294010/index.m3u8"
const sampleVideoUrl = "rtmp://localhost:1935/live/berset"
const request = new LiveTranscriptionRequest();
request.setExternalreference('myexampletest');
request.setSourceurl(sampleVideoUrl);
request.setSourcelanguage(Language.DE);
request.addAdditionalsourcelanguages(Language.FR)

const headers = new grpc.Metadata();
headers.add("Authorization", `Bearer ${API_KEY}`);

const stream = client.transcribe(request, headers);
stream.on('data', (response: LiveTranscriptionReply) => {
   console.log('received Response');
   console.log(response.getLanguagecode());
   console.log(response.getConfidence());
   console.log(response.getStability());
   console.log(response.getResult());
   console.log(`start (s,ms): ${response.getWordsList()[0].getStarttime().getSeconds()}, ${response.getWordsList()[0].getStarttime().getNanos()}`)
   console.log(`end (s, ms): ${response.getWordsList()[response.getWordsList().length -1].getStarttime().getSeconds()}, ${response.getWordsList()[response.getWordsList().length -1].getStarttime().getNanos()}`)
});