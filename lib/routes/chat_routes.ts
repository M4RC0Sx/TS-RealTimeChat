import { Application, Request, Response } from "express";

import * as path from "path";

export class ChatRoutes {
  public route(app: Application) {
    // GET request.
    app.get("/", (req: Request, res: Response) => {
      res
        .status(200)
        .sendFile(path.join(__dirname + "/../../templates/index.html"));
    });
  }
}
