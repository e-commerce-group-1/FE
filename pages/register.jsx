import React,{ useState } from "react";
import { Button, Form, Grid, Header, Message, Segment, Input, Dimmer, Loader, Image } from 'semantic-ui-react'
import { greet, header, trebuchet, borderBottom, btnDftr, input, masuk, welcomeImg, classFlex  }  from "../styles/register.module.css"
import { FaSignInAlt, FaPen } from 'react-icons/fa';
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Register() {

  const [name, setName] = useState('');
  const [user_name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  function handleRegister() {
    setLoading(true);
    const body = {name, user_name, email, password};

    axios.post('http://3.1.211.120:8081/users', body)
    .then((data) => {
      Swal.fire(
        'Berhasil Daftar!',
        'Anda Bisa Masuk Sekarang!',
        'success'
      )
      console.log(data);
      setShow(true);
      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
      router.push('/login')
    })
    .catch((err) => {
      Swal.fire('Gagal Daftar', 'Data Tidak Valid!', 'error');
      console.log(err);
      setShow(true);

      if (name === '' && user_name === '' && email === '' && password === '') {
        Swal.fire('Gagal Daftar', 'Data Tidak Boleh Kosong!', 'error')
      }
      else if (name.match(/^$|\s+/)) {
        setShow(true);
        Swal.fire('Gagal Daftar','Nama Tidak Valid!','error')
      }
      else if (user_name.match(/^$|\s+/)) {
        setShow(true);
        Swal.fire('Gagal Daftar','Username Tidak Valid!','error')
      }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setShow(true);
        Swal.fire('Gagal Daftar','Email Tidak Valid!','error')
      }
      else if (!/^\S*$/.test(password)) {
        setShow(true);
        // password.replace(/\s+/g, '');
        Swal.fire('Gagal Daftar','Password Tidak Valid', 'error')
      }

      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
    })
    .finally(() => {
      setLoading(false);
    })
}

  if (loading) {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Image alt="load" src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
    </Segment>
    )
  }

  return (
    <div className={`${trebuchet} ${classFlex}`} style={{marginTop: "-3rem"}}>
    <Image 
    src="/BrownJacket.jpg"
    alt= "register"
    className={welcomeImg}/>

    <Grid textAlign='center' style={{ height: '100vh', width: '100%'  }} verticalAlign='middle'>
      <Grid.Column className={greet} style={{ maxWidth: 450 }}>
        <p>Selamat Datang</p>
        <Header className={`${trebuchet} ${header}`} as='h2' color='black' textAlign='center' />

        <Form className={trebuchet} size='large'>
          <Segment>
            <Form.Input 
            className={`${trebuchet} ${borderBottom}`} 
            fluid 
            icon='user' 
            type="text" 
            iconPosition='left' 
            placeholder='Nama Pengguna' 
            required 
            autoComplete="off"
            value={name}
            onChange={(e) => { setName(e.target.value)}} />

            <Form.Input
            className={`${trebuchet} ${borderBottom}`} 
            fluid 
            icon='pencil' 
            type="text" 
            iconPosition='left' 
            placeholder='Username' 
            required 
            autoComplete="off" 
            value={user_name} 
            onChange={(e) => { setUsername(e.target.value)}} />

            <Form.Field>
              <Input
              className={`${trebuchet} ${borderBottom}`} 
              fluid 
              icon='mail' 
              type="email" 
              iconPosition='left' 
              placeholder='Email' 
              required 
              autoComplete="off" 
              value={email} 
              onChange={(e) => { setEmail(e.target.value)}} />
            </Form.Field>

            <Form.Field>
              <Input 
                className={`${trebuchet} ${borderBottom} ${input}`}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Kata Sandi'
                type='password'
                required
                autoComplete="off" 
                value={password}
                onChange={(e) => { setPassword(e.target.value)}}
              />
            </Form.Field>

            <Button className={`${trebuchet} ${btnDftr}`} color='black' fluid size='large' onClick={handleRegister}>
              <p>Daftar <FaSignInAlt/></p>
            </Button>

            <div className={`${trebuchet} $ ${masuk}`}>
              Sudah Punya Akun? <Link href='/login'><a>Masuk</a></Link>
            </div>
          </Segment>
        </Form>
      </Grid.Column>
   </Grid>
  </div>
  );
}
