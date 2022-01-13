import "../styles/Card.css"

const Card = (props) => {
  // los parametros de un componente se llaman PROPS 

  console.log(props)
  return (
    <article className="card">
      <h2> {props.nombre} </h2>
      <p>Tarjeta</p>
      <img src={props.imagen} /> 
    </article>
  )
}

export default Card;
