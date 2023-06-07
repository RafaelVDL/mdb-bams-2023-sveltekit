migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || '. ' || lastname) AS fullname, \n  profession, \n  ((strftime('%Y', 'now') - strftime('%Y', birthdate)) - \n  (strftime('%m-%d', 'now') < strftime('%m-%d', birthdate))) as age,\n  gender, \n  status \nFROM people"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d58wqwqi",
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
    "id": "kkvbuf0q",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v5szbwib",
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
    "id": "gtrhuvvy",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q8zikg9f",
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
    "id": "t4t41vur",
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
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || ' ' || lastname) AS fullname, \n  profession, \n  ((strftime('%Y', 'now') - strftime('%Y', birthdate)) - \n  (strftime('%m-%d', 'now') < strftime('%m-%d', birthdate))) as age,\n  gender, \n  status \nFROM people"
  }

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

  // remove
  collection.schema.removeField("d58wqwqi")

  // remove
  collection.schema.removeField("kkvbuf0q")

  // remove
  collection.schema.removeField("v5szbwib")

  // remove
  collection.schema.removeField("gtrhuvvy")

  // remove
  collection.schema.removeField("q8zikg9f")

  // remove
  collection.schema.removeField("t4t41vur")

  return dao.saveCollection(collection)
})
