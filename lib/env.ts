enum Envs {
  local_env = "local",
  dev_env = "dev",
  prod_env = "prod",
}

class Env {
  private env: String;

  constructor(env: String) {
    this.env = env;
  }

  getHostName(): string {
    switch (this.env) {
      case Envs.dev_env:
        return "YOUR_DEV_ENV_IP";
      case Envs.prod_env:
        return "YOUR_PROD_ENV_IP";
      default:
        return "localhost";
    }
  }

  getPort(): number {
    switch (this.env) {
      case Envs.dev_env:
        return 8081;
      case Envs.prod_env:
        return 8000;
      default:
        return 3000;
    }
  }
}

export default new Env(Envs.local_env);
