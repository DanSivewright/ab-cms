import { GlobalConfig } from "payload/types";
import { Link } from "../fields/links";

export const Menu: GlobalConfig = {
  slug: "menu",
  label: "Menu",
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "nav",
      label: "Navigation",
      type: "array",
      labels: {
        singular: "Link",
        plural: "Links",
      },
      fields: [
        Link({ appearances: false})
      ],
    },
  ],
};
