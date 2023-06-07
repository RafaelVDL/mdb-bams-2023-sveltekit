migrate((db) => {
  const collection = new Collection({
    "id": "k2x8eigcaklk3y7",
    "created": "2023-06-05 11:59:24.684Z",
    "updated": "2023-06-05 11:59:24.684Z",
    "name": "people_view",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, photo as fullname from people"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k2x8eigcaklk3y7");

  return dao.deleteCollection(collection);
})
