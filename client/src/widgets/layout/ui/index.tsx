import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}></header>
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
};

export default Layout;
