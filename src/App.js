import './App.css';
import Random from './components/Random';

function App() {
  return (
    <div className='w-[100vw] h-[100vw] background  flex flex-col items-center'>
     <div className='  w-11/12  h-[50px] flex items-center justify-center bg-white  rounded-md p-4 mt-[40px] text-[30px]'>
      <h1 className='text-center'>
        Random Gif
      </h1>
      </div>
      <div className=' flex flex-col w-full items-center mt-5'>
        <Random/>
      </div>
     
    </div>
  );
}

export default App;
