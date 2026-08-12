

const Card = ({plan}) => {
  return (
    <div className="card">
     <h4 className="card-title">{plan.title}</h4>
     <h3 className="card-price">{plan.price}</h3>
     <ul>
        {
            plan.features.map((feature) => (<li><i className="fa-solid fa-check icon"></i>  {feature.text}</li>))
        }
        
     </ul>
     <button className="btn">BUTTON</button>
    </div>
  )
}

export default Card