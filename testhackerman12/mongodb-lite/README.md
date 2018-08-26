# API Documentation

```
delete
------
url:      https://testhackerman12.lib.id/mongodb-lite@dev/delete/
code:     lib.testhackerman12.mongodb-lite['@dev'].delete()
shell:    lib testhackerman12.mongodb-lite[@dev].delete
context:  (enabled)
bg:       info

  @param {string} uri [description]
  @param {string} collectionName [description]
  @param {array} ids
  @returns {any}

insert
------
url:      https://testhackerman12.lib.id/mongodb-lite@dev/insert/
code:     lib.testhackerman12.mongodb-lite['@dev'].insert()
shell:    lib testhackerman12.mongodb-lite[@dev].insert
context:  (enabled)
bg:       info

  @param {string} uri Database uri
  @param {string} collectionName Name of the collection
  @param {object} data Data you wish to insert
  @returns {any}

select
------
url:      https://testhackerman12.lib.id/mongodb-lite@dev/select/
code:     lib.testhackerman12.mongodb-lite['@dev'].select()
shell:    lib testhackerman12.mongodb-lite[@dev].select
context:  (enabled)
bg:       info

  @param {string} uri uri of the database
  @param {string} collectionName
  @param {object} query
  @returns {string} Returning array throws JSON non serializable

update
------
url:      https://testhackerman12.lib.id/mongodb-lite@dev/update/
code:     lib.testhackerman12.mongodb-lite['@dev'].update()
shell:    lib testhackerman12.mongodb-lite[@dev].update
context:  (enabled)
bg:       info

  @param {string} uri database uri
  @param {string} collectionName [description]
  @param {array} ids
  @param {object} data {"key_name":"updated_value"}
  @returns {any}
```