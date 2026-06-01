import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Gökhan Özdemir",
    role: "Project Manager",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHe3sBdBTvANg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516158647424?e=2147483647&v=beta&t=placeholder",
    linkedin: "https://www.linkedin.com/in/gokhanozdemir/",
  },
  {
    id: 2,
    name: "İlayda Avcı",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/150?img=47",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Team Member",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/150?img=12",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Team Member",
    role: "Backend Developer",
    img: "https://i.pravatar.cc/150?img=33",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <section className="w-full">

      {/* Hero */}
      <div className="bg-[#FAFAFA] py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold text-gray-400 tracking-widest">WHAT WE DO</p>
          <h1 className="mt-3 text-4xl font-extrabold text-[#252B42]">
            Innovation tailored for you
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link to="/" className="text-[#252B42] font-bold hover:text-blue-500">Home</Link>
            <span>›</span>
            <span>Team</span>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center gap-4">
              <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#252B42]">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
              <div className="flex gap-3 text-[#23A6F0]">
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9v5.6h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56v14.91c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24.03 0 21.99 0 19.47V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zm-7.2 0h-2.16c-.72 0-.96.36-.96.84v1.56h3.12l-.48 3.12h-2.64V18h-3.12V10.08H8.4V6.96h2.16V5.16C10.56 2.88 12 1.68 14.04 1.68c.96 0 2.76.12 2.76.12V4.56z"/>
                  </svg>
                </a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56v14.91C24 21.99 21.96 24.03 19.44 24.03H4.56C2.04 24.03 0 21.99 0 19.47V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM9.12 18.72V9.36H6.24v9.36h2.88zm-1.44-10.56c.96 0 1.56-.66 1.56-1.5-.03-.84-.6-1.5-1.53-1.5s-1.56.66-1.56 1.5c0 .84.6 1.5 1.53 1.5zm12 10.56v-5.16c0-2.76-1.47-4.04-3.42-4.04-1.56 0-2.28.87-2.67 1.47v-1.27H10.8c.03.84 0 9.36 0 9.36h2.88v-5.22c0-.27.03-.54.09-.72.21-.54.69-1.08 1.5-1.08 1.05 0 1.47.81 1.47 1.98v5.04h2.94z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}