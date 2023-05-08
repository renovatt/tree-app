import { GlobalStyled } from './GlobalStyles';
import { Routers } from './routers';

function App() {
  return (
    <>
      <GlobalStyled />
      <div className='App'>
        <Routers />
      </div>
    </>
  )
}

export default App;
