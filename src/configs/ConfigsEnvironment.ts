require("dotenv").config();
import { Configs } from "./Configs";

export const ConfigsEnvironment: Configs = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV || "development",

  routerPathV1: process.env.ROUTER_PATH_V1 || "/api/v1",
  routerPathV2: process.env.ROUTER_PATH_V2 || "/api/v2",

  mysqlHost: process.env.MYSQL_HOST || "localhost",
  mysqlPort: Number(process.env.MYSQL_PORT) || 3306,
  mysqlUser: process.env.MYSQL_USER || "metacoders",
  mysqlPassword: process.env.MYSQL_PASSWORD || "metacoders123",
  mysqlUrl:
    process.env.DATABASE_URL ||
    "mysql://metacoders:metacoders123@localhost:3306/metacourses",

  paginationLimit: Number(process.env.PAGINATION_LIMIT) || 10,
};
