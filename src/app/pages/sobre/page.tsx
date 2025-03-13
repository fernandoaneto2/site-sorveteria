import React from "react";
import NavBar from "@/componentes/navbar";
import styles from "./sobre.module.css";
import Image from "next/image";
import imageDois from "../../../../arquivos_sorveteria/public/sorveteria.jpg";
import imageUm from "../../../../arquivos_sorveteria/public/sobre-image.jpg";
import Rodape from "@/componentes/rodape";

const SobrePage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={styles.container_um}>
        <h1 className={styles.texto_principal}> A GELATERIA</h1>
      </div>
      <div className={styles.container_dois}>
        <h2 className={styles.subtitulo}>Sobre Nós</h2>
        <h3>Nós simplesmente amamos sorvete!</h3>
        <p>
          Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
          sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e
          gostamos de receber elogios. Estamos operando desde 2009 com as
          melhores matérias-primas para a produção final do sorvete. Vendemos
          tanto para varejo como para atacado.
        </p>
        <p>
          Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
          loja ou levar para sua residência e aproveitar junto com a família.
          Também vendemos para estabelecimentos e criamos eventos como festa de
          aniversário, formaturas e eventos empresariais. Para contratar os
          nossos serviços, basta entrar em contato conosco. Iremos proporcionar
          o melhor atendimento e os melhores produtos para você fazer a sua
          festa mais saborosa, com o melhor sorvete da cidade.
        </p>
      </div>
      <div className={styles.container_tres}>
        <Image className={styles.image} src={imageUm} alt="Imagem 1" />
        <Image className={styles.image} src={imageDois} alt="Imagem 2" />
      </div>
      <div>
        <Rodape />
      </div>
    </div>
  );
};

export default SobrePage;
