import styles from "../../styles/DetailProduct.module.css";
import {i, icon, quantityModifier, quantityPicker} from "../../styles/DetailProduct.module.css";
import { Breadcrumb, Container, Grid, Button, Icon, Input } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link';
import shoes from "../../public/detail-dummy.jpg";
import { QuantityPicker } from 'react-qty-picker';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'All', content: 'All', link: true },
  { key: 'Shoes', content: 'Shoes', link: true },
  { key: 'Product', content: 'Product', active: true },
]

export default function DetailProduct(props) {

  const products = useSelector(({listProduct})=>listProduct)
  const router = useRouter();
  const {id} = router.query
  const productDetail = products.find(el => el.id = id)
  useEffect(() => {
    console.log(productDetail);    
  }, [products])
  
  function formatRupiah(number){
    let result =   "Rp. " + new Intl.NumberFormat("id-ID", {
        currency: "IDR"}).format(number)
    console.log(id);
    return result;
  }

  function returnBuyNow(){
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        return (
          <>
          </>    
        )
    }   

    if (localStorage.getItem("token")) {
      return (  
        <div>
              <Link href='/checkout/[id]'>
                <a>
                  <button  className={styles.buy}>
                  Buy Now <Icon name='shopping bag' className={`${i} ${icon}`} />
                  </button>
                </a>
              </Link>
            </div>
      )  
    }
  }
}

function returnAddToCard(){
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("token")) {
      return (
        <div>
          <Link href='/login'>
            <a>
              <button className={styles.cart}>
                Add to Cart <Icon name='shop' className={`${i} ${icon}`} />
              </button>
            </a>
          </Link>
        </div>  
      )
    }   

  if (localStorage.getItem("token")) {
      return (  
        <div>
          <Link href='/'>
            <a>
              <button className={styles.cart}>
                Add to Cart <Icon name='shop' className={`${i} ${icon}`} />
              </button>
            </a>
          </Link>
        </div>
      )  
    }
  }
}

  return (
    <div className={styles.container}>
    <Breadcrumb icon='right angle' sections={sections} style={{fontSize: "16px", fontWeight: "bold", textDecoration: "none", color: "#000", backgroundColor: "#F0F0F0", marginBottom: "2%"}} />

      <div className={styles.main}>
        <div className={styles.sideLeft}>
          <p className={styles.title}>{productDetail.name}</p>
          <p className={styles.description}>{productDetail.description}</p>
          <div className={styles.priceQuantity}>
            <div className={styles.price}>{formatRupiah(productDetail.price)}</div>
            <div className={styles.quantity}><QuantityPicker min={0} className={`${quantityModifier} ${quantityPicker}`} /></div>
          </div>

          <div className={styles.shop}>
              <>
                {returnAddToCard()}
                {returnBuyNow()}
              </>
          </div>
        </div>

        <div className={styles.sideRight}>
          <div className={styles.containerImage}>
            <div className={styles.displayImage}>
              <Image
                  src={productDetail.image}
                  alt="display"
                  width="580px"
                  height="454px"
                />
            </div>
            <div>
              <div className={styles.detail}>
                <Image
                    src="https://picsum.photos/100"
                    alt="display"
                    width="100px"
                    height="100px"
                  />
              </div>
              <div className={styles.detail}>
                <Image
                    src="https://picsum.photos/100"
                    alt="display"
                    width="100px"
                    height="100px"
                  />
              </div>
              <div className={styles.detail}>
                <Image
                    src="https://picsum.photos/100"
                    alt="display"
                    width="100px"
                    height="100px"
                  />
              </div>
              <div className={styles.detail}>
                <Image
                    src="https://picsum.photos/100"
                    alt="display"
                    width="100px"
                    height="100px"
                  />
              </div>
            </div>
          </div>
          <div className={styles.size}>
            <p>Select Size</p>
            <div className={styles.sizeContainer}>
              <button className={styles.sizeOption}>35</button>
              <button className={styles.sizeOption}>36</button>
              <button className={styles.sizeOption}>37</button>
              <button className={styles.sizeOption}>38</button>
              <button className={styles.sizeOption}>39</button>
              <button className={styles.sizeOption}>40</button>
              <button className={styles.sizeOption}>41</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}