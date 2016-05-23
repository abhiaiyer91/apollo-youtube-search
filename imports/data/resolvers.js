import { Youtube } from '/imports/data/youtube-connector';

const resolvers = {
  Query: {
    async data(root, { keywords }) {
      return Youtube.search(keywords);
    }
  }
};

export default resolvers;
