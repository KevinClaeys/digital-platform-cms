import { Block } from "payload/types";
import { backgroundColor } from "../../fields/backgroundColor";
import linkGroup from "../../fields/linkGroup";

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    backgroundColor({ overrides: { name: 'ctaBackgroundColor' } }),
    {
      name: 'description',
      type: 'richText',
    },
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      }
    }),
  ]
}
