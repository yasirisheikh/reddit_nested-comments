import { useState } from 'react';
import Comment from './Comment';
export default function Reply({ setList, list, setIsReplying, styles }) {
  const [text, setText] = useState('');
  const handleSubmit = () => {
    const newComment = { id: list.length + 1, body: text };
    setList((prev) => [newComment, ...prev]);
    setText('');
    setIsReplying(false);
  };
  return (
    <div className={`${styles ? 'comment none' : 'comment'}`}>
      <input
        style={{ ...styles }}
        placeholder="what are your thoughts?"
        className="input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        autoFocus={true}
        onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : undefined)}
      />
      <div>
        <button style={{ marginRight: '5px' }} onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
}
