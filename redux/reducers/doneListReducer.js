const DONE_ITEM = 'DONE_ITEM';
const COMPLETE_DELETE_ITEM = 'COMPLETE_DELETE_ITEM';

const doneListReducer = (state = [], action) => {
  switch (action.type) {
    case DONE_ITEM:
      return [...state, action.payload];
    case COMPLETE_DELETE_ITEM:
      return [...action.payload];
    default:
      return state;
  }
};

export default doneListReducer;
