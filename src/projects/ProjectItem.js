import React, { useState, useContext } from "react";
import Card from "../shared/Card";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import ErrorModal from "../shared/ErrorModal";
import LoadingSpinner from "../shared/LoadingSpinner";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import "./Projects.css";

const ProjectItem = function (props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showArchiveWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelArchiveHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmArchiveHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/projects/${props.id}`,
        "DELETE"
      );
      props.onDelete(props.id);
      // eslint-disable-next-line no-empty
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelArchiveHandler}
        header="Are you certain?"
        footerClass="project-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelArchiveHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmArchiveHandler}>
              ARCHIVE
            </Button>
          </React.Fragment>
        }
      >
        <p>This cannot be undone. Are you sure?</p>
      </Modal>

      <li className="project-item">
        <Card className="project-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="project-item__info">
            <h2>{props.title}</h2>
            <h4>Lead: {props.lead}</h4>
            <p>Description: {props.description}</p>
          </div>
          <div className="project-item__actions">
            {auth.userId === props.creatorId && (
              <Button to={`/projects/${props.id}`}>UPDATE</Button>
            )}
            {auth.userId === props.creatorId && (
              <Button danger onClick={showArchiveWarningHandler}>
                ARCHIVE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ProjectItem;
