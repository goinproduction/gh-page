import { Provider } from 'react-redux';
import AppRoutes from './app-routes';
import store from './state-management/config-store';

const App = () => {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
};
export default App;
