import Dropdown from '../components/Dropdown';
import Link from '../components/Link';

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
      <Link to="test" />
    </div>
  );
}

export default DropdownPage;
