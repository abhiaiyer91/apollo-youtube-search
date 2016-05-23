export default schema = [`
  type SearchResults {
    description: String,
    title: String,
    videoId: String
  }
  type Query {
    data(keywords: String): [SearchResults]
  }
  schema {
    query: Query
  }
`];
