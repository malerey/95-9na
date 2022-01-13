import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button"

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Main />

      <Button mensaje="Hola" color="verde"/>
      <Button mensaje="Chau" color="rojo"/>
      <Button mensaje="?????" color="azul" />

      <Footer />
    </div>
  )
}


export default App;
