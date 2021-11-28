import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = () => {
  const error = useSelector((state) => state.details.error);
  const forecast = useSelector((state) => state.details.data);
  return (
    <div className="details-square">
      { error === '' ? (
        <div>
          <div>
            <Link className="link" to="/">← Back</Link>
            <h4>{forecast[2]}</h4>
          </div>
          <br />
          <br />
          <div>
            <p>{forecast[0]}</p>
            <p className="temprature">
              {forecast[1]}
              °C
            </p>
          </div>
        </div>
      ) : (
        <h1>
          {error}
          Error
        </h1>
      )}
    </div>
  );
};

export default Details;
