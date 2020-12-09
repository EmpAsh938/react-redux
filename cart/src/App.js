import { Provider } from 'react-redux' 
import store from './redux/store'
const { default: Navbar } = require("./component/Navbar");
const  { default: Hero } = require("./component/Hero")

function App() {
  return (
    <Provider store={store}>
    <main>
      <Navbar />
      <Hero />
    </main>
    </Provider>
  );
}

export default App;
