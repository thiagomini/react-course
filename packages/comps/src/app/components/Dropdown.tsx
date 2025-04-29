export interface DropdownProps {
  options: {
    value: string;
    label: string;
  }[];
  selected?: string;
  onSelect?: (value: string) => void;
};

function Dropdown({ options, selected, onSelect }: DropdownProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect?.(event.target.value);
  };
  return (
    <div>
      <label htmlFor="dropdown">Select</label>
      <select
        id="dropdown"
        defaultValue={selected}
        onChange={handleSelectChange}
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
