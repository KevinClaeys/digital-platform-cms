import { CollectionConfig } from 'payload/types'

const PolymerGroups: CollectionConfig = {
    slug: 'polymer-groups',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'family',
            type: 'relationship',
            relationTo: 'polymer-families',
            required: true,
        },
    ],
}

export default PolymerGroups
