import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import logo from '../../assets/images/palmera.jpg';

const ProductCard = () => (

<div class={styles.flexbox}>

<div>
   <img className={styles.imagenRedonda} src={logo} alt="Palmera"></img>
</div>

<div>
   <p className={styles.name}>Palmera de cacao</p>
   <p className={styles.desc}>Pieza 425 g</p>
   <p id="precio" className={styles.precio}>1,75 €/ud.</p>
</div>

<div className={styles.roundedhr}></div>

<div>
   <p className={styles.encarro}>En carro</p>
</div>

<div className={styles.flexbox2}>

   <p id ="uds" className={styles.uds}>1 uds.</p>
   <button id="buttonRestar" className={styles.botonrestar}>-</button>
   <button id="buttonSumar" className={styles.botonsumar}>+</button>

</div>

</div>

);

ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;
