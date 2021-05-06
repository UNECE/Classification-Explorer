//Stardog HTTP API documentation: http://docs.stardog.apiary.io/#
import fetch from 'isomorphic-fetch';

const bodyFromSparql = (query) =>
  encodeURIComponent('query') + '=' + encodeURIComponent(query);

const post = (queryURL, authorization) => (query) =>
  fetch(queryURL, {
    method: 'POST',
    headers: {
      Authorization: authorization,
      Accept: 'application/sparql-results+json',
      // We need to pass some `x-www-form-urlencoded` data. `multipart/form-data`
      // created with `new FormData()` does not work.
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bodyFromSparql(query),
  }).then((res) => res.json());

export default post;

// We can also use a 'GET' verb if the query is not too long
/* GET example 
fetch(queryURL + '?' + bodyFromSparql(queryGetClassificationList), {
  method: 'GET',
  headers: {
    'Authorization': authorization, 
    'Accept': 'application/sparql-results+json',
  }
  body: bodyFromSparql(query)
})
*/
