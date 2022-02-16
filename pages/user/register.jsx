import { React } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

// import "../../styles/register.css";

function Register() {
  return (
  <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/ReactJSLogo.png' /> Silahkan Daftar
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Email' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Kata Sandi'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Daftar
          </Button>
        </Segment>
      </Form>
      <Message>
        Sudah Punya Akun? <a href='#'>Masuk</a>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  );
}

export default Register;