import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class StopButton extends React.Component {
  render() {
    return (
      <View style={styles.stopContainer}>
        <TouchableOpacity
          style={styles.stopButton}
          onPress={() => {
            Audio.setIsEnabledAsync(false);
          }}>
          <Text style={styles.stopButtonText}>STOP MUSIC</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stopContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  stopButton: {
    width: 250,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'grey',
    borderWidth: 3,
    borderColor: 'black',
  },

  stopButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
