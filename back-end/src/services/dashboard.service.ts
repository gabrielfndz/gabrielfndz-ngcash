import Users from '../database/models/Users';
import Accounts from '../database/models/Accounts';

export default class DashboardService {
  private _user = Users;

  public get = async (username: string) => {
    const user = await this._user.findOne({
      where: { username },
      include: {
        model: Accounts,
        as: 'Accounts'
      }
    }) 


    return user;

  }
}