import { motion } from "framer-motion";
import { HeartHandshake, HelpCircle, MessageCircle } from "lucide-react";

export const ThankYou = () => {

  return (
    <div className="space-y-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >

        <HeartHandshake className="w-20 h-20 text-primary mx-auto mb-6"/>
        <p className="text-3xl md:text-8xl font-orbitron font-bold text-primary neon-glow mb-8">
          Thank You
        </p>
      </motion.div>

      
    </div>
  );
};
