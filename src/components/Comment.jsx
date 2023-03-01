import { useState } from 'react';
import Reply from './Reply';
export default function Comment({ comment }) {
  const [isReplying, setIsReplying] = useState(false);
  const [list, setList] = useState([]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '1rem',
          borderLeft: '1px solid Grey',
          padding: '10px',
          fontSize: '0.8rem',
          marginBottom: '1.5rem',
        }}
      >
        <span>{comment.body}</span>
        <button
          style={{
            fontSize: '0.7rem',
            width: '70px',
            height: '30px',
          }}
          onClick={() => {
            setIsReplying(!isReplying);
          }}
        >
          {isReplying ? 'Cancel' : 'Reply'}
        </button>
        {isReplying && (
          <Reply setList={setList} list={list} setIsReplying={setIsReplying} />
        )}
        {list.length > 0 &&
          list.map((item) => {
            return (
              <div style={{ marginLeft: '2px' }}>
                <Comment comment={item} />
              </div>
            );
          })}
      </div>
    </>
  );
}
