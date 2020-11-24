const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const DONE_ITEM = 'DONE_ITEM';
const COMPLETE_DELETE_ITEM = 'COMPLETE_DELETE_ITEM';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = item => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const doneItem = item => {
  return {
    type: DONE_ITEM,
    payload: item,
  };
};

export const completeDeleteItem = item => {
  return {
    type: COMPLETE_DELETE_ITEM,
    payload: item,
  };
};
