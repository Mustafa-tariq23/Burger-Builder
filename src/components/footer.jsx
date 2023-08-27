import { useEffect, useState } from "react";

export function Footer({
  setLettuce,
  setBacon,
  setCheese,
  setMeat,
  Lettuce,
  Bacon,
  Cheese,
  Meat,
}) {
  const itemPrices = {
    Lettece: 0.5,
    Bacon: 0.7,
    Cheese: 0.4,
    Meat: 1.3,
  };

  function UpdatePrice() {
    setprice(
      Lettuce * itemPrices["Lettece"] +
        Bacon * itemPrices["Bacon"] +
        Cheese * itemPrices["Cheese"] +
        Meat * itemPrices["Meat"] + 3
    );
  }
  const [price, setprice] = useState(3);
  useEffect(() => {UpdatePrice()}, [Lettuce, Bacon, Cheese, Meat]);
  return (
    <>
      <section className="footer">
        <section className="ingredients">
          <div className="price">
            <h6>
              Current Price : <strong>{price}$</strong>
            </h6>
          </div>
          <div className="ingredient-controls">
            <div className="ingredient-1">
              <p>Lettuce</p>
              <button
                onClick={() => {
                  setLettuce(Lettuce - 1);
                  if (Lettuce <= 0) setLettuce(0);
                }}
                className={`less ${Lettuce?'#ac9980':'#dfa55a'}`}
              >
                Less
              </button>
              <button
                onClick={() => {
                  setLettuce(Lettuce + 1);
                }}
                className="add"
              >
                More
              </button>
            </div>
            <div className="ingredient-1">
              <p>Bacon</p>
              <button
                onClick={() => {
                  setBacon(Bacon - 1);
                  if (Bacon <= 0) setBacon(0);
                }}
                className="less"
              >
                Less
              </button>
              <button
                onClick={() => {
                  setBacon(Bacon + 1);
                }}
                className="add"
              >
                More
              </button>
            </div>
            <div className="ingredient-1">
              <p>Cheese</p>
              <button
                onClick={() => {
                  setCheese(Cheese - 1);
                  if (Cheese <= 0) setCheese(0);
                }}
                className="less"
              >
                Less
              </button>
              <button
                onClick={() => {
                  setCheese(Cheese + 1);
                }}
                className="add"
              >
                More
              </button>
            </div>
            <div className="ingredient-1">
              <p>Meat</p>
              <button
                onClick={() => {
                  setMeat(Meat - 1);
                  if (Meat <= 0) setMeat(0);
                }}
                className="less"
              >
                Less
              </button>
              <button
                onClick={() => {
                  setMeat(Meat + 1);
                }}
                className="add"
              >
                More
              </button>
            </div>
          </div>
          <div className="Submit">
            <button>Sign Up to order</button>
          </div>
        </section>
      </section>
      <Price />
    </>
  );
}

function Price() {}
