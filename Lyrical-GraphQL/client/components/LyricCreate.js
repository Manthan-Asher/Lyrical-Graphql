import React, {Component} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {content: ""};
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    });

    this.setState({content: ""});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="">Add a Lyric</label>
          <input
            type="text"
            value={this.state.content}
            onChange={(e) => this.setState({content: e.target.value})}
          />
          <button type="submit" className="btn-large green right">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($songId: ID, $content: String) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
