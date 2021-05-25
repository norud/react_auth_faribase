import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Header, Card, CardSection, Spinner} from './component/common';
import faribase from 'firebase';
import LoginForm from './component/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  };
  componentDidMount() {
    faribase.initializeApp({
      apiKey: 'AIzaSyA7UN9obQ_tppVkNJyJg4od0ijWYjM6tRg',
      authDomain: 'auth-react-tuto.firebaseapp.com',
      projectId: 'auth-react-tuto',
      storageBucket: 'auth-react-tuto.appspot.com',
      messagingSenderId: '957892609707',
      appId: '1:957892609707:web:974e764e6aeac53a9b59ee',
    });

    faribase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => faribase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Header Login" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
