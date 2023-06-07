migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT id, (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS name FROM people"
  }

  // remove
  collection.schema.removeField("prluyfyi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ppudbtqu",
    "name": "name",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT id, photo as fullname from people"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prluyfyi",
    "name": "fullname",
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

  // remove
  collection.schema.removeField("ppudbtqu")

  return dao.saveCollection(collection)
})
