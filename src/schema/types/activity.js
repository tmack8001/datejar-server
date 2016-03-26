/* @flow */
import BookshelfType from 'graphql-bookshelf';
import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';

var ImageType = require('./image');

export default new GraphQLObjectType(BookshelfType({
  name: 'Activity',
  description: 'An activity idea for a date night',
  fields: function () {
    return {
      id: this.attr({
        type: new GraphQLNonNull(GraphQLString),
        description: 'The id of the activity'
      }),
      title: this.attr({
        type: GraphQLString,
        description: 'The title of the activity'
      }),
      subtitle: this.attr({
        type: GraphQLString,
        description: 'The subtitle of the activity'
      }),
      images: this.hasMany({
        type: new GraphQLList(ImageType),
        description: 'Images associated with this activity'
      })
    };
  }
}));
