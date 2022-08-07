// Original file: src/proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { InitiateRequest as _randomPackage_InitiateRequest, InitiateRequest__Output as _randomPackage_InitiateRequest__Output } from '../randomPackage/InitiateRequest';
import type { InitiateResponse as _randomPackage_InitiateResponse, InitiateResponse__Output as _randomPackage_InitiateResponse__Output } from '../randomPackage/InitiateResponse';
import type { MessageRequest as _randomPackage_MessageRequest, MessageRequest__Output as _randomPackage_MessageRequest__Output } from '../randomPackage/MessageRequest';
import type { StreamMessage as _randomPackage_StreamMessage, StreamMessage__Output as _randomPackage_StreamMessage__Output } from '../randomPackage/StreamMessage';
import type { StreamRequest as _randomPackage_StreamRequest, StreamRequest__Output as _randomPackage_StreamRequest__Output } from '../randomPackage/StreamRequest';
import type { userStreamResponse as _randomPackage_userStreamResponse, userStreamResponse__Output as _randomPackage_userStreamResponse__Output } from '../randomPackage/userStreamResponse';

export interface ChatServiceClient extends grpc.Client {
  ChatIniciate(argument: _randomPackage_InitiateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  ChatIniciate(argument: _randomPackage_InitiateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  ChatIniciate(argument: _randomPackage_InitiateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  ChatIniciate(argument: _randomPackage_InitiateRequest, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  chatIniciate(argument: _randomPackage_InitiateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  chatIniciate(argument: _randomPackage_InitiateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  chatIniciate(argument: _randomPackage_InitiateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  chatIniciate(argument: _randomPackage_InitiateRequest, callback: (error?: grpc.ServiceError, result?: _randomPackage_InitiateResponse__Output) => void): grpc.ClientUnaryCall;
  
  ChatStream(argument: _randomPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_StreamMessage__Output>;
  ChatStream(argument: _randomPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_StreamMessage__Output>;
  chatStream(argument: _randomPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_StreamMessage__Output>;
  chatStream(argument: _randomPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_StreamMessage__Output>;
  
  SendMessage(argument: _randomPackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  SendMessage(argument: _randomPackage_MessageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  SendMessage(argument: _randomPackage_MessageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  SendMessage(argument: _randomPackage_MessageRequest, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  sendMessage(argument: _randomPackage_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  sendMessage(argument: _randomPackage_MessageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  sendMessage(argument: _randomPackage_MessageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  sendMessage(argument: _randomPackage_MessageRequest, callback: (error?: grpc.ServiceError, result?: _google_protobuf_Empty__Output) => void): grpc.ClientUnaryCall;
  
  UserStream(argument: _randomPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_userStreamResponse__Output>;
  UserStream(argument: _randomPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_userStreamResponse__Output>;
  userStream(argument: _randomPackage_StreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_userStreamResponse__Output>;
  userStream(argument: _randomPackage_StreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_userStreamResponse__Output>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  ChatIniciate: grpc.handleUnaryCall<_randomPackage_InitiateRequest__Output, _randomPackage_InitiateResponse>;
  
  ChatStream: grpc.handleServerStreamingCall<_randomPackage_StreamRequest__Output, _randomPackage_StreamMessage>;
  
  SendMessage: grpc.handleUnaryCall<_randomPackage_MessageRequest__Output, _google_protobuf_Empty>;
  
  UserStream: grpc.handleServerStreamingCall<_randomPackage_StreamRequest__Output, _randomPackage_userStreamResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  ChatIniciate: MethodDefinition<_randomPackage_InitiateRequest, _randomPackage_InitiateResponse, _randomPackage_InitiateRequest__Output, _randomPackage_InitiateResponse__Output>
  ChatStream: MethodDefinition<_randomPackage_StreamRequest, _randomPackage_StreamMessage, _randomPackage_StreamRequest__Output, _randomPackage_StreamMessage__Output>
  SendMessage: MethodDefinition<_randomPackage_MessageRequest, _google_protobuf_Empty, _randomPackage_MessageRequest__Output, _google_protobuf_Empty__Output>
  UserStream: MethodDefinition<_randomPackage_StreamRequest, _randomPackage_userStreamResponse, _randomPackage_StreamRequest__Output, _randomPackage_userStreamResponse__Output>
}
