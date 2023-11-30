import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StartPage = () => {
  const handlePlayPress = () => {
    // Insert your play button logic here
    console.log('Play button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SHARK CHASE</Text>
        <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
          <Ionicons name="play-circle" size={64} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Volume pressed')}>
          <Ionicons name="volume-high" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Settings pressed')}>
          <Ionicons name="settings" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  playButton: {
    // Define styles for your play button if needed
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  // ... other styles
});

export default StartPage;
