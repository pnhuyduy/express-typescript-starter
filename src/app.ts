import 'dotenv/config';
import express, { Application } from 'express';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
  }

  getAppPort() {
    return this.app.get('port');
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.getAppPort());
    console.log(`server started at http://localhost:${this.app.get('port')}`);
  }
}
