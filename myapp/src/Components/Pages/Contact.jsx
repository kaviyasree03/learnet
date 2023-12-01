import Hero from "../Hero/Hero";
import Box from '../Box/Box';
import './Contact.css'

const Contact = () => {
    return <div className="ui">
    <Hero/>
    <div className="box-container">
        <Box
          title=" Pre-matric Scholarship for Students with Disabilities"
          content="Candidates who after passing one stage of education are studying in the
          same stage of education in different subject (e.g. B.Com. after B.A. in other
          subject) will not be eligible. However, students pursuing
          L.L.B/B.Ed/B.El.Ed. after passing B.A./B.Sc./B.E. etc. are eligible for PostMatric Scholarship under this scheme.
          "
        />
        <Box
          title="  Post-matric Scholarship for Students with Disabilities"
          content="
          Scholarship will not be paid for the period of internship/houseman ship in
         the M.B.B.S. course or for a practical training in other courses if the student is
         in receipt of some remuneration during the internship period allowance/stipend during the practical training in other course."
        />
        <Box
          title="  Scholarships for Top Class Education for students with disabilities."
          content="
          This is admissible only for pursuing Graduate and Post graduate
          Degree/Diploma courses in Institutes of Excellence in Education as notified by
          the Department. The list of such Premier Institutions covered under the
          Scheme is at Annexure- I."
        />
        <Box
          title="  Merit Cum Means Scholarship For Professional and Technical Courses CS"
          content="
          “Scholarship will be awarded to the students who have secured not less than 50% marks
          or equivalent grade in the previous final examination and the annual income of whose
          parents/guardians from all sources does not exceed Rs.2.50 lakh.”"
        />
      </div>
      </div>
  };
 
  export default Contact;