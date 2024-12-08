import React,{useState} from 'react';
import {Card, Typography} from 'antd';
import FormComponent from './Components/FormComponent';
import './App.css';

const {Title} = Typography;

function App() {
  const [SubmittedData, setSubmittedData] = useState(null);
  const handleSubmit = (values) => {
    setSubmittedData(values);
  };

  return (
    <div className='App'>
      <Title level={2}>Форма с использованием Ant Design</Title>
        <FormComponent onSubmit={handleSubmit}/>
    {SubmittedData && (
      <Card className='Card'>
        <Title level={4}>Отправленные данные</Title>
        <p> <strong> Имя:</strong>{SubmittedData.name}</p>
        <p><strong>Описание:</strong>{SubmittedData.description}</p>
      </Card>
      )}
      </div>
  );
}

export default App;