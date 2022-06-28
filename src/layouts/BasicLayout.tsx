import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "./BasicLayout.less";

const BasicLayout: React.FC = () => {
  return (
    <div className={styles.basicLayout}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default BasicLayout;
