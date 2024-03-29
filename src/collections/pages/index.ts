import { CollectionConfig } from "payload/types";
import { slug } from "../../fields/slug";
import { ShortHeadingHero } from "../../blocks/heros/short-hero";
import { ImageHero } from "../../blocks/heros/image-hero";
import { ContentBlock } from "../../blocks/content-block";
import { MediaBlock } from "../../blocks/media-block";
import { CTA } from "../../blocks/cta";
import { Archive } from "../../blocks/archive";
import { MinimalHero } from "../../blocks/heros/minimal-hero";
import { BentoBlock } from "../../blocks/bento-block";
import { CTATextBlock } from "../../blocks/cta-text-block";
import { CTAImageBlock } from "../../blocks/cta-image-block";
import { revaildateTag } from "../../hooks/revalidate-tag";

export type PageType = {
  name: string;
  title: string;
};

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  hooks: {
    afterChange: [(opts) => revaildateTag({ ...opts, key: "pages" })],
  },
  fields: [
    slug,
    {
      admin: {
        position: "sidebar",
      },
      name: "private",
      label: "Private",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "hero",
      type: "blocks",
      maxRows: 1,
      blocks: [ShortHeadingHero, ImageHero, MinimalHero],
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
};
