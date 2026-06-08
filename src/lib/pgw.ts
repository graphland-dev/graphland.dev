import { GraphlandPGWClient } from "@graphland/pgw-merchant";

export const pgw = new GraphlandPGWClient({
  apiKey: process.env.GRAPHLAND_PGW_API_KEY ?? "",
  clientId: process.env.GRAPHLAND_PGW_CLIENT_ID ?? "",
});
