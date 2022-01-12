const types = {
    SET_RIGHTSIDE_DATAS:'SET_RIGHTSIDE_DATAS',
    };
    export default types;
    export const populateRightSideDatas = (datas,type) => {
      datas.type=type;
      return { type: types.SET_RIGHTSIDE_DATAS, payload: datas };
    };
    
    