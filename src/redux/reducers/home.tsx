import actionTypes from "../actionTypes";

interface Action {
  type: string;
  data?: any;
}

// interface State {
//   loading: boolean;
//   data: any[];
// }

const initialState = {
  loading: true,
  data: [
    {
      author: { loginname: "", avatar_url: "" },
      good: false,
      tab: "",
      top: false,
      create_at: ""
    }
  ]
};

function home(state: any = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.UPDATE_LIST:
      return {
        loading: false,
        data: action.data
      };
    case actionTypes.UPDATING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export default home;
