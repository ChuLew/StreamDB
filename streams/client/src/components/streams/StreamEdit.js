import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream,fetchSavedPictures } from '../../actions';
import StreamForm from './StreamForm';
import ImageList from '../pictures/ImageList';

class StreamEdit extends React.Component {
 
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.props.fetchSavedPictures();
  } 

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
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
    return <ImageList saved = {2} id = {id} savedImages = {this.props.savedImages} albumPictures = {albumPictures}/>
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return ( 
      <div>
        <h3>Edit Album</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
        <h3>Click picture to delete from album</h3>
        {this.renderPictures()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id],
        savedImages: Object.values(state.savedImages)
  }
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream,fetchSavedPictures}
)(StreamEdit);
