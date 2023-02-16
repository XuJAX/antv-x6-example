import React, { useState } from 'react';
import X6 from './Container.jsx';
import Tabs from './Head';
import './App.css';

function App() {
  const [tab, setTab] = useState('Graph');
  return (
    <div>
      <Tabs tab={tab} setTab={setTab} />
      <X6 tab={tab} />
    </div>
  );
}

export default App;
