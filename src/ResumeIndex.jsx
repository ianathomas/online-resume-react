export function ResumeIndex(props) {
  return (
    <>
      <h1> ResumeIndex </h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h1> {resume.name} </h1>
          <p> {resume.quantity} </p>
        </div>
      ))}
    </>
  );
}
