import styles from '../../styles/ProductList.module.css'
import { Card } from 'semantic-ui-react'
import { useState } from 'react'
import { useRouter } from 'next/router'

function ProductCard(props) {

    const nav = useRouter();

    const [id, setId] = useState(props.id)
    const [image, setImage] = useState(props.image)
    const [name, setName] = useState(props.name)
    const [price, setPrice] = useState( formatRupiah(props.price))
    
    function formatRupiah(number){
        let result =   "Rp. " + new Intl.NumberFormat("id-ID", {
            currency: "IDR"}).format(number)
        console.log(id);
        return result;
    }

    function reRoute(path){
        nav.push(path)
    }

  return (
        <Card style = {{ minWidth : "23%"}}>
            <img className={styles.cardImg} src={image} alt="" />
            <div className={styles.contentCard}>
                <div className={styles.descriptionSection}>
                    <h5>{name}</h5>
                    <p>{price}</p>
                </div>
                <div className={styles.buttonSection}>
                    <span></span>
                    {/* <button>Add Cart</button> */}
                    <button onClick={()=>reRoute("/product/"+`${id}`)}>Buy Now</button>
                </div>
            </div>
        </Card>
  )
}

export default ProductCard