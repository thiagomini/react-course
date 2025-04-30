export interface DropdownProps {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
}

function Dropdown({ options, value, onChange: onSelect }: DropdownProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect?.(event.target.value);
  };
  return (
    <div>
      <label htmlFor="dropdown">Select</label>
      <select id="dropdown" value={value} onChange={handleSelectChange}>
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
