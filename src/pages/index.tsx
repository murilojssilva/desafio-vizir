import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import { TableList } from "../components/TableList";

import styles from "../styles/pages/Home.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio | vizir</title>
      </Head>
      <Header />
      <section>
        <TableList />
      </section>
    </div>
  );
}