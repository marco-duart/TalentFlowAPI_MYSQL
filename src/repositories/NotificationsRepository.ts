import { Model } from 'mongoose';
import BaseRepository from './Repository';
import { INotifications } from '../models/Notification';

class NotificationsRepository extends BaseRepository<INotifications> {
  constructor(model: Model<INotifications>) {
    super(model);
  }

}

export default NotificationsRepository;
