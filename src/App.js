/* eslint-disable jsx-a11y/anchor-is-valid */
import {ReactComponent as FirstRectangle} from './assets/icons/first-rectangle.svg';
import './App.css';
import Header from './Components/header/header';
import FirstBody from './Components/first-body/first-body';
import SecondBody from './Components/second-body/second-body';
import ThirdBody from './Components/third-body/third-body';
function App() {
  return (
    <div>
      <Header className='header'/>
      <div className='first-rectangle-container'>
        <FirstRectangle/>
      </div>
      <div className='space'>
      </div>
      <FirstBody/>
      <SecondBody/>
      <ThirdBody/>
    </div>
  );
}

export default App;
