import '@/styles/styles.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen w-full flex-col gap-y-2 overflow-hidden bg-white p-2">
      <Header />
      <div className="flex w-full flex-1">
        <div className="flex w-full flex-row gap-x-2">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex flex-1 flex-col rounded-lg bg-teal-200">{activeTab}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
