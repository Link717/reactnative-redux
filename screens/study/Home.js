import React from 'react';
import { View, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Button title="Go to Details... again" onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
  );
}

export default Home;
