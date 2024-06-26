import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import styles from './index.module.scss';

interface Props {
  to: string;
  children?: string;
  className?: string;
}

const NavbarLink: React.FC<Props> = (props) => {
  const { to, children = null, className = '' } = props;

  const location = useLocation();

  return (
    <HashLink
      to={to}
      smooth
      className={classNames(styles.block, {
        [className]: className,
      })}
    >
      <span
        className={classNames(styles.link, {
          [styles.active]: location.hash === to,
        })}
        data-text={children}
      >
        {children}
      </span>
    </HashLink>
  );
};

export default NavbarLink;
