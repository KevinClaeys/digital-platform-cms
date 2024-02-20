import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import seo from "@payloadcms/plugin-seo";
import {Users} from "./collections/Users";
import PolymerFamilies from "./collections/polymer-families";
import PolymerGroups from "./collections/polymer-groups";
import {Pages} from "./collections/Pages";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Nederlands',
        code: 'nl',
      },
      {
        label: 'Arabic',
        code: 'ar',
        rtl: true,
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  editor: slateEditor({}),
  collections: [Users, PolymerFamilies, PolymerGroups, Pages],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seo({
      collections: [
        'pages',
      ]
    })],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    }
  }),
})
