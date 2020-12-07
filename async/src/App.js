import Users from "./components/Users";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <main>
        <Users />
      </main>
    </Provider>
  );
}

export default App;
