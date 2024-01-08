import * as express from "express";
import criminalsRouter from "./criminals/criminals.route";
const app: express.Express = express();
const port: number = 8000;

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }
  private setRoute() {
    app.use(criminalsRouter);
  }
  private setMiddleware() {
    app.use((req, res, next) => {
      console.log(req.rawHeaders);
      next();
    });
    app.use(express.json());

    app.get("/:id", (req, res, next) => {
      console.log(req.params.id + "는 멋진사람입니다");
      next();
    });

    this.setRoute();

    app.use((req, res, next) => {
      res.send({ error: "404 error not found" });
    });
  }
  public listen() {
    this.setMiddleware();
    app.listen(port, () => {
      console.log("Example app listening at http://localhost:{port}");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
