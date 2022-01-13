import "../styles/Main.css";
import Card from "./Card";

const Main = () => {
  return (
    <main className="main">
      <h1>Bienvenidas a React</h1>
      <div className="tarjetas">

        <Card 
          nombre="rita" 
          imagen="https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.webp?filter=high" 
        />

       <Card 
          nombre="trufa"
          imagen="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg"
       />

       <Card 
        nombre="misha"
        imagen="https://previews.123rf.com/images/andreykuzmin/andreykuzmin1312/andreykuzmin131200031/24449912-3-semanas-durmiendo-gatito-beb%C3%A9.jpg"
       />

        
      </div>
    </main>
  )
}

export default Main;

