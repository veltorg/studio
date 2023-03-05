import { HiNewspaper } from 'react-icons/hi2';
import { defineType } from 'sanity';

// Schema is derived from https://schema.org/Article

export default defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  icon: HiNewspaper,
  fields: [
    {
      name: 'image',
      type: 'featureImage',
    },
    {
      name: 'headline',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'headline',
        maxLength: 96,
      },
    },
    {
      name: 'articleBody',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'author',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
  ],
});
