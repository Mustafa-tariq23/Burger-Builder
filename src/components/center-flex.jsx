import { useEffect } from "react"

export function CenterFlex({Lettuce, Bacon, Cheese, Meat}){
 return(<>
  <section className="flex-center">
      <section style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
        <div className="upper-bun">
          <h2></h2>
        </div>
        {(Lettuce == 0 && Bacon == 0 && Cheese == 0 && Meat == 0)?
        <div>
          <h3 style={{display:"flex", justifyContent: "center"}}>No Ingredients Added</h3>
        </div>:
        (
          <>
            {Array.from({ length: Lettuce }, (_, index) => (
              <div key={`lettuce-${index}`} className="lettuce">
              </div>
            ))}
            {Array.from({ length: Bacon }, (_, index) => (
              <div key={`bacon-${index}`} className="bacon"></div>
            ))}
            {Array.from({ length: Cheese }, (_, index) => (
              <div key={`cheese-${index}`} className="cheese"></div>
            ))}
            {Array.from({ length: Meat }, (_, index) => (
              <div key={`meat-${index}`} className="meat"></div>
            ))}
          </>
        )}
        <div className="lower-bun">
          <h2></h2>
        </div>
        
      </section>
    </section>  
    </>
  )
}