import { CollectionConfig } from "payload/types";
import { slug } from "../fields/slug";

export const Events: CollectionConfig = {
  slug: "events",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    slug,
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
  ],
};
