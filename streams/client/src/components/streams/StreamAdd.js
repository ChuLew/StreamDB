import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { addPicture} from "../../actions";
import 'react-toastify/dist/ReactToastify.css';

class StreamAdd extends React.Component {
  sendObject = () => {
   
         var obj = {
          image_id:this.props.picture.id,
          url:this.props.picture.urls.regular,
          description:this.props.picture.description,
          album_id:this.props.match.params.id
      }
      this.props.addPicture(obj);
      
  }
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Link to={`/streams/pics/${id}`} onClick={() => this.sendObject()} className="ui button positive">Add</Link>
        <Link to={`/streams/pics/${id}`} className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to add this picture?";
    }

    return `Add Picture to album: ${this.props.stream.title}`;
  }

  render() {
    const { id } = this.props.match.params;
    return (
        <div>
          <Modal
        title="Add Picture"
        content={this.renderContent()}
        actions={this.renderActions()} 
        onDismiss={() => history.push(`/streams/pics/${id}`)}
      /> 
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    picture: state.pictures.selectedPicture,
  };
};

export default connect(mapStateToProps, { addPicture })(
  StreamAdd
);
