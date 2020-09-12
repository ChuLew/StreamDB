import React from 'react';
import { connect } from 'react-redux';
// import ImageCard from '../pictures/ImageCard';
import ImageList from '../pictures/ImageList';
import { fetchStream, fetchSavedPictures } from '../../actions';

class StreamShow extends React.Component {
 

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.props.fetchSavedPictures();
  }


  renderPictures(){
    const { id } = this.props.match.params;
    var savedImageList = this.props.savedImages;
    var albumPictures = [];
    var i;
    for(i = 0; i< this.props.savedImages.length;i++){
      // eslint-disable-next-line 
      if(savedImageList[i].album_id == id){
        albumPictures.push(savedImageList[i]);
      }  
    } 
    return <ImageList saved = {1} id = {id} savedImages = {this.props.savedImages} albumPictures = {albumPictures}/>
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
        {this.renderPictures()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    stream: state.streams[ownProps.match.params.id],
    savedImages: Object.values(state.savedImages)
   };
};

export default connect(
  mapStateToProps,
  { fetchStream,fetchSavedPictures}
)(StreamShow);
