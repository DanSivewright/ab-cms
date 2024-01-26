import type { Block } from "payload/types";
import { backgroundColor } from "../fields/background-color";

export const MediaBlock: Block = {
  slug: "media-block",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "position",
          type: "select",
          defaultValue: "default",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Fullscreen",
              value: "fullscreen",
            },
          ],
        },
        {
          name: "ratio",
          type: "select",
          label: "Aspect Ratio",
          defaultValue: "aspect-auto",
          options: [
            {
              label: "16:9 (Video)",
              value: "aspect-video",
            },
            {
              label: "1:1 (Square)",
              value: "aspect-square",
            },
            {
              label: "Auto",
              value: "aspect-auto",
            },
          ],
        },
      ],
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
