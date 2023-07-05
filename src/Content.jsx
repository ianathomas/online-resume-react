import { ResumeIndex } from "./ResumeIndex";

export function Content(props) {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <ResumeIndex resumes={props.resumes} />
    </div>
  );
}
