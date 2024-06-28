import React, { CSSProperties } from 'react';

const HomePage = () => {



  return (
    <>
      <div>
        <h1>Top 4 carosello</h1>
      </div>
      <div className="row" style={styleSheet.row}>
        <label>Location</label>
        <div className="location-container" style={styleSheet.locationContainer}>
          <div style={styleSheet.locationDiv}>
            <a href='/ville'>
              <h1>Ville</h1>
            </a>
          </div>
          <div style={styleSheet.locationDiv}>
          <a href='/sale'>
              <h1>Sale</h1>
            </a>
          </div>
          <div style={styleSheet.locationDiv}>
          <a href='/dimore'>
              <h1>Dimore</h1>
            </a>
          </div>
          <div style={styleSheet.locationDiv}>
          <a href='/catering'>
              <h1>Catering</h1>
            </a>
          </div>
        </div>
      </div>
      <h2>Info</h2>
      <div>
        <footer>
          <h2>Questo è il footer</h2>
        </footer>
      </div>
    </>
  );
}

export default HomePage;

const styleSheet: { [key: string]: CSSProperties } = {
  row: {
    display: 'flex',
    flexDirection: 'column'
  },
  locationContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  locationDiv: {
    margin: '0 10px'
  }
};