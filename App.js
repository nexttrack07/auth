import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Spinner, Button } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjzNNT5XcKXTDPQBFyDTFuZoE-j1HzYrk',
      authDomain: 'auth-33c22.firebaseapp.com',
      databaseURL: 'https://auth-33c22.firebaseio.com',
      projectId: 'auth-33c22',
      storageBucket: 'auth-33c22.appspot.com',
      messagingSenderId: '265133474208'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Header text="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    paddingTop: 10
  }
};
