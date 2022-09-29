import './App.css';
import Footer from './components/Footer/Footer';
import Gyms from './components/Gyms/Gyms';
import GymSchedule from './components/GymSchedule/GymSchedule';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div >
      <Header></Header>
      <Gyms></Gyms>
      <GymSchedule></GymSchedule>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
