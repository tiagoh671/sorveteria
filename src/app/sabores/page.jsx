import styles from './sabores.module.css'
import Image from 'next/image'
import Oreo from '../../../public/sabor-oreo.png'
import Pistache from '../../../public/sabor-pistache.png'
import Cookies from '../../../public/sabor-cookies-avela.png'
import Kiwi from '../../../public/sorbet-kiwi.png'
import Morango from '../../../public/sorbet-morango.png'
import Limao from '../../../public/sorbet-limao.png'

export default function Sabores(){
  return(
    <main className={styles.main_container}>
      <section className={styles.topo_container}>
        <h1>NOSSOS SABORES</h1>
      </section>
      <section className={styles.sabores_container}>
        <h2>SABORES DE SORVETE</h2>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <Image src={Oreo}/>
            <span>Sorvete de Oreo</span>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className={styles.card}>
            <Image src={Pistache}/>
            <span>Sorvete Pistache</span>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className={styles.card}>
            <Image src={Cookies}/>
            <span>Sorvete Cookies & Avelã</span>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className={styles.card}>
            <Image src={Kiwi}/>
            <span>Sorvete de Kiwi</span>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
          <div className={styles.card}>
            <Image src={Morango}/>
            <span>Sorvete de Morango</span>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className={styles.card}>
            <Image src={Limao}/>
            <span>Sorvete de Limão Siciliano</span>
            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div>
      </section>
    </main>
  )
}