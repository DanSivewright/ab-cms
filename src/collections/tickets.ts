import { CollectionConfig } from "payload/types";

export const Tickets: CollectionConfig = {
  slug: "tickets",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "paid",
      label: "Paid",
      type: "checkbox",
      required: true,
      defaultValue: false,
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "event",
      type: "relationship",
      relationTo: "events",
      required: true,
    },
  ],
};
