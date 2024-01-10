
import './App.css';


const Appa = () => {
    const handleButtonClick = () => {
      window.scrollTo(0, 0);
    };
  
    return (
      <div>
        <button onClick={handleButtonClick}>Scroll to Top</button>
      </div>
    );
  };



  export default Appa;