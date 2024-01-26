import type { Block } from "payload/types";
import { backgroundColor } from "../fields/background-color";
import { LinkGroup } from "../fields/link-group";
import { slateEditor } from "@payloadcms/richtext-slate";

export const CTA: Block = {
  slug: "cta",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    {
      name: "invertBackground",
      type: "checkbox",
      defaultValue: false,
    }, // backgroundColor({ overrides: { name: "ctaBackgroundColor" } }),
    {
      name: "richText",
      label: "Rich Text",
      type: "richText",
      required: true,
      editor: slateEditor({
        admin: {
          elements: ["blockquote", "h2", "h3", "h4", "h5", "h6", "link"],
          leaves: ["bold", "italic", "underline"],
        },
      }),
    },
    LinkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
};
