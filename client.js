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
  if (err) throw err;

  console.log("Get customer successfully", data);
});

let newCustomer = { name: "Duc Phan", age: 32, address: "Saigon" }
client.insert(newCustomer, (err, data) => {
  if (err) throw err;

  console.log("Insert customer successfully", data);
})

let updateCustomer = { id: 'a68b823c-7ca6-44bc-b721-fb4d5312cafc', name: "Duc Phan 1", age: 32, address: "Saigon" }

client.update(updateCustomer, (err, data) => {
  if (err) throw err;

  console.log("Customer updated successfully", data);
})

client.remove({ id: '34415c7c-f82d-4e44-88ca-ae2a1aaa92b7' }, (err, data) => {
  if (err) throw err;

  console.log("Removed successfully", data);
})