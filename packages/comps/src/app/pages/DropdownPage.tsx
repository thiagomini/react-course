import Dropdown from '../components/Dropdown';

function DropdownPage() {
  return (
    <div>
      <Dropdown
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ]}
      />
    </div>
  );
}

export default DropdownPage;
