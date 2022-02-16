import React, { useState} from 'react'
import { Menu, Image, Container, Button, Icon, Checkbox } from 'semantic-ui-react'
import Link from 'next/link';

// Awal CSS
const navbarStyle = {
  height: "100px",
  paddingRight: "5%",
  paddingLeft: "5%",
  alignItems: "center",
  marginTop: '0'
};

const categoryStyle = {
  color: "black",
  fontWeight: "bold",
  foontSize: "18px",     
}

const topStyle = {
  height: "56px",
  backgroundColor: "#F0F0F0",
  margin: 'auto',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'end',
  paddingRight: "5%",
  paddingLeft: "5%",
  color: 'black',
  whiteSpace: 'nowrap',
}

//  Akhir CSS

export default function NavbarComponent() {

  function MouseOver(event) {
    event.target.style.transform = 'scale(1.1)';
  }
  function MouseOut(event){
    event.target.style.transform="";
  }

    return (
      <Container fluid>
      <ul style={topStyle}>
        <li style={{ marginRight: '15px', color: 'black', display: 'inline-block'}}>
            <Link href='/'>
              <a> 
                EN | ID 
              </a>  
            </Link>
        </li>

        <li style={{display: 'inline-block'}}>
            Dark Mode <Checkbox toggle />
        </li>  
      </ul>

      <Menu stackable style={navbarStyle}  className='borderless'>
      <Link href='/'>
      <a>
        <Menu.Item style={categoryStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
          LOGO
        </Menu.Item>
      </a>  
      </Link>  

      <Menu.Menu position='right'>
      <Link href='/new'>
      <a>  
        <Menu.Item  style={categoryStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
          NEW RELEASE
        </Menu.Item>
      </a>  
      </Link>  

      <Link href='/men'>
       <a> 
        <Menu.Item style={categoryStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}> 
          MEN
        </Menu.Item>
       </a>  
      </Link>  

      <Link href='/woman'>
       <a> 
        <Menu.Item  style={categoryStyle} onMouseOver={MouseOver} onMouseOut={MouseOut}>
          WOMAN
        </Menu.Item>
        </a>  
      </Link>  
    </Menu.Menu>

        <Menu.Item position='right'>
          <Link href='/login'>
            <a> 
              <Button as='a' className='circular ui icon basic secondary button' style={{ marginRight: '5px', paddingRight: '20px', paddingLeft: '20px', color: 'black'}} onMouseOver={MouseOver} onMouseOut={MouseOut}>
                Log in <Icon name='external alternate'/>
              </Button>
            </a>  
          </Link>  

          <Link href='/cart'>
            <a>
              <Button as='a' className='circular ui icon basic secondary button' style={{margin: '0', padding: '0'}} onMouseOver={MouseOver} onMouseOut={MouseOut}>
                <Icon name='shop'/>
              </Button>
            </a>  
          </Link>   
        </Menu.Item>

      </Menu>
      </Container>
    )
  }