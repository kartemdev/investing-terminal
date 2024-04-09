import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import styles from './index.module.scss';

interface Props {
  to: string;
  className?: string;
  children?: string;
}

const NavbarLink: React.FC<Props> = (props) => {
  const { to, className, children } = props;

  const location = useLocation();

  return (
    <HashLink
      to={to}
      smooth
      className={classNames(styles.itNavbarLinkBlock, {
        [className]: className,
      })}
    >
      <span
        className={classNames(styles.itNavbarLink, {
          [styles.itNavbarLinkActive]: location.hash === to,
        })}
        data-text={children}
      >
        {children}
      </span>
    </HashLink>
  );
};

NavbarLink.defaultProps = {
  className: '',
  children: '',
};

export default NavbarLink;
