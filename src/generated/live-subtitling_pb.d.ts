// package: sftpprocessor
// file: live-subtitling.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as language_pb from "./language_pb";
import * as request_headers_pb from "./request-headers_pb";

export class LiveTranscriptionRequest extends jspb.Message { 

    hasExternalreference(): boolean;
    clearExternalreference(): void;
    getExternalreference(): string | undefined;
    setExternalreference(value: string): LiveTranscriptionRequest;
    getSourceurl(): string;
    setSourceurl(value: string): LiveTranscriptionRequest;
    clearOutputlanguagesList(): void;
    getOutputlanguagesList(): Array<language_pb.Language>;
    setOutputlanguagesList(value: Array<language_pb.Language>): LiveTranscriptionRequest;
    addOutputlanguages(value: language_pb.Language, index?: number): language_pb.Language;

    hasHeaders(): boolean;
    clearHeaders(): void;
    getHeaders(): request_headers_pb.RequestHeaders | undefined;
    setHeaders(value?: request_headers_pb.RequestHeaders): LiveTranscriptionRequest;

    hasSourcelanguage(): boolean;
    clearSourcelanguage(): void;
    getSourcelanguage(): language_pb.Language | undefined;
    setSourcelanguage(value: language_pb.Language): LiveTranscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiveTranscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LiveTranscriptionRequest): LiveTranscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiveTranscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiveTranscriptionRequest;
    static deserializeBinaryFromReader(message: LiveTranscriptionRequest, reader: jspb.BinaryReader): LiveTranscriptionRequest;
}

export namespace LiveTranscriptionRequest {
    export type AsObject = {
        externalreference?: string,
        sourceurl: string,
        outputlanguagesList: Array<language_pb.Language>,
        headers?: request_headers_pb.RequestHeaders.AsObject,
        sourcelanguage?: language_pb.Language,
    }
}

export class LiveTranscriptionReply extends jspb.Message { 

    hasExternalreference(): boolean;
    clearExternalreference(): void;
    getExternalreference(): string | undefined;
    setExternalreference(value: string): LiveTranscriptionReply;
    getResult(): string;
    setResult(value: string): LiveTranscriptionReply;
    getLanguage(): language_pb.Language;
    setLanguage(value: language_pb.Language): LiveTranscriptionReply;
    getOriginal(): boolean;
    setOriginal(value: boolean): LiveTranscriptionReply;
    getIsfinal(): boolean;
    setIsfinal(value: boolean): LiveTranscriptionReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LiveTranscriptionReply.AsObject;
    static toObject(includeInstance: boolean, msg: LiveTranscriptionReply): LiveTranscriptionReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LiveTranscriptionReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LiveTranscriptionReply;
    static deserializeBinaryFromReader(message: LiveTranscriptionReply, reader: jspb.BinaryReader): LiveTranscriptionReply;
}

export namespace LiveTranscriptionReply {
    export type AsObject = {
        externalreference?: string,
        result: string,
        language: language_pb.Language,
        original: boolean,
        isfinal: boolean,
    }
}
