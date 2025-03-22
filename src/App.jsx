import './App.css'
import Lottery from './Lottery'

function App() {

  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
