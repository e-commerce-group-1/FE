import styles from '../../styles/Checkout.module.css';
import {i, icon} from "../../styles/Checkout.module.css";
import { Breadcrumb, Grid, Form, Icon} from 'semantic-ui-react'

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
              {/* <label htmlFor="visa" className={styles.visa}>
                  <input type="text" id="visa" placeholder="Visa" required autoComplete="off" />
                  <h5>Visa</h5>
              </label> */}

              <select name="card" id="card" className={styles.visa}>
                <option value="visa">Visa</option>
                <option value="master">Master Card</option>
              </select>

              <label htmlFor="name-card" className={styles.nameInput}>
                  <input type="text" id="name-card" placeholder="Name on Card" required autoComplete="off" />
                  <h5 style={{marginLeft: "35px"}}>Name on Card</h5>
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
              <h6 className={styles.expired} style={{marginRight: "15px"}}>Expiration Date</h6>

              <label htmlFor="month" style={{width: "10%"}} className={styles.month}>
                  <input type="text" maxLength="2" id="month" placeholder="MM" required autoComplete="off" />
                  <h5 style={{marginLeft: "5px"}}>MM</h5>
              </label>

              {/* <div className={styles.border}></div> */}
              <h6 className={styles.expired} style={{marginLeft: "20px"}}>╱</h6>
              <label htmlFor="year" style={{width: "10%"}} className={styles.year}>
                  <input input type="text" maxLength="2" id="year" placeholder="YY" required autoComplete="off" />
                  <h5 style={{marginLeft: "10px"}}>YY</h5>
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
              <h6 className={styles.orderReview} style={{marginRight: "10px"}}>Total Price</h6>
              <div className={styles.borderTotal}></div>
              <h6 className={styles.orderReview} style={{marginLeft: "10px"}}>Rp. 10.000.000</h6>
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
              colot: #000;
              transition-duration:300ms;
          }

          label:focus-within > h5,
          input:not(:placeholder-shown) + h5{
              color:#000;
              font-size: 15px;
              font-weight: bold;
              transform:translateY(0px);
          }
          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            outline: none;
            font-size: 20px;
            font-weight: 400;
            font-family: Trebuchet MS
            padding-right: 30px;
            background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_angle-double-down.svg/1200px-Font_Awesome_5_solid_angle-double-down.svg.png);
            background-repeat: no-repeat;
            background-position: calc(100% - 3px) center;
            background-size: 10px;
          }
          select::-ms-expand {
            display: none;
          }
          select:focus {
            border:none;
            border-bottom: 2px solid #000;
            outline: none;
          }
          select#xyz {
            border:none;
            outline:none;
          }
          option {
            outline:none;
            border: none;
            font-size: 20px;
            background-color: #f0f0f0;
          }
          option:hover, .option:focus {
            background-color: #fff;
          }

       `}</style>
    </div>
  )
}

