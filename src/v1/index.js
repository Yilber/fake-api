const fs = require('fs');
const jsf = require('json-schema-faker');
const faker = require('faker/locale/en');

jsf.extend('faker', () => faker);

let count = -1;

jsf.define('autoIncrement', () => {
  return ++count;
});

const userSchema = require('./tables/users');
const { users } = jsf.generate(userSchema);

users.forEach(user => {
  user.username = `${user.firstname}_${user.lastname}`.toLowerCase();
});

const database = {
  users,
  posts: require('./tables/posts.js')
};

fs.writeFile("./src/v1/db.json", JSON.stringify(database), (error) => {
  if (error) {
    return console.log(error);
  }
});

module.exports = function() {
  return database;
};
