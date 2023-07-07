import { ResumeIndex } from "./ResumeIndex";
import { ResumeShow } from "./ResumeShow";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";

export function Content(props) {
  return (
    <div className="container">
      <ResumeIndex resumes={props.resumes} handleShowResume={props.handleShowResume} />
      <Modal show={props.isResumesShowVisible} onClose={props.handleClose}>
        <ResumeShow resume={props.currentResume} />
      </Modal>
      <Routes>
        <Route
          path="/Resumes"
          element={<ResumeIndex resumes={props.resumes} handleShowResume={props.handleShowResume} />}
        />
        <Route path="/" element={<ResumeIndex resumes={props.resumes} handleShowResume={props.handleShowResume} />} />
      </Routes>
    </div>
  );
}
