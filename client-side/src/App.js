
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

//npm i react-router-dom react-hot-toast react-hook-form
//npm i  react-day-picker date-fns firebase daisyui  
