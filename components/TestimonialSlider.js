import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { FaQuoteLeft } from "react-icons/fa";

import { Navigation, Pagination } from "swiper";
import Image from "next/image";

// data
const testimonialData = [
  {
    image: "/t-ava-1.png",
    name: "Muhammad Jafar Shodiq",
    position: "Backend Developer at PT Axiata Digital Services Indonesia",
    message: "He is Hard Worker person, he shows his passion learning, even though he faced a problem that he never meet before, he can come up with a solution. (via LinkedIn)",
  },
  {
    image: "/t-ava-2.png",
    name: "Nurul Hidayati, SE, SH",
    position: "HRD at PT Giat Bangun Indonesia (Pazemo)",
    message: "Iqbal is very motivated, forward thingking and also intellegent Front End Engineer who has a lot knowledge in technology. His so enthuasiat, fast learning and passionate about financial technology. I'll trust Iqbal will lead a team and finish all the task perfectly! it was fun and happy to work with Iqbal! (via LinkedIn)",
  },
  {
    image: "/t-ava-3.png",
    name: "Dino Priyano",
    position: "Android Developer at PT Global Digital Niaga (Blibli)",
    message: "Iqbal is a creative person and good at technology, especially front end development. I know Iqbal is a very productive person, quick to understand new things, and very friendly. I am very happy to have a colleague like Iqbal. (via LinkedIn)",
  },
  {
    image: "/t-ava-4.png",
    name: "Ahmad Fajar Islami",
    position: "Backend Developer at PT Kawan Lama Sejahtera",
    message: "When i worked with Iqbal, he worked as Frontend Developer and I as a Backend Developer, He has the ability to learn quickly, quick to learn new things and friendly. He has high CSS skills. (via LinkedIn)",
  },
  {
    image: "/t-ava-5.png",
    name: "Yeska Haganta",
    position: "Software Engineer at Kementerian Perdagangan Republik Indonesia",
    message: "Well, he is someone who always ready to be tired, when the task is undone, he never give up to solve the problem before the tasks is done! (via LinkedIn)",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
