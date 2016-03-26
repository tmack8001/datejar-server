import bookshelf from '../database/connection';
import ActivityImage from './activity_image';

export default bookshelf.Model.extend({
  tableName: 'activities',
  hasTimestamps: ['created_at', 'updated_at'],
  images: function () {
    return this.hasMany(ActivityImage, 'activity_id');
  }
});
