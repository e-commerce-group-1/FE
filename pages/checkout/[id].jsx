import React, { useState } from 'react';
import { Breadcrumb, Container, Grid, Form} from 'semantic-ui-react'
import styles from '../../styles/Checkout.module.css';

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'All', content: 'All', link: true },
  { key: 'Shoes', content: 'Shoes', link: true },
  { key: 'Product', content: 'Product', active: true },
]

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles.inputContainer}>
     <label className={value && 'filled'}>
        {label}
      </label>
      <input type={type} value={value} onChange={handleChange} />
    </div>
  );
}

export default function CheckoutDetail() {
  return (
    <Container fluid>
    <div className={styles.containerCheckout}>
    <Breadcrumb icon='right angle' sections={sections} className={styles.breadcrumbCheckout} />
    </div>

    <div className={styles.containerForm}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <p className={styles.titleCheckout}>Shipping Address</p>
          <Form className={styles.backgroundForm}>
            <TextInput type='text' label="Full Name" autoComplete="off" />
            <TextInput type='email' label="Email" autoComplete="off" />
            <TextInput type='tel' label="Phone Number" autoComplete="off" />
            <TextInput type='text' label="Address" autoComplete="off" />
            <TextInput type='text' label="City" autoComplete="off" />
            <TextInput type='text' label="Province" autoComplete="off" />
          </Form>
        </Grid.Column>

        <Grid.Column width={8}>
          <Grid.Row>
            <p className={styles.titleCheckout}>Credit Card</p>
            <Form className={styles.backgroundForm}>
              <Form.Group widths='equal'>
                <TextInput type='text' label="Visa" autoComplete="off" />
                <TextInput type='text' label="Name on Card" autoComplete="off" />
              </Form.Group>

              <Form.Group widths='equal'>
                <TextInput type='text' label="Card Number" autoComplete="off" />
                <TextInput type='text' label="CVV2 Number" autoComplete="off" />
              </Form.Group>

              <Form.Group widths='equal'>
                <p>Expiration Date</p>
                <TextInput type='date' autoComplete="off" />
              </Form.Group>
            </Form>
          </Grid.Row>

          <Grid.Row>
            <p className={styles.titleCheckout}>Order Review</p>
            <Form className={styles.backgroundForm}>
              <Form.Group widths='equal'>
                <p>Subtotal</p>
                <p>Rp.10.000.000</p>
              </Form.Group>

              <Form.Group widths='equal'>
                <p>Shipping Cost</p>
                <p>Free</p>
              </Form.Group>
              <hr />
            </Form>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>

  <div className={styles.containerBottom}></div>
</Container>  
  )
}
