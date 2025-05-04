import Dropdown from '../components/Dropdown';

function DropdownPage() {
  return (
    <div>
      <Dropdown
        options={[
          { value: 'red', label: 'Red' },
          { value: 'blue', label: 'Blue' },
          { value: 'yellow', label: 'Yellow' },
        ]}
      />
    </div>
  );
}

export default DropdownPage;
