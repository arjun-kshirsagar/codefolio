// src/components/ContestStats.js

import React from 'react';
import './ContestStats.css';

const ContestStats = () => {
  return (
    <div className="contest-card">
      <div className='Total-contest'>

        <h3>Total Contests</h3>
        <p>16</p>

      </div>
      <div className='Platforms'>

        <li>Codechef: 7</li>
        <li>Codeforces: 10</li>
      </div>
      <ul>
      </ul>
    </div>
  );
};

export default ContestStats;
