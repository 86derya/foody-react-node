import React from 'react';
import styles from './AddMenuItem.module.css';
import AddDishFormConfig from './$configs/AddDishFormConfig.json';

const AddDishForm = ({
  props,
  onChange,
  onReset,
  onSubmit,
  addIngredient,
  onDeleteIngredient,
}) => {
  const input = AddDishFormConfig.map(el => (
    <li key={el.name} className={styles.inputs__item}>
      <label className={styles.label}>
        {el.name}
        <el.tag
          onChange={onChange}
          name={el.name}
          type={el.type}
          value={props[el.name]}
          className={styles.input}
          autoComplete={el.autoComplete}
          placeholder={el.placeholder}
        />
        {el.button && (
          <div>
            <div className={styles.ingredients__container}>
              <el.button
                type="button"
                onClick={addIngredient}
                className={styles.addIngredient__btn}
              >
                +
              </el.button>
              <ul className={styles.ingredients__list}>
                Ingredients Summary:
                {props.ingredients &&
                  props.ingredients.map(ingr => (
                    <li key={ingr}>
                      {ingr}
                      <button
                        type="button"
                        onClick={() => onDeleteIngredient(ingr)}
                      >
                        X
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </label>
    </li>
  ));
  const { image } = props;

  return (
    <>
      <h1 className={styles.addDish__page_title}>Add Dish Page</h1>
      {image && (
        <img src={image} alt="dishImage" className={styles.addDish__image} />
      )}
      <form className={styles.addDish_form} onSubmit={onSubmit}>
        <ul className={styles.inputs__list}>{input}</ul>
        <div className={styles.controls__container}>
          <button type="button" className={styles.button} onClick={onReset}>
            Clear All
          </button>
          <button type="submit" className={styles.button}>
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default AddDishForm;
