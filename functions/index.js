const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51MIRcqSHEzvpF86QsYRWUHinIBvTuzxrFviQFVODk3W0GURPTtKQtv6WIP2UN1E2PLUtpBlfELIIlGc6MGly1PUr00y59DRCcK"
);

// http://127.0.0.1:5001/clone-10b46/us-central1/api

const app = express();
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (request, response) =>
  response.status(200).send("Hello from cloud")
);

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log(stripe);
    // stripe.paymentIntenets.create
    // const paymentIntenet = await stripe.paymentIntenets.create({
    //     amount: total,
    //     currency: "usd",
    // });
    console.log("calling payment/create");
    response.header("Access-Control-Allow-Origin", "*");
    response.status(201).send({
        clientSecret: paymentIntenet.client_secret,
    });
});

exports.api = functions.https.onRequest(app);
