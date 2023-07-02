import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import White_Ball from './white_ball.bmp';
import White_Paddle from './paddles.bmp'

function HomePage() {

  const canvas_width = 900
  const canvas_height = 600

  const [x_current_pos, update_X_Current_Pos] = useState(canvas_width/2);
  const [x_vect, update_X_Vect] = useState(1);

  useEffect(() => {

    let x = 0;
    let radius = 10;

    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    const reverseVect = () => {
      update_X_Vect(x_vect * -1);
    };

    const update_Pos = () => {
      update_X_Current_Pos(x_current_pos + x_vect);
    };

    const ball_image = new Image();
    ball_image.src = White_Ball;

    ball_image.onload = () => {

      context.drawImage(ball_image, canvas_width/2, canvas_height/2);

      const update = () => {

        let right_boundary = (canvas_width >= x_current_pos + radius + x);
        let left_boundary = (0 >= x_current_pos - radius - x);

        if (1 == right_boundary || 1 == left_boundary) {
          reverseVect();
        }

        context.clearRect(0, 0, canvas_width, canvas_height);
        context.drawImage(ball_image, x_current_pos, canvas_height/2);

        update_Pos()

        requestAnimationFrame(update);

      }

      requestAnimationFrame(update);

    };

    const paddle_image = new Image();
    paddle_image.src = White_Paddle;
    paddle_image.onload = () => {
      context.drawImage(paddle_image, 100, canvas_height/2);
      context.drawImage(paddle_image, canvas_width - 100, canvas_height/2);
    }
  }, []);

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
}

export default HomePage;



/*
<Link to="/#home">Home</Link>
<Link to="/#about">About</Link>
*/