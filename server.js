const PROTO_PATH = "./customers.proto";

var grpc = require("grpc");
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});

var customersProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();



server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:30043");
server.start();