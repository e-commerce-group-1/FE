import styles from '../../styles/ProductList.module.css'
import { Card } from 'semantic-ui-react'

function ProductCard() {
  return (
    <Card.Group>
        <Card>
            <img src="https://picsum.photos/200" alt="" />
            <div className={styles.contentCard}>
                <div className={styles.descriptionSection}>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Price</p>
                </div>
                <div className={styles.buttonSection}>
                    <span></span>
                    <button>Add Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </Card>
    </Card.Group>
  )
}

export default ProductCard