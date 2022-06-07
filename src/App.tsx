import './styles/main.scss'
import { useState } from 'react';

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
        <a href="#home" className="nav-link">
          <div className="tutorra">
            {/* add logo */}
            <p className="title">Tutorra</p>
          </div>
        </a>

        <div className="navbar-nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#courses" className="nav-link">
            Courses
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
        </div>
        <a href="#contact" className="nav-link">
          <div className="contact-button">
            <p>Contact</p>
          </div>
        </a>

      </div>
      <section id="home" className="home">
        HOME
      </section>
      <section id="about" className="about">
        <h1>
          TUTORRA
        </h1>
        <p>
          Tutorra is the fastest way to get your child where they want to be.

          We offer a wide range of services, including SAT prep, tutoring, and help with high school. Our goal is to make sure that you and your child are on track for college acceptance—and we're confident that if you work with us, you'll be able to achieve a higher SAT score, improve grades, and more.
        </p>
      </section>
      <section id="courses" className="courses">
        <p>Courses</p>
      </section>
      <section id="pricing" className="pricing">
        <p>Pricing</p>
      </section>
      <section id="contact" className="contact">
        <p>Contact</p>
      </section>
      <div className="footer">
        All Rights Reserved
      </div>
    </div>
  );
}

export default App;


{/* <ul className="navbar-nav">
            <li>
              <a href="#" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#rarity" className="nav-link">
                <span>Rarity</span>
              </a>
            </li>
            <li>
              <a href="#roadmap" className="nav-link">
                <span>Roadmap</span>
              </a>
            </li>
            <li>
              <a href="#mindmap" className="nav-link">
                <span>Mindmap</span>
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link">
                <span>Team</span>
              </a>
            </li>
          </ul> */}