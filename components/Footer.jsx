import React from 'react'
import { Container, Grid, Icon } from 'semantic-ui-react'

const footerStyle = {
  height: "300px",
  backgroundColor: "#fff",
  textAlign: "center",
  alignContent: "center"
}

export default function FooterComponent() {
  return (
    <>

  
  <Container fluid style={footerStyle}>
  
  <Grid columns={3}>
    <Grid.Row style={{alignItems: "center"}}>
      <Grid.Column>
        <h1>LOGO</h1>
      </Grid.Column>
      <Grid.Column style={{borderRight: '1.5px solid #000', borderLeft: '1.5px solid #000', transform: 'skewX(-25deg)'}}>
        <h2 style={{margin: '30px 0 5px -100px', transform: 'skewX(25deg)'}}>About Us</h2>
        <h2 style={{margin: '0 0 5px 20px', transform: 'skewX(25deg)'}}>Contact Us</h2>
        <h2 style={{margin: '0 0 30px 130px', transform: 'skewX(25deg)'}}>Help</h2>
      </Grid.Column>
      <Grid.Column>
      <p>
        <Icon size='large' name='instagram'/>
        <Icon size='large' name='twitter'/>
        <Icon size='large' name='facebook'/>
      </p>

      <p> 
        <Icon size='large' name='linkedin'/>
        <Icon size='large' name='youtube'/>
        <Icon size='large' name='pinterest'/>
      </p>

      <p style={{marginTop: '30px', fontWeight:'bold'}}>&copy; 2022 Alpha Group Indonesia</p>   
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  </>
  )
}