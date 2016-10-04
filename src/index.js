import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import { fetchBooks } from './actions/index';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(reducers);

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(); }, 5000);
});
promise.then(()=> {
  store.dispatch(fetchBooks([
        {title: 'Javascript: The Good Parts', pages: 40},
        {title: 'Harry Potter', pages: 400},
        {title: 'The Dark Tower', pages: 90},
        {title: 'Eloquent Ruby', pages: 50}
    ]));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
