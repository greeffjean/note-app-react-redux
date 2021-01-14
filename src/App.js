
import Create from './features/create/create';
import Directory from './features/directory/directory';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="note-area">
      <Directory />
      <Create />
      </div>
     
    </div>
  );
};

export default App;
