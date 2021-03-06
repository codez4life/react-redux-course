import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import PlayerReducer from './src/reducers/player';
import './index.css';
import Scoreboard from './containers/Scoreboard';
import * as serviceWorker from './serviceWorker';

//creating our store by defining store with the createStore method and parsing it the playerReducer
const store = createStore(
    PlayerReducer,
    window.devToolsExtension && window.devToolsExtension()
);
ReactDOM.render(
    <Provider store ={store}> 
    <Scoreboard />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
