import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/nav";
import { CenterFlex } from "./components/center-flex";
import { Footer } from "./components/footer";
import { useEffect, useState } from "react";

function App() {
  const [addLettuce, setaddLettuce] = useState(0);
  const [addBacon, setaddBacon] = useState(0);
  const [addCheese, setaddCheese] = useState(0);
  const [addMeat, setaddMeat] = useState(0);

 

  return (
    <>
      <Nav />
      <CenterFlex
        Lettuce={addLettuce}
        Bacon={addBacon}
        Cheese={addCheese}
        Meat={addMeat}
      />
      <Footer
        Lettuce={addLettuce}
        Bacon={addBacon}
        Cheese={addCheese}
        Meat={addMeat}
        setLettuce={setaddLettuce}
        setBacon={setaddBacon}
        setCheese={setaddCheese}
        setMeat={setaddMeat}
      />
    </>
  );
}
export default App;
