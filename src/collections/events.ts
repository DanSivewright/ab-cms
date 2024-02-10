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
import { Event } from "payload/generated-types";
import { stripe } from "../stripe";

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
  hooks: {
    beforeChange: [
      async (args) => {
        if (args.operation === "create") {
          const data = args.data as Event;

          const createdProduct = await stripe.products.create({
            name: data.title,
            default_price_data: {
              currency: "ZAR",
              unit_amount: Math.round(100 * 100),
            },
          });

          const updated: Event = {
            ...data,
            stripeId: createdProduct.id,
            priceId: createdProduct.default_price as string,
          };

          return updated;
        } else if (args.operation === "update") {
          const data = args.data as Event;

          let updatedProduct;
          if (!data.stripeId || !data.priceId) {
            updatedProduct = await stripe.products.create({
              name: data.title,
              default_price_data: {
                currency: "ZAR",
                unit_amount: Math.round(100 * 100),
              },
            });
          } else {
            updatedProduct = await stripe.products.update(data.stripeId!, {
              name: data.title,
              default_price: data.priceId!,
            });
          }

          const updated: Event = {
            ...data,
            stripeId: updatedProduct.id,
            priceId: updatedProduct.default_price as string,
          };

          return updated;
        }
      },
    ],
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
      name: "priceId",
      type: "text",
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
    {
      name: "stripeId",
      type: "text",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
    {
      name: "private",
      label: "Private",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
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
