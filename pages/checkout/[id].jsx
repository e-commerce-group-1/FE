import { Breadcrumb, Grid, Form, Icon} from 'semantic-ui-react'
import styles from '../../styles/Checkout.module.css';
import {i, icon} from "../../styles/Checkout.module.css";

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'All', content: 'All', link: true },
  { key: 'Shoes', content: 'Shoes', link: true },
  { key: 'Product', content: 'Product', active: true },
]

export default function CheckoutDetail() {
  return (
    <div className={styles.container}>
       <Breadcrumb icon='right angle' sections={sections} style={{fontSize: "16px", fontWeight: "bold", textDecoration: "none", color: "#000", backgroundColor: "#F0F0F0", marginBottom: "7%", alignItems: "center"}} />

       <div className={styles.main}>
         <div className={styles.mainLeft}>
         <p className={styles.title}>Shipping Address</p>
          <div className={styles.shipping}>
          <form autoComplete="off">
            <div className={styles.shippingAddress}>
              <label htmlFor="name">
                  <input type="text" id="name" placeholder="Name" required autoComplete="off" className={styles.name} />
                  <h5>Full Name</h5>
              </label>
              <label htmlFor="email">
                  <input type="email" id="email" placeholder="Email" required autoComplete="off"  className={styles.email} />
                  <h5>Email</h5>
              </label>
              <label htmlFor="phone">
                  <input type="tel" id="phone" placeholder="Phone" required autoComplete="off"  className={styles.phone} />
                  <h5>Phone Number</h5>
              </label>
              <label htmlFor="address">
                  <input type="text" id="address" placeholder="Address" required autoComplete="off"  className={styles.address} />
                  <h5>Adress</h5>
              </label>
              <label htmlFor="city">
                  <input type="text" id="city" placeholder="City" required autoComplete="off"  className={styles.city} />
                  <h5>City</h5>
              </label>
              <label htmlFor="province">
                  <input type="text" id="province" placeholder="Province" required autoComplete="off"  className={styles.province} />
                  <h5>Province</h5>
              </label>
          </div>
          </form>
          </div>
         </div>

         <div className={styles.mainRight}>

         <p className={styles.title}>Credit Card</p>
          <div className={styles.credit}>
           <form autoComplete="off">
            <div className={styles.nameCard}>
              <label htmlFor="visa" className={styles.visa}>
                    <input type="text" id="visa" placeholder="Visa" required autoComplete="off" />
                    <h5>Visa</h5>
                </label>
                <label htmlFor="name-card" className={styles.nameInput}>
                    <input type="text" id="name-card" placeholder="Name on Card" required autoComplete="off" />
                    <h5>Name on Card</h5>
                </label>
            </div>

            <div className={styles.cardNumber}>
              <label htmlFor="card-number" className={styles.numberInput}>
                  <input type="text" id="card-number" placeholder="Card Number" required autoComplete="off" />
                  <h5>Card Number</h5>
              </label>
              <label htmlFor="cv-number" className={styles.numberCv}>
                  <input type="text" id="cv-number" placeholder="CVV2 Number" required autoComplete="off" />
                  <h5>CVV2 Number</h5>
              </label>
            </div>

            <div className={styles.expiredCard}>
              <h6 className={styles.expired}>Expiration Date</h6>
              <label htmlFor="month" style={{width: "10%"}} className={styles.month}>
                  <input type="text" id="month" placeholder="MM" required autoComplete="off" />
                  <h5>MM</h5>
              </label>

              <div className={styles.border}></div>
              <label htmlFor="year" style={{width: "10%"}} className={styles.year}>
                  <input type="text" id="year" placeholder="YY" required autoComplete="off" />
                  <h5>YY</h5>
              </label>
            </div>

            </form>
          </div>

          <p className={styles.title}>Order Review</p>
          <div className={styles.order}>
            <div className={styles.subtotal}>
              <h6 className={styles.orderReview}>Subtotal</h6>
              <h6 className={styles.orderReview}>Rp. 10.000.000</h6>
            </div>

            <div className={styles.cost}>
              <h6 className={styles.orderReview}>Shipping Cost</h6>
              <h6 className={styles.orderReview}>Free</h6>
            </div>

            <div className={styles.borderReview}></div>

            <div className={styles.total}>
              <h6 className={styles.orderReview}>Total</h6>
              {/* <div className={styles.borderTotal}></div> */}
              <h6 className={styles.orderReview}>Rp. 10.000.000</h6>
            </div>
          </div>
          <button className={styles.buy}>Checkout <Icon name='arrow right' className={`${i} ${icon}`} /></button>
         </div>
       </div>

       <style global jsx> 
        {`
          form{
              max-width:100%;
              display:flex;
              flex-direction:column;
          }

          label{
              max-width: 100%;
              margin-bottom:15px;
              position:relative;
          }
          input{
              max-width:100%;
              padding:10px 0px;
              margin-top:20px;
              border:none;
              border-bottom: 2px solid #000;
              outline:none;
              background-color: transparent;
              font-size: 24px;
          }
          input::placeholder{
              opacity:0;
          }
          h5{
              position:absolute;
              top:-25px;
              left:0;
              transform:translateY(30px);
              font-size:20px;
              transition-duration:300ms;
          }

          label:focus-within > h5,
          input:not(:placeholder-shown) + h5{
              color:#000;
              font-size: 15px;
              font-weight: bold;
              transform:translateY(0px);
          }
       `}</style>
    </div>
  )
}

