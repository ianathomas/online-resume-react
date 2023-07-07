export function ResumeIndex(props) {
  return (
    <>
      <h1> All Resumes </h1>
      {props.resumes.map((student) => (
        <div key={student.id}>
          <h1> {student.first_name} </h1>
          <p> {student.last_name} </p>
          <p> {student.email} </p>
          <p> {student.phone_number} </p>
          <p> {student.short_bio} </p>
          <p> {student.linkedin_url} </p>
          <p> {student.twitter_handle} </p>
          <p> {student.personal_website_url} </p>
          <p> {student.online_resume_url} </p>
          <p> {student.github_url} </p>
          <img src={student.photo}></img>
          <p></p>
          {/* {student.experiences.map((experience) => (
            <div key={experience.id}>
              <p> {experience.start_date} </p>
              <p> {experience.end_date} </p>
              <p> {experience.job_title} </p>
              <p> {experience.company_name} </p>
              <p> {experience.details} </p>
              <p></p>
            </div>
          ))}
          {student.educations.map((education) => (
            <div key={education.id}>
              <p> {education.start_date} </p>
              <p> {education.end_date} </p>
              <p> {education.degree} </p>
              <p> {education.university_name} </p>
              <p> {education.details} </p>
              <p></p>
            </div>
          ))}
          {student.skills.map((skill) => (
            <div key={skill.id}>
              <p> {skill.name} </p>
              <p></p>
            </div>
          ))}
          {student.capstones.map((capstone) => (
            <div key={capstone.id}>
              <p> {capstone.details} </p>
              <p> {capstone.description} </p>
              <p> {capstone.url} </p>
              <p> {capstone.screenshot} </p>
              <p></p>
            </div>
          ))} */}
          <button onClick={() => props.handleShowResume(student)}>More info</button>
        </div>
      ))}
    </>
  );
}
