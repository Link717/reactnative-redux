import React, { useState } from 'react';
import { View, Text, CheckBox, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteItem, doneItem } from '../redux/actions';

function ToDoItem({ name, id }) {
  const [isSelected, setSelection] = useState(false);
  const allItems = useSelector(store => store.addToDoReducer);
  const dispatch = useDispatch();

  const handleDelete = deleteItemId => {
    const filteredItem = allItems.filter(item => item.id !== deleteItemId);
    const restItem = allItems.filter(item => item.id === deleteItemId);
    dispatch(deleteItem(filteredItem));
    dispatch(doneItem(restItem[0]));
  };

  return (
    <View>
      <View style={styles.list}>
        <View style={styles.leftSide}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text style={styles.listText}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(id)}>
          <Icon name="trash" size={30} color="rgb(36, 41, 46)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ToDoItem;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    margin: 2,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(36, 41, 46)',
  },

  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  listText: {
    fontSize: 20,
  },

  deleteButton: {
    margin: 8,
  },
});
