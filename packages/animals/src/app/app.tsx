// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <div>
      <p>Hello</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
