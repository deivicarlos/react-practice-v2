import classNames from 'classnames';

type ToggleProps = {
  ariaLabel?: React.AriaAttributes['aria-label'];
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
};

const Toggle = ({ ariaLabel, checked, disabled, onChange }: ToggleProps) => {
  const buttonStyles = classNames(
    'w-10 relative h-1 items-center justify-center align-middle rounded-sm border border-gray-400 transition-colors duration-300 ease-in-out',
    {
      'bg-blue-400': checked,
      'bg-gray-200': !checked,
      'bg-gray-400': disabled,
    },
  );

  const spanStyles = classNames(
    'rounded-full absolute size-5 -top-2 left-0 border border-gray-400 bg-gray-200 transition-transform duration-200 ease-in-out',
    {
      'transform translate-x-5': checked,
      'transform -translate-x-1': !checked,
      'bg-gray-300': disabled,
    },
  );

  return (
    <button
      className={buttonStyles}
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className={spanStyles} />
    </button>
  );
};

export default Toggle;
