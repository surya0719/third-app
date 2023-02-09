
import './App.css';
import Base from './base/base';
import { StudentDetail } from './components/students';

function App() {
  return (
    <div className="App">

      <Base
      title="Batch Details"
      description="All Students Details"
      >
       <StudentDetail/>

      </Base>

    </div>
  );
}

export default App;
