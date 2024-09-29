import logo from './logo.svg';
import './App.css';
import CompC from './CompC';
import { UseProvider } from './useContext';
import PostData from './PostData';
import CompA from './CompA';
import ToDo from './ToDo';
import CompG from './CompG';
import CompH from './CompH';


function App() {
  const obj={name:"ravi"}
  return (
    <div className="App">
      
      
      <UseProvider value='obj'>
        {/* <CompG></CompG> */}
        <CompA></CompA>
      </UseProvider>
      {/* <UseProvider value="abhishek">
      <CompC></CompC>
      </UseProvider>  */}
      {/* <PostData></PostData> */}
      {/* <UseProvider value="sending data throgh context hook ">
      <CompA></CompA>
      </UseProvider>
     
     {/* <ToDo></ToDo> */}
     {/* <PostData></PostData> */}
    </div>
  );
}

export default App;
