import withInput, { BaseProps } from '../with-input';

import styles from '../index.module.scss';

interface Props extends BaseProps {
  name?: string;
  isDisabled?: boolean;
  type?: 'email' | 'text';
}

const InputText: React.FC<Props> = ({ registerProps, ...props }) => {
  const {
    value,
    onChange,
    name = '',
    type = 'email',
    isDisabled = false,
  } = props;

  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      className={styles.input}
      {...registerProps}
    />
  );
};

export default withInput(InputText);
