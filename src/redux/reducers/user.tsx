interface Action {
  type: string;
}

function user(state={},action:Action){
  switch (action.type) {
    default: return state;
  }
}

export default user;