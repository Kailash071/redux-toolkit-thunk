import './App.css';
import PostAddForm from './components/posts/PostAddForm';
import PostLists from './components/posts/PostLists';

function App() {
  return (
    <div className="App">
    <PostAddForm/>
      <PostLists/>
    </div>
  );
}

export default App;
