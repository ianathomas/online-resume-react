import { faker } from "@faker-js/faker";

const randomWords = faker.word.words({ count: { min: 5, max: 10 } }); // adds 5 to 10 words for a "tweet"

export function ResumeShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <p>Name: {props.resume.name}</p>
      <p>Qty: {props.resume.quantity}</p>
      <p>Tweet: {randomWords} </p>
      <p>Tweet: {randomWords} </p>
      <p>Tweet: {randomWords} </p>
    </div>
  );
}
