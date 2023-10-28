import SectionHeading from "../Section/SectionHeading";
import SectionTitle from "../Section/SectionTitle";
import PrimaryButton from "../../../Shared/Buttons/PrimaryButton";
import aboutPerson from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero pb-20">
      <div className="hero-content justify-between flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 rounded-lg shadow-2xl relative">
          <img src={aboutPerson} className="w-full h-full rounded-lg" />
          <div className="absolute top-2/3 lg:top-1/2 right-0 lg:-right-24 w-1/2 lg:w-2/3 border-white border-8">
            <img src={parts} alt="" />
          </div>
        </div>
        <div className="lg:w-1/3 space-y-6">
          <SectionTitle>About Us</SectionTitle>
          <SectionHeading>
            We are qualified & of experience in this field
          </SectionHeading>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <PrimaryButton>Get More Info</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default About;
