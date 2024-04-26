import { memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from '../index.module.scss';

export interface BaseProps {
  value?: string;
  label?: string;
  error?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  registerProps?: UseFormRegisterReturn | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const withInput = <T extends BaseProps>(Component: React.ComponentType<T>) => {
  const InputElement: React.FC<T> = (props) => {
    const {
      value,
      error = '',
      label = '',
      onChange = null,
      leftAddon = null,
      rightAddon = null,
      registerProps = null,
    } = props;

    const [selfValue, setSelfValue] = useState<string>('');

    const uncontrolled = value === undefined && !registerProps;
    const currentValue = uncontrolled ? selfValue : value;
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (uncontrolled) {
        setSelfValue(event.target.value);
      }

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={styles.block}>
        {leftAddon && <span className={styles.leftAddon}>{leftAddon}</span>}
        {label && <span className={styles.label}>{label}</span>}
        <Component
          {...props}
          value={currentValue}
          onChange={handleInputChange}
        />
        {rightAddon && <span className={styles.rightAddon}>{rightAddon}</span>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  };

  return memo(InputElement);
};

export default withInput;
