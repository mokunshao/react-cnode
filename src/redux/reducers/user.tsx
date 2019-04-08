import actionTypes from "../actionTypes";

interface Action {
  type: string;
  data: any;
}

let initalState = {
  data: {
    avatar_url: "",
    create_at: "",
    loginname: "",
    score: "",
    recent_replies: [],
    recent_topics: []
  },
  loading: false
};

function user(state = initalState, action: Action) {
  switch (action.type) {
    case actionTypes.UPDATING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.UPDATE_USER:
      return {
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
}

export default user;
