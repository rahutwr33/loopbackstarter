import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemDataSource} from '../datasources';
import {User} from '../models';

export class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
  constructor(@inject('datasources.mem') dataSource: MemDataSource) {
    super(User, dataSource);
  }
}
