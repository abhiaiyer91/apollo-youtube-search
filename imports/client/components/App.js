import React from 'react';
import { connect } from 'react-apollo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keywords: "Apollo Stack"
    }
  }
  render() {
    const { youtubeVideos } = this.props;
    const videos = youtubeVideos && youtubeVideos.data;
    const searchCount = _.size(videos) || 0;
    let input;
    return (
      <div className="main-container">
        <h1>Youtube Searcher</h1>
        <div>
          <input
            type="text"
            ref={function (node) {
              input = node;
            }}
            onChange={(e) => {
              this.setState({keywords: e.target.value});
            }}
            className="form-control"
            placeholder="Enter search terms..."
          />
          <button
            className="btn btn-lg btn-success"
            onClick={() => {
            return youtubeVideos && youtubeVideos.refetch({keywords: this.state.keywords});
          }}
          >
            Submit
          </button>
        </div>
        <h2>We found {searchCount} results</h2>
        <div>
          {_.map(videos, ({ videoId, title, description }, index) => {
            return (
              <div className="vendor" key={index}>
                <p>{title}</p>
                <p>{description}</p>
                <iframe src={`http://www.youtube.com/embed/${videoId}`} frameborder="0"></iframe>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapQueriesToProps() {
  return {
    youtubeVideos: {
      query: gql`
          query getKeywords($keywords: String) {
            data(keywords: $keywords)  {
             title
             description
             videoId
            }
          }
        `,
      forceFetch: true,
      variables: {
        keywords: "Apollo Stack"
      }
    }
  }
}


export default connect({mapQueriesToProps})(App);
