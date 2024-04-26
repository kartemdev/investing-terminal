import { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';

import {
  INPUT_NUMBER_DECIMAL_SEPARATOR,
  INPUT_NUMBER_THOUSANDS_SEPARATOR,
} from '../../lib';
import withInput, { BaseProps } from '../with-input';

import styles from '../index.module.scss';

interface InputNumberProps {
  decimalScale?: number;
  isFixedDecimalScale?: true;
}
interface Props extends BaseProps {
  name?: string;
  isDisabled?: boolean;
}

const Input: React.FC<Props> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => <input ref={ref} {...props} />,
);

const InputNumber: React.FC<Props & InputNumberProps> = ({
  registerProps,
  ...props
}) => {
  const {
    value,
    onChange,
    name = '',
    isDisabled = false,
    decimalScale = null,
    isFixedDecimalScale = false,
  } = props;

  const currentRegisterProps = { ...registerProps };

  delete currentRegisterProps.ref;

  return (
    <NumericFormat
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      className={styles.input}
      customInput={Input}
      decimalScale={decimalScale}
      getInputRef={registerProps?.ref}
      fixedDecimalScale={isFixedDecimalScale}
      decimalSeparator={INPUT_NUMBER_DECIMAL_SEPARATOR}
      thousandSeparator={INPUT_NUMBER_THOUSANDS_SEPARATOR}
      {...currentRegisterProps}
    />
  );
};

export default withInput(InputNumber);
