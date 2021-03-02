import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // Object is from JavaScript, not from React
    // keys extract the keys from a given object and turns that into an array,
    // so it gives you an array of the keys, the values are not part of the array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // return an arrayA of arrays, each array's length is the value in ingredients, arrayA's length is same as ingredients length
            return [...Array(props.ingredients[igKey])].map((_, i) => {  // (value, index)
                return <BurgerIngredient key={igKey + i} type={igKey} /> // get the JSX by using keys as key
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el) // returns the array of JSX elements
        }, []); // reduce is an array built-in function to transform array into something else

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;