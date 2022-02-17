import { Breadcrumb, Container, Grid, Button, Icon, Input } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link';
import shoes from "../../public/detail-dummy.jpg";
import { QuantityPicker } from 'react-qty-picker';
import styles from "../../styles/DetailProduct.module.css";
import {i, icon, quantityModifier, quantityPicker} from "../../styles/DetailProduct.module.css";

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'All', content: 'All', link: true },
  { key: 'Shoes', content: 'Shoes', link: true },
  { key: 'Product', content: 'Product', active: true },
]

export default function DetailProduct(props) {
  return (
    <div className={styles.container}>
    <Breadcrumb icon='right angle' sections={sections} style={{fontSize: "16px", fontWeight: "bold", textDecoration: "none", color: "#000", backgroundColor: "#F0F0F0", marginBottom: "2%"}} />

      <div className={styles.main}>
        <div className={styles.sideLeft}>
          <p className={styles.title}>Product Name</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam ea repudiandae in provident cupiditate iste tenetur delectus repellat? Fugiat laborum soluta error odit officiis aliquid itaque hic, in voluptatibus.</p>
          <div className={styles.priceQuantity}>
            <div className={styles.price}>Rp. 10.000.000</div>
            <div className={styles.quantity}><QuantityPicker min={0} className={`${quantityModifier} ${quantityPicker}`} /></div>
          </div>

          <div className={styles.shop}>
            <div>
              <button className={styles.cart}>
                Add to Cart <Icon name='shop' className={`${i} ${icon}`} />
              </button>
            </div>
            <div>
              <Link href='/checkout/[id]'>
                <a>
                  <button  className={styles.buy}>
                  Buy Now <Icon name='shopping bag' className={`${i} ${icon}`} />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.sideRight}>
          <div className={styles.containerImage}>
            <div className={styles.displayImage}>
              <Image
                  src={shoes}
                  alt="display"
                  width="580px"
                  height="454px"
                />
            </div>
            <div>
              <div className={styles.detail}></div>
              <div className={styles.detail}></div>
              <div className={styles.detail}></div>
              <div className={styles.detail}></div>
            </div>
          </div>
          <div className={styles.size}>
            <p>Select Size</p>
            <div className={styles.sizeContainer}>
              <div className={styles.sizeOption}>35</div>
              <div className={styles.sizeOption}>36</div>
              <div className={styles.sizeOption}>37</div>
              <div className={styles.sizeOption}>38</div>
              <div className={styles.sizeOption}>39</div>
              <div className={styles.sizeOption}>40</div>
              <div className={styles.sizeOption}>41</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}