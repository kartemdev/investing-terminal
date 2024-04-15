import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.block}>
      <div className={styles.navbar}>{children}</div>
    </div>
  );
};

export default Navbar;
