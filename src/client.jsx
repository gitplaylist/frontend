import React from 'react';
import { render } from 'react-dom';
import { router } from './components/app.jsx';
require('gitplaylist-brand/dist/brand.css');


render(router, document.getElementById("content"));
