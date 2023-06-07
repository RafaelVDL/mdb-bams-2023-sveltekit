migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7")

  collection.options = {
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || '. ' || lastname) AS fullname, \n  profession, \n  ((strftime('%Y', 'now') - strftime('%Y', birthdate)) - \n  (strftime('%m-%d', 'now') < strftime('%m-%d', birthdate))) as age,\n  gender, \n  status,\n  firstname,\n  middlename,\n  lastname,\n  birthdate\nFROM people"
  }

  // remove
  collection.schema.removeField("lohttlzs")

  // remove
  collection.schema.removeField("kinxcomn")

  // remove
  collection.schema.removeField("w7lahrh7")

  // remove
  collection.schema.removeField("xiob3urz")

  // remove
  collection.schema.removeField("ct8xfvyg")

  // remove
  collection.schema.removeField("ak1514dw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w5kzqj1g",
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
    "id": "uwxvjqiu",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atm0vagi",
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
    "id": "mw8p1rzo",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aeret5xp",
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
    "id": "dk63adqk",
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
    "id": "vib9r0u5",
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
    "id": "qeyj5bzr",
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
    "id": "zt7lgvoz",
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
    "id": "xgbr4igh",
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

  collection.options = {
    "query": "SELECT \n  id, \n  photo, \n  (firstname || ' ' || substr(middlename, 1, 1) || '. ' || lastname) AS fullname, \n  profession, \n  ((strftime('%Y', 'now') - strftime('%Y', birthdate)) - \n  (strftime('%m-%d', 'now') < strftime('%m-%d', birthdate))) as age,\n  gender, \n  status \nFROM people"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lohttlzs",
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
    "id": "kinxcomn",
    "name": "fullname",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w7lahrh7",
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
    "id": "xiob3urz",
    "name": "age",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ct8xfvyg",
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
    "id": "ak1514dw",
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
  collection.schema.removeField("w5kzqj1g")

  // remove
  collection.schema.removeField("uwxvjqiu")

  // remove
  collection.schema.removeField("atm0vagi")

  // remove
  collection.schema.removeField("mw8p1rzo")

  // remove
  collection.schema.removeField("aeret5xp")

  // remove
  collection.schema.removeField("dk63adqk")

  // remove
  collection.schema.removeField("vib9r0u5")

  // remove
  collection.schema.removeField("qeyj5bzr")

  // remove
  collection.schema.removeField("zt7lgvoz")

  // remove
  collection.schema.removeField("xgbr4igh")

  return dao.saveCollection(collection)
})
