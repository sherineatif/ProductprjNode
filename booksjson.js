const { Db } = require("mongodb");

Db.books.insert([
  { title: "book1", genre: "genre1", author: "author1", read: false },
  { title: "book2", genre: "genre2", author: "author2", read: false },
  { title: "book3", genre: "genre3", author: "author3", read: false },

  { title: "Product1", genre: "genre1", author: "author1", read: false },
]);
