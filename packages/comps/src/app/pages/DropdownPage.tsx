import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default DropdownPage;
