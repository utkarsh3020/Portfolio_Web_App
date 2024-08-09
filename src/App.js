// import { useContext } from "react";
// import "./App.css";
// import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
// import Toggle from "./components/darkthemetoggle/Toggle";
// import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
// import Navbar from "./components/navbar/Navbar";
// import Portfolio from "./components/portfolio/Portfolio";
// import Qualification from "./components/qualification/Qualification";
// import ScrollUp from "./components/scrollup/ScrollUp";
// import Skills from "./components/skills/Skills";
// import { ThemeContext } from "./context";

// function App() {
//   // For Dark Theme
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div style={{ backgroundColor: darkMode ? "#222" : "" }}>
//       <Navbar />
//       <Toggle />
//       <main className="main">
//         <Home />
//         <About />
//         <Skills />
//         <Qualification />
//         <Portfolio />
//         <Contact />
//       </main>
//       <Footer />
//       <ScrollUp />
//     </div>
//   );
// }

// export default App;
import React, { useContext, Suspense, lazy } from "react";
import "./App.css";
import { ThemeContext } from "./context";

// Lazy load components
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Toggle = lazy(() => import("./components/darkthemetoggle/Toggle"));
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Qualification = lazy(() =>
  import("./components/qualification/Qualification")
);
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ScrollUp = lazy(() => import("./components/scrollup/ScrollUp"));

function App() {
  // For Dark Theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "" }}>
      <Suspense
        fallback={
          <div className="loader_container">
            <div class="loader"></div>
          </div>
        }
      >
        <Navbar />
        <Toggle />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </Suspense>
    </div>
  );
}

export default App;
