import React from "react";
import { Link } from "react-router-dom";
// import Modal from '../Modal';
// import history from '../../history';
import { connect } from "react-redux";
import { selectPicture } from "../../actions";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    var height = 10;
    if(this.imageRef.current.clientHeight!==null){
     height = this.imageRef.current.clientHeight; 
    }
    
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  onClickAddPic = () => {
    this.props.selectPicture(this.props.image);
  };
  render() {
    const { description } = this.props.image;
    var urls;
    if (!this.props.saved) {
      urls = this.props.image.urls.regular;
    } else {
      urls = this.props.image.url;
    }
    if (!this.props.saved) {
      return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <Link to={`/streams/add/${this.props.id}`}>
             <img
              ref={this.imageRef}
              alt={description}
              src={urls}
              onClick={this.onClickAddPic}
            />
          </Link>
        </div>
      );
      // eslint-disable-next-line 
    }else if (this.props.saved == 2){
      return (
         <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <Link to={`/streams/deletePic/${this.props.id}`}> 
          {/* link to delete page */}
             <img
              ref={this.imageRef}
              alt={description}
              src={urls}
              onClick={this.onClickAddPic}
            />
          </Link>
        </div>
      )
     
    }

    else{
      return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
             <img
              ref={this.imageRef}
              alt={description}
              src={urls} 
              onClick={this.onClickAddPic}
            />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { selectedImage: state.pictures.selectedPicture };
};
export default connect(mapStateToProps, { selectPicture })(ImageCard);
