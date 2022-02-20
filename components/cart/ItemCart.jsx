import Image from 'next/image';
import React from 'react'
import {FiTrash2} from 'react-icons/fi'
import { QuantityPicker } from 'react-qty-picker';
import styles from '../../styles/Cart.module.css'

function ItemCart() {
  return (
    <div className={styles.item}>
        <div className={styles.descriptions}>
            <div className={styles.descriptionsImg}>
                <Image 
                src="https://picsum.photos/200" 
                width='200'
                height='200'
                alt="product-image" />
            </div>
            <div className={styles.descContent}>
                <h5>Lorem ipsum dolor sit amet consectetur. </h5>
                <hr />
                <span className={styles.btnItem}>
                    <QuantityPicker min={0}/>
                    <button><FiTrash2/></button>
                </span>
            </div>
        </div>
        <div className={styles.prices}>
            <p>Prices</p>
            <p>Rp. 10.000.000</p>
        </div>
    </div>
  )
}

export default ItemCart