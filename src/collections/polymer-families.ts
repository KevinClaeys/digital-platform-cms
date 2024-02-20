import { CollectionConfig } from 'payload/types'

const PolymerFamilies: CollectionConfig = {
    slug: 'polymer-families',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            localized: true,
        },
    ],
}

export default PolymerFamilies
