import bookshelf from '../database/connection';

export default bookshelf.Model.extend({
  tableName: 'activity_images',
  hasTimestamps: ['created_at', 'updated_at']
});
