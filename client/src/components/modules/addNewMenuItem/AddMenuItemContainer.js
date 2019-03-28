// /* eslint-disable no-alert */
// import React, { Component } from 'react';
// import AddDishForm from './AddMenuItemView';
// import styles from './AddMenuItem.module.css';
// import * as API from '../../../services/apiMenu';

// const INITIAL_STATE = {
//   name: '',
//   price: '',
//   description: '',
//   image: '',
//   category: '',
//   ingredient: '',
//   ingredients: [],
// };

// let ingredientsContainer = [];
// const filterIngredients = (ingredients, filter) =>
//   ingredients.filter(ingredient => ingredient !== filter);

// export default class AddDishContainer extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };

//   componentDidMount = () => {
//     ingredientsContainer = [];
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleAddIngredient = () => {
//     const { ingredient } = this.state;
//     if (!ingredient || ingredientsContainer.includes(ingredient)) return;
//     ingredientsContainer.push(ingredient);

//     this.setState({
//       ingredients: ingredientsContainer,
//       ingredient: '',
//     });
//   };

//   handleDeleteIngredient = selectedIngrToRemove => {
//     const { ingredients } = this.state;
//     ingredientsContainer = filterIngredients(ingredients, selectedIngrToRemove);

//     this.setState({
//       ingredients: ingredientsContainer,
//     });
//   };

//   handleReset = () => {
//     this.setState({ ...INITIAL_STATE });
//     ingredientsContainer = [];
//   };

//   handleGoBack = () => {
//     this.setState({ ...INITIAL_STATE });
//     const {
//       location: {
//         state: {
//           from: { pathname, search },
//         },
//       },
//       history,
//     } = this.props;

//     history.push({
//       pathname,
//       search,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const {
//       name,
//       price,
//       image,
//       description,
//       ingredients,
//       category,
//     } = this.state;

//     API.addDish({
//       name,
//       price,
//       image,
//       description,
//       ingredients,
//       category,
//     }).then(response => {
//       if (response.status === 201) {
//         alert('Dish was Successfully added!');
//         this.handleGoBack();
//       }
//     });
//   };

//   render() {
//     return (
//       <div className={styles.addDish_container}>
//         <AddDishForm
//           props={this.state}
//           onChange={this.handleChange}
//           onReset={this.handleReset}
//           onSubmit={this.handleSubmit}
//           addIngredient={this.handleAddIngredient}
//           onDeleteIngredient={this.handleDeleteIngredient}
//         />
//         <button
//           className={styles.goBackBtn}
//           onClick={this.handleGoBack}
//           type="button"
//         >
//           <img
//             src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Back-1-512.png"
//             alt="goBack"
//           />
//         </button>
//       </div>
//     );
//   }
// }
