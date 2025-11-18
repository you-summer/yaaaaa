import { motion } from "framer-motion";

const FadeFrameMotion = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
};
export default FadeFrameMotion;
