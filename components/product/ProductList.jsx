import React from 'react'
import ProductCard from './ProductCard'
import {  Container  } from 'semantic-ui-react'
import styles from '../../styles/ProductList.module.css'

function ProductList() {
  return (
    <Container fluid className={styles.container}>
        <div className={styles.categoryList}>
            <div className={styles.categoryItem }>
                <span className={styles.categoryTitle}>Best Seller</span>
            </div>
            <div className={styles.categoryItem}>
                <span> All</span>
            </div>
            <div className={styles.categoryItem}>
                <span className={styles.active}> Sneakers</span>
            </div>
            <div className={styles.categoryItem}>
                <span> Shirt</span>
            </div>
            <div className={styles.categoryItem}>
                <span> Pants</span>
            </div>
            <div className={styles.categoryItem}>
                <span> Accessories</span>
            </div>
        </div>
        
        <div className={styles.productlist}>
          <ProductCard/>
        </div>

        <div className={styles.moreButton}>
            <button>Load More</button>
        </div>
    </Container>
  )
}

export default ProductList