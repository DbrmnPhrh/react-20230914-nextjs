import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from './contexts/Theme'
import { App } from './pages/App/component'
import store from './redux'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<App/>
			</Provider>
		</ThemeProvider>
	// </React.StrictMode>
)
