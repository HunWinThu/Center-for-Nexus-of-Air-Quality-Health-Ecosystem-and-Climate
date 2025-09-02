import React from 'react';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Test App - Working!</h1>
      <p>If you can see this, React is working correctly.</p>
      <div>
        <a href="/admin/login" style={{ color: 'blue', textDecoration: 'underline' }}>
          Test Admin Login
        </a>
      </div>
    </div>
  );
};

export default TestApp;
