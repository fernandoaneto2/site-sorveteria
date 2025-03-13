import React from "react";
import NavBar from "@/componentes/navbar";
import Rodape from "@/componentes/rodape";
import styles from "./sabores.module.css";
import Image from "next/image";
import sorveteOreo from "../../../../arquivos_sorveteria/public/sabor-oreo.png";
import sorvetePistache from "../../../../arquivos_sorveteria/public/sabor-pistache.png";
import sorveteCookies from "../../../../arquivos_sorveteria/public/sabor-cookies-avela.png";
import sorveteKiwi from "../../../../../arquivos_sorveteria/public/sorbet-kiwi.png";
import sorveteMorango from "../../../../../arquivos_sorveteria/public/sorbet-morango.png";
import sorveteLimao from "../../../../../arquivos_sorveteria/public/sorbet-limao.png";

const SaboresPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container_um}>
        <h1 className={styles.texto_principal}>NOSSOS SABORES</h1>
      </div>

      <h2 className={styles.subtitulo}>SABORES DE SORVETE</h2>
      <div className={styles.container_sabores}>
        <div className={styles.container_sabor}>
          <Image
            className={styles.image_sabor}
            src={sorveteOreo}
            alt="sorvete"
          />
          <h3>Sorvete de Oreo</h3>
          <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
        </div>
        <div className={styles.container_sabor}>
          <Image
            className={styles.image_sabor}
            src={sorvetePistache}
            alt="sorvete"
          />
          <h3>Sorvete de Pistache</h3>
          <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
        </div>
        <div className={styles.container_sabor}>
          <Image
            className={styles.image_sabor}
            src={sorveteCookies}
            alt="sorvete"
          />
          <h3>Sorvete Cookies & Avelã</h3>
          <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
        </div>
        <div className={styles.container_sabor}>
          <Image
            className={styles.image_sabor}
            src={sorveteKiwi}
            alt="sorvete"
          />
          <h3>Sorvete de Kiwi</h3>
          <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
        </div>
        <div className={styles.container_sabor}>
          <Image
            className={styles.image_sabor}
            src={sorveteMorango}
            alt="sorvete"
          />
          <h3>Sorvete de Morango</h3>
          <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
        </div>
        <div className={styles.container_sabor}>
          <Image
            className={styles.image_sabor}
            src={sorveteLimao}
            alt="sorvete"
          />
          <h3>Sorvete de Limão Siciliano</h3>
          <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
        </div>
      </div>
      <div>
        <Rodape />
      </div>
    </div>
  );
};

export default SaboresPage;
