/* @flow */
import {
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

import ActivityType from './types/activity';
import Activity from '../models/activity';

/**
 * The GraphQL type equivalent of the Root resource
 */
var RootType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    activity: {
      type: ActivityType,
      args: {
        id: {
          type: GraphQLString,
          description: 'ID of the current activity'
        }
      },
      description: 'The current activity',
      resolve: (_, args) => {
        return Activity.where('id', args.id).fetch();
      }
    },
    activities: {
      type: new GraphQLList(ActivityType),
      resolve: async () => {
        var objects = await Activity.fetchAll({
          limit: 10, offset: 0
        }).then(function(collection) {
          return collection.models;
        });
        console.log(objects);
        return objects;
      }
    }
  })
});

export default new GraphQLSchema({query: RootType});
