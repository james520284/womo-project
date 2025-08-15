type Props = {
  value: string;
  onChange: (newVal: string) => void;
  min?: number;
  max?: number;
  className?: string;
  disabled?: boolean;
};

const Counter = ({ value, onChange, min = 1, max, className = '', disabled }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      if (val === '' || Number(val) >= min) {
        onChange(val);
      }
    }
  };

  const handleBlur = () => {
    const num = Number(value);
    if (value === '' || num < min) {
      onChange(String(min));
    } else {
      onChange(String(num));
    }
  };

  const decrement = () => {
    const num = Number(value);
    if (num > min) {
      onChange(String(num - 1));
    }
  };

  const increment = () => {
    const num = Number(value);
    if (!max || num < max) {
      onChange(String(num + 1));
    }
  };

  return (
    <div className={`input-group input-group-sm ${className}`} style={{ width: '120px' }}>
      <button
        type="button"
        className={`input-group-text text-white ${
          disabled || value === String(min) ? 'bg-grey-300' : 'bg-dark'
        }`}
        onClick={decrement}
        disabled={disabled || value === String(min)}
      >
        －
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        className="form-control"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <button
        type="button"
        className={`input-group-text text-white ${
          disabled || (!!max && Number(value) >= max) ? 'bg-grey-300' : 'bg-dark'
        }`}
        onClick={increment}
        disabled={disabled || (!!max && Number(value) >= max)}
      >
        ＋
      </button>
    </div>
  );
};

export default Counter;
