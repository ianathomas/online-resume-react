import { faker } from "@faker-js/faker";

const randomTweet1 = faker.word.words({ count: { min: 5, max: 10 } });
const randomTweet2 = faker.word.words({ count: { min: 5, max: 10 } });
const randomTweet3 = faker.word.words({ count: { min: 5, max: 10 } }); // adds 5 to 10 words for a "tweet"

export function ResumeShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <p>Name: {props.resume.name}</p>
      <p>Qty: {props.resume.quantity}</p>
      <p>Tweet: {randomTweet1} </p>
      <p>Tweet: {randomTweet2} </p>
      <p>Tweet: {randomTweet3} </p>
    </div>
  );
}
