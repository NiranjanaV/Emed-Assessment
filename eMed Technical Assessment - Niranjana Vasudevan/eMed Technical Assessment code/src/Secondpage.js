import React from 'react';
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'


function Secondpage() {

    const location = useLocation();
  const data = location.state.from
    console.log(data);
    const downloadTxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      document.body.appendChild(element);
      element.click();
    };


    
  return(
    
    <div className='center'>
      

      <h3>Download the Altered File</h3>

    <div>
      <button onClick={downloadTxtFile}>Download txt</button>
    </div>

    <div>
    <h3>Go back to Upload Page</h3>
      <button>
    <Link to='/' >Upload</Link>
    </button>
    </div>

    </div>
  )
}


export default Secondpage;