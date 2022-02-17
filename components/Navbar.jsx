import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import {Icon, Checkbox} from 'semantic-ui-react';
import { useRouter } from "next/router";
import logo from "../public/LOGO.png"

function NavbarComponent() {

  const router = useRouter();

  function returnNavbar(){
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        return (
          <>
            <div className={styles.user}>
            <Link href='/login'>
              <a>
                <button className={styles.login}>
                Login <Icon name='external alternate' className={styles.icon} />
                </button>
              </a>
            </Link>

          <Link href='/login'>
            <a>
              <button className={styles.circle} >
              <Icon name='shop' className={styles.icon} />
              </button>
            </a>
          </Link>
          </div>
          </>    
        )
    }   

    if (localStorage.getItem("token")) {
      return (  
        <>  
          <div className={styles.user}>
            <Link href='/cart'>
              <a>
                <button className={styles.circle}>
                <Icon name='shop' className={styles.icon} />
                </button>
              </a>
            </Link>

            <Link href='/'>
              <a>
                <button className={styles.circle} 
                  onClick={() => {
                  router.push("/");
                  localStorage.clear();
                }}>
                  <Icon name='log out' className={styles.icon} />
                </button>
              </a>
            </Link>
          </div>
        </>   
      )  
   }
  }
}

  return (
      <>
        <div className={styles.darkmode}>
          <div className={styles.lang}>
            <span className={styles.text}>EN | ID</span>
          </div>

          <div className={styles.border}></div>

          <div className={styles.dark}>
            Dark Mode
          </div>

          <div className={styles.toggle}>
            <Checkbox toggle />
          </div>
        </div>  
      
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
                  src={logo}
                  alt="logo"
                  width="75px"
                  height="75px"
              />
          </div>

          <div className={styles.menu}>
            <Link href='/new'>
            <a className={styles.menus}>  
                NEW RELEASE
            </a>  
            </Link>  

            <Link href='/new'>
            <a className={styles.menus}>  
                MEN
            </a>  
            </Link> 

            <Link href='/woman'>
            <a className={styles.menus}>  
                WOMAN
            </a>  
            </Link> 
          </div>

         <>
         {returnNavbar()}
         </>
       </div>  
    </>  
  )
}

export default NavbarComponent