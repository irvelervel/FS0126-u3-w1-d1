// questo è il mio PRIMO componente React scritto da 0!
// Lo creeremo nella formula più semplice, a FUNZIONE!
// Esistono componenti:
// a funzione -> più semplici da scrivere, meno "capaci"
// a classe -> un po' più complessi, più "potenti"

// nome funzione === nome file (compresa di maiuscola)
const Title = function (props) {
  // tutte le prop passate ad un componente a funzione arrivano in un OGGETTO che è il parametro di questa funzione!
  // qui ritornate il contenuto in formato JSX

  const now = new Date().getFullYear()

  return (
    <div>
      <h2>Ciao, sono un titolo!</h2>
      <h4>E io sono un sottotitolo!</h4>
      <p>{now}</p>
      <p>Mi ha creato {props.name}</p>
      {/* props.name diventa Gianni, Roberto, Alessia etc. */}
    </div>
  )
}

// il componente è DEFINITO, ora lo ESPORTIAMO in modo da poterlo utilizzare in App!
export default Title

// tipicamente una struttura valida è:
// - UN COMPONENTE PER FILE
// - UN EXPORT DEFAULT PER FILE
