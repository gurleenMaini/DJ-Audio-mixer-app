import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
                <Text style={styles.text}>DJ APP</Text>
              
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'purple',
    height: 70,
    margin: 20,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
