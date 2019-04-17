import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './MenuItem.module.css';

const CommentList = ({ comments }) => (
  <TransitionGroup component="ul" className={styles.comments_list}>
    {comments
      .sort((a, b) => {
        const c = new Date(a.createdAt);
        const d = new Date(b.createdAt);
        return d - c;
      })
      .map(({ _id, Author, createdAt, text, mark }) => (
        <CSSTransition
          key={_id}
          className={styles.comments_slide}
          timeout={{ enter: 300, exit: 300 }}
          mountOnEnter
        >
          <li className={styles.comments__item}>
            <span className={styles.comments__item_author}>{Author}</span>
            <span className={styles.comments__item_date}>{createdAt}</span>
            <p className={styles.comments__item_text}>{text}</p>
            {mark ? (
              <p className={styles.comments__item_rating}>Rated: {mark}</p>
            ) : null}
          </li>
        </CSSTransition>
      ))}
  </TransitionGroup>
);

export default CommentList;
