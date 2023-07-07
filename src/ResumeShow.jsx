import { faker } from "@faker-js/faker";

const randomTweet1 = faker.word.words({ count: { min: 5, max: 10 } });
const randomTweet2 = faker.word.words({ count: { min: 5, max: 10 } });
const randomTweet3 = faker.word.words({ count: { min: 5, max: 10 } }); // adds 5 to 10 words for a "tweet"

export function ResumeShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <h1> {props.resume.first_name} </h1>
      <p> {props.resume.last_name} </p>
      <p> {props.resume.email} </p>
      <p> {props.resume.phone_number} </p>
      <p> {props.resume.short_bio} </p>
      <p> {props.resume.linkedin_url} </p>
      <p> {props.resume.twitter_handle} </p>
      <p> {props.resume.personal_website_url} </p>
      <p> {props.resume.online_resume_url} </p>
      <p> {props.resume.github_url} </p>
      <img src={props.resume.photo}></img>
      <p></p>
    </div>
  );
}
