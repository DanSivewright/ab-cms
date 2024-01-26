import type { ArrayField } from 'payload/dist/fields/config/types'
import type { Field } from 'payload/types'

import deepMerge from '../utilities/deep-merge'
import { Link, LinkAppearances } from './links'
// import type { LinkAppearances } from './link'
// import link from './link'

type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>
  appearances?: LinkAppearances[] | false
}) => Field

export const LinkGroup: LinkGroupType = ({ overrides = {}, appearances } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    fields: [
      Link({
        appearances,
      }),
    ],
  }

  return deepMerge(generatedLinkGroup, overrides)
}
