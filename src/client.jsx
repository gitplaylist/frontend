import React from 'react';
import { render } from 'react-dom';
import { router } from './index';
require('gitplaylist-brand/dist/brand.css');


render(router, document.getElementById('content'));
