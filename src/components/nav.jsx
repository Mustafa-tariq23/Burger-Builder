import nav from "../assets/nav-logo.png";


export function Nav(){
  return<>
    <header className="App-header">
        {/* nav bar */}
        <section
          className="nav-bar"
          style={{ backgroundColor: "#703b09", display: "flex" }}
        >
          <section className="nav-logo" style={{ flexDirection: "start" }}>
            <img src={nav} alt="Burger Builder logo" />
          </section>
  
          <nav className="nav-text">
            <ul className="nav-ul">
              <li className="li-1">Burger Builder</li>
              <li className="li-2">Login</li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  }