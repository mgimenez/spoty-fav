import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: this.props.query,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   query: this.props.query
    // });
    // const { query } = this.props;
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });

    this.props.getTrack(e.target.value);
  }

  render() {
    return (
      <form className='search'>
        <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
        <input type="submit" />
        <style jsx>{`
          input {
            // background-color: red;
          }
        `}</style>
      </form>
    )
  }

}

