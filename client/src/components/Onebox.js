import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Onebox.css';

const Onebox = () => {
  const { theme } = useContext(ThemeContext);
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyBody, setReplyBody] = useState('');

  // Fetch thread list on component mount
  useEffect(() => {
    fetch('/onebox/list')
      .then(response => response.json())
      .then(data => setThreads(data))
      .catch(error => console.error('Error fetching thread list:', error));
  }, []);

  // Fetch thread details by ID
  const fetchThreadDetails = (threadId) => {
    fetch(`/onebox/${threadId}`)
      .then(response => response.json())
      .then(data => setSelectedThread(data))
      .catch(error => console.error('Error fetching thread details:', error));
  };

  // Delete a thread
  const handleDelete = (threadId) => {
    fetch(`/onebox/${threadId}`, { method: 'DELETE' })
      .then(() => {
        setThreads(threads.filter(thread => thread.id !== threadId));
        setSelectedThread(null); // Clear selected thread
      })
      .catch(error => console.error('Error deleting thread:', error));
  };

  // Send a reply
  const handleReply = (threadId) => {
    const { from, to, subject } = selectedThread;
    fetch(`/reply/${threadId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from, to, subject, body: replyBody })
    })
      .then(response => response.json())
      .then(() => {
        setReplyBody(''); // Clear reply box
        alert('Reply sent successfully!');
      })
      .catch(error => console.error('Error sending reply:', error));
  };

  // Keyboard shortcut handling
  useEffect(() => {
    const handleKeydown = (e) => {
      if (selectedThread) {
        if (e.key === 'D') {
          handleDelete(selectedThread.id);
        } else if (e.key === 'R') {
          document.getElementById('reply-box')?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedThread]);

  // Save message
  const handleSave = () => {
    alert('Message saved!');
  };

  // Insert variables into reply body
  const handleVariables = () => {
    const variable = prompt('Enter variable:');
    if (variable) {
      setReplyBody(replyBody + `{{${variable}}}`);
    }
  };

  return (
    <div className={`onebox ${theme}`}>
      <div className="primary-nav">
        <div className="logo-holder">
          <img src="../assets/images/logo_12.png" alt="Logo" className="logo-12" />
        </div>
        <div className="menu-container">
          <div className="menu-item">
            <div className="menu-item-icon">🏠</div>
            <span>Home</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-icon">✉️</div>
            <span>Inbox</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-icon">📊</div>
            <span>Analytics</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="user-list">
          {threads.map(thread => (
            <div key={thread.id} className="thread-item" onClick={() => fetchThreadDetails(thread.id)}>
              <h3>{thread.subject}</h3>
              <p>{thread.preview}</p>
            </div>
          ))}
        </div>

        <div className="selected-thread">
          {selectedThread ? (
            <>
              <h2>{selectedThread.subject}</h2>
              <p>{selectedThread.body}</p>
              <div className="reply-box">
                <div className="editor-buttons">
                  <button onClick={handleSave}>SAVE</button>
                  <button onClick={handleVariables}>Variables</button>
                </div>
                <textarea
                  id="reply-box"
                  placeholder="Type your reply..."
                  value={replyBody}
                  onChange={(e) => setReplyBody(e.target.value)}
                ></textarea>
                <button className="button" onClick={() => handleReply(selectedThread.id)}>Send</button>
              </div>
            </>
          ) : (
            <p>Select a thread to view details</p>
          )}
        </div>
      </div>

      <div className="function-bar">
        <button className="button-secondary" onClick={() => setSelectedThread(null)}>New Thread</button>
        <button className="button" onClick={() => console.log('Settings')}>Settings</button>
      </div>
    </div>
  );
};

export default Onebox;
