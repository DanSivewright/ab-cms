import path from "path";

import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { Categories } from "./collections/categories";
import { Events } from "./collections/events";
import { Media } from "./collections/media";
import { Pages } from "./collections/pages";
import { Users } from "./collections/users";
import { Menu } from "./globals/menu";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  rateLimit: {
    trustProxy: true,
  },
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  csrf: [
    "http://localhost:3000", //
  ],
  cors: ["http://localhost:3000"],
  editor: slateEditor({}),
  collections: [
    Users, //
    Pages,
    Events,
    Categories,
    Media,
  ],
  globals: [Menu],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
});
