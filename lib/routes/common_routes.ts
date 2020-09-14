import { Application, Request, Response } from "express";

export class CommonRoutes {
  public route(app: Application) {
    // ALL methods request.
    app.all("*", (req: Request, res: Response) => {
      res.status(404).send("ERROR 404 - URL not found!");
    });
  }
}
