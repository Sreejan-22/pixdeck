import { useEffect, useRef, useState } from "react";
import "./ImageContainer.css";
import { fetchImages, searchImages } from "../../api/api";
import Modal from "../Modal/Modal";
import Loader from "react-loader-spinner";

const ImageContainer = ({ query }) => {
  const [images, setImages] = useState([]);
  const [selectedURL, setSelectedURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const didMount = useRef(false);
  const pages = useRef(1);

  useEffect(() => {
    fetchImages(pages.current).then((res) => {
      setImages(res);
    });
  }, []);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        // console.log("reached the bottom");
        setLoading(true);
        pages.current = pages.current + 1;
        if (query) {
          searchImages(query, pages.current).then((res) => {
            setImages((images) => [...images, ...res]);
            setLoading(false);
          });
        } else {
          fetchImages(pages.current).then((res) => {
            setImages((images) => [...images, ...res]);
            setLoading(false);
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll, {
        passive: true,
      });
    };
  }, []);

  // the didMount ref variable has been used to ensure that the follwoing effect occurs only on update and
  // not on mount
  useEffect(() => {
    if (didMount.current) {
      pages.current = 1;
      searchImages(query, pages.current).then((res) => {
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
              <img
                src={image.urls.small}
                alt=""
                className="grid-img"
                onClick={() => {
                  if (window.screen.width >= 768) {
                    setSelectedURL(image.urls.small);
                  }
                }}
              />
            </div>
          );
        })}
      {loading && (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="Oval" color="#3f3f3f" height={50} width={50} />
        </div>
      )}
      {selectedURL && (
        <Modal url={selectedURL} setSelectedURL={setSelectedURL} />
      )}
    </div>
  );
};

export default ImageContainer;
