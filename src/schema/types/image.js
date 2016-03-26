/* @flow */
import path from 'path';
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
      uri: this.attr({
        type: new GraphQLNonNull(GraphQLString),
        description: 'The uri to resolve the image',
        resolve: (obj) => {
          return path.join('localhost:8888', obj);
        }
      })
    };
  }
}));
