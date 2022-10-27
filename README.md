# ProductprjNode
DB tables are ( products , categories), the DB name is:(mongodb://localhost/ProductsDB) 
Data Examples:
products:

{
  "_id": "63568557bf7b121f8f0a6c8e"
  "name": "Product3",
  "quantity": 4,
  "price": 51,
  "imgUrl": "https://dummyimage.com/600x400/000/fff",
  "categoryId": 1
}
{
  "_id": "6356856dbf7b121f8f0a6c90",
  "name": "Product4",
  "quantity": 8,
  "price": 51,
  "imgUrl": "https://dummyimage.com/600x400/000/fff",
  "categoryId": 1
}
{
  "_id":"635a3cd3c9238ab28d04ecb7",
  "name": "Product9 nine",
  "quantity": 5,
  "price": 15,
  "imgUrl": "https://dummyimage.com/600x400/000/fff",
  "categoryId": 2
}
----------------------------------------------------------------
categories:
{
  "_id":"6357a9b6bf7b121f8f0a6c94"
  "name": "category one"
}
{
  "_id": "6357a9d1bf7b121f8f0a6c96",
  "name": "category two "
}
----------------------------------------------------------------

Get :http://localhost:4000/api/categories
Get :http://localhost:4000/api/products
Get :http://localhost:4000/api/products/63568540bf7b121f8f0a6c8c
Get :http://localhost:4000/api/products?categoryId=1
Post: http://localhost:4000/api/products
         {
        "name": "Product for test post",
        "quantity": 125,
        "price": 25,
        "imgUrl": "https://dummyimage.com/600x400/000/fff",
        "categoryId": 1
         }
         
Put  :http://localhost:4000/api/products/63568540bf7b121f8f0a6c8c
      
       {
        "name": "Product for test put",
        "quantity": 125,
        "price": 25,
        "imgUrl": "https://dummyimage.com/600x400/000/fff",
        "categoryId": 1
         }
Patch :http://localhost:4000/api/products/635a5e09fb0f7f3517280da4

      {
    "name":"update name onlylylyy"
     }
 Delete: http://localhost:4000/api/products/635a43e8c9238ab28d04ecbf
         
