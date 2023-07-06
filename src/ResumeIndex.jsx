export function ResumeIndex(props) {
  return (
    <>
      <h1> All Resumes </h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h1> {resume.name} </h1>
          <p> {resume.quantity} </p>
          <button onClick={() => props.handleShowResume(resume)}>More info</button>
        </div>
      ))}
    </>
  );
}
