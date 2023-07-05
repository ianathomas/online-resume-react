export function ResumeShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <p>Name: {props.resume.name}</p>
      <p>Qty: {props.resume.quantity}</p>
    </div>
  );
}
