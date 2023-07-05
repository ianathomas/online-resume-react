import { ResumeIndex } from "./ResumeIndex";
import { ResumeShow } from "./ResumeShow";
import { Modal } from "./Modal";

export function Content(props) {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ResumeIndex resumes={props.resumes} handleShowResume={props.handleShowResume} />
      <Modal show={props.isResumesShowVisible} onClose={props.handleClose}>
        <ResumeShow resume={props.currentResume} />
      </Modal>
    </div>
  );
}
