migrate((app) => {
  let existing = null;
  try {
    existing = app.findCollectionByNameOrId('messages');
  } catch (err) {
    existing = null;
  }
  if (existing) return;

  const collection = new Collection({
    name: 'messages',
    type: 'base',
    listRule: null,
    viewRule: null,
    createRule: '',
    updateRule: null,
    deleteRule: null,
    fields: [
      { name: 'name', type: 'text', required: true, min: 2, max: 120 },
      { name: 'email', type: 'email', required: true },
      { name: 'subject', type: 'text', required: true, min: 2, max: 180 },
      { name: 'message', type: 'text', required: true, min: 8, max: 4000 },
    ],
  });

  app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId('messages');
    app.delete(collection);
  } catch (err) {
    // already removed
  }
});
