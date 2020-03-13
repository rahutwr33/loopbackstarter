import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemDataSource} from '../datasources';
import {Role} from '../models';

export class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id> {
  constructor(@inject('datasources.mem') dataSource: MemDataSource) {
    super(Role, dataSource);
  }
}
