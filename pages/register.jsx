import { React } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import style from "../styles/register.module.css"



function Register() {
  return (
  <div className={ style.trebuchet }>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <p className= {style.p1}>Selamat Datang</p>
      <Header className={ style.header } as='h2' color='black' textAlign='center'>
         
      </Header>
      <Form className={ style.borderFull } size='large'>
        <Segment stacked>
          <Form.Input className={ style.borderBottom }  fluid icon='user' iconPosition='left' placeholder='Email' />
          <Form.Input className={ style.borderBottom }
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Kata Sandi'
            type='password'
          />

          <Button color='black' fluid size='large' className={ style.trebuchet }>
            Daftar
          </Button>
        </Segment>
      </Form>
      <Message className= { style.borderFull }>
        Sudah Punya Akun? <a href='login'>Masuk</a>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  );
}

export default Register;