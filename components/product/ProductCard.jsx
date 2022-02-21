import styles from '../../styles/ProductList.module.css'
import { Card } from 'semantic-ui-react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

function ProductCard(props) {

    const nav = useRouter();

    const [id] = useState(props.id)
    const [image] = useState(props.image)
    const [name] = useState(props.name)
    const [price] = useState( formatRupiah(props.price))
    
    function formatRupiah(number){
        let result =   "Rp. " + new Intl.NumberFormat("id-ID", {
            currency: "IDR"}).format(number)
        console.log(id);
        return result;
    }

    function dashIt(string){
        let dummyString = string.split(/[\s]+/).join("-");
        return dummyString;
    }

    function reRoute(path){
        nav.push(path)
    }

  return (
        <Card style = {{ minWidth : "23%"}}>
            <Image 
            className={styles.cardImg} 
            height= '350px'
            width = '350px'
            src={image} 
            alt="product-item" />
            <div className={styles.contentCard}>
                <div className={styles.descriptionSection}>
                    <h5>{name}</h5>
                    <p>{price}</p>
                </div>
                <div className={styles.buttonSection}>
                    <span></span>
                    {/* <button>Add Cart</button> */}
                    <button onClick={()=>reRoute("/product/"+`${id}`+'-'+dashIt(`${name}`))}>Buy Now</button>
                </div>
            </div>
        </Card>
  )
}

export default ProductCard