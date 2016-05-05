/* @flow */
import BookshelfType from 'graphql-bookshelf';
import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';

export default new GraphQLObjectType(BookshelfType({
  name: 'Image',
  description: 'Containing wrapper for defining an image',
  fields: function () {
    return {
      uri: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The uri to resolve the image',
        resolve: (obj) => {
          return obj.uri();
        }
      }
    };
  }
}));
