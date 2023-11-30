// StartPage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StartPage = ({ navigation }) => {
  // Add your button handlers and logic here
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SHARK CHASE</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => {/* Play button logic */}}>
        <Ionicons name="play-circle" size={64} color="white" />
      </TouchableOpacity>
      <View style={styles.bottomControls}>
        <TouchableOpacity onPress={() => {/* Volume logic */}}>
          <Ionicons name="volume-high" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Settings logic */}}>
          <Ionicons name="settings" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default StartPage;
