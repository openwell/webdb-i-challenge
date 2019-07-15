const db = require("../data/dbConfig.js");

module.exports = {
  get,
  insert,
  update,
  remove
};

function get() {
  return db("accounts");
}

function insert(user) {
  return db("accounts")
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("accounts")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("accounts")
    .where("id", id)
    .del();
}
