import "./App.css";
import Card from "./components/Card";
import pricingPlans from "./data/pricingplan";

const App = () => {
  return (
    <>
    <div className="container">
     {
      pricingPlans.map(card =>  <Card  id={card.id} plan={card}/>)
     }
    </div>
    </>
  )
}

export default App