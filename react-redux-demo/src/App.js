import { Provider } from 'react-redux'
import store from './redux/store'

import Counter from './Components/Counter'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter />
    </div>
    </Provider>
  );
}


export default App;
