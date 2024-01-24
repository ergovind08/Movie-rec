const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection established");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

// Call the function to connect
connectToDatabase();

// CRUD Operations in Database Using Mongodb

const secData = new mongoose.Schema({
  name: String,
  rollno: Number,
  branch: String,
  enrollment: String,
  active: Boolean,
  comments: [{ body: String, date: Date }],
});

// const usermodel = mongoose.model("secData", secData);

// Constructor function for data entry
async function enterData(name, rollno, branch, enrollment, active, comments) {
  try {
    const newData = new usermodel({
      name,
      rollno,
      branch,
      enrollment,
      active,
      comments: [{ body: comments, date: new Date() }],
    });

    await newData.save();
    console.log("Data added successfully");
  } catch (error) {
    console.error("Error adding data:", error.message);
  } finally {
    // Close the connection after adding data
    mongoose.connection.close();
  }
}

// Example of using the constructor function to add data

//=========== addding new schema for data entery in thirdData db

const BtechData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "Minimum Length of Name should be two characters"],
    maxlength: [10, "Maximum Length of Name should be ten characters"],
  },
  rollno: Number,
  branch: String,
  enrollment: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["Database", "C++", "oops"],
  },
  age: {
    type: Number,
  },
});
//here we are creating the collection in database
const cse = new mongoose.model("cse", BtechData);

const creatdoc = async () => {
  try {
    // Assuming cseiot is a mongoose model
    const student8 = new cse({
      name: "pagla Kumar",
      rollno: 12,
      branch: "CSE",
      enrollment: 12021002314528,
      active: true,
      ctype: "Database",
      age: 21,
    });

    const student9 = new cse({
      name: "kutta Kumar",
      rollno: 42,
      branch: "CSE",
      enrollment: 12021082614528,
      active: true,
      ctype: "C++",
      age: 11,
    });

    const res = await cses.insertMany([student8, student9]);
    console.log(res);
    console.log("modified s");
  } catch (err) {
    console.log(err);
  }
};

//   Uncomment the line below to call the creatdoc function
// creatdoc();

const getdoc = async () => {
  const res = await cses
    .find({ name: "Rohit Kuamr" })
    .select({ name: 1, _id: 0 });
  console.log("database output is here ");
  console.log(res);
};
// getdoc();
const deletedoc = async () => {
  const newdata = await cse.deleteOne({ name: "Rohit Kuamr" });
  console.log("one database deleted");
};
// deletedoc();

const getdata = async () => {
  const res = await cse.find({}, { name: 1, _id: 0 }).sort({ name: 1 });
  console.log(res);
};

getdata();
