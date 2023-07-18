export type DropdownProps = {
  options: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
};

function Dropdown({ options, defaultValue }: DropdownProps) {
  return (
    <div>
      <label htmlFor="dropdown">Select</label>
      <select id="dropdown" defaultValue={defaultValue}>
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
