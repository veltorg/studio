import { HiUserCircle } from 'react-icons/hi2';
import { defineType } from 'sanity';

export default defineType({
  name: 'person',
  type: 'document',
  icon: HiUserCircle,
  title: 'Person',
  preview: {
    select: {
      givenName: 'givenName',
      familyName: 'familyName',
      media: 'image',
    },
    prepare({ givenName, familyName, media }) {
      return {
        title: `${givenName} ${familyName}`,
        media,
      };
    },
  },
  fields: [
    {
      name: 'givenName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'familyName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      validation: Rule => Rule.email().required(),
    },
    {
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'address',
      type: 'address',
    },
    {
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
});
