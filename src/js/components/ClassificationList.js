import React, { Component } from 'react'
import { Provider } from 'react-redux'


export default class ClassificationList extends Component {
  render() {
    return (
      <div>vcxv</div>
    )
  }

  componentWillMount() {
      loadClassification();
  }


}

function loadClassification() {
  var myHeaders = new Headers();
  myHeaders.append(	'Accept', 'application/json');

var init = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
const url = 'http://rdf.insee.fr/sparql?query=PREFIX%20skos%3A%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%20SELECT%20%3Furi%20%3Flabel%20WHERE%20%7BGRAPH%20%3Chttp%3A%2F%2Frdf.insee.fr%2Fgraphes%2Fcodes%2Fnafr2%3E%20%7B%20%3Furi%20skos%3AprefLabel%20%3Flabel%20%3B%20skos%3Anotation%20%2702.10Z%27.%20FILTER%20langMatches%20(lang(%3Flabel)%2C%20%27fr%27)%7D%20.%20%7D';

fetch(url,init)
.then(function(response) {
  console.log(response.text());
});
}
