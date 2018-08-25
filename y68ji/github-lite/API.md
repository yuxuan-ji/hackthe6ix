# API Documentation

```sh
get_authenticated_user
----------------------
url:      https://y68ji.lib.id/github-lite@dev/get_authenticated_user/
code:     lib.y68ji.github-lite['@dev'].get_authenticated_user()
shell:    lib y68ji.github-lite[@dev].get_authenticated_user
context:  (enabled)
bg:       info

  Get the current authenticated user
  @param {string} id Your username
  @param {string} pw Your password
  @returns {any}
```
```sh
get_user
--------
url:      https://y68ji.lib.id/github-lite@dev/get_user/
code:     lib.y68ji.github-lite['@dev'].get_user()
shell:    lib y68ji.github-lite[@dev].get_user
context:  (enabled)
bg:       info

  Get an user
  @param {string} id Your username
  @param {string} pw Your password
  @param {string} target Username of the user you wish to query
  @returns {any}
```
```sh
follow_user
-----------
url:      https://y68ji.lib.id/github-lite@dev/follow_user/
code:     lib.y68ji.github-lite['@dev'].follow_user()
shell:    lib y68ji.github-lite[@dev].follow_user
context:  (enabled)
bg:       info

  Get an user
  @param {string} id Your username
  @param {string} pw Your password
  @param {string} target Username of the user you wish to follow
  @returns {any}
```
```sh
unfollow_user
-------------
url:      https://y68ji.lib.id/github-lite@dev/unfollow_user/
code:     lib.y68ji.github-lite['@dev'].unfollow_user()
shell:    lib y68ji.github-lite[@dev].unfollow_user
context:  (enabled)
bg:       info

  Get an user
  @param {string} id Your username
  @param {string} pw Your password
  @param {string} target Username of the user you wish to unfollow
  @returns {any}
```