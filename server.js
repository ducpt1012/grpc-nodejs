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

const customers = [
  {
      id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
      name: "John Bolton",
      age: 23,
      address: "Address 1"
  },
  {
      id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
      name: "Mary Anne",
      age: 45,
      address: "Address 2"
  }
];

server.addService(customersProto.CustomerService.service, {
  getAll: (_, callback) => {
    callback(null, { customers });
  }
})

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:30043");
server.start();