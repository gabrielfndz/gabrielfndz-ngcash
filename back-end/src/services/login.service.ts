import Users from '../database/models/Users';
import Accounts from '../database/models/Accounts';

export default class LoginService {
  private _user = Users;
  private _accounts = Accounts;

  public async login(username: string, password: string) {
    const user = await this._user.findOne({
      where: { username },
    })

    if (!user) return null;

    return user;
  }

  public async create(username: string, password: string) {

    const createAccount = await  this._accounts.create({ 
      balance: 100,
    });

    const created = await this._user.findOrCreate({
      where: { username },
      defaults: {
        username,
        password,
      },
    });

    const updatedUser = await this._user.update({ accountId: createAccount.id }, {
      where: { username }
    })

    const getUpdatedUser = await this._user.findOne({
      where: { username }
    })

    if (!getUpdatedUser) return null;

    return getUpdatedUser;
  }
}