import React, { useState } from 'react';
import axios from 'axios';
import './Reply.css';

const Reply = ({ selectedThread, onReplySent }) => {
  const [replyContent, setReplyContent] = useState('');
  const [error, setError] = useState('');

  const handleReply = async () => {
    if (!replyContent.trim()) {
      setError('Reply cannot be empty.');
      return;
    }

    try {
      await axios.post(`/api/reply/${selectedThread.id}`, {
        from: 'your-email@example.com', // Replace with the actual sender's email
        to: selectedThread.to,
        subject: selectedThread.subject,
        body: replyContent,
      });
      setReplyContent('');
      setError('');
      onReplySent(); // Callback to refresh the thread details or UI after reply
    } catch (err) {
      console.error('Error sending reply:', err);
      setError('Error sending reply.');
    }
  };

  return (
    <div className="reply-container">
      <textarea
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Type your reply here..."
      />
      <button onClick={handleReply}>Send Reply</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Reply;
