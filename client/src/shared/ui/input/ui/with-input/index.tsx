import { memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classNames from 'classnames';

import styles from '../styles.module.scss';

interface IInputProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  type?: 'email' | 'text';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  registerProps?: UseFormRegisterReturn<string> | null;
}

interface IProps extends IInputProps {
  label?: string;
  error?: string;
  className?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

const withInput = (Component: React.ComponentType<IProps>) => {
  const InputElement: React.FC<IProps> = (props) => {
    const {
      value,
      onChange,
      registerProps,
      label,
      error,
      className,
      rightAddon,
      leftAddon,
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
      <div
        className={classNames(styles.block, {
          [className]: className,
        })}
      >
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

  InputElement.defaultProps = {
    type: 'text',
    label: '',
    error: '',
    onChange: null,
    registerProps: null,
    disabled: false,
    leftAddon: null,
    rightAddon: null,
  };

  return memo(InputElement);
};

export default withInput;
