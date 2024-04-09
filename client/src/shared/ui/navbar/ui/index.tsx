import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.itNavbarBlock}>
      <div className={styles.itNavbar}>{children}</div>
    </div>
  );
};

export default Navbar;
