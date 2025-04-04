import { Routes } from 'react-router-dom';
import { Herder } from './heder';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white relative">
     
      <Herder></Herder>
      <Routes path="/*">
       
      </Routes>
    </div>
  );
}
