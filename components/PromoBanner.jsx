import React from 'react'
import { Grid } from 'semantic-ui-react'
import s from '../styles/Promo.module.css'
function PromoBanner() {
  return (
    <Grid centered >
        <Grid.Row centered columns={2}>
            <Grid.Column width={5}>
                <div className={s.promoCard +" "+  s.promoLeft}>
                    <img src="/assets/promo/promo-1.png" alt="" />
                    <div className={s.promoBody}>
                        <h4>First Promo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas?</p>
                        <a href=""><u>Learn More</u></a>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column width={5}>
                <div className={s.promoCard +" "+  s.promoRight}>
                    <img src="/assets/promo/promo-2.png" alt="" />
                    <div className={s.promoBody}>
                        <h4>Second Promo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptas?</p>
                        <a href=""><u>Learn More</u></a>
                    </div>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  )
}

export default PromoBanner