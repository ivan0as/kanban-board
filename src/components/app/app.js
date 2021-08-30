import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import css from './app.module.css';

function App() {
  return (
    <div className={css.app}>
    <Header />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
