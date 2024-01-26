import { slateEditor } from "@payloadcms/richtext-slate";
import { Block } from "payload/types";
import { CustomSelect } from "../../collections/pages/fields/custom-select";
import { LinkGroup } from "../../fields/link-group";

export const ImageHero: Block = {
  slug: "image-hero",
  labels: {
    singular: "Image Hero",
    plural: "Image Heros",
  },
  imageURL:
    "https://utfs.io/f/7c8b91b4-80be-4507-a851-1a4ca1a0af1c-qc06wa.29.24.png",
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
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "fullscreen",
      label: "Fullscreen",
      type: "checkbox",
      defaultValue: false,
    },
    CustomSelect,
  ],
};
