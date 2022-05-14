import {Header} from '../components/Header'
import {Cards} from '../components/Cards'

function App() {
  return (
    <div>
      <section className="hero is-danger is-fullheight">
        <Header/>
        <div className="hero-body">
          <div className="container has-text-centered">
            <Cards/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
