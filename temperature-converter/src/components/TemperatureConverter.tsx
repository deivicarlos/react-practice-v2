import { useId, useState } from 'react';

const TemperatureConverter = () => {
  const id = useId();
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const celsiusId = `${id}-celsius`;
  const fahrenheitId = `${id}-fahrenheit`;

  const c2f = (c: number) => c * 1.8 + 32;
  const f2c = (f: number) => (f - 32) / 1.8;

  const handleCelsiusChange = (value: string) => {
    setCelsius(value);

    if (value === '' || value === '-' || value === '.' || value.endsWith('.')) {
      return;
    }

    const c = parseFloat(value);

    if (isNaN(c)) return;

    setFahrenheit(c2f(c).toFixed(2));
  };

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value);

    if (value === '' || value === '-' || value === '.' || value.endsWith('.')) {
      return;
    }

    const f = parseFloat(value);

    if (isNaN(f)) return;

    setCelsius(f2c(f).toFixed(2));
  };

  return (
    <div className="flex size-full flex-col gap-y-6 p-6">
      <h2 className="text-lg font-semibold">Temperature Converter</h2>

      <div className="flex flex-row gap-4">
        <div className="flex w-32 flex-col items-center justify-center">
          <input
            id={celsiusId}
            value={celsius}
            type="text"
            inputMode="decimal"
            pattern="-?\d*\.?\d*"
            className="w-full rounded [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => handleCelsiusChange(e.target.value)}
          />
          <label htmlFor={celsiusId}>Celsius</label>
        </div>
        <span>=</span>
        <div className="flex w-32 flex-col items-center justify-center">
          <input
            id={fahrenheitId}
            type="text"
            inputMode="decimal"
            pattern="-?\d*\.?\d*"
            className="w-full rounded [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
          />
          <label htmlFor={fahrenheitId}>Fahrenheit</label>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
