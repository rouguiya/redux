import './App.css';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';
import { Provider } from 'react-redux';
import { store } from './redux';
import Task from './component/Task';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <Provider store = {store}>
          <AddTask/>
          <div className="bloc">
            <Task className="mb-4"/>
            <ListTask />
          </div>
        </Provider>
      </div>
  );
}

export default App;
