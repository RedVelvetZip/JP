import './styles/main.scss'
import hamburger from './assets/hamburger.png'
import { useState } from 'react';
// import logo from './assets/logo-short.png'

type mindmapState = 'closed' | 'values' | 'products' | 'metaverse' | 'marketing'

function App() {
  const [active, setActive] = useState(false);
  const [modalChoice, setModalChoice] = useState<mindmapState>('closed');
  const handleModalChoice = (choice: mindmapState) => {
    setActive(false);
    setModalChoice(choice);
  }

  return (
    <div className="App">
      <div className="navbar">
        <img
          className="hamburger"
          src={hamburger}
          onClick={() => setActive(!active)}></img>
        {active &&
          <ul className="navbar-nav">
            <li>
              <a href="#" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#about" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#rarity" className="nav-link">
                <span>Rarity</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#roadmap" className="nav-link">
                <span>Roadmap</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#mindmap" className="nav-link">
                <span>Mindmap</span>
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="#team" className="nav-link">
                <span>Team</span>
              </a>
            </li>
          </ul>
        }
      </div>
      <section id="home" className="home">
        <div className="home-title">
          <h1 className="lltk">
            LONG<br></br>LIVE<br></br>THE<br></br>KIKS
          </h1>
        </div>
        <div className="home-char">
          <p>
          [Company name] is the fastest way to get your child where they want to be.

We offer a wide range of services, including SAT prep, tutoring, and help with high school. Our goal is to make sure that you and your child are on track for college acceptance—and we're confident that if you work with us, you'll be able to achieve a higher SAT score, improve grades, and more.
          </p>
        </div>
        
      </section>
      <section id="values" className="values">
        <div className="values-title">
          <div className="values-text">
            <p>xxx</p>
          </div>
        </div>
        <div className="puzzle-two">
        </div>
      </section>
    </div>
  );
}

export default App;

function setActive(arg0: boolean): void {
  throw new Error('Function not implemented.');
}
