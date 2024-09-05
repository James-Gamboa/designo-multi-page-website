const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const moment = require("moment");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");

const Account = require("../../models/Account");
const User = require("../../models/User");

const PLAID_CLIENT_ID = "";
const PLAID_SECRET = "";
const PLAID_PUBLIC_KEY = "";

const client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments.sandbox,
    { version: "2019-05-29" }
);

let PUBLIC_TOKEN = null;
let ACCESS_TOKEN = null;
let ITEM_ID = null;
