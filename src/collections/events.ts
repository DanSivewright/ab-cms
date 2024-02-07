import { CollectionConfig } from "payload/types";
import { slug } from "../fields/slug";
import { ContentBlock } from "../blocks/content-block";
import { MediaBlock } from "../blocks/media-block";
import { Archive } from "../blocks/archive";
import { CTA } from "../blocks/cta";
import { ImageHero } from "../blocks/heros/image-hero";
import { ShortHeadingHero } from "../blocks/heros/short-hero";
import { CTATextBlock } from "../blocks/cta-text-block";
import { CTAImageBlock } from "../blocks/cta-image-block";
import { MinimalHero } from "../blocks/heros/minimal-hero";

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
      type: "tabs",
      tabs: [
        {
          name: "details",
          fields: [
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
          ],
        },
        {
          name: "content",
          fields: [
            {
              name: "hero",
              type: "blocks",
              maxRows: 1,
              blocks: [ShortHeadingHero, ImageHero, MinimalHero],
            },
            {
              name: "description",
              label: "Description",
              type: "richText",
            },
            {
              name: "layout",
              type: "blocks",
              blocks: [
                ContentBlock,
                MediaBlock,
                CTA,
                Archive,
                ImageHero,
                ShortHeadingHero,
                CTATextBlock,
                CTAImageBlock,
              ],
            },
          ],
        },
      ],
    },
  ],
};
