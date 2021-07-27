import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import './style/hero.css';
import './style/about.css';
import './style/general.css';
import './style/projects.css';
import './style/contact.css';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>,

  document.getElementById('root')
);

