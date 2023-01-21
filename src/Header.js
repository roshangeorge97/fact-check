export default function Header() {
  return (
    <div className="head-cont">
      <div className="tit-sear">
        <div>
          <h2>Popular Markets</h2>
        </div>
        <div>
          <input type="search" placeholder="Search markets" />
        </div>
      </div>
      <div className="tit-down">
        <div>
          <button className="open">OPEN</button>
        </div>
        <div>
          <button className="report">IN REPORTING</button>
        </div>
        <div>
          <button className="resolve">RESOLVED</button>
        </div>
        <div>
          <button>VIEW</button>
        </div>
        <div>
          <label className="label">SORT BY</label> <select />
        </div>
        <div>
          <button>RELOAD</button>
        </div>
      </div>
    </div>
  );
}
