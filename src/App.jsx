import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Comment from './components/Comment';
import Reply from './components/Reply';
import { mockComments } from './data/mockComments';
function App() {
  const [text, setText] = useState('');
  const [mock, setMock] = useState(mockComments);

  return (
    <div className="wrapper">
      <h1>Add comment</h1>
      <div className="comment-container">
        <Reply list={mock} setList={setMock} styles />
      </div>
      <div>
        {mock.map((comment) => {
          return (
            <div key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
