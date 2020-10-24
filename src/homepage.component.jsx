import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="menu-item">
          <div className="content">
            <h1>Chinese Cuisine</h1>
            <span className="subtitle">
              Sichuan? Cantonese? We have it all!
            </span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1>Indian Cuisine</h1>
            <span className="subtitle">
              Don't worry, not everything will burn your tongue!
            </span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1>Egyptian Cuisine</h1>
            <span className="subtitle">
              Discover this amazing mediteranean cuisine you've never tried
              before!
            </span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1>Indo/Malay Cuisine</h1>
            <span className="subtitle">
              Try out these under-appreciated East-Asian ingredients.
            </span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1>English Classic</h1>
            <span className="subtitle">
              You don't know Blighty until you've had all these!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
