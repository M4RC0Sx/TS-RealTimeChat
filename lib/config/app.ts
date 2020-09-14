import * as express from "express";

import { ChatRoutes } from "../routes/chat_routes";
import { CommonRoutes } from "../routes/common_routes";

class App {
  public app: express.Application;

  private chatRoutes: ChatRoutes = new ChatRoutes();
  private commonRoutes: CommonRoutes = new CommonRoutes();

  constructor() {
    this.app = express(); // Express App instance.

    this.chatRoutes.route(this.app); // Main chat app routes.
    // Common routes always at the end of all routes!!
    this.commonRoutes.route(this.app); // All default routes.
  }
}

export default new App().app;
