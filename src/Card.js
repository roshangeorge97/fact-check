import Cards from "./Cards";
import Header from "./Header.js";

export default function Card() {
  function color() {}

  return (
    <div className="Container">
      <div className="sidebar">
        <h3>Popular Categories</h3>
        <div>
          <button>Politics</button>
        </div>
        <div>
          <button>Crypto</button>
        </div>
        <div>
          <button>Entertainment</button>
        </div>
        <div>
          <button>Economics</button>
        </div>
        <div>
          <button>Sports</button>
        </div>
        <div>
          <button>Medical</button>
        </div>
        <hr className="line" />
        <div>
          <button onClick="color">Filters</button>
        </div>
      </div>

      <div className="table">
        <Header />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
