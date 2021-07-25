import { useEffect, useRef, useState } from "react";
import "./ImageContainer.css";
import { fetchImages, searchImages } from "../../api/api";

const ImageContainer = ({ query }) => {
  const [images, setImages] = useState([]);
  const didMount = useRef(false);
  useEffect(() => {
    fetchImages().then((res) => {
      setImages(res);
    });
  }, []);

  useEffect(() => {
    if (didMount.current) {
      searchImages(query).then((res) => {
        setImages(res);
      });
    } else {
      didMount.current = true;
    }
  }, [query]);

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
