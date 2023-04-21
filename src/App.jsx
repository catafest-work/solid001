// import logo from './logo.svg';
// import styles from './App.module.css';
// step 1 
import { createSignal } from 'solid-js';

// for Solid Router features
import { Routes, Route } from "@solidjs/router"

import banner from './assets/catafest_banner.jpg';
//import Card from './components/Card';

// import Home page from './components/Home
import Home from './pages/Home';

// 
import Cart from './pages/Cart';
import Product from './pages/Product';


function App() { // PascalCase App constructor
  // other javascripts
  const [darkTheme,setDarkTheme] = createSignal(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }
  //
  return (
    // initial source code from default project 
    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     {/* <img src={logo} class={styles.logo} alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>
    // step 1 

    //<>
    <div class="container m-auto">
      {/* class={styles.header} if you use this and don't import then not works */}
    <header 
      class = "m-4 p-2 text-xl flex items-center gap-4"
      classList={{"bg-neutral-900":darkTheme(), "text-white":darkTheme()}}
    > 
    <span 
      class="material-symbols-outlined upload-icon"
      onClick={toggleTheme}
    >
    light_mode
    </span>
      <h1>catafest</h1>
      <a href='/' >Home</a>
      <a href='/cart' >Cart</a>
    </header>

    <img class="rounded-md" src={banner} alt="site catafest banner" />
    
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={Product} />
    </Routes>

    </div>
    //</>
  );
}
export default App;
