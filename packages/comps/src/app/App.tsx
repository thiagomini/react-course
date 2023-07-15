// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import Button from './components/Button';

export function App() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div>
        <Button>Button 1</Button>
      </div>
      <div>
        <Button danger outline>
          Button 2
        </Button>
      </div>
      <div>
        <Button warning>Button 3</Button>
      </div>
      <div>
        <Button secondary outline>
          Button 4
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Button 4
        </Button>
      </div>
    </div>
  );
}

export default App;
