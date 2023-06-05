import logo from "./assets/img/main-gif.gif";
import text from "./assets/img/text.png";

function App() {
  return (
    <div className="main bg-base">
      <section className="section-base">
        <img src={logo} alt="" className="w-flex" />
        <img src={text} alt="" className="w-text" />
        <p>
          A World of <b>Elephant Hugs</b> and <b>Bunny Smiles!</b>
        </p>
      </section>
      <article className="bottom-caption relative">
        <p>Coming Soon</p>
      </article>
    </div>
  );
}

export default App;
