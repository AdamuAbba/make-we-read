import { Provider } from 'react-redux';
import { store } from '@features/store';
import RootStack from '@routes/RootStack';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
