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
  ];
  const projects: projectInferface[] = [
    {
      title: "CDEX - Centralized decentralized exchanage",
      description: "Wallet as a Service - Manage your crypto wallet with ease",
      link: "https://cdex-zeta.vercel.app/",
    },
    {
      title: "Chat-app",
      description: "Chat app with drizzle, postgresql, nodejs and React",
      link: "https://chat-app-psi-neon.vercel.app/",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <div className="flex pb-5">
        {socials.map((social, index) => (
          <div className="flex" key={index}>
            <Link href={social.link} target="_blank" className="underline">
              {social.title}
            </Link>
            {index !== socials.length - 1 ? (
              <div className="px-2 text-gray-500 font-bold">/</div>
            ) : null}
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-4xl py-8">projects</h1>
        <div className="flex flex-col space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col space-y-1">
              <Link href={project.link} target="_blank" className="underline font-semibold text-lg">
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
