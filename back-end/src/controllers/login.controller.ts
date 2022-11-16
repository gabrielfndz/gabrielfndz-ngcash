import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import Token from '../helpers/CreateToken';
import Users from '../database/models/Users';

export default class LoginController {
  constructor(private loginService = new LoginService) { }

  public login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await this.loginService.login(username, password);
      const createdToken = Token.generateToken(username);

      return res.status(200).json({ 
        id: user?.id,
        username: user?.username,
        accountId: user?.accountId,
        token: createdToken 
      });

    } catch (e) {
      console.log(e);
    }
  }

  public create = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const findUser = await Users.findOne({
        where: { username }
      })
      if(findUser) {
        return res.status(400).json({ message: 'Usuário já cadastrado'})
      }
      const user = await this.loginService.create(username, password);
      return res.status(200).json(user);

    } catch (e) {
      console.log(e);
    }
  }
}