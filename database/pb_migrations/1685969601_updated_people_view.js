migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS fullname, \n  profession, \n  ((strftime('%Y', 'now') - strftime('%Y', birthdate)) - \n  (strftime('%m-%d', 'now') < strftime('%m-%d', birthdate))) as age,\n  gender, \n  status \nFROM people"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldxsq7ly",
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
    "id": "cjdbbw16",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y38p0n06",
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
    "id": "mxlzkpoi",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zaralep7",
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
    "id": "fbvxnezl",
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
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS fullname, \n  profession, \n  strftime('%Y %m %d','now') as age,\n  gender, \n  status \nFROM people"
  }

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

  // remove
  collection.schema.removeField("ldxsq7ly")

  // remove
  collection.schema.removeField("cjdbbw16")

  // remove
  collection.schema.removeField("y38p0n06")

  // remove
  collection.schema.removeField("mxlzkpoi")

  // remove
  collection.schema.removeField("zaralep7")

  // remove
  collection.schema.removeField("fbvxnezl")

  return dao.saveCollection(collection)
})
