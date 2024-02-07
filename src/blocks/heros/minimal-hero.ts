import { Block } from "payload/types";

export const MinimalHero: Block = {
  slug: "minimal",
  labels: {
    singular: "Minimal Hero Block",
    plural: "Minimal Hero Blocks",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Image (Optional)",
      type: "upload",
      relationTo: "media",
    },
  ],
};
