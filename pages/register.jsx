import { React } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'
import { greet, header, trebuchet, borderBottom, btnDftr, input, masuk, welcomeImg, classFlex  }  from "../styles/register.module.css"
import { FaSignInAlt } from 'react-icons/fa';

function Register() {
  return (
  <div className={`${trebuchet} ${classFlex}`} style={{marginTop: "-3rem"}}>
    <img src="/BrownJacket.jpg" className={welcomeImg}/>

      <Grid textAlign='center' style={{ height: '100vh', width: '100%'  }} verticalAlign='middle'>
    <Grid.Column className={greet} style={{ maxWidth: 450 }}>
    <p>Selamat Datang</p>
      <Header className={`${trebuchet} ${header}`} as='h2' color='black' textAlign='center' >
      </Header>
      <Form className={trebuchet} size='large'>
        <Segment>
          <Form.Input className={`${trebuchet}  ${borderBottom}`} fluid icon='user' iconPosition='left' placeholder='Nama Pengguna' />
          <Form.Input className={`${trebuchet}  ${borderBottom}`} fluid icon='mail' iconPosition='left' placeholder='Email' />
          <Form.Field>
            <Input 
              className={`${trebuchet}  ${borderBottom} ${input}`}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Kata Sandi'
              type='password'
            />
          </Form.Field>
          <Button  className={`${trebuchet} ${btnDftr}`} color='black' fluid size='large' className={btnDftr}>
            <p>Daftar <FaSignInAlt/></p>

          </Button>
          <div className={`${trebuchet} $ ${masuk}`}>
        Sudah Punya Akun? <a href='login'>Masuk</a>
      </div>
        </Segment>
      </Form>

      
    </Grid.Column>
  </Grid>
    </div>
  );
}

export default Register;