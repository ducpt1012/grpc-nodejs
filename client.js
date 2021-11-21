const PROTO_PATH = "./customers.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;

const client = new CustomerService("localhost:30043", grpc.credentials.createInsecure());

client.getAll(null, (err, data) => {
  console.log("get all");
  if(!err){
    console.log(data);
  }
});

client.get({id: 'a68b823c-7ca6-44bc-b721-fb4d5312cafc'}, (err, data) => {
  console.log("get by id");
  if(!err) {
    console.log(data);
  } else {
    console.log(err);
  }
})