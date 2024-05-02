import Image from "next/image"
import Logo from "../../../public/logo.png"
import styles from './Topo.module.css'
import Link from "next/link"

export default function Topo(){
  return(
    <header className={styles.main_container}>
      <div className={styles.container}>
        <Image src={Logo} alt='Logo-imagem'/>
        <nav className={styles.container_nav}>
          <Link href='/'>Home</Link>
          <Link href='/sabores'>Sabores</Link>
          <Link href='/sobre'>Sobre</Link>
        </nav>
      </div>
    </header>
  )
}