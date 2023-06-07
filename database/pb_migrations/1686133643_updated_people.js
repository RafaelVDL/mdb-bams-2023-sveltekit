migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q95wg8ttf52uo5t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y1lukhf1",
    "name": "firstname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 60,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ow56xszo",
    "name": "middlename",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 60,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxqwtmqb",
    "name": "lastname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 60,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q95wg8ttf52uo5t")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y1lukhf1",
    "name": "firstname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ow56xszo",
    "name": "middlename",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxqwtmqb",
    "name": "lastname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
