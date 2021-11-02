import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: this.props.uri },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.backgroundColor }]}
        onPress={this.playSound}>
        <Text style={styles.textStyle}>{this.props.Text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginLeft: 75,
    marginTop: 20,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderRadius: 20,
  },
});
