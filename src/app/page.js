import Image from 'next/image'
import FotoSabores from '../../public/banner-sabores.jpg'
import FotoEventos from '../../public/eventos-image.jpg'
import FotoSobre from '../../public/sobre-image.jpg'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section className={styles.secao_banner}>
        <h1>SORVETE ARTESANAL</h1>
      </section>
      <section className={styles.secao}>
      <Image src={FotoSabores}/>
        <div>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos!</span>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </section>      
      <section className={`${styles.secao_eventos} ${styles.secao}`}>
        <div>
          <h2>NOSSOS EVENTOS</h2>
          <span>Delicias com sorvete!</span>
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>
        <Image src={FotoEventos}/>
      </section>      
      <section className={styles.secao}>
        <Image src={FotoSobre}/>
        <div>
          <h2>SOBRE NÓS</h2>
          <span>Alegria em cada casquinha!</span>
          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
      </section>
    </main>
  );
}
