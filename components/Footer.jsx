import { Container, Grid, Icon } from 'semantic-ui-react'
import styles from "../styles/Footer.module.css";
import {i, icon} from "../styles/Footer.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/al.png";
import { useRouter } from 'next/router';

export default function FooterComponent() {
  
  const router = useRouter();
  return (
    <div className={styles.container}>  
    
    <div className={styles.footerLeft}>
      <Link href='/'>
        <a className={router.pathname == "/" ? "active" : ""}>
          <Image
            src={logo}
            alt="logo"
            width="191px"
            height="91px"
          />
        </a>
      </Link>
    </div>

    <div className={styles.border}></div>

    <div className={styles.footerCenter}>
      <Link href='/about'>
        <a>  
          <p className={styles.aboutUs}>About Us</p>
        </a>  
      </Link>

      <Link href='/contact'>
        <a>  
          <p className={styles.contactUs}>Contact Us</p>
        </a>  
      </Link>

      <Link href='/contact'>
        <a>  
          <p className={styles.help}>Help</p>
        </a>  
      </Link>
    </div>

    <div className={styles.border}></div>

    <div className={styles.footerRight}>
    <p>
        <Icon size='big' name='instagram' className={`${i} ${icon}`} />
        <Icon size='big' name='twitter' className={`${i} ${icon}`} />
        <Icon size='big' name='facebook' className={`${i} ${icon}`} />
      </p>

      <p> 
        <Icon size='big' name='linkedin' className={`${i} ${icon}`} />
        <Icon size='big' name='youtube' className={`${i} ${icon}`} />
        <Icon size='big' name='pinterest' className={`${i} ${icon}`} />
      </p>
      <p className={styles.copyright}>&copy; 2022 Alpha Group Indonesia</p>
    </div>
    </div>
  )
}