import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import './HomePage.css';
import White_Ball from './white_ball.bmp';
import White_Paddle from './paddles.bmp'

function HomePage() {

  const canvas_width = 900;
  const canvas_height = 600;

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null); 

  loadImage((src) => {
    
    return new Promise((resolve, reject) => {
      
      const image = new Image();
      image.src = src;

      image.onload = () => {
        resolve();
      };

      image.onerror = () => {
        reject(error);
      };

    });
  });

  useEffect(() => {

    const imageList = [
      loadImage(White_Ball),
      loadImage(White_Paddle),
    ];

    Promise.all(imageList)
      .then((images) => {
        setImage1(images[0]);
        setImage2(images[1]);
        setImagesLoaded(true);
        })
      .catch((error) => {
        console.error('error loading images: ', error);
        });
  }, []);

  document.addEventListener('DOMContentLoaded', () => { 

    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    let x = canvas_width/2;
    let y = canvas_height/2;

    const update = () => {

      x += 1;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image1, x, y);
      context.drawImage(image2, 100, canvas_height/2);
      context.drawImage(image2, canvas_width - 100, canvas_height/2);

      requestAnimationFrame(update);

    };

    requestAnimationFrame(update);

  });

  return (
    <>
      <div className="sidenav">
        <h2> Home </h2>
        <h3> About </h3>
      </div>
      <div className="homepage">
        <h1> Ping Pong </h1>
        <div className="canvas-container">
          <canvas className="black-canvas" id="myCanvas" width={canvas_width} height={canvas_height}></canvas>
        </div>
      </div>
    </>
  );
};

export default HomePage;



/*
<Link to="/#home">Home</Link>
<Link to="/#about">About</Link>
*/