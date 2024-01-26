import type { Block, Field } from "payload/types";

import { Link } from "../fields/links";
import { slateEditor } from "@payloadcms/richtext-slate";

const columnFields: Field[] = [
  {
    name: "size",
    type: "select",
    defaultValue: "oneThird",
    options: [
      {
        value: "oneThird",
        label: "One Third",
      },
      {
        value: "half",
        label: "Half",
      },
      {
        value: "twoThirds",
        label: "Two Thirds",
      },
      {
        value: "full",
        label: "Full",
      },
    ],
  },
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
  {
    name: "enableLink",
    type: "checkbox",
  },
  Link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
];

export const ContentBlock: Block = {
  slug: "content",
  fields: [
    {
      name: "invertBackground",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "columns",
      type: "array",
      fields: columnFields,
    },
  ],
};
