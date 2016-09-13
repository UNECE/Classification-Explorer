import React from 'react'
import { Link } from 'react-router'

export default function Export({dataToExport, name}){
  return (
    <Link to="export"><button onClick={() => handleClick(dataToExport,name)}>Export</button></Link>
  )
}

function handleClick(dataToExport,name) {
  var csvString = convertArrayOfObjectsToCSV(dataToExport);
  //var csvString = output.join("%0A");
  var a         = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8;base64,' + window.btoa(csvString);
  a.target      = '_blank';
  a.download    = (name || 'export')+'.csv';

  document.body.appendChild(a);
  a.click();
}

function convertArrayOfObjectsToCSV(args) {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args;
  if (data == null || !data.length) {
    return '';
  }

  columnDelimiter = ',';
  lineDelimiter = '\n';

  keys = Object.keys(data[0]);

  result = '"';
  result += keys.join('"'+columnDelimiter+'"');
  result += '"';
  result += lineDelimiter;

  data.forEach(function(item) {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter;

      result += '"'+item[key]+'"';
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}
