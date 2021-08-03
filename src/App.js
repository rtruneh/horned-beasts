// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import {animalData} from './data';

function App() {
  // set modalOpen to false
  // const [modalOpen, setModalOpen] = useState(false);
  //switches this to the opposite
  // let toggleModal = () => {
  //   setModalOpen(prevModalOpen => !prevModalOpen) 
  // };

  return (
     <div className="App">
       <Header/>
       {/* passing into main so main can use them.  */}
       <Main animalData={animalData}/>
       <Footer/>
    </div>
  );
}

export default App;
