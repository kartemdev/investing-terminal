import { UseFormRegisterReturn } from 'react-hook-form';

import withInput from '../with-input';

import styles from '../styles.module.scss';

interface IProps {
  name: string;
  type?: 'email' | 'text';
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  registerProps?: UseFormRegisterReturn<string> | null;
}

const InputText: React.FC<IProps> = ({ registerProps, ...props }) => {
  const { name, type, value, disabled, onChange } = props;

  return (
    <input
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={styles.input}
      {...registerProps}
    />
  );
};

export default withInput(InputText);
