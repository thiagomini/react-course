import BookCreate from '../components/BookCreate';
import BookList from '../components/BookList';

export function App() {
  return (
    <div>
      <h1>Reading List</h1>
      <BookList/>
      <BookCreate/>
    </div>
  );
}

export default App;
