const express = require("express");
const Mongoose = require("mongoose");
const routes = require("./routes/TodoRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;
app.use(express.json());
app.use(cors());

Mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('connected to mongodb'))
.catch((err)=>err)

app.use(routes);

app.listen(PORT,()=>console.log(`listening @ ${PORT}`));