import styles from "../styles/Contact.module.css";
import {i, icon} from "../styles/Contact.module.css";
import {Icon} from "semantic-ui-react";

export default function ContactUs() {
  return (
    <div>
      <h1 className={styles.title}>Get in Touch</h1>

      <div className={styles.contactList}>
        <div className={styles.location}>
          <Icon size='big' name='map marker alternate' className={`${i} ${icon}`} />
          <br />
          <p>Jl. Raya Tidar No.23, Karangbesuki Kec. Sukun, Kota Malang, Jawa Timur 65146</p>
        </div>

        <div className={styles.telephone}>
          <Icon size='big' name='phone' className={`${i} ${icon}`} />
          <br />
          <p>+62 876 543 210</p>
        </div>

        <div className={styles.email}>
          <Icon size='big' name='mail' className={`${i} ${icon}`} />
          <br />
          <p>hiALTA@alterra.id</p>
        </div>
      </div>

      <div className={styles.containerMessage}>
        <div className={styles.contactMessage}>
          <div className={styles.sideLeft}>
          <form autoComplete="off">
              <div className={styles.shippingAddress}>
                <label htmlFor="name">
                    <input type="text" id="name" placeholder="Name" required autoComplete="off" className={styles.yourName} />
                    <h5>Name</h5>
                </label>
                <label htmlFor="email">
                    <input type="email" id="email" placeholder="Email" required autoComplete="off"  className={styles.yourMail} />
                    <h5>Email</h5>
                </label>
                <label htmlFor="phone">
                    <input type="tel" id="phone" placeholder="Phone" required autoComplete="off"  className={styles.yourNumber} />
                    <h5>Phone Number</h5>
                </label>
            </div>
            </form>
          </div>

          <div className={styles.sideRight}>
            <label htmlFor="message">
                  <textarea rows="6" id="message" placeholder="Phone" required autoComplete="off"  className={styles.yourMessage} />
                  <h6>Message</h6>
            </label>
          </div>
        </div>

        <div className={styles.buttonMessage}>
          <button className={styles.send}>Send <Icon name='send' className={`${i} ${icon}`} /></button>
        </div>
      </div>
      <style global jsx> {`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #f0f0f0;
          font-family: Trebuchet MS;
        }
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
              top:-50px;
              left:0;
              transform:translateY(30px);
              font-size:20px;
              font-family: Trebuchet MS;
              transition-duration:300ms;
          }

          label:focus-within > h5,
          input:not(:placeholder-shown) + h5{
              color:#000;
              top: -55px;
              font-size: 15px;
              font-weight: bold;
              transform:translateY(0px);
          }

          textarea{
              max-width:100%;
              padding:10px 0px;
              margin-top:20px;
              border:none;
              border-bottom: 2px solid #000;
              outline:none;
              background-color: transparent;
              font-size: 24px;
          }

          textarea::placeholder{
              opacity:0;
          }

          h6{
              position:absolute;
              top:-220px;
              left:0;
              transform:translateY(150px);
              font-size:20px;
              transition-duration:300ms;
          }

          label:focus-within > h6,
          textarea:not(:placeholder-shown) + h6{
              color:#000;
              font-size: 15px;
              font-weight: bold;
              transform:translateY(0px);
          }

          a {
            color: #000;
            text-decoration: none;
          }
       `}</style>
    </div>
  )
}
