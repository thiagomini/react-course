// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App(props: { message?: string }) {
  const message = props?.message ?? 'Welcome to jsx-tutorial!';
  return (
    <div>
      <h1>{message}</h1>
      <input type="number" min={1} max={10} />
      <textarea autoFocus={true}></textarea>
      <p className={styles.time}>
        {'Current Time: ' + new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}

export default App;
