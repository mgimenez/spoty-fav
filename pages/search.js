import React from 'react'
import Router from 'next/router'
import Search from '../components/Search';

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };

    this.getTrack = this.getTrack.bind(this);
  }

  componentDidMount() {
    // this.getTrack();
  }

  getTrack(q) {
    fetch('http://localhost:3000/get?q='+ q)
      .then((results) => {
        return results.json();
      }).then((data) => {
        this.setState({ songs: data.body.tracks.items });
      })
  }

  render () {
    const songs = this.state.songs.map((item, i) => (
      <div key={i}>
        <a target="_blank" href={item.external_urls.spotify}>{item.name}</a>
      </div>
    ));

    return (
      <div>
        <Search getTrack={this.getTrack} />
        {songs}
      </div>
    )
  }
}

