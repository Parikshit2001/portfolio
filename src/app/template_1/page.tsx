import Link from "next/link";
import Image from "next/image";

// More descriptive and type-safe interfaces
interface SocialLink {
  title: string;
  url: string;
  icon?: string; // Optional icon for social links
}

interface Project {
  title: string;
  description: string;
  technologies?: string[]; // Add technologies used
  githubLink?: string;
  liveLink: string;
}

export default function page() {
  const socialLinks: SocialLink[] = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/parikshit-gupta-dev/",
    },
    { title: "GitHub", url: "https://github.com/Parikshit2001" },
    { title: "LeetCode", url: "https://leetcode.com/u/parikshitgupta2001/" },
    {
      title: "Resume",
      url: "https://drive.google.com/file/d/1v4zPBaTp3aAfGe65h4vqQJRB1Ej2DLmQ/view",
    },
  ];

  const mainProjects: Project[] = [
    {
      title: "CDEX - Centralized Decentralized Exchange",
      description: "Wallet as a Service - Manage your crypto wallet with ease",
      technologies: ["React", "Blockchain", "Web3"],
      liveLink: "https://cdex-zeta.vercel.app/",
      githubLink: "https://github.com/your-repo/cdex",
    },
    // ... other main projects
  ];

  const currentProject: Project = {
    title: "Chat Application",
    description: "Real-time chat app with WebSocket communication",
    technologies: ["NodeJS", "React", "WebSocket", "Drizzle ORM"],
    liveLink: "https://chat-app-psi-neon.vercel.app/",
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-8 md:p-16">
      {/* Header with Social Links */}
      <header className="flex justify-between items-center mb-12">
        <nav className="flex space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.title}
              href={social.url}
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              {social.title}
            </Link>
          ))}
        </nav>

        {/* <Image
          src="https://media.licdn.com/dms/image/v2/D5635AQG0NWkF-O8eHA/profile-framedphoto-shrink_400_400/0/1721907852642"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500"
        /> */}
      </header>

      {/* Main Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mainProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Currently Working On */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Currently Working On</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            <Link
              href={currentProject.liveLink}
              target="_blank"
              className="hover:text-blue-400"
            >
              {currentProject.title}
            </Link>
          </h3>
          <p className="text-gray-300">{currentProject.description}</p>
        </div>
      </section>
    </div>
  );
}
