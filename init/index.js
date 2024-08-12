const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
    console.log("connected!!");
}).catch((err) => {
    console.log(err);
});

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/divy");
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66b45583032a9f98cf7eea7f" }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized.");
}

initDB();