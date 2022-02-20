import React,{ useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import {Icon, Checkbox} from 'semantic-ui-react';
import { useRouter } from "next/router";
import logo from "../public/al.png";
import Swal from "sweetalert2";

function NavbarComponent() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function returnNavbar(){
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("token")) {
        return (
          <>
            <div className={styles.user}>
            <Link href='/login'>
              <a className={router.pathname == "/login" ? "active" : ""}>
                <button className={styles.login}>
                Login <Icon name='external alternate' className={styles.icon} />
                </button>
              </a>
            </Link>

          <Link href='/login'>
            <a className={router.pathname == "/login" ? "active" : ""}>
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
              <a className={router.pathname == "/cart" ? "active" : ""}>
                <button className={styles.circle}>
                <Icon name='shop' className={styles.icon} />
                </button>
              </a>
            </Link>

            <Link href='/'>
              <a className={router.pathname == "/" ? "active" : ""}>
                <button className={styles.circle} 
                  onClick={() => {
                        Swal.fire({
                        title: 'Anda yakin ingin keluar?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ya',
                        cancelButtonText: 'Batal'
                      }).then((result) => {
                        if (result.isConfirmed) {
                            router.push("/");
                            localStorage.clear();
                          Swal.fire(
                            'Anda berhasil keluar!',
                            '',
                            'success'
                          )
                        }
                      })
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
            <Link href='/'>
              <a className={router.pathname == "/" ? "active" : ""}>
                <Image
                      src={logo}
                      alt="logo"
                      width="151px"
                      height="61px"
                  />
                </a>
            </Link>
          </div>

          <div className={styles.menu}>
            <Link href="/new">
            <a className={`${router.pathname == "/new" ? "active" : ""} ${styles.menus}`}>  
                NEW RELEASE
            </a>  
            </Link>  

            <Link href='/men'>
            <a className={`${router.pathname == "/men" ? "active" : ""} ${styles.menus}`}>  
                MEN
            </a>  
            </Link> 

            <Link href='/woman'>
            <a className={`${router.pathname == "/woman" ? "active" : ""} ${styles.menus}`}>  
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