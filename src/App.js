import './App.css';
import Gyms from './components/Gyms/Gyms';
import GymSchedule from './components/GymSchedule/GymSchedule';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Gyms></Gyms>
      <GymSchedule></GymSchedule>
    </div>
  );
}

export default App;
