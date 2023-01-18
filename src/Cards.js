export default function Cards() {
  return (
    <div className="table1">
      <div className="col1">
        <div className="row1">Total Dispute Stake</div>
        <div className="row3">0.0000</div>
      </div>
      <div className="col2">
        <div className="row1">
          CUSTOM MARKET - PROCEED WITH CAUTION OPEN REPORTING POLITICS/ US
          POLITICS/ BLACK LIVES MATTER
        </div>
        <div className="row2">
          Will Derek Chauvin be convicted of second-degree murder?
        </div>
        <div className="row3">
          <div className="box">
            <div className="up-box">
              <div>Yes</div>
              <div>25%</div>
            </div>
            <div className="down-box">
              <input type="range" />
            </div>
          </div>
          <div className="box">
            <div className="up-box">
              <div>No</div>
              <div>25%</div>
            </div>
            <div className="down-box">
              <input type="range" />
            </div>
          </div>
          <div className="box">
            <div className="up-box">
              <div>Invalid</div>
              <div>0.00%</div>
            </div>
            <div className="down-box">
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
