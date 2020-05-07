const request = require(`request`);

request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body){ // Print the response status code if a response was received
  console.log('body:', body); 
  console.log(typeof body);
  const data = JSON.parse(body);
  if(data.length === 0) {
    errMessage = `The breed is not found`;
  }
  console.log(data);
  console.log(typeof data);
});




