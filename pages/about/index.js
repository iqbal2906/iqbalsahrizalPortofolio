// icons
import { useEffect, useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaVuejs, FaDocker, FaGit, FaNodeJs } from "react-icons/fa";

import { SiAdobephotoshop, SiRedux, SiAdobeillustrator, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandNuxt } from "react-icons/tb";

import { client } from "../../client";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const About = () => {
  const [index, setIndex] = useState(0);

  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            {
              name: "Html5",
              icon: <FaHtml5 />,
            },
            {
              name: "CSS3",
              icon: <FaCss3 />,
            },
            {
              name: "Javascript",
              icon: <FaJs />,
            },
            {
              name: "Typescript",
              icon: <SiTypescript />,
            },
            {
              name: "ReactJS",
              icon: <FaReact />,
            },
            {
              name: "NextJs",
              icon: <TbBrandNextjs />,
            },
            {
              name: "Redux",
              icon: <SiRedux />,
            },
            {
              name: "VueJS",
              icon: <FaVuejs />,
            },
            {
              name: "NuxtJS",
              icon: <TbBrandNuxt />,
            },
            {
              name: "Docker",
              icon: <FaDocker />,
            },
            {
              name: "Git",
              icon: <FaGit />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs />,
            },
          ],
        },
        {
          title: "Graphic Design",
          icons: [
            {
              name: "Figma",
              icon: <FaFigma />,
            },
            {
              name: "Photoshop",
              icon: <SiAdobephotoshop />,
            },
            {
              name: "Illustrator",
              icon: <SiAdobeillustrator />,
            },
          ],
        },
      ],
    },
    {
      title: "experiences",
      info: [
        {
          title: "Frontend Developer",
          company: "Indo Fin Tek (Dompet Kilat)",
          stage: "Oct 2022 - present",
        },
        {
          title: "Frontend Developer",
          company: "Giat Bangun Indonesia (Pazemo)",
          stage: "Mar 2022 - Oct 2022",
        },
        {
          title: "Frontend Developer",
          company: "Itommey Group & BRI",
          stage: "Aug 2021 - Des 2021",
        },
        {
          title: "Fullstack Developer",
          company: " Mugan Technology Indonesia",
          stage: "Nov 2020 - Aug 2021",
        },
        {
          title: "Junior Frontend Developer",
          company: "Citra Swarna Group",
          stage: "Aug 2019 - Jan 2020",
        },
      ],
    },
    {
      title: "educations",
      info: [
        {
          title: "SMKN 2 Pandeglang",
          company: "Teknik Kendaraan Ringan",
          stage: "2009 - 2012",
        },
        {
          title: "Universitas Bina Sarana Informatika",
          company: "Sistem Informasi",
          stage: "2016 - 2019",
        },
      ],
    },
    {
      title: "courses",
      info: [
        {
          title: "English Course",
          company: "Global English (Pare - Kediri)",
          stage: "2012",
        },
        {
          title: "Fullstack Javascript Developer",
          company: "Hactiv8",
          stage: "2019",
        },
      ],
    },
  ];

  /* eslint-disable */
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Iqbal Sahrizal</title>
        <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon" data-react-helmet="true" />
      </Helmet>
      <Circles />
      <motion.div variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[140px]">
        <Avatar />
      </motion.div>
      <div className="overflow-y-auto container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            Captivating <span className="text-accent">stories</span> birth magnificient designs.
          </motion.h2>
          <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            4 Years ago, I began as a developer. Since then, I've done work for agencies, startups, and more company.
          </motion.p>
          <motion.div variants={fadeIn("right", 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of work experiences</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied companies</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div className={`${index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg items-start relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} key={itemIndex} onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 xl:items-start items-center">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col max-w-max gap-x-2 xl:items-start items-center text-white/60">
                  <div className="font-bold mb-2">
                    {item.title}
                    <span className="font-light">
                      {item.company ? "-" : ""} {item?.company}
                    </span>
                  </div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 flex-wrap gap-y-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="group flex relative pb-5" key={itemIndex}>
                          <div className="text-white text-2xl">{icon.icon}</div>
                          <span
                            className="group-hover:opacity-100 transition-opacity px-1 text-sm text-white/60 rounded-md absolute left-1/2 
                        -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                          >
                            {icon.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
