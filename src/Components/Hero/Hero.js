import React from "react";
import "./Hero.css";
import Button from "@material-ui/core/Button";

function Hero() {
  return (
    <div className="HeroContent">
      <div className="Hero">
        {/* Photo by <a href="https://unsplash.com/@dtopkin1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dayne Topkin</a> on <a href="https://unsplash.com/s/photos/houses-illinois?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
        <h1>
          Let me Help You<br></br> Find the Home <br></br>You deserve
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          temporibus ullam voluptatem eveniet sunt. Autem vero quia error modi
          pariatur culpa magni quisquam, odio iure ea. Dolorem dolorum
          laudantium facilis?
        </p>
        <Button variant="contained">Contact Me</Button>
      </div>
    </div>
  );
}

export default Hero;
