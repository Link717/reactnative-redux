import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Intro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.introText}>
        {`Hello!
To do list (●'◡'●)`}
      </Text>
      <Button title="Go to List" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  introText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 32,
    color: 'rgb(0, 103, 76)',
    backgroundColor: 'rgb(249, 192, 12)',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
