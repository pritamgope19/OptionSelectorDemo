import React, { useState } from 'react';
import './style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Input from './Input';
import Output1 from './Output1';
import Output2 from './Output2';
import Table from './Table';
import { useForm, FormProvider } from 'react-hook-form';

export default function App() {
  const [key, setKey] = useState('Table');
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="Input" title="Input">
              <Input />
            </Tab>
            <Tab eventKey="Output 1" title="Output 1">
              <Output1 />
            </Tab>
            <Tab eventKey="Output 2" title="Output 2">
              <Output2 />
            </Tab>
            <Tab eventKey="Table" title="Table">
              <Table />
            </Tab>
          </Tabs>
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}
