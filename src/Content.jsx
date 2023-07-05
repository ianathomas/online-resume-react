import { ResumeIndex } from "./ResumeIndex";
import { ResumesShow } from "./ResumesShow";

export function Content(props) {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ResumeIndex resumes={props.resumes} />
    </div>
  );
}

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ResumeIndex Resume={photos} onResumeIndex={handleResumeIndex} />
      <Modal show={isResumesShowVisible} onClose={handleClose}></Modal>
      <Resumehow photo={currentResume} />
    </div>
  );
}
