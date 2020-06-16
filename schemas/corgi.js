export default {
  name: 'corgi',
  title: 'Corgi',
  type: 'document',
  fields: [
    {
      name: 'corgiImage',
      title: 'Corgi',
      type: 'image',
    },
    {
      name: 'suggestedNames',
      title: 'Suggested Names',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'suggestedName',
          title: 'Suggested Name',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'votes',
              title: 'Votes',
              type: 'number',
            },
          ],
          preview: {
            select: {
              title: 'name',
              votes: 'votes',
            },
            prepare(selection) {
              return {
                ...selection,
                subtitle: `${selection.votes} votes`,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'corgiImage.asset.creditLine',
      media: 'corgiImage',
    },
  },
};
