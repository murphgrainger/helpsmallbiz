import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import TextField from '@material-ui/core/TextField';

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const CurrencyInput = ({ inputRef, maskOptions, ...inputProps }) => {

  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })

  return <MaskedInput mask={currencyMask} {...inputProps}     ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}/>
}

export default function FormattedInputs(props) {

  return (
      <TextField
        label={props.name || "amount"}
        value={props.amount}
        onChange={props.handleChange}
        variant={props.variant}
        placeholder="$0.00"
        name="amount"
        id="formatted-numberformat-input"
        required
        fullWidth
        InputProps={{
          inputComponent: CurrencyInput,
        }}
      />
  );
}
