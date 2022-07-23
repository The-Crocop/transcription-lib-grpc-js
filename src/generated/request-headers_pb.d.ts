// package: 
// file: request-headers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RequestHeaders extends jspb.Message { 

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestHeaders.AsObject;
    static toObject(includeInstance: boolean, msg: RequestHeaders): RequestHeaders.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestHeaders, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestHeaders;
    static deserializeBinaryFromReader(message: RequestHeaders, reader: jspb.BinaryReader): RequestHeaders;
}

export namespace RequestHeaders {
    export type AsObject = {

        headersMap: Array<[string, string]>,
    }
}
