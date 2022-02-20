import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';

let composeEnhancers = compose
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}


export default MyApp;
