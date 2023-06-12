import Footer from "./components/Footer";
import video from "./assets/video/bnl_base.mp4"

function App() {
  return (
    <div className="main bg-base">
      <section className="section-base">
        <video className="w-flex" height={300} width={600} autoPlay={true} loop={true} playsInline>
          <source src={video} type="video/mp4"/>
        </video>
      </section>
      <article className="bottom-caption relative">
        <a href="http://www.candyfactorylk.com/">Coming Soon</a>
      </article>
      <Footer />
    </div>
  );
}

export default App;
