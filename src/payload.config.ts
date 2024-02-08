import path from "path";
import imagekitPlugin from "payloadcms-plugin-imagekit";

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
  plugins: [
    //
    payloadCloud({
      storage: false,
    }),
    imagekitPlugin({
      config: {
        publicKey: process.env.PAYLOAD_PUBLIC_IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        endpoint: `https://ik.imagekit.io/${
          process.env.PAYLOADPUBLIC_IMAGEKIT_ID as string
        }/`,
      },
      collections: {
        media: {
          uploadOption: {
            folder: "uploads",
            extensions: [
              {
                name: "aws-auto-tagging",
                minConfidence: 80, // only tags with a confidence value higher than 80% will be attached
                maxTags: 10, // a maximum of 10 tags from aws will be attached
              },
              {
                name: "google-auto-tagging",
                minConfidence: 70, // only tags with a confidence value higher than 70% will be attached
                maxTags: 10, // a maximum of 10 tags from google will be attached
              },
            ],
          },
          savedProperties: ["url", "AITags"],
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
});
