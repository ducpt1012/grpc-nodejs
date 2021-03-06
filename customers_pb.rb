# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: customers.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("customers.proto", :syntax => :proto3) do
    add_message "Empty" do
    end
    add_message "Customer" do
      optional :id, :string, 1
      optional :name, :string, 2
      optional :age, :int32, 3
      optional :address, :string, 4
    end
    add_message "CustomerList" do
      repeated :customers, :message, 1, "Customer"
    end
    add_message "CustomerRequestId" do
      optional :id, :string, 1
    end
  end
end

Empty = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Empty").msgclass
Customer = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("Customer").msgclass
CustomerList = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("CustomerList").msgclass
CustomerRequestId = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("CustomerRequestId").msgclass
