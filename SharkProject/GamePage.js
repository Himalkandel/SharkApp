import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GamePage = ({ navigation }) => {
  const finalScore = 123; // Placeholder score value

  const handlePausePress = () => {
    // Pause button logic
    console.log('Pause button pressed');
  };

  const handleEndGame = () => {
    // Navigate to the EndPage with the final score when the game ends
    navigation.navigate('End', { score: finalScore });
  };

  // Add logic to call handleEndGame() when the game is over

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: 0</Text>
      <View style={styles.gameArea} />
      <TouchableOpacity style={styles.pauseButton} onPress={handlePausePress}>
        <Ionicons name="pause" size={32} color="black" />
      </TouchableOpacity>
      {/* Temporary button to simulate game end */}
      <TouchableOpacity onPress={handleEndGame}>
        <Text>End Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, 
    paddingBottom: 50, 
  },
  score: {
    fontSize: 24,
    position: 'absolute',
    top: 10,
  },
  gameArea: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    height: '60%',
    marginTop: '20%',
    marginBottom: '20%',
  },
  pauseButton: {
    position: 'absolute',
    bottom: 10,
  },
  // ... any additional styles you have
});

export default GamePage;
