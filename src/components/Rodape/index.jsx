import Image from 'next/image'
import Logo from "../../../public/logo.png"
import styles from "./Rodape.module.css"
import Link from 'next/link'

export default function Rodape(){
  return(
    <footer className={styles.footer}>
      <div className={styles.main_container}>
        <Image src={Logo} alt='logo-imagem'/>
        <div>
          <p><strong>ENDEREÇO</strong></p>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div>
          <p><strong>CONTATO</strong></p>
          <p>info@meusite.com</p>
          <p>Tel:(11)3456-7890</p></div>
        <div>
          <p><strong>HORÁRIOS</strong></p>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p></div>
      </div>
      <p className={styles.final_text}>Gelateria. Orgulhosamente desenvolvido por <Link href='https://github.com/tiagoh671' target='_blank'>@tiagoh671</Link></p>
    </footer>
  )
}