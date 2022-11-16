"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_service_1 = require("../services/dashboard.service");
class DashboardController {
    constructor(dashboardService = new dashboard_service_1.default) {
        this.dashboardService = dashboardService;
        this.get = async (req, res) => {
            try {
                const { username } = req.headers;
                const usernameParsed = String(username);
                const user = await this.dashboardService.get(usernameParsed);
                return res.status(200).json(user);
            }
            catch (e) {
                console.log(e);
            }
        };
    }
}
exports.default = DashboardController;
//# sourceMappingURL=dashboard.controller.js.map