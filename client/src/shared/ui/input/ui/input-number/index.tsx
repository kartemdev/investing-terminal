import { UseFormRegisterReturn } from 'react-hook-form';

import withInput from '../with-input';

import styles from '../styles.module.scss';

interface IProps {
  name: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  registerProps?: UseFormRegisterReturn<string> | null;
}

const InputNumber: React.FC<IProps> = ({ registerProps, ...props }) => {
  const { name, value, disabled, onChange } = props;

  return (
    <input
      name={name}
      type='number'
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={styles.input}
      {...registerProps}
    />
  );
};

export default withInput(InputNumber);
