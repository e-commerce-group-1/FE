import React from 'react'
import { Breadcrumb, Container } from 'semantic-ui-react'
import {container} from '../../styles/ProductList.module.css'
import styles from '../../styles/Cart.module.css'
import ItemCart from '../../components/cart/ItemCart'

const sections = [
    { key: 'Home', content: 'Home' },
    { key: 'Cart', content: 'Cart', active: true },
]

function Cartlist() {
  return (
      <>
        <div className={styles.marginSet}>
            <Breadcrumb icon='right angle' sections={sections} className={styles.breadCrumbs}/>
        </div>

        <Container fluid className={styles.container}>
            <h2>Cart / Product</h2>
            <div className={styles.marginSet}>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
                <ItemCart/>
            </div>
            <div className={styles.sumPrice}>
                <div className={styles.sumRow}>
                    <div>
                        <span>Quantity : </span>
                        <span>3</span>
                    </div>
                    <span></span>
                    <div>
                        <span>Total : </span>
                        <span>Rp.10.000.000</span>
                    </div>
                </div>
                {/* <div className={styles.sumRow}>
                    <div>
                        <span>Quantity : </span>
                        <span>3</span>
                    </div>
                    <div>
                        <span>Quantity : </span>
                        <span>3</span>
                    </div>
                    <div>
                        <span>Quantity : </span>
                        <span>3</span>
                    </div>
                </div> */}
                <button>Confirm Order</button>
                
            </div>
        </Container>
      </>
  )
}

export default Cartlist