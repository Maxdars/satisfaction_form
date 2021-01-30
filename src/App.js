import './assets/tailwind.css'
import './assets/main.css'
import { StateProvider } from './store';

// Containers.
import FormContainer from './containers/formContainer'

function App() {

  return (
    <StateProvider>
      <div className="h-full flex font-sans">
        <FormContainer />
      </div>
    </StateProvider>
  );
}

export default App;
