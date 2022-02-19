import { React } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment,Input } from 'semantic-ui-react'
import { greet, header, trebuchet,borderBottom, btnMsk, input, button, daftar }  from "../styles/login.module.css"
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  return (
  <div className={trebuchet}>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
    <Grid.Column className={greet}  style={{ maxWidth: 450 }}>
    <p>Silahkan Masuk</p>
      <Header className={`${trebuchet} ${header}`}  as='h2'>
        {/* <Image src='/BrownJacket[Login].jpg' /> Silahkan Masuk */}
      </Header>
      <Form className={trebuchet} size='large'>
        <Segment>
          <Form.Input className={`${trebuchet} ${borderBottom}`} fluid icon='user' iconPosition='left' placeholder='Email' />
          <Form.Field>
            <Input
              className={`${trebuchet} ${borderBottom} ${input}`} 
              type='password' 
              placeholder='Kata Sandi' iconPosition='left' 
              fluid icon='lock' 
            />
          </Form.Field>
          <Button  className={`${trebuchet} ${btnMsk} ${button}`} color='black' fluid size='Large'>
             <p>Masuk <FaSignInAlt /> </p>
              
          </Button>
          <div className={`${trebuchet}  ${daftar}`}>
        Belum Punya Akun? <a href='register'>Daftar</a>
      </div>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
    </div>
  );
}

export default Login;