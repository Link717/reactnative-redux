import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { addItem } from '../redux/actions';
import ToDoItem from '../components/ToDoItem';

function ToDo() {
  const allItems = useSelector(store => store.addToDoReducer);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (text) {
      dispatch(addItem({ id: Date.now(), name: text }));
      setText('');
    } else {
      alert('할 일을 입력해주세요 : (');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.listView}>
          {allItems && allItems.map((item, idx) => <ToDoItem {...item} key={item.id} idx={idx} />)}
        </View>
      </ScrollView>
      <View style={styles.iputView}>
        <TouchableOpacity onPress={handleAddItem}>
          <Text style={styles.inputPlus}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputText}
          type="text"
          placeholder="할 일 입력"
          placeholderTextColor="rgb(36, 41, 46)"
          onChangeText={value => setText(value)}
          value={text}
        />
      </View>
    </View>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 251)',
  },

  scrollContainer: {
    marginBottom: 58,
  },

  iputView: {
    position: 'absolute',
    height: 56,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: 'rgb(255,255,255)',
  },

  inputPlus: {
    paddingHorizontal: 8,
    fontSize: 32,
    color: 'rgb(0, 103, 76)',
  },

  inputText: {
    fontSize: 20,
  },
});
