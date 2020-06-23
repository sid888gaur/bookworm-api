// import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import auth from './routes/auth';
import bodyParser from 'body-parser';

const express = require('express');
const app = express();

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/bookworm", {useNewUrlParser: true, useUnifiedTopology: true });

// app.use( express.static( path.join( __dirname + '/routes/auth' ) ) );
app.use('/routes/auth', auth);

app.get('/*', (req,res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log("Running on localhost:8080"));