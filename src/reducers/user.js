// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_DISPATCH':
    return state;
  default:
    return state;
  }
}
export default userReducer;
