import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { useState } from "react";

import { Link } from 'react-router-dom'


function Index() {
  const [count, setCount] = useState([]);

  const showFile = () => {

  
    var button = document.getElementById("addText"),
    input = document.getElementById("input"),
    output = document.getElementById("output");

    button.onclick = function() {
      output.insertAdjacentHTML('beforeend', '<div>' + input.value + "</div>");
      input.value = '';
    };


  

    if (window.File && window.FileReader && window.FileList && window.Blob) {
         var preview = document.getElementById('show-text');
         var file = document.querySelector('input[type=file]').files[0];

         var reader = new FileReader()

         var textFile = /text.*/;

         var fileName = "File Name: "+document.getElementById('myfile').files[0].name+'\n';
         var fileSize = "File Size: "+document.getElementById('myfile').files[0].size+'\n';
         var fileType = "File Type: "+document.getElementById('myfile').files[0].type+'\n';
         
         
         if (file.type.match(textFile)) {
            reader.onload = function (event) {
              const fileAsText = event.target.result;


              const result = fileAsText.split(/\r?\n/);
              preview.innerHTML = result.join("<br>") + "<br>";
              
              var i, t;
              i=0;
              while(i<result.length){
                      t = result[i];
                      result[i] = result[i + 1];
                      result[i + 1] = t;
                      i = i + 2;
              }
              console.log(result);
              var num="Number of lines: " + result.length+'\n';
              
              document.getElementById('outputName').innerHTML = fileName;
              document.getElementById('outputType').innerHTML = fileType;
              document.getElementById('outputSize').innerHTML = fileSize;
              document.getElementById('nolines').innerHTML = num;

              

              setCount(result);
              
              
            }
         } else {
            preview.innerHTML = "<span class='error'>Not a Text File!</span>";
         }
         reader.readAsText(file);

   } else {
      alert("Your browser is too old ");
   }
  }

 
    return (
      <div>
        <h1>eMed</h1>
      <div className="center"> 
        <input className="show-file" type="file" id = "myfile" onChange={showFile} /><br /><br />
        <input type="text" id="input" onChange={showFile} />
        <button id="addText">Add Custom Filename</button>

        <h3> Text File:
        <div className="show-file" id="show-text"></div>
        </h3>
        <p id='outputName' >Actual File Name: </p>
        <p id='output' >Custom File Name: </p>
        <p id='outputType' >File Type:</p>
        <p id='outputSize' >File Size:</p>
        <p id='nolines' >Number of Lines:</p>
  
        
        

      <div className="center"> 
      <button>
          <Link to='/second' state = {{from: count}}>SUBMIT</Link>
          </button>
        </div>

      </div>
      </div>


    );
  
}

// render(<Index />, document.getElementById('root'));
export default Index;