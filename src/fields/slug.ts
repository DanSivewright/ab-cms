import { Field } from "payload/types";
import { formatSlug } from "../utilities/format-slug";

export const slug: Field = {
  name: "slug",
  label: "Slug",
  type: "text",
  required: true,
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [formatSlug("title")],
  },
};
