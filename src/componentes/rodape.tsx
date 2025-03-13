import React from "react";
import Image from "next/image";
import Logo from "../../arquivos_sorveteria/public/logo.png";
import styles from "./rodape.module.css";

const Rodape = () => {
  return (
    <>
      <div className={styles.container_rodape}>
        <div>
          <Image src={Logo} alt={"Logo"} width={100} height={100} />
        </div>
        <div className={styles.container_rodape_informacoes}>
          <h1>Endereço</h1>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className={styles.container_rodape_informacoes}>
          <h1>Contato</h1>
          <p>Email</p>
          <p>(11)99999-9999</p>
        </div>
        <div className={styles.container_rodape_informacoes}>
          <h1>Horários</h1>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div>
        <p className={styles.autoria}>
          Todos os direitos reservados - Fernando Amorim Pontes Neto
        </p>
      </div>
    </>
  );
};

export default Rodape;
