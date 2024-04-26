import styles from './index.module.scss';

interface Props {
  isDisabled?: boolean;
  children?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props) => {
  const {
    onClick = null,
    children = null,
    type = 'button',
    isDisabled = false,
  } = props;

  return (
    <button
      className={styles.button}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
