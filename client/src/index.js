import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";

import ApolloClient from 'apollo-boost';

// the Apollo cache is set up automatically
const client = new ApolloClient({
    uri: "http://localhost:4000"
});

ReactDOM.render(
    // wrapping the entire application with apollo provider to be able to
    // access requests to apollo from anywhere in the application
<ApolloProvider client={client}>
<App />
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
