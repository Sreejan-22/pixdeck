import { useEffect, useState } from "react";
import "./ImageContainer.css";
import fetchImages from "../../api/api";

const ImageContainer = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchImages().then((res) => {
      setImages(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="image-container">
      {images &&
        images.map((image) => {
          return (
            <div className="grid-image-wrapper" key={image.id}>
              <img src={image.urls.small} alt="" className="grid-img" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageContainer;
