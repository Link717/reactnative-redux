import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import DoneItem from '../components/DoneItem';

function Done() {
  const doneItems = useSelector(store => store.doneListReducer);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.listView}>
          {doneItems &&
            doneItems.map((item, idx) => <DoneItem {...item} key={idx + 1} idx={idx} />)}
        </View>
      </ScrollView>
    </View>
  );
}

export default Done;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 251)',
  },

  listView: {
    flex: 9,
  },

  iputView: {
    position: 'absolute',
    height: 56,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: '#fff',
  },

  inputPlus: {
    paddingHorizontal: 8,
    fontSize: 32,
  },

  inputText: {
    fontSize: 20,
  },
});
