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
      {/* currently makes modal so big that exit button cannot be seen */}
      {/* <h1> Experiences </h1>
      {props.resume.experiences.map((experience) => (
        <div key={experience.id}>
          <ul>
            <li>
              <p>
                {experience.start_date} - {experience.end_date}{" "}
              </p>
              <p> {experience.job_title} </p>
              <p> {experience.company_name} </p>
              <p> {experience.details} </p>
            </li>
            <p></p>
          </ul>
          <p></p>
        </div>
      ))}
      <h1> Educations </h1>
      {props.resume.educations.map((education) => (
        <div key={education.id}>
          <ul>
            <li>
              <p>
                {" "}
                {education.start_date} - {education.end_date}{" "}
              </p>
              <p> {education.degree} </p>
              <p> {education.university_name} </p>
              <p> {education.details} </p>
            </li>
            <p></p>
          </ul>
          <p></p>
        </div>
      ))}
      <h1> Skills </h1>
      {props.resume.skills.map((skill) => (
        <div key={skill.id}>
          <p> {skill.name} </p>
          <p></p>
        </div>
      ))}
      <h1> Capstones </h1>
      {props.resume.capstones.map((capstone) => (
        <div key={capstone.id}>
          <ul>
            <li>
              <p> {capstone.details} </p>
              <p> {capstone.description} </p>
              <p> {capstone.url} </p>
              <img src={capstone.screenshot}></img>
              <p></p>
            </li>
          </ul>
          <p></p>
        </div>
      ))}
      <p></p> */}
      <p>Tweet: {randomTweet1} </p>
      <p>Tweet: {randomTweet2} </p>
      <p>Tweet: {randomTweet3} </p>
    </div>
  );
}
