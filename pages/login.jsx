import { React } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment,Input } from 'semantic-ui-react'
import { header, trebuchet, borderFull, borderBottom, btnMsk, borderNone }  from "../styles/login.module.css"
// import { FormInput }  from "../styles/login.module.css"
// import { ui fluid left icon input  }  from "../'styles/login.module.css"
// import  { modal_body_overflow }  from "../../../styles/Article.module.sass"



function Login() {
  return (
  <div className={trebuchet}>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
    <Grid.Column  style={{ maxWidth: 450 }}  >
      <Header className={trebuchet} className={header}  as='h2'>
        {/* <Image src='/BrownJacket[Login].jpg' /> Silahkan Masuk */}
        Silahkan Masuk
      </Header>
      <Form className={trebuchet} className={borderFull} size='large'>
        <Segment >
          <Form.Input className={trebuchet}  
          className={borderNone} className={borderBottom}   fluid icon='user' iconPosition='left' placeholder='Email' />
          <Form.Field >
            <Input
            
            className={trebuchet}
            className={borderNone}
            className={borderBottom} type='password' 
            placeholder='Kata Sandi' iconPosition='left' 
            fluid icon='lock' />
          </Form.Field>
          
          {/* <Form.Field>
  <label>Enter Password</label>
  <Input type='password' />
</Form.Field> */}

          <Button className={trebuchet} className={btnMsk} color='black' fluid size='large'>
              Masuk
          </Button>
        </Segment>
      </Form>
      <Message className={trebuchet} className={borderFull}>
        Belum Punya Akun? <a href='register'>Daftar</a>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  );
}

export default Login;