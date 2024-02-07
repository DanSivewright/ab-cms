import { Block } from "payload/types";
import { Link } from "../fields/links";
import { slateEditor } from "@payloadcms/richtext-slate";

export const CTAImageBlock: Block = {
  slug: "cta-image-block",
  labels: {
    singular: "CTA Image Block Block",
    plural: "CTA Image Block Blocks",
  },

  fields: [
    {
      name: "background",
      label: "Background",
      type: "select",
      required: true,
      options: [
        {
          label: "Bright Gray",
          value: "EDEDED",
        },
        {
          label: "Columbia Blue",
          value: "C9DAF0",
        },
        {
          label: "Big Foot Feet",
          value: "E08C5B",
        },
        {
          label: "Medium Sea Green",
          value: "41BD62",
        },
        {
          label: "Cornsilk",
          value: "FFF9D7",
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
          elements: ["h1", "h2", "h3", "h4", "h5", "h6"],
          leaves: ["bold", "italic", "underline"],
        },
      }),
    },
    // {
    //   name: "text",
    //   label: "Text",
    //   type: "textarea",
    //   required: true,
    // },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    Link(),
  ],
};
