import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import express from 'express';
import { App, router } from './components/App';
import proxy from 'express-http-proxy';


const app = express();
const port = process.env.PORT || 4000;

app.get('/client.js', function(req, res) {
  res.sendFile('/client.js', {
    root: './dist'
  });
});

app.get('*', function(req, res) {
  res.sendFile('/index.html', {
    root: './src'
  });
});

app.use('/', proxy('http://0.0.0.0:3000/'));

app.listen(port, '0.0.0.0', function(err) {
  console.info('==> 🌎 Listening on http://0.0.0.0:%s/', port);
});
