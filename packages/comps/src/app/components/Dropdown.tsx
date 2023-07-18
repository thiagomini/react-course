export type DropdownProps = {
  options: {
    value: string;
    label: string;
  }[];
};

function Dropdown({ options }: DropdownProps) {
  return (
    <div>
      <label htmlFor="dropdown">Dropdown</label>
      <select id="dropdown">
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
