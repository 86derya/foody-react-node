import types from './menuItemActionsTypes';

const postCommentRequest = () => ({
  type: types.MENU_ITEM_COMMENT_FETCH_REQUEST,
});

const postCommentSuccess = comment => ({
  type: types.MENU_ITEM_COMMENT_FETCH_SUCCESS,
  payload: comment,
});

const postCommentError = error => ({
  type: types.MENU_ITEM_COMMENT_FETCH_ERROR,
  payload: error,
});

export default {
  postCommentRequest,
  postCommentSuccess,
  postCommentError,
};
