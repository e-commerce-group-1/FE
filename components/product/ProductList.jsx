import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import {  Card, Container, Loader  } from 'semantic-ui-react'
import styles from '../../styles/ProductList.module.css'
import { useSelector } from 'react-redux'

function ProductList() {
    const [load, setLoad] = useState(true);
    const [cards, setCards] =useState([])
    const [count , setCount] = useState(1)
    const [currCards, setCurrcards] = useState([])
    const products = useSelector(({listProduct})=>listProduct)

    useEffect(()=>{
        setTimeout(() => {
            setLoad(false)
        }, 1000);
    },[products])

    function setLoading() {
        if(load){
            return <Loader active inline='centered' />
        }
        return (

                products.slice(0,8).map((el, i)=>(
                <ProductCard 
                id= {el.id}
                image = {el.image}
                name = {el.name}
                price = {el.price}
                key={i}
                />
                ))
        )
    }

    function loadMore() {
        console.log("loaded",count);

        let start = count * 8,
        end = start + 8,
         sliceCards = products.slice(start,end).map((el, i)=>(
            <ProductCard 
            id= {start + i}
            image = {el.image}
            name = {el.name}
            price = {el.price}
            key={start +  i}
            />
            ))

        setCurrcards([currCards,...sliceCards])
        setCards(currCards)
        console.log(cards);
        setCount(count+1);
    }
    // www.AlphatarStore
    
  return (
    <Container fluid className={styles.container}>
        <div className={styles.categoryList}>
            <div className={styles.categoryItem }>
                <span className={styles.categoryTitle}>Best Seller</span>
            </div>
            <div className={styles.categoryItem}>
                <span className={styles.active}> All</span>
            </div>
            <div className={styles.categoryItem}>
                <span> Sneakers</span>
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
            <Card.Group>
                { setLoading() }
                {cards}
            </Card.Group>
        </div>

        <div className={styles.moreButton}>
            <button onClick={loadMore}>Load More</button>
        </div>
    </Container>
  )
}

export default ProductList