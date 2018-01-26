import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <nav>
        <a href="/search">Search</a>
        <a href="/fav">Favorites</a>
        <style jsx>{`
          nav a {
            display: block;
            text-decoration: none;
          }
        `}</style>
      </nav>
    )
  }

}

