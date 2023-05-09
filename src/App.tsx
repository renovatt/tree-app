import { GlobalStyled } from './GlobalStyles';
import { Routers } from './routers';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyled />
      <ToastContainer />
      <div className='App'>
        <Routers />
      </div>
    </>
  )
}

export default App;
