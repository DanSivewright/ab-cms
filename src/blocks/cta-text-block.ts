import { Block } from "payload/types";
import { Link } from "../fields/links";

export const CTATextBlock: Block = {
  slug: "cta-text-block",
  labels: {
    singular: "CTA Text Block",
    plural: "CTA Text Blocks",
  },
  imageURL:
    "https://utfs.io/f/eba492c2-788a-4a90-b80f-ce42fae79457-e99e7q.jpeg",
  fields: [
    {
      name: "text",
      label: "Text",
      type: "textarea",
      required: true,
    },
    Link(),
  ],
};
