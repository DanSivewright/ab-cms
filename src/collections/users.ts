import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "stripeCustomerId",
      label: "Stripe Customer ID",
      type: "text",
    },
    {
      name: "isActive",
      label: "Is Active",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "subscriptionId",
      label: "Subscription ID",
      type: "text",
    },
  ],
};

export { Users };
