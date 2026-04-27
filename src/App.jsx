// un file JS/JSX che comincia con una lettera maiuscola (o che genericamente segue la nomenclatura
// PascalCase) è un COMPONENTE REACT!
// Un componente REACT ha estensione .js/.jsx

// Un componente React è un frammento di interfaccia.
// Può venire scritto in due formule: come CLASSE o come FUNZIONE.
// La formula più semplice è quella descritta in questo file: una funzione che ritorna del contenuto.
// Questo contenuto viene sempre scritto in una sintassi molto simile ad HTML chiamata JSX.
// JSX è retrocompatibile con HTML ma con delle agevolazione per l'interpolazione di JS.
// Inserendo un paio di graffe { } è possibile interpolare facilmente del JS all'interno della struttura.
// In aggiunta, alcuni nomi di attributi HTML non sono validi in un file JSX come questo:
// class -> className
// for -> htmlFor
// etc.
// Tutti gli event listener diventano in camelCase:
// onclick -> onClick
// onsubmit -> onSubmit
// etc.

import './App.css'
import List from './components/List'
// come inserisco Title dentro App?
// prima serve un import:
import Title from './components/Title'

const App = function () {
  // la regola dice che un'espressione JSX (come il valore di un return) può contenere UN SOLO VALORE
  // <> è un contenitore "virtuale" vuoto, che serve solamente a far rispettare la regola che
  // il return deve avere un solo valore! si chiama REACT FRAGMENT
  return (
    // Un componente si ripete ad ogni invocazione in tutto il suo contenuto.
    // Spessissimo però capita che un componente debba contenere al suo interno delle parti "dinamiche",
    // cioè delle porzioni di: contenuto, stile, logica etc. che possano variare da invocazione a invocazione
    // per ottenere questo risultato si fornisce al componente dei "parametri"; vengono chiamati PROPS.
    <>
      <Title name="Alessia" />
      <Title name="Gianni" />
      <Title name="Roberto" numero={100} />
      {/* se il valore della prop è stringa si mettono le virgolette, in ogni altro caso le {} */}
      <List item="Scottex" />
      <List item="Tappetino Mouse" />
      <List item="Poggiatazza" />
    </>
  )
}

export default App

// al termine di ogni file JSX è necessario ESPORTARE il componente React definito, in modo da
// renderlo disponibile all'interno dell'app Vite negli altri file/componenti

// la struttura import/export della nostra app Vite funziona così: un componente viene scritto ed
// esportato, in modo che un altro componente o file lo possa importare
