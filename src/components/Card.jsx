

const Card = ({plan}) => {
  
  return (
    <div className="card">
     <h4 className="card-title">{plan.title}</h4>
     <h3 className="card-price">{plan.price}</h3>
     <ul>
        {
            plan.features.map((feature) => (<li className={feature.available ? "icon-check":"icon-wrong"}><i className={`fa-solid ${feature.available ? "fa-check " :"fa-x"} icon`}></i>  {feature.text}</li>))
        }
        
     </ul>
     <button className="btn">BUTTON</button>
    </div>
  )
}

export default Card