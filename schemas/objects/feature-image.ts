import { defineType } from 'sanity';

export default defineType({
  title: 'Feature Image',
  name: 'featureImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
  ],
});
