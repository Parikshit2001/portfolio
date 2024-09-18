import Link from "next/link";

interface socialInterface {
  title: string;
  link: string;
}

interface projectInferface {
  title: string;
  description: string;
  link: string;
}
export default function Home() {
  const socials: socialInterface[] = [
    { title: "parikshit", link: "" },
    {
      title: "linkedIn",
      link: "https://www.linkedin.com/in/parikshit-gupta-dev/",
    },
    { title: "github", link: "https://github.com/Parikshit2001" },
    { title: "Leetcode", link: "https://leetcode.com/u/parikshitgupta2001/" },
    {
      title: "resume",
      link: "https://drive.google.com/file/d/1v4zPBaTp3aAfGe65h4vqQJRB1Ej2DLmQ/view?usp=drive_link",
    },
  ];

  const CurrentlyWorkingOn: projectInferface[] = [
    {
      title: "Chat Application",
      description:
        "A chat application made using nodeJs, React and drizzle ORM. Using websocket for realtime communication",
      link: "https://chat-app-psi-neon.vercel.app/",
    },
  ];

  const projects: projectInferface[] = [
    {
      title: "CDEX - Centralized decentralized exchanage",
      description: "Wallet as a Service - Manage your crypto wallet with ease",
      link: "https://cdex-zeta.vercel.app/",
    },
    {
      title: "medium",
      description:
        "A medium clone made with React in frontend, used hono library for writing serverless backend and tailwindcss with serverles backend deployed on cloudflare",
      link: "https://medium-fontend.vercel.app/",
    },
    {
      title: "fireBlog",
      description:
        "Blogging website which let you publish and read blogs anonymously. Made with react, tailwindcss and used appwrite Baas",
      link: "https://fire-blog-abc.vercel.app/",
    },
    {
      title: "Open Source Contirbutions",
      description: "",
      link: "https://github.com/pulls?q=is%3Apr+author%3AParikshit2001+archived%3Afalse+is%3Aclosed",
    },
  ];

  const smallProjects: projectInferface[] = [
    {
      title: "Travel Buddy",
      description: "",
      link: "https://parikshit2001.github.io/travel-website/",
    },
    {
      title: "landing page",
      description: "",
      link: "https://parikshit2001.github.io/landing-page/",
    },
    {
      title: "Course explorer",
      description: "",
      link: "https://cohort-web3.vercel.app/",
    },
    {
      title: "Paytm clone",
      description: "",
      link: "https://paytm-frontend-omega.vercel.app/signin",
    },
    {
      title: "Parallax Scrolling",
      description: "",
      link: "https://parikshit2001.github.io/parallax-scrolling/",
    },
    {
      title: "quiz app",
      description: "",
      link: "https://quiz-app-eta-eosin.vercel.app/",
    },
  ];

  const imageURL =
    "https://media.licdn.com/dms/image/v2/D5635AQG0NWkF-O8eHA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1721907852642?e=1726844400&v=beta&t=VHF_mmryUc1s7TTDmYZUTyn1t1aKL5dtrpDYaavYMFQ";

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <div className="flex pb-5 items-center">
        {socials.map((social, index) => (
          <div className="flex" key={index}>
            <Link
              href={social.link}
              target={`${social.link === "" ? "" : "_blank"}`}
              className="underline"
            >
              {social.title}
            </Link>
            {index !== socials.length - 1 ? (
              <div className="px-2 text-gray-500 font-bold">/</div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-fit absolute right-[10vh] top-[4vh]">
        <img src={imageURL} alt="" className="rounded-full w-[15vh] h-[15vh]" />
      </div>
      <div className="flex space-x-10">
        <div>
          <h1 className="text-4xl py-8">projects</h1>
          <div className="flex flex-col space-y-8">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col space-y-1">
                <Link
                  href={project.link}
                  target="_blank"
                  className="underline font-semibold text-lg"
                >
                  {project.title}
                </Link>
                <p className="max-w-96">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl py-8">small frontend projects</h1>
          <div className="flex flex-col space-y-4">
            {smallProjects.map((project) => (
              <div key={project.title} className="flex flex-col space-y-1">
                <Link
                  href={project.link}
                  target="_blank"
                  className="underline font-semibold "
                >
                  {project.title}
                </Link>
                <p className="max-w-96">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl py-8">Currently Working on</h1>
        <div className="flex flex-col space-y-8">
          {CurrentlyWorkingOn.map((project) => (
            <div key={project.title} className="flex flex-col space-y-1">
              <Link
                href={project.link}
                target="_blank"
                className="underline font-semibold text-lg"
              >
                {project.title}
              </Link>
              <p className="max-w-96">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
