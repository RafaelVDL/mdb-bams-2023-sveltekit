migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q95wg8ttf52uo5t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "comsqyvn",
    "name": "photo",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q95wg8ttf52uo5t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "comsqyvn",
    "name": "photo",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/bmp"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
