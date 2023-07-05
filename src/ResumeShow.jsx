export function ResumesShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <p>Name: {props.resume.name}</p>
      <p>Url: {props.resume.url}</p>
      <p>Width: {props.resume.width}</p>
      <p>Height: {props.resume.height}</p>
    </div>
  );
}
