import React from "react";
import NavBar from "../componentes/navbar";
import styles from "../app/page.module.css";
import Image from "next/image";
import bannerSabores from "../../arquivos_sorveteria/public/banner-sabores.jpg";
import ImageEventos from "../../arquivos_sorveteria/public/eventos-image.jpg";
import ImageSobre from "../../arquivos_sorveteria/public/sobre-image.jpg";
import Rodape from "@/componentes/rodape";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.container_home}>
        <h1 className={styles.texto_home}>SORVETE ARTESANAL</h1>
      </div>
      <div className={styles.container_secao}>
        <div className={styles.container_image}>
          <Image className={styles.image} src={bannerSabores} alt={"sorvete"} />
        </div>
        <div className={styles.container_secao_texto}>
          <h1 className={styles.titulo}>Nossos Sabores</h1>
          <h2 className={styles.subtitulo}>Novos e Deliciosos</h2>
          <p className={styles.paragrafo}>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de frutas e
            sem nenhum conservante! Também temos opções sem lactose e sem
            açúcar. Venha conhecer e perceber que tem como o sorvete ser
            delicioso e saudável ao mesmo tempo!
          </p>
        </div>
      </div>
      <div className={styles.container_secao}>
        <div className={styles.container_secao_texto}>
          <h1 className={styles.titulo}>Nossos Eventos</h1>
          <h2 className={styles.subtitulo}>Delícias com sorvete!</h2>
          <p className={styles.paragrafo}>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os
            melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
            aqui com a gente.
          </p>
        </div>
        <div className={styles.container_image}>
          <Image
            className={styles.image}
            src={ImageEventos}
            alt={"Foto Eventos"}
          />
        </div>
      </div>
      <div className={styles.container_secao}>
        <div className={styles.container_image}>
          <Image className={styles.image} src={ImageSobre} alt={"Sobre"} />
        </div>
        <div className={styles.container_secao_texto}>
          <h1 className={styles.titulo}>SOBRE NÓS</h1>
          <h2 className={styles.subtitulo}>Alegria em cada casquinha!</h2>
          <p className={styles.paragrafo}>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
            há anos no mercado produzindo o que tem de melhor para o nosso
            cliente e você não pode ficar fora dessa. Venha nos fazer uma visita
            e aproveite o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
