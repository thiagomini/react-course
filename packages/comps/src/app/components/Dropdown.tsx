import { useEffect, useRef } from 'react';

export interface DropdownProps {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
}

function Dropdown({ options, value, onChange: onSelect }: DropdownProps) {
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('executing use effect');
    const handleClick = (event: Event) => {
      if (divEl.current?.contains(event.target as Node)) {
        console.log('Inside Dropdown');
      } else {
        console.log('Outside Dropdown');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect?.(event.target.value);
  };
  return (
    <div className="flex flex-col space-y-1 max-w-[20%]" ref={divEl}>
      <label htmlFor="dropdown" className="text-xl font-medium text-gray-700">
        Select
      </label>
      <select
        id="dropdown"
        value={value}
        onChange={handleSelectChange}
        className="cursor-pointer border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
