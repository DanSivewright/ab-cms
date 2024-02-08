import type { Block } from "payload/types";

import { slateEditor } from "@payloadcms/richtext-slate";

export const Archive: Block = {
  slug: "archive",
  labels: {
    singular: "Archive",
    plural: "Archives",
  },
  fields: [
    {
      name: "richText",
      label: "Rich Text",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["blockquote", "h1", "h2", "h3", "h4", "h5", "h6"],
          leaves: ["bold", "italic", "underline"],
        },
      }),
    },
    {
      name: "populateBy",
      type: "select",
      defaultValue: "collection",
      options: [
        {
          label: "Collection",
          value: "collection",
        },
        {
          label: "Individual Selection",
          value: "selection",
        },
      ],
    },
    {
      type: "select",
      name: "relationTo",
      label: "Collections To Show",
      defaultValue: "events",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
      options: [
        {
          label: "Events",
          value: "events",
        },
        {
          label: "Media",
          value: "media",
        },
      ],
    },
    {
      type: "relationship",
      name: "categories",
      label: "Categories To Show",
      relationTo: "categories",
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      type: "number",
      name: "limit",
      label: "Limit",
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
        step: 1,
      },
    },
    {
      type: "relationship",
      name: "selectedDocs",
      label: "Selection",
      relationTo: ["events", "media"],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "selection",
      },
    },
    {
      type: "relationship",
      name: "populatedDocs",
      label: "Populated Docs",
      relationTo: ["events", "media"],
      hasMany: true,
      admin: {
        disabled: true,
        description: "This field is auto-populated after-read",
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      type: "number",
      name: "populatedDocsTotal",
      label: "Populated Docs Total",
      admin: {
        step: 1,
        disabled: true,
        description: "This field is auto-populated after-read",
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
    },
    {
      name: "renderAs",
      label: "Render As",
      type: "select",
      defaultValue: "grid",
      options: [
        {
          label: "Grid",
          value: "grid",
        },
        {
          label: "List",
          value: "list",
        },
        {
          label: "Horizontal List Scroll",
          value: "hscroll",
        },
        {
          label: "Bento",
          value: "bento",
        },
      ],
    },
  ],
};
