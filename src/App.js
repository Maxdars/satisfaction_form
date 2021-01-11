import './App.css';
import { StateProvider } from './store';

// Containers.
import FormContainer from './containers/formContainer'

function App() {

  return (
    <StateProvider>
      <div className="App">
        <FormContainer />
      </div>
    </StateProvider>
  );
}

export default App;
