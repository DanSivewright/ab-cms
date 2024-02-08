import { CollectionConfig } from "payload/types";

export type SizeDetails = {
  filename: string;
  width: number;
  height: number;
};

export type Size = "card" | "square" | "portrait" | "feature";

export type Type = {
  filename: string;
  alt: string;
  mimeType: string;
  sizes: {
    card?: SizeDetails;
    square?: SizeDetails;
    portrait?: SizeDetails;
    feature?: SizeDetails;
  };
};

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true,
    create: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },
  admin: {
    useAsTitle: "filename",
  },
  upload: {
    disableLocalStorage: true,
    adminThumbnail: "card",
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 480,
      },
      {
        name: "portrait",
        width: 768,
        height: 1024,
      },
      {
        name: "square",
        width: 1200,
        height: 1200,
      },
      {
        name: "feature",
        width: 1024,
        height: 576,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};
