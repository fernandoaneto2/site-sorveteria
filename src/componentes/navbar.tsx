import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../arquivos_sorveteria/public/logo.png";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container_navbar}>
      <div>
        <Image src={logo} alt={"logo da sorveteria"} width={100} height={100} />
      </div>
      <div className={styles.container_links}>
        <Link className={styles.links} href="/">
          Home
        </Link>
        <Link className={styles.links} href="/pages/sabores">
          Sabores
        </Link>
        <Link className={styles.links} href="/pages/sobre">
          Sobre
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
