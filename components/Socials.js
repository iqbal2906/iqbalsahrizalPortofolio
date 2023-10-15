import Link from "next/link";

import { RiInstagramLine, RiTwitterXLine, RiThreadsLine, RiLinkedinLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.instagram.com/iqbaaltanpa.e/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://twitter.com/Iqbal_S29"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine />
      </Link>
      <Link href={"https://www.threads.net/@iqbaaltanpa.e"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiThreadsLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/iqbal-sahrizal-994299135/"} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
