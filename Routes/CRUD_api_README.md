Extend the existing API to support all CRUD operations:

REST PRINCIPALS:
  - cacheable: set caching headers to allow client to cache responses
  - layered server syst: forwarding requests to other apis
  - 


clearly defined endpoints with a clearly defined request results in a clearly defined response data structure

Create / POST - create a new item 
  - create a new showtime? 

app.post('/'???comments?, (req, res) => {
  //return a status code 201
  //page stuff that includes newly posted item
  //purchase of ticket? for that available showtime?
}

Read / GET - read an item

app.get('/api/showtimes', (req, res) => {
  //return a status code 200
  //include a response with data of all showtimes for movie for current location
})


Update / PUT - update an item

app.put('/api/showtime', (req, res) => {
  //return a status code of 202?
  //should return the desired list of showtimes? 
  //should return the updated showtime for the movie at that location
})


Delete / DELETE - delete an item

app.delete('api/showtime', (req, res) => {
  //return a status code of 20?
  //should return the deleted item/showtime/ect
  //should show the accurate new list of showtimes with showtime removed
})



Be sure to select the appropriate routes for each of these actions so they conform to the REST standard.