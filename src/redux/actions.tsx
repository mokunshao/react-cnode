import actionTypes from "./actionTypes";
import axios from "axios";

export function updateList(tab: any, page: number) {
  return (dispatch: any) => {
    dispatch({ type: actionTypes.UPDATING });
    axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${tab}&limit=20&page=${page}`)
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_LIST,
          data: res.data.data
        });
      });
  };
}

export function updateTopic(id: string) {
  return (dispatch: any) => {
    dispatch({type:actionTypes.UPDATING})
    axios
      .get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res =>{
        dispatch({ type: actionTypes.UPDATE_TOPIC, data: res.data.data })
      }
      );
  };
}
