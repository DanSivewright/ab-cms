import { slateEditor } from "@payloadcms/richtext-slate";
import type { Block } from "payload/types";
import { LinkGroup } from "../../fields/link-group";

export const ShortHeadingHero: Block = {
  slug: "short-heading-hero",
  labels: {
    singular: "Short Heading Hero Block",
    plural: "Short Heading Hero Blocks",
  },
  imageURL: "https://utfs.io/f/a351e92d-4cf9-428c-b93c-84d90dd10f95-w9pi7e.png",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "body",
      label: "Body",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: [],
        },
      }),
    },
    LinkGroup({}),
    //   Link,
  ],
};
