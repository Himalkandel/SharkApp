import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure Ionicons is imported correctly

const GamePage = ({ navigation }) => {
  const handlePausePress = () => {
    // Pause button logic
    console.log('Pause button pressed');
    // Implement your logic here, for example, navigating to a pause screen or toggling the game state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: 0</Text>
      <View style={styles.gameArea} />
      <TouchableOpacity style={styles.pauseButton} onPress={handlePausePress}>
        <Ionicons name="pause" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50, 
    paddingBottom: 50, 
  },
  score: {
    fontSize: 24,
    position: 'absolute',
    top: 10, // Adjust the position as needed
  },
  gameArea: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%', // Adjust the size as needed
    height: '60%', // Adjust the size as needed
    marginTop: '20%', // This can center it on the screen depending on the device
    marginBottom: '20%', // This can center it on the screen depending on the device
  },
  pauseButton: {
    position: 'absolute',
    bottom: 10, // Adjust the position as needed
  },
});

export default GamePage;
