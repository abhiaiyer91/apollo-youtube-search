import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import App from '/imports/client/components/App';
import ApolloClient from 'apollo-client';

const client = new ApolloClient();

Meteor.startup(() => {
  render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
});
