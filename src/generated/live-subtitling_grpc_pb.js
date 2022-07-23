// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var live$subtitling_pb = require('./live-subtitling_pb.js');
var language_pb = require('./language_pb.js');
var request$headers_pb = require('./request-headers_pb.js');

function serialize_sftpprocessor_LiveTranscriptionReply(arg) {
  if (!(arg instanceof live$subtitling_pb.LiveTranscriptionReply)) {
    throw new Error('Expected argument of type sftpprocessor.LiveTranscriptionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sftpprocessor_LiveTranscriptionReply(buffer_arg) {
  return live$subtitling_pb.LiveTranscriptionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sftpprocessor_LiveTranscriptionRequest(arg) {
  if (!(arg instanceof live$subtitling_pb.LiveTranscriptionRequest)) {
    throw new Error('Expected argument of type sftpprocessor.LiveTranscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sftpprocessor_LiveTranscriptionRequest(buffer_arg) {
  return live$subtitling_pb.LiveTranscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var LiveSubtitlingService = exports.LiveSubtitlingService = {
  // Starts a transcription
transcribe: {
    path: '/sftpprocessor.LiveSubtitling/Transcribe',
    requestStream: false,
    responseStream: true,
    requestType: live$subtitling_pb.LiveTranscriptionRequest,
    responseType: live$subtitling_pb.LiveTranscriptionReply,
    requestSerialize: serialize_sftpprocessor_LiveTranscriptionRequest,
    requestDeserialize: deserialize_sftpprocessor_LiveTranscriptionRequest,
    responseSerialize: serialize_sftpprocessor_LiveTranscriptionReply,
    responseDeserialize: deserialize_sftpprocessor_LiveTranscriptionReply,
  },
};

exports.LiveSubtitlingClient = grpc.makeGenericClientConstructor(LiveSubtitlingService);
