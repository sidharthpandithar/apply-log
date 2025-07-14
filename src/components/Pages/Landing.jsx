import Button from "../reuseables/LandingPage/Button";
import LandingTextArea from "../reuseables/LandingPage/LandingTextArea";
import LandingImageArea from "../reuseables/LandingPage/LandingImageArea";
import Accordion from "../reuseables/LandingPage/Accordion";
import Nav from "../reuseables/LandingPage/Nav";
import CardSwap, { Card } from "../reuseables/LandingPage/CardSwap";
import Carousel from "../reuseables/LandingPage/Carousel";
import TrueFocus from "../reuseables/LandingPage/TrueFocus";
import ChromaGrid from "../reuseables/LandingPage/ChromaGrid";
import BounceCards from "../reuseables/LandingPage/BounceCards";
import LazySection from "../reuseables/LandingPage/LazySection";
import LocomotiveScroll from "locomotive-scroll";

export default function Landing() {
  const locomotiveScroll = new LocomotiveScroll();
  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];
  const itemsChroma = [
    {
      image: "/liam.jpg",
      title: "Liam Anderson",
      subtitle: "GlobalNova Technologies",
      borderColor: "#3C3D37",
      gradient: "linear-gradient(145deg, #3C3D37, #000)",
    },
    {
      image: "/sofia.jpg",
      title: "Sofia Moretti ",
      subtitle: "AstraLogic Systems",
      borderColor: "#3C3D37",
      gradient: "linear-gradient(180deg, #3C3D37, #000)",
    },
    {
      image: "/kenji.jpg",
      title: "Kenji Takahashi",
      subtitle: "OrionByte Solutions",
      borderColor: "#3C3D37",
      gradient: "linear-gradient(180deg, #3C3D37, #000)",
    },
    {
      image: "/amira.jpg",
      title: "Amira El-Sayed",
      subtitle: "ZenithSphere Digital",
      borderColor: "#3C3D37",
      gradient: "linear-gradient(180deg, #3C3D37, #000)",
    },
    {
      image: "/lucas.jpg",
      title: "Lucas Müller",
      subtitle: "Techspire Innovations",
      borderColor: "#3C3D37",
      gradient: "linear-gradient(180deg, #3C3D37, #000)",
    },
    {
      image: "/isla.jpg",
      title: "Isla McKenzie",
      subtitle: "NeuroNet Labs",
      borderColor: "#3C3D37",
      gradient: "linear-gradient(180deg, #3C3D37, #000)",
    },
  ];

  const items = [
    {
      title: "What is an interview tracker?",
      content:
        "An interview tracker is a tool that helps you keep track of all your interview dates, job descriptions, documents, and notes in one place—so you never miss an important event or lose valuable information again. ApplyLog makes this simple and efficient.",
    },
    {
      title: "Who should track their interviews?",
      content:
        "Anyone actively applying to multiple jobs should use an interview tracker. Whether you're a recent graduate, someone who's been laid off, or you're switching roles—ApplyLog helps you stay organized during the job hunt.",
    },
    {
      title: "Why should I use ApplyLog?",
      content:
        "ApplyLog gives you quick insight into all your upcoming interviews. You can view interview types, dates, and role details at a glance. You can also save tailored resumes and job descriptions so you're always well-prepared.",
    },
    {
      title: "What’s the best way to track my interviews?",
      content:
        "The most effective way is using a smart tool like ApplyLog. It organizes all your job applications and interviews in one easy-to-navigate dashboard—so you focus more on preparing and less on remembering.",
    },
    {
      title: "What tools does ApplyLog offer?",
      content:
        "ApplyLog offers a complete suite to support your job search: an interview tracker, job application organizer, resume and document management, follow-up reminders, and detailed metrics to help you stay on top of everything.",
    },
    {
      title: "How often should I update ApplyLog?",
      content:
        "You should update ApplyLog daily as you schedule or complete interviews. This habit ensures you never miss out on opportunities or lose track of key documents and dates.",
    },
    {
      title: "Does ApplyLog provide insights or data?",
      content:
        "Yes, ApplyLog gives you helpful data such as the number of jobs saved, your application-to-interview conversion rate, daily activity logs, and more—so you always know how your job search is progressing.",
    },
    {
      title: "How does ApplyLog's interview tracker work?",
      content:
        "You just enter the job and interview info with a few clicks. ApplyLog stores and organizes everything—job details, documents, notes, and timelines—so you always have the right info when you need it.",
    },
    {
      title: "Why use ApplyLog over a spreadsheet?",
      content:
        "ApplyLog is far more powerful than a basic spreadsheet. It stores job posting details even if they get taken down, highlights key skill keywords, tracks all your interview/application dates, and helps automate follow-ups.",
    },
    {
      title: "How long after an interview should I expect a response?",
      content:
        "Usually within 1–2 weeks. ApplyLog helps you monitor timelines so you know when to expect responses and when to follow up—keeping you one step ahead in your job search.",
    },
  ];

  return (
    <>
      <Nav />
      <LazySection>
        <div className="FirstContainer text-[#e5e5e5] flex gap-10 pl-10 pr-10 pt-10 h-full w-full mt-[76px]">
          <LandingTextArea>
            <div className="flex flex-col gap-8">
              <div className="text-area  flex flex-col gap-3">
                <div className="firstTop flex flex-col gap-3">
                  <p className="font-bold text-4xl leading-12">
                    An easy way to track and manage your upcoming interviews
                  </p>
                </div>
                <div className="Middle flex gap-3">
                  <div className="text-2xl text-justify flex flex-col gap-2 leading-10">
                    <p>
                      Staying organized during the interview process will ensure
                      you get hired faster.
                    </p>
                    <p>
                      Use ApplyLog to store all interview and job details
                      securely in one place.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-start">
                <Button
                  color={`bg-[#fca311]`}
                  bordercolor={`border-[#fdcf83]`}
                  buttontext={"Sign up now"}
                  hover={"hover:bg-[#fdcf83] hover:border-[#fca311]"}
                />
              </div>
            </div>
          </LandingTextArea>
          <LandingImageArea>
            <div
              style={{
                height: "500px",
                position: "relative",
              }}
            >
              <CardSwap
                cardDistance={60}
                verticalDistance={100}
                delay={3000}
                pauseOnHover={false}
              >
                <Card className="p-2">
                  <h3>Card 1</h3>
                  <p>Your content here</p>
                </Card>
                <Card className="p-2">
                  <h3>Card 2</h3>
                  <p>Your content here</p>
                </Card>
                <Card className="p-2">
                  <h3>Card 3</h3>
                  <p>Your content here</p>
                </Card>
              </CardSwap>
            </div>
          </LandingImageArea>
        </div>
      </LazySection>
      <LazySection>
        <div className="SecondContainer text-justify bg-black/60 text-[#e5e5e5] flex gap-10 p-10 h-[40vh] items-center justify-center w-full">
          <p className="text-4xl leading-12">
            Get interview-ready with
            <span className="font-bold"> ApplyLog’s Interview Tracker</span>,
            designed to help you seamlessly organize and manage every step of
            your interview journey - from application to final offer. Access key
            job and company insights instantly to boost your preparation and
            confidence for every interview.
          </p>
        </div>
      </LazySection>
      <LazySection>
        <div className="ThirdContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
          <LandingImageArea>
            <div
              style={{
                height: "300px",
                position: "relative",
              }}
            >
              <Carousel
                baseWidth={500}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
                cardHeight={400}
              />
            </div>
          </LandingImageArea>
          <LandingTextArea>
            <div className="flex flex-col gap-3">
              <p className="text-4xl font-bold">
                Organize your interview schedule
              </p>
              <div className="text-3xl leading-12 text-justify">
                <p>
                  Easily access, view, and organize your interview schedule with
                  ApplyLog's visual dashboard.
                </p>
                <p>
                  Drag-and-drop job applications into the interview section when
                  an interview is booked.
                </p>
              </div>
              <div className="Button flex justify-end ">
                <Button
                  buttontext={"Get Organized"}
                  color={`bg-[#a7c957]`}
                  bordercolor={`border-[#d1e3a8]`}
                  hover={`hover:bg-[#d1e3a8] hover:border-[#a7c957]`}
                />
              </div>
            </div>
          </LandingTextArea>
        </div>
      </LazySection>
      <LazySection>
        <div className="FourthContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
          <LandingTextArea>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold"> Stay on top of dates</p>
                <div className="text-3xl leading-12 text-justify">
                  <p>
                    From deadlines and application dates to interview schedules,
                    ApplyLog keeps track of your entire job search timeline in
                    one place.
                  </p>
                  <p>
                    With all your important dates organized, you’ll always know
                    when to follow up or when to expect a response from
                    recruiters.
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <Button
                  buttontext={"Start tracking now"}
                  color={`bg-[#3a86ff]`}
                  bordercolor={`border-[#99c0ff]`}
                  hover={`hover:bg-[#99c0ff] border-[#3a86ff]`}
                />
              </div>
            </div>
          </LandingTextArea>
          <LandingImageArea>
            <TrueFocus
              sentence="Add Track Remind"
              manualMode={true}
              blurAmount={5}
              borderColor="blue"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </LandingImageArea>
        </div>
      </LazySection>
      <LazySection>
        <div className="FifthContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
          <LandingImageArea>
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={700}
              containerHeight={450}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={false}
            />
          </LandingImageArea>
          <LandingTextArea>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold">
                  Store all documents securely
                </p>
                <div className="text-3xl leading-12 text-justify">
                  <p>
                    Tailored your resume for a specific job? Conveniently store
                    tailored resumes, cover letters and any other documents per
                    role to easily access them in preparation for your
                    interview.
                  </p>
                </div>
              </div>
              <div className="flex flex-end">
                <Button
                  buttontext={"Organize Your Documents"}
                  color={`bg-[#fca311]`}
                  bordercolor={`border-[#fdcf83]`}
                  hover={"hover:bg-[#fdcf83] hover:border-[#fca311]"}
                />
              </div>
            </div>
          </LandingTextArea>
        </div>
      </LazySection>

      <div className="SixthContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
        <LazySection>
          <LandingTextArea>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold">Manage your contact list</p>
                <div className="flex flex-col text-justify text-3xl leading-12">
                  <p>
                    When interviewing at countless companies, you’ll be
                    networking a lot.
                  </p>
                  <p>
                    Store and manage your contact list to keep a recruiter or
                    hiring manager’s contact information secure in one place.
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <Button
                  buttontext={"Start Managing Contacts"}
                  color={`bg-[#a7c957]`}
                  bordercolor={`border-[#d1e3a8]`}
                  hover={`hover:bg-[#d1e3a8] hover:border-[#a7c957]`}
                />
              </div>
            </div>
          </LandingTextArea>
        </LazySection>
        <LandingImageArea>
          <div style={{ height: "600px", position: "relative" }}>
            <ChromaGrid
              items={itemsChroma}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </LandingImageArea>
      </div>

      <LazySection>
        <div className="SeventContainer text-[#e5e5e5] flex gap-8  p-10 h-full w-full bg-black/60">
          <div className="LeftSection h-full w-2/3 flex flex-col gap-5">
            <p className="text-4xl font-bold">Frequently Asked Questions</p>
            <Accordion items={items} />
          </div>
          <div className="rightSection h-full flex-1"></div>
        </div>
      </LazySection>
    </>
  );
}
