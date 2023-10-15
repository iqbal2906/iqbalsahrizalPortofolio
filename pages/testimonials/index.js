import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Helmet } from "react-helmet";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Testimonial - Iqbal Sahrizal</title>
        <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon" data-react-helmet="true" />
      </Helmet>
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 mb-8 xl:mb-0">
          What peoples <span className="text-accent">say.</span>
        </motion.h2>
        <motion.div variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden">
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
