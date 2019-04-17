const getUserName = state =>
  state.session.user ? state.session.user.nickName : null;

export default getUserName;
