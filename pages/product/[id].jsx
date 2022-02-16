import { Breadcrumb, Container, Grid, Button, Icon, Input } from 'semantic-ui-react'
import Image from 'next/image'
import shoes from "../../public/detail-dummy.jpg";
import { QuantityPicker } from 'react-qty-picker';

const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'All', content: 'All', link: true },
  { key: 'Shoes', content: 'Shoes', link: true },
  { key: 'Product', content: 'Product', active: true },
]

export default function DetailProduct(props) {
  return (
    <Container fluid style={{backgroundColor: "#F0F0F0", padding: "2% 5% 10% 5%"}}>
    <Breadcrumb icon='right angle' sections={sections} style={{fontSize: "16px", fontWeight: "bold", textDecoration: "none", color: "#000", backgroundColor: "#F0F0F0", marginBottom: "2%"}} />

    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={7}>
          <h1 style={{fontSize: "48px"}}>Product Name</h1>
          <p style={{fontSize: "24px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, excepturi ducimus quaerat quisquam error, natus praesentium facilis nam vel beatae corrupti? Id natus laudantium et, tempore neque ut totam alias.</p>
          <Grid>
          <Grid.Row width={6} style={{display:'grid', gridTemplateColumns: '2fr 1fr'}}>
            <Grid.Column width={10}>
              <p style={{fontSize: "24px"}}>Rp. 10.000.000</p>
            </Grid.Column>

            <Grid.Column width={16}>
              <QuantityPicker min={0} />
            </Grid.Column>
          </Grid.Row>
          </Grid>

          <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>Add to Cart  <Icon name='shop' style={{marginLeft: "3px"}}/></Button>
        </Grid.Column>

       
       <Grid.Column width={9}>
          <Grid.Row style={{display:'grid', gridTemplateColumns: '5.5fr 1fr'}}>
            <Grid.Column width={8}>
              <Image
                src={shoes}
                alt="Picture of the author"
                width="580px"
                height="454px"
              />
            </Grid.Column>

            <Grid.Column width={2} style={{padding: "0"}}>
              <Grid.Row style={{backgroundColor: "#fff", width: "100px", height: "100px", marginBottom: "5px"}}></Grid.Row>
              <Grid.Row style={{backgroundColor: "#fff", width: "100px", height: "100px", marginBottom: "5px"}}></Grid.Row>
              <Grid.Row style={{backgroundColor: "#fff", width: "100px", height: "100px", marginBottom: "5px"}}></Grid.Row>
              <Grid.Row style={{backgroundColor: "#fff", width: "100px", height: "100px", marginBottom: "5px"}}></Grid.Row>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <p style={{fontSize: "18px", color: "#000"}}>Select Size</p>
          </Grid.Row>
          <Grid>
          <Grid.Row style={{textAlign: "center", display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))'}}>
            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>35</Button>
            </Grid.Column>
            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>36</Button>
            </Grid.Column>

            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>37</Button>
            </Grid.Column>

            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>38</Button>
            </Grid.Column>

            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>39</Button>
            </Grid.Column>

            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>40</Button>
            </Grid.Column>

            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>41</Button>
            </Grid.Column>

            <Grid.Column width={2} style={{marginRight: "1px"}}>
            <Button style={{backgroundColor: "#fff", color: "#000", fontSize: "18px"}}>42</Button>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Grid.Column>

      </Grid.Row>
    </Grid>
    </Container>
  )
}