import React from 'react';

const DDosSimulator = () => {
  const simulateDDoSAttack = () => {
    for (let i = 0; i < 1000; i++) { // Simulate a DDoS attack with 1000 requests
      fetch('/simulate-ddos')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }
  };

  return (
    <button onClick={simulateDDoSAttack}>
      Simulate DDoS Attack
    </button>
  );
};

export default DDosSimulator;
