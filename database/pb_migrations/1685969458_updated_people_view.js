migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS fullname, \n  profession, \n  strftime('%Y %m %d','now') as age,\n  gender, \n  status \nFROM people"
  }

  // remove
  collection.schema.removeField("7zuoukb2")

  // remove
  collection.schema.removeField("udz86pqm")

  // remove
  collection.schema.removeField("aegnt25r")

  // remove
  collection.schema.removeField("1kdejwof")

  // remove
  collection.schema.removeField("hanqlp1o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z47tcryc",
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
    "id": "eoxojqr1",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vg8trwxu",
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
    "id": "2hflll5i",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b0a02haq",
    "name": "gender",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Male",
        "Female"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x2fc6xhk",
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
    "query": "SELECT id, photo, (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS fullname, profession, gender, status FROM people"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7zuoukb2",
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
    "id": "udz86pqm",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aegnt25r",
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
    "id": "1kdejwof",
    "name": "gender",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Male",
        "Female"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hanqlp1o",
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

  // remove
  collection.schema.removeField("z47tcryc")

  // remove
  collection.schema.removeField("eoxojqr1")

  // remove
  collection.schema.removeField("vg8trwxu")

  // remove
  collection.schema.removeField("2hflll5i")

  // remove
  collection.schema.removeField("b0a02haq")

  // remove
  collection.schema.removeField("x2fc6xhk")

  return dao.saveCollection(collection)
})
