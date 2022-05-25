import { useState } from 'react'
import Webcam from "react-webcam";
import * as blazeface from "@tensorflow-models/blazeface";
import './App.css'

async function App() {
  const [imgSrc, setImgSrc] = useState()

  const videoConstraints = {
    width: 200,
    height: 113,
    facingMode: "user"
  };

  const net = await blazeface.load();
  
  const WebcamCapture = () => (
    <Webcam
      audio={false}
      height={113}
      screenshotFormat="image/jpeg"
      width={200}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            setImgSrc(getScreenshot())
          }}
        >
          Photo
        </button>

      )}
    </Webcam>
  );
  
  return (
    <div className="App">
      <header className="App-header">
      {WebcamCapture()}  
      <img
          src={imgSrc}
        />
      </header>
    </div>
  )
}

export default App