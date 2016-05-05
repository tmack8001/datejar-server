import bookshelf from '../database/connection';
import path from 'path';

export default bookshelf.Model.extend({
  tableName: 'activity_images',
  hasTimestamps: ['created_at', 'updated_at'],
  uri: function (obj) {
    var uri = obj.get('uri');
    if (uri != null) {
      return uri;
    }
    // TODO: replace with publically available hostname and port number
    return path.join('http://192.168.99.100:8888',
      obj.get('absolute_filepath'));
  }
});
