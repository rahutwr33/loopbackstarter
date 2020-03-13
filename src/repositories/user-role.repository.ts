import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemDataSource} from '../datasources';
import {UserRole} from '../models';

export class UserRoleRepository extends DefaultCrudRepository<UserRole, typeof UserRole.prototype.id> {
  constructor(@inject('datasources.mem') dataSource: MemDataSource) {
    super(UserRole, dataSource);
  }
}
