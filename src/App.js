import React, { useState } from 'react';
import './style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Input from './Input';
import Output1 from './Output1';
import Output2 from './Output2';

export default function App() {
  const [key, setKey] = useState('home');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Input">
          <Input />
        </Tab>
        <Tab eventKey="profile" title="Output 1">
          <Output1 />
        </Tab>
        <Tab eventKey="longer-tab" title="Output 2">
          <Output2 />
        </Tab>
      </Tabs>
    </div>
  );
}
