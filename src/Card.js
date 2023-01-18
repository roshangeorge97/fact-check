import Cards from "./Cards";

export default function Card() {
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
      </div>

      <div className="table">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
