import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

createRoot(document.getElementById('root')).render(<Theme appearance='dark'><App /></Theme>)
