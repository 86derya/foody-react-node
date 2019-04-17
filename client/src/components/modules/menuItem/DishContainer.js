import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../spinner';
import DishItem from './DishView';
// import CommentsListView from './CommentsListView';
import styles from './MenuItem.module.css';
import ratingOptions from './$configs/ratingOptions';
import * as api from './$services/api';
import getUserName from './duck/menuItemSelectors';
import routes from '../../../configs/routes';
import { cartActions } from '../cart/duck';

const INITIAL_STATE = {
  commentText: '',
  commentRating: 0,
  dishItem: {},
  commentsToView: [],
  showComments: false,
  isLoading: false,
};

class DishContainer extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const { id } = this.props;
    api.getMenuItemById(id).then(data => {
      const { menuItem } = data;
      this.setState({
        dishItem: menuItem,
        isLoading: false,
        commentsToView: [...menuItem.comments],
      });
    });
  }

  handleCommentSubmit = evt => {
    evt.preventDefault();
    const { commentText, commentRating, commentsToView } = this.state;
    const { userName, id } = this.props;
    if (!commentRating && commentText.length < 1) return;

    const commentToSubmit = {
      mark: commentRating,
      text: commentText,
      Author: userName || 'anonymous',
    };
    this.setState({
      isLoading: true,
    });
    api.postMenuItemComment(id, commentToSubmit).then(data =>
      data.status !== 'success'
        ? // eslint-disable-next-line no-alert
          (this.reset(), alert('something went wrong'))
        : (this.setState({
            commentsToView: [
              ...commentsToView,
              data.menuItem.comments[data.menuItem.comments.length - 1],
            ],
            showComments: true,
          }),
          this.reset()),
    );
  };

  handleTextAreaChange = ({ target: { value } }) => {
    this.setState({
      commentText: value,
    });
  };

  handleRatingSelect = ({ target: { value } }) => {
    this.setState({
      commentRating: Math.round(value),
    });
  };

  handleGoBack = () => {
    const { history, location } = this.props;

    const {
      dishItem: { category },
    } = this.state;
    return location.state
      ? history.push(location.state.from)
      : history.push({
          pathname: routes.MENU,
          search: `?category=${category}`,
        });
  };

  toggleShowComments = () => {
    this.setState(state => ({
      showComments: !state.showComments,
    }));
  };

  reset = () => {
    this.setState({
      commentText: '',
      commentRating: 0,
      isLoading: false,
    });
  };

  render() {
    const {
      dishItem,
      commentText,
      commentRating,
      isLoading,
      commentsToView,
      showComments,
    } = this.state;
    const { id, onAddToCart } = this.props;

    const ratingOption = ratingOptions.map(option => (
      <option
        className={styles.comment__rating_option}
        key={option}
        value={option}
      >
        {option}
      </option>
    ));

    const commentItem = commentsToView
      ? commentsToView
          .sort((a, b) => {
            const c = new Date(a.createdAt);
            const d = new Date(b.createdAt);
            return d - c;
          })
          .map(({ _id, Author, createdAt, text, mark }) => (
            <li className={styles.comments__item} key={_id}>
              <span className={styles.comments__item_author}>{Author}</span>
              <span className={styles.comments__item_date}>{createdAt}</span>
              <p className={styles.comments__item_text}>{text}</p>
              {mark ? (
                <p className={styles.comments__item_rating}>Rated: {mark}</p>
              ) : null}
            </li>
          ))
      : null;

    return isLoading ? (
      <Spinner />
    ) : (
      <>
        <button
          className={styles.goBackBtn}
          onClick={this.handleGoBack}
          type="button"
        />
        <section className={styles.dish_page}>
          <div className={styles.container}>
            <DishItem
              currentDish={dishItem}
              onAddToCart={onAddToCart}
              id={id}
            />
            <div className={styles.dish__comments_container}>
              <form
                className={styles.comments__form}
                onSubmit={this.handleCommentSubmit}
              >
                <textarea
                  className={styles.comments__input_text}
                  onChange={this.handleTextAreaChange}
                  value={commentText}
                  placeholder="comment..."
                />
                <label className={styles.comments__rating_label}>
                  Rate
                  <select
                    className={styles.comments__rating_select}
                    name="rating"
                    onChange={this.handleRatingSelect}
                    value={commentRating}
                  >
                    {ratingOption}
                  </select>
                </label>
                <button className={styles.submitCommentBtn} type="submit">
                  Submit
                </button>
              </form>
              <div className={styles.comments__list_wrap}>
                <button
                  type="button"
                  className={styles.showCommentsBtn}
                  onClick={this.toggleShowComments}
                >
                  Comments
                  {!showComments ? (
                    <span className={styles.showComments__show}> Show</span>
                  ) : (
                    <span className={styles.showComments__hide}> Hide</span>
                  )}
                </button>
                {showComments && (
                  // <CommentsListView comments={commentsToView} />//TODO
                  <ul className={styles.comments_list}> {commentItem} </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = state => ({
  userName: getUserName(state),
});
const mapDispatchToProps = {
  onAddToCart: cartActions.addToCart,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishContainer);
