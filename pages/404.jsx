import styles from "../styles/404.module.css";
import Image from "next/image";
import image404 from "../public/assets/404/404.svg"

export default function Custom404() {
  return (
    <div className={styles.container}>
       <Image
          src={image404}
          alt="display"
          width="700px"
          className={styles.image404}
        />
        <p className={styles.description}>Ooops.. page not found!</p>
    </div>
  )
}