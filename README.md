# transcription-lib-grpc-js
Java Script Client for live transcription.

The purpose of this project is to allow a user to simply get live transcriptions for a video stream.
The user can pass a video url and a sourceLanguage and the library will deliver transcriptions in real time.

## Usage instructions

to install run 

`npm i transcription-lib-grpc-js`

Then you need to ask for an API key.

To use the library in your node/ ts project you can to the following

```
import * as grpc from '@grpc/grpc-js'
import {LiveSubtitlingClient} from "transcription-lib-grpc-js/src/generated/live-subtitling_grpc_pb";
import {Language} from "transcription-lib-grpc-js/src/generated/language_pb";
import {
    LiveTranscriptionReply,
    LiveTranscriptionRequest
} from "transcription-lib-grpc-js/src/generated/live-subtitling_pb";

const host = process.env.HOST ?? '0.0.0.0:9090';
const API_KEY = process.env.API_KEY;

// const metaCallback  = (_params, callback) => {
//     const meta = new grpc.Metadata();
//     meta.add("Authorization", `Bearer ${API_KEY}`)
//     callback(null, meta)
// }

const client = new LiveSubtitlingClient(host, grpc.credentials.createInsecure());

const sampleVideoUrl = 'rtmp://127.0.0.1:1935/live/swissinfo' // put in a url to a video
const request = new LiveTranscriptionRequest();
request.setExternalreference('myexampletest'); // this gets turned back in the response and allows matching certain requests
request.setSourceurl(sampleVideoUrl);
request.setSourcelanguage(Language.DE); // available Languages are EN_US, DE, FR, IT, ES, CA an UK (Ukrainian)

const headers = new grpc.Metadata();
headers.add("Authorization", `Bearer ${API_KEY}`); // here you pass your API key for authentication

const stream = client.transcribe(request, headers);
stream.on('data', (response: LiveTranscriptionReply) => {
    console.log('received Response');
    console.log(response.getResult()); // response contains other fiels ass well 
})

```

You can find the example in `src/client.js`

