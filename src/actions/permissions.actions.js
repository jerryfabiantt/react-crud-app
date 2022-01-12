const types = {
  SET_USER_DATAS:'SET_USER_DATAS',
  POPULATE_PERMISSIONS: 'POPULATE_PERMISSIONS',
  };
  export default types;
  export const setUserPermissions = (userDatas) => {
    return { type: types.SET_USER_DATAS, payload: userDatas };
  };
  export const populatePermissions = (permissions) => {
    return { type: types.POPULATE_PERMISSIONS, payload: permissions };
  };
  
  