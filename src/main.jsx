import { createRoot } from 'react-dom/client'
import './index.css'
// questo import di "index.css" lo inserisce in tutta l'app!
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)

// questo file viene collegato a "index.html", l'UNICO documento HTML dell'app Vite
// (da cui il nome di questa categoria di prodotti: "SPA - Single Page Application")

// Consiglio di Stefano: "StrictMode" è una modalità d'utilizzo di React che dovrebbe venire
// intesa per l'apprendimento; secondo me molte delle modifiche che apporta al comportamento
// di React NON sono né intuitive né particolarmente utili. Quindi io lo tolgo!

// La riga 6 prende un riferimento dal DOM (quel div vuoto con id="root" presente in index.html)
// e su questa base monta <App />, un componente React!

// App è il componente PRINCIPALE della vostra applicazione.
