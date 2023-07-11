import { Provider } from 'react-redux';
import createStore from './utils/store';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers';
import WebSocketProvider from './utils/webSocketProvider';
import { ChakraProvider } from '@chakra-ui/react'; 
import './style.css';


const App = () => {
  const store = createStore();
  return (
    <ChakraProvider>
      <Provider store={store}>
        <WebSocketProvider>
          <BrowserRouter>
            <Routers/>
          </BrowserRouter>
        </WebSocketProvider>
      </Provider>
    </ChakraProvider>
  );
}
export default App;