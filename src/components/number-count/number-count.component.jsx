import React from "react";
import CountUp from "react-countup";

import COUNT_DATA from "../../assets/data/count.data";

const NumberCount = () => {
  const { col_left, col_right } = COUNT_DATA;
  return (
    <div className="d-md-flex mb-3">
      <div className="col-left">
        {col_left.map((data) => (
          <div className={data.item} key={data.id}>
            <div className="counter-box bg-s1 d-flex justify-content-center align-items-center">
              <div className="inner">
                <CountUp className="numb-count" start={0} end={data.numberto} />
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-right">
        {col_right.map((data) => (
          <div className={data.item} key={data.id}>
            <div className="counter-box bg-s1 d-flex justify-content-center align-items-center">
              <div className="inner">
                <CountUp className="numb-count" start={0} end={data.numberto} />
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCount;
