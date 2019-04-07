interface Action {
  type: string;
}

function topic(state={},action:Action){
  switch (action.type) {
    default: return state;
  }
}

export default topic;