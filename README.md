# transcription-lib-grpc-js
Java Script Client for live transcription.

The purpose of this project is to allow a user to simply get live transcriptions for a video stream.
The user can pass a video url and a sourceLanguage and the library will deliver transcriptions in real time.

## Usage instructions

to install run 

`npm i transcription-lib-grpc-js`

Then you need to ask for an API key.

To use the library in your node or ts project you can to the following

```typescript
import * as grpc from '@grpc/grpc-js'
import {LiveSubtitlingClient} from "transcription-lib-grpc-js/src/generated/live-subtitling_grpc_pb";
import {Language} from "transcription-lib-grpc-js/src/generated/language_pb";
import {
    LiveTranscriptionReply,
    LiveTranscriptionRequest
} from "transcription-lib-grpc-js/src/generated/live-subtitling_pb";

// just an example we use green color to show finalized subtitles
const GREEN ="\x1b[0;92m";
const RESET='\x1b[0m';
const host = 'live.citizenjournalist.io:443' ;
const API_KEY = process.env.API_KEY; // pass your API key

const client = new LiveSubtitlingClient(host, grpc.credentials.createSsl(),
    { // to configure timeouts, if you expect that there might be longer phases without text
        "grpc.http2.max_pings_without_data" : 0,
        "grpc.keepalive_time_ms": 10000,
        "grpc.keepalive_permit_without_calls" : 1

    }
);

const sampleVideoUrl = 'https://cdn3.wowza.com/1/eGlOcmxqcnMxMXJE/dVVnR3o1/hls/live/playlist.m3u8'; // put in your video target
const request = new LiveTranscriptionRequest();
request.setExternalreference('myexampletest'); // just to be able to reference a request, gets returned in the response
request.setSourceurl(sampleVideoUrl);
request.setSourcelanguage(Language.DE);

// if you want to have multiple languages detected at the same time you can set additional language support
request.addAdditionalsourcelanguages(Language.FR)

const headers = new grpc.Metadata();
headers.add("Authorization", `Bearer ${API_KEY}`);

const stream = client.transcribe(request, headers);
stream.on('data', (response: LiveTranscriptionReply) => {

    if (
        (response.getIsfinal() && (response.getConfidence() ?? 0) >= 0.85) // we can for example filter the final result by confidence, (stability is 0 in case of final result)
        ||  (response.getStability() ?? 0) >= 0.8  // we can filter intermediate results by stability, for intermediate results confidence is not set
    ) {
        console.clear()
        // final means its the final result for the section we print it in green color
        console.log(`${response.getIsfinal() ? GREEN : ''} > ${response.getResult()} ${RESET}`);
        // a list of word is returned in addition, for the intermediate results they are estimated. A timestamps consists of a seconds and a nanos part
        console.log(`start (s,ms): ${response.getWordsList()[0].getStarttime().getSeconds()}, ${response.getWordsList()[0].getStarttime().getNanos()} (${response.getStability()} - ${response.getConfidence()} - ${response.getLanguagecode()} )`)
        console.log(`end (s, ms): ${response.getWordsList()[response.getWordsList().length -1].getStarttime().getSeconds()}, ${response.getWordsList()[response.getWordsList().length -1].getStarttime().getNanos()}`)
    }
})
stream.on('end', () => {
    console.log('The End')
    // The server has finished sending
});
stream.on('error', (error) => {
    // An error has occurred and the stream has been closed.
    console.error(error)
});
stream.on('status', function(status) {
    // process status
    console.log(status);
});
```

checkout https://github.com/The-Crocop/live-transcription-grpc-sample for an example project

