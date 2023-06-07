migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  // remove
  collection.schema.removeField("lctjb3tv")

  // remove
  collection.schema.removeField("40zu6qkx")

  // remove
  collection.schema.removeField("ehibx3ki")

  // remove
  collection.schema.removeField("qsqioaab")

  // remove
  collection.schema.removeField("bvmcdphh")

  // remove
  collection.schema.removeField("bb3ae68b")

  // remove
  collection.schema.removeField("frdctjjo")

  // remove
  collection.schema.removeField("twiornfi")

  // remove
  collection.schema.removeField("ledd4fws")

  // remove
  collection.schema.removeField("mhqyjre4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a8zphc7r",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v6bktaxc",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oeeats8y",
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
    "id": "kiduz3m6",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipo4pghk",
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
    "id": "kk0g4rcu",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qj9obttr",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ud2kmi6n",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6trvpcz6",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r5iammax",
    "name": "birthdate",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lctjb3tv",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "40zu6qkx",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ehibx3ki",
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
    "id": "qsqioaab",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bvmcdphh",
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
    "id": "bb3ae68b",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frdctjjo",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twiornfi",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ledd4fws",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhqyjre4",
    "name": "birthdate",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("a8zphc7r")

  // remove
  collection.schema.removeField("v6bktaxc")

  // remove
  collection.schema.removeField("oeeats8y")

  // remove
  collection.schema.removeField("kiduz3m6")

  // remove
  collection.schema.removeField("ipo4pghk")

  // remove
  collection.schema.removeField("kk0g4rcu")

  // remove
  collection.schema.removeField("qj9obttr")

  // remove
  collection.schema.removeField("ud2kmi6n")

  // remove
  collection.schema.removeField("6trvpcz6")

  // remove
  collection.schema.removeField("r5iammax")

  return dao.saveCollection(collection)
})
