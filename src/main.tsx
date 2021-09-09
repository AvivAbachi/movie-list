import ReactDOM from 'react-dom';
import App from './App';
// import './styles.css';
import './sass/style.scss';

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);
root.render(<App />);
