import { React, useState } from "react";
import { Button, Form, Grid, Header,Segment,Input, Dimmer, Loader, Message, Icon, } from 'semantic-ui-react'
import { greet, header, trebuchet,borderBottom, btnMsk, input, button, daftar }  from "../styles/login.module.css"
import { FaSignInAlt } from 'react-icons/fa';
import  axios  from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const router = useRouter();
  

  // function handleUserInput(e) {
  //   console.log(e.target.value, "handleUserInput");
  // }

  function validateLogin() {
    if (email === '' && password  === '') {
      Swal.fire(
        '',
        'Email dan Password Tidak Boleh Kosong!',
        'error')
    }

    else if (email === '') {
      Swal.fire(
        '',
        'Email Tidak Boleh Kosong!',
        'error')
    }

    else if (password === '') {
      Swal.fire(
        '',
        'Password Tidak Boleh Kosong!',
        'error')
    } else {
      handleSubmit()
    }
    
  }

  function handleSubmit() {
    const body = {
      email,
      password,
    };

    setLoading(true);
    // http://3.1.211.120:8081/login
    // https://peaceful-citadel-71310.herokuapp.com/signin
    axios
      .post("http://3.1.211.120:8081/login", body)
      .then(({ data }) => {
        Swal.fire(
          'Berhasil Masuk!',
          '',
          'success'
        )
        // console.log(data.data); //ini token
        // let local = {
        //   token: data.data
        // }
        // local = {}
        localStorage.setItem('token', data.data)
        // localStorage.getItem('token')
        // localStorage.removeItem('token')
        // localStorage.clear()
        router.push("/");
      })
      .catch((err) => {
        setEmail('')
        setPassword('')
        Swal.fire(
          'Gagal Masuk',
          'Beberapa Informasi Anda Tidak Benar. Mohon Coba Lagi',
          'error'
        )
        console.log(err, "Error Occured");

        

       })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <Dimmer active><Loader /></Dimmer>;
  }

  return (
  <div className={trebuchet}>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
    <Grid.Column className={greet}  style={{ maxWidth: 450 }}>
    <p>Silahkan Masuk</p>
      <Header className={`${trebuchet} ${header}`}  as='h2'>
        {/* <Image src='/BrownJacket[Login].jpg' /> Silahkan Masuk */}
      </Header>
      <Form className={trebuchet} size='large' >
        <Segment>
          <Form.Input className={`${trebuchet} ${borderBottom}`} 
          fluid icon='user' iconPosition='left'  type="email" placeholder='Email' autoComplete="off"  onChange={(e) => { setEmail(e.target.value)}}  />
          <Form.Field>
            <Input 
              className={`${trebuchet} ${borderBottom} ${input}`} 
              type='password'
              placeholder='Kata Sandi'
              onChange={(e) => {setPassword(e.target.value)}} 
              iconPosition='left' 
              fluid icon='lock'
              autoComplete="off" 
            />
          </Form.Field>
          <Button  
            className={`${trebuchet} ${btnMsk} ${button}`}
            color='black' 
            fluid size='large'  
            onClick={validateLogin}>
              <p>Masuk <FaSignInAlt /> </p>
          </Button>
          <div className={`${trebuchet}  ${daftar}`}>
        Belum Punya Akun? <Link href='/register'><a>Daftar</a></Link>
      </div>
        </Segment>
        
      </Form>
    </Grid.Column>
  </Grid>
    </div>
  );
}

export default Login;