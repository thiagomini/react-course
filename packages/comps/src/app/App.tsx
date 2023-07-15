// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import Button from './components/Button';
import { FaTriangleExclamation } from 'react-icons/fa6';

export function App() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div>
        <Button primary>Button 1</Button>
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

export default App;
