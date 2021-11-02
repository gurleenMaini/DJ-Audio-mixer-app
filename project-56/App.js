import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from './components/AppHeader';
import SoundButton from './components/SoundButton';
import StopButton from './components/StopButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <AppHeader />
        <SoundButton
          backgroundColor="rgb(10,400,400)"
          Text="Sound 1"
          uri="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav"
        />
        <SoundButton
          backgroundColor="rgb(400,400,50)"
          Text="Sound 2"
          uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3"
        />
        <SoundButton
          backgroundColor="rgb(10,400,20)"
          Text="Sound 3"
          uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3"
        />
        <SoundButton
          backgroundColor="rgb(255,50,100)"
          Text="Sound 4"
          uri="https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3"
        />
        <StopButton />
      </View>
    );
  }
}
