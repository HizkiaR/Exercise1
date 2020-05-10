import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting';
import Input from './src/component/Input';


class App extends Component {

  state = {
    greeting: 'Selamat Datang. Welcome'
  }

  render() {
    return (
      <View style={styles.container}>
        <Greeting text={this.state.greeting} />
        <Text>{this.state.greeting}</Text>
        <Input />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;