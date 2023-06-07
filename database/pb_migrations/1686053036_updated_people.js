migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q95wg8ttf52uo5t")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q95wg8ttf52uo5t")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
