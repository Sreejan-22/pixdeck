import { useEffect } from "react";
import "./ImageContainer.css";
import sampleImages from "../../sample_assets";

const ImageContainer = () => {
  useEffect(() => {
    console.log(sampleImages);
  }, []);

  return (
    <div className="image-container">
      <div className="grid-img-wrapper one">
        <img
          src="https://images.unsplash.com/photo-1594146032116-80033545b0b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="grid-img"
        />
      </div>
      <div className="grid-img-wrapper two">
        <img
          src="https://images.unsplash.com/photo-1626931570673-61b9ce2e1116?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="grid-img"
        />
      </div>
      <div className="grid-img-wrapper three">
        <img
          src="https://images.unsplash.com/photo-1621192488040-c91d793fb659?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="grid-img"
        />
      </div>
      <div className="grid-img-wrapper four">
        <img
          src="https://images.unsplash.com/photo-1621192488040-c91d793fb659?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="grid-img"
        />
      </div>
      <div className="grid-img-wrapper five">
        <img
          src="https://images.unsplash.com/photo-1626931570673-61b9ce2e1116?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="grid-img"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
