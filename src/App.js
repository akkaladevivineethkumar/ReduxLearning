import logo from './logo.svg';
import './App.css';
import { persistor, store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import TodoLayout from './todos/TodoLayout';
import Navbar from './Navbar';

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Navbar />
          <TodoLayout />
        </div>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
