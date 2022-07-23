// package: sftpprocessor
// file: live-subtitling.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as live_subtitling_pb from "./live-subtitling_pb";
import * as language_pb from "./language_pb";
import * as request_headers_pb from "./request-headers_pb";

interface ILiveSubtitlingService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transcribe: ILiveSubtitlingService_ITranscribe;
}

interface ILiveSubtitlingService_ITranscribe extends grpc.MethodDefinition<live_subtitling_pb.LiveTranscriptionRequest, live_subtitling_pb.LiveTranscriptionReply> {
    path: "/sftpprocessor.LiveSubtitling/Transcribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<live_subtitling_pb.LiveTranscriptionRequest>;
    requestDeserialize: grpc.deserialize<live_subtitling_pb.LiveTranscriptionRequest>;
    responseSerialize: grpc.serialize<live_subtitling_pb.LiveTranscriptionReply>;
    responseDeserialize: grpc.deserialize<live_subtitling_pb.LiveTranscriptionReply>;
}

export const LiveSubtitlingService: ILiveSubtitlingService;

export interface ILiveSubtitlingServer {
    transcribe: grpc.handleServerStreamingCall<live_subtitling_pb.LiveTranscriptionRequest, live_subtitling_pb.LiveTranscriptionReply>;
}

export interface ILiveSubtitlingClient {
    transcribe(request: live_subtitling_pb.LiveTranscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<live_subtitling_pb.LiveTranscriptionReply>;
    transcribe(request: live_subtitling_pb.LiveTranscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<live_subtitling_pb.LiveTranscriptionReply>;
}

export class LiveSubtitlingClient extends grpc.Client implements ILiveSubtitlingClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public transcribe(request: live_subtitling_pb.LiveTranscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<live_subtitling_pb.LiveTranscriptionReply>;
    public transcribe(request: live_subtitling_pb.LiveTranscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<live_subtitling_pb.LiveTranscriptionReply>;
}
