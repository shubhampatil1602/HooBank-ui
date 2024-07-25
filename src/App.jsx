import styles from './style';
import {
  Navbar,
  Hero,
  Stats,
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Testimonials,
} from './components';

const App = () => {
  const { paddingX, flexCenter, boxWidth, flexStart } = styles;
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${paddingX} ${flexCenter}`}>
        <div className={`${boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${flexStart}`}>
        <div className={`${boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${paddingX} ${flexCenter}`}>
        <div className={`${boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
