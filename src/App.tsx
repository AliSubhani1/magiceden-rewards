import AppRouter from './routes/AppRouter'
import { store } from './store';
import { Provider } from 'react-redux';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
