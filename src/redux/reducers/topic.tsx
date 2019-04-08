import actionTypes from "../actionTypes";

interface Action {
  type: string;
  data: any;
}

let initalState = {
  data: {
    author: {
      loginname: "",
      avatar_url: ""
    },
    create_at: "",
    replies: [{ id: "", ups: [], author: {}, create_at: "" }],
    reply_count: 0,
    id: "",
    match: { params: { id: "" } }
  },
  loading: false
};

function topic(state = initalState, action: Action) {
  switch (action.type) {
    case actionTypes.UPDATE_TOPIC:
      return { loading: false, data: action.data };
    case actionTypes.UPDATING:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default topic;
