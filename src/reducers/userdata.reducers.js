import permissionTypes from '../actions/permissions.actions';

const reducer = (state = userData, action) => {
  switch (action.type) {
    case permissionTypes.SET_USER_DATAS:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;

var userData = [];
