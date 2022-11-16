import { Request, Response } from 'express';
import Users from '../database/models/Users';
import DashboardService from '../services/dashboard.service';

export default class DashboardController {
  constructor(private dashboardService = new DashboardService) { }

  public get = async (req: Request, res: Response) => {
    try {
      const { username } = req.headers;
      const usernameParsed = String(username)
      const user = await this.dashboardService.get(usernameParsed);

      return res.status(200).json(user);

    } catch (e) {
      console.log(e);
    }
  }
}