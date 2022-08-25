require("dotenv").config();
import { Configs } from "./Configs";

export const ConfigsEnvironment: Configs = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV || "development",

  routerPath: process.env.ROUTER_PATH || "/api/v1",

  mysqlHost: process.env.MYSQL_HOST || "localhost",
  mysqlPort: Number(process.env.MYSQL_PORT) || 3306,
  mysqlUser: process.env.MYSQL_USER || "metacoders",
  mysqlPassword: process.env.MYSQL_PASSWORD || "metacoders123",
  mysqlUrl: process.env.DATABASE_URL || "mysql://metacoders:metacoders123@localhost:3306/metacourses",
};