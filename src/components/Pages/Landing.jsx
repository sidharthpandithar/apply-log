import Button from "../reuseables/Button";
import LandingTextArea from "../reuseables/LandingTextArea";
import LandingImageArea from "../reuseables/LandingImageArea";

export default function Landing() {
  return (
    <>
      <div className="FirstContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
        <LandingTextArea>
          <div className="flex flex-col gap-8">
            <div className="text-area flex flex-col gap-3">
              <div className="firstTop flex flex-col gap-3">
                <p className="text-2xl font-semibold">ApplyLog</p>
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
                    Use ApplyLog to store all interview and job details securely
                    in one place.
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
        <LandingImageArea />
      </div>
      <div className="SecondContainer text-justify bg-[#14213d] text-[#e5e5e5] flex gap-10 p-10 h-[40vh] items-center justify-center w-full">
        <p className="text-4xl leading-12">
          Get interview-ready with
          <span className="font-bold"> ApplyLog’s Interview Tracker</span>,
          designed to help you seamlessly organize and manage every step of your
          interview journey - from application to final offer. Access key job
          and company insights instantly to boost your preparation and
          confidence for every interview.
        </p>
      </div>
      <div className="ThirdContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
        <LandingImageArea />
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
      <div className="FourthContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
        <LandingTextArea>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-4xl font-bold"> Stay on top of dates</p>
              <div className="text-3xl leading-12 text-justify">
                <p>
                  From deadlines and application dates to interview schedules,
                  ApplyLog keeps track of your entire job search timeline in one
                  place.
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
        <LandingImageArea />
      </div>
      <div className="FifthContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
        <LandingImageArea />
        <LandingTextArea>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-4xl font-bold">Store all documents securely</p>
              <div className="text-3xl leading-12 text-justify">
                <p>
                  Tailored your resume for a specific job? Conveniently store
                  tailored resumes, cover letters and any other documents per
                  role to easily access them in preparation for your interview.
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
      <div className="SixthContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full">
        <LandingTextArea>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-4xl font-bold">Manage your contact list</p>
              <div className="flex flex-col text-justify text-3xl leading-12">
                <p>
                  When interviewing at countless companies, you’ll be networking
                  a lot.
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
        <LandingImageArea />
      </div>
      <div className="SeventContainer text-[#e5e5e5] flex gap-10 p-10 h-full w-full bg-[#14213d] ">
        <p className="text-4xl font-bold">Frequently Asked Questions</p>
      </div>
    </>
  );
}
