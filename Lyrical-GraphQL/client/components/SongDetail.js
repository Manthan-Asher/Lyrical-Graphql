import React, {Component} from "react";
import {compose, graphql} from "react-apollo";

import getSong from "../queries/getSong";
import {Link} from "react-router-dom";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    const {song} = this.props.data;

    if (!song) {
      return <div></div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.match.params.id} />
      </div>
    );
  }
}

export default graphql(getSong, {
  options: (props) => ({variables: {id: props.match.params.id}}),
})(SongDetail);
