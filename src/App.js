
import Expenses from "./components/Expenses/Expenses";


function App() {
  const expenses=[
    {
      title:"Car",
      amount:43,
      date:new Date('3,12,2011')
    },
    {
      title:"Bus",
      amount:443,
      date:new Date('3,12,2011')
    },
    {
      title:"Train",
      amount:443,
      date:new Date('3,12,2011')
    },

  ]
  return (
    <div>
      <h2>Let's get started!</h2>
     <Expenses items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
