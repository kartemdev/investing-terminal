import styles from './index.module.scss';

interface Props {
  headerSlot: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ headerSlot, children }) => {
  return (
    <div className={styles.block}>
      <header className={styles.header}>{headerSlot}</header>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
