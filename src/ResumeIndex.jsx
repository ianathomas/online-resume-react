export function ResumeIndex(props) {
  return (
    <>
      {/* <h1> All Resumes </h1>
      {props.resumes.map((resume) => (
        <div key={resume.id}>
          <h1> {resume.student.first_name} </h1>
          <p> {resume.student.last_name} </p>
          <p> {resume.student.email} </p>
          <p> {resume.student.phone_number} </p>
          <p> {resume.student.short_bio} </p>
          <p> {resume.student.linkedin_url} </p>
          <p> {resume.student.twitter_handle} </p>
          <p> {resume.student.personal_website_url} </p>
          <p> {resume.student.online_resume_url} </p>
          <p> {resume.student.github_url} </p>
          <img src={resume.student.photo}></img>
          <p></p>
          {resume.student.experiences.map((experience) => (
            <div key={experience.id}>
              <p> {experience.start_date} </p>
              <p> {experience.end_date} </p>
              <p> {experience.job_title} </p>
              <p> {experience.company_name} </p>
              <p> {experience.details} </p>
              <p></p>
            </div>
          ))}
          {resume.student.educations.map((education) => (
            <div key={education.id}>
              <p> {education.start_date} </p>
              <p> {education.end_date} </p>
              <p> {education.degree} </p>
              <p> {education.university_name} </p>
              <p> {education.details} </p>
              <p></p>
            </div>
          ))}
          {resume.student.skills.map((skill) => (
            <div key={skill.id}>
              <p> {resume.student.skills.name} </p>
              <p></p>
            </div>
          ))}
          {resume.student.capstones.map((capstone) => (
            <div key={capstone.id}>
              <p> {resume.student.capstones.details} </p>
              <p> {resume.student.capstones.description} </p>
              <p> {resume.student.capstones.url} </p>
              <p> {resume.student.capstones.screenshot} </p>
            </div>
          ))}
          <button onClick={() => props.handleShowResume(resume)}>More info</button>
        </div>
      ))} */}
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
    </>
  );
}
