import React from "react";
import ImageCard from "./ImageCard";
import { connect } from "react-redux";
import "./ImageList.css";
const ImageList = (props) => {
  if (props.saved) {
    const images = props.albumPictures.map((image) => {
      return <ImageCard key={image.id} image={image} id={props.id} saved = {props.saved}/>;
    });
    return <div className="image-list ">{images}</div>;
  } else {
    const images = props.images.map((image) => {
      return <ImageCard key={image.id} image={image} id={props.id} />;
    });
    return <div className="image-list ">{images}</div>;
  }
};
const mapStateToProps = (state) => {
  return { images: state.pictures.images };
};

export default connect(mapStateToProps)(ImageList);
