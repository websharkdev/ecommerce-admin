import { FC, ReactElement, createContext } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import styles from "./layout.module.sass";

export const UContext = createContext({});

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <UContext.Provider value={{}}>
      <div className={styles.layout}>
        <Header />
        <div className={styles.page}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </UContext.Provider>
  );
};

export default Layout;
