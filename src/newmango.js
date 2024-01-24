const mongoose = require("mongoose");
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection established");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}
connectToDatabase();

//models making ________________________________________________________________

const newData = new mongoose.Schema({
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
    enum: ["database", "c++", "oops"],
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error("Age should be greater than 18");
      }
    },
  },
});

const csegroup = new mongoose.model("csegroup", newData);

// _________________________________________________________________________

const creatdoc = async () => {
  try {
    const student = new csegroup({
      name: "nikki",
      rollno: 91,
      branch: "CSE",
      enrollment: 12021002367485,
      active: true,
      ctype: "c++",
      age: 20,
    });

    const res = await student.save();
    console.log(res);
    console.log("modified s");
  } catch (err) {
    console.log(err);
  }
};
creatdoc();
