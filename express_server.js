const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { PythonShell } = require('python-shell');
const path = require('path');

// const scriptPath = path.join(__dirname, 'graphs.py');

const app = express();
const port = 4000;

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoURI1 = "mongodb+srv://Anbu:tQ5wNYbZjfk4rEuT@cluster0.6bzyp56.mongodb.net/FFF";
const mongoURI2 = "mongodb+srv://Anbu:tQ5wNYbZjfk4rEuT@cluster0.6bzyp56.mongodb.net/FFF_Budget";

const mongoose1 = mongoose.createConnection(mongoURI1, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoose2 = mongoose.createConnection(mongoURI2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dailyTrackingSchema = new mongoose.Schema({
    numericEnter: Number,
    numericMed: Number,
    numericGroc: Number,
    numericTrans: Number,
    numericLo: Number,
    numericOth: Number,
    username: String,
    day: String,
    week: String
  });
  
  const weeklyBudgetSchema = new mongoose.Schema({
    week: String, 
    numericmov: Number,
    numericstr: Number,
    numericot1: Number,
    numericrest: Number,
    numericgro: Number,
    numericot2: Number,
    numericbill: Number,
    numericins: Number,
    numericot3: Number,
    numericcl: Number, 
    numericpcp: Number, 
    numericot4: Number, 
    numericfue: Number, 
    numericveh: Number, 
    numericot5: Number, 
    numericfee: Number, 
    numericbook: Number, 
    numericot6: Number, 
    numericinv: Number, 
    numericret: Number, 
    numericot7: Number, 
    numericegw: Number, 
    numericrent: Number, 
    numericot8: Number
  });
  
const DailyTracking = mongoose1.model('DailyTracking', dailyTrackingSchema);
const WeeklyBudget = mongoose2.model('WeeklyBudget', weeklyBudgetSchema);

app.listen(port, (req,res) => console.log(`Server is running on port ${port}`));

app.post("/register", (req, res) => {
  console.log(req.body);
  const { numericEnter, numericMed, numericGroc, numericTrans, numericLo, numericOth, username, day, week } = req.body;

  const newUser = new DailyTracking({
      numericEnter,
      numericMed,
      numericGroc,
      numericTrans,
      numericLo,
      numericOth,
      username,
      day, 
      week
  });

  newUser
      .save()
      .then(() => {
          res.status(200).json({ message: "User Daily Tracking registered successfully" });
      })
      .catch((err) => {
          console.log("Error creating a new user", err);
          res.status(500).json({ message: "Error creating a new user", error: err });
      });
});
  
app.post("/submit", (req, res) => {
console.log(req.body);
const { week, numericearn, numericmov, numericstr, numericot1, numericrest, numericgro, numericot2, numericbill, numericins, numericot3, numericcl, numericpcp, numericot4, numericfue, numericveh, numericot5, numericfee, numericbook, numericot6, numericinv, numericret, numericot7, numericegw, numericrent, numericot8 } = req.body;

const newUser = new WeeklyBudget({
    week, numericearn, numericmov, numericstr, numericot1, numericrest, numericgro, numericot2, numericbill, numericins, numericot3, numericcl, numericpcp, numericot4, numericfue, numericveh, numericot5, numericfee, numericbook, numericot6, numericinv, numericret, numericot7, numericegw, numericrent, numericot8
});
console.log(newUser);
newUser
    .save()
    .then((user) => {
    res.status(200).json({ message: "User Weekly Budget registered successfully" });
    })
    .catch((err) => {
    console.log("error in saving the user", err);
    res.status(500).json({ message: err });
    });
});

app.get('/get-values', async (req, res) => {
  try {
    const values = await WeeklyBudget.find();
    res.json({ values });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.post('/rmbot', async (req, res) => {
//   const userMessage = req.bot;

//   try {
//     const response = await openai.post('/', {
//       prompt: userMessage,
//       max_tokens: 10
//     });

//     const botMessage = response.data.choices[0].text.trim();
//     res.json({ message: botMessage });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });




