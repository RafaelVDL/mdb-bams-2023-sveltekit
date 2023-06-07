migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT id, photo, (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS fullname, profession, status FROM people"
  }

  // remove
  collection.schema.removeField("ppudbtqu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5psduwak",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "papb62w4",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mayriiym",
    "name": "profession",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihj9ykoc",
    "name": "status",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Active",
        "Inactive"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT id, (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS name FROM people"
  }

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

  // remove
  collection.schema.removeField("5psduwak")

  // remove
  collection.schema.removeField("papb62w4")

  // remove
  collection.schema.removeField("mayriiym")

  // remove
  collection.schema.removeField("ihj9ykoc")

  return dao.saveCollection(collection)
})
