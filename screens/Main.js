import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ToDo from './ToDo';
import Done from './Done';

const TAB_OBJ = {
  1: <ToDo />,
  2: <Done />,
};

function Main() {
  const [currentIdx, setCurrentIdx] = useState(1);

  const handleIdx = idx => {
    setCurrentIdx(idx);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Lists</Text>
      <View style={styles.menu}>
        <View style={{ ...styles.button, borderBottomWidth: currentIdx === 1 ? 5 : 0 }}>
          <TouchableOpacity onPress={() => handleIdx(1)}>
            <Text style={styles.text}>ToDo</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.button, borderBottomWidth: currentIdx === 2 ? 5 : 0 }}>
          <TouchableOpacity onPress={() => handleIdx(2)}>
            <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listView}>{TAB_OBJ[currentIdx]}</View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgb(249, 192, 12)',
  },

  menu: {
    flexDirection: 'row',
    backgroundColor: 'rgb(249, 192, 12)',
  },

  button: {
    flex: 0.5,
    borderBottomColor: 'rgb(0, 103, 76)',
  },

  text: {
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  listView: {
    flex: 9,
  },
});
