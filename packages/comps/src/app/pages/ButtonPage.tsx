// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import { FaTriangleExclamation } from 'react-icons/fa6';
import Button from '../components/Button';

export function ButtonPage() {
  const handleClick = () => console.log('Click!');

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div>
        <Button primary onClick={handleClick}>
          Button 1
        </Button>
      </div>
      <div>
        <Button danger outline>
          Button 2
        </Button>
      </div>
      <div>
        <Button warning>
          <FaTriangleExclamation />
          Button 3
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Button 4
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Button 5
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Button 6
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
