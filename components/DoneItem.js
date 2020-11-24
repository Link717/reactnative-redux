import React from 'react';
import { View, Text, CheckBox, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { completeDeleteItem } from '../redux/actions';

function DoneItem({ name, id }) {
  const allDoneItems = useSelector(store => store.doneListReducer);
  const dispatch = useDispatch();

  const handleDelete = deleteItemId => {
    const filteredItem = allDoneItems.filter(item => item.id !== deleteItemId);
    dispatch(completeDeleteItem(filteredItem));
  };

  return (
    <View>
      <View style={styles.list}>
        <View style={styles.leftSide}>
          <CheckBox value />
          <Text style={styles.listText}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(id)}>
          <Icon style={styles.icon} name="trash" size={30} color="rgb(36, 41, 46)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DoneItem;

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
    textDecorationLine: 'line-through',
    color: 'rgb(169, 172, 177)',
  },

  deleteButton: {
    margin: 8,
  },

  icon: {
    color: 'rgb(169, 172, 177)',
  },
});
