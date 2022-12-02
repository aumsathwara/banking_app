import React from 'react'
import styles from './style';
import { Navbar, Billing, Business, Clients, Footer, Hero} from './components';
// import billing from './components/billing';
// import business from './components/business';
// import hero from './components/hero';
// import clients from './components/clients';
// import footer from './components/footer';


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <Clients /> 
        <Footer /> 
      </div>
    </div>

  </div>
);

export default App