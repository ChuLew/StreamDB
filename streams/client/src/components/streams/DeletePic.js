import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { deletePicture} from "../../actions";
import 'react-toastify/dist/ReactToastify.css';
class DeletePic extends React.Component {
  deletion = () => {
      this.props.deletePicture(this.props.picture.id);
  }
  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <Link to={`/`} onClick={() => this.deletion()} className="ui button negative">Delete</Link>
        <Link to={`/streams/edit/${id}`} className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this picture?";
    }

    return `Delete Picture from album: ${this.props.stream.title}`;
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

const mapStateToProps = (state) => {
  return {
    picture: state.pictures.selectedPicture,
  };
};

export default connect(mapStateToProps, { deletePicture })(
  DeletePic
);
