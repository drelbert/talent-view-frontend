import React, { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import "./Projects.css";

const ProjectItem = function (props) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showArchiveWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelArchiveHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmArchiveHandler = () => {
    setShowConfirmModal(false);
    // eslint-disable-next-line no-console
    console.log("ARCHIVING...");
  };

  return (
    <React.Fragment>
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
        <p>This can be undone, but it is tons of work. Are you sure?</p>
      </Modal>

      <li className="project-item">
        <Card className="project-item__content">
          <div className="project-item__info">
            <h2>{props.title}</h2>
            <h4>Lead: {props.lead}</h4>
            <p>Description: {props.description}</p>
          </div>
          <div className="project-item__actions">
            <Button to={`/projects/${props.id}`}>UPDATE</Button>
            <Button danger onClick={showArchiveWarningHandler}>
              ARCHIVE
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ProjectItem;
