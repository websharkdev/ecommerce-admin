import { FC, ReactElement, createContext } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import styles from "./layout.module.sass";

export const UserLanguageContext = createContext({});

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <UserLanguageContext.Provider value={{}}>
      <div className={styles.layout}>
        <Header />
        <div className={styles.page}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </UserLanguageContext.Provider>
  );
};

export default Layout;
