import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";

export const QAndA = () => {
  const faqs = [
    {
      q: "Which programming language should I start with?",
      a: "Python for beginners due to simple syntax. Java or C++ for competitive programming.",
    },
    {
      q: "How important are certifications?",
      a: "Skills > Certifications. Focus on projects and problem-solving first.",
    },
    {
      q: "Should I do internships early?",
      a: "Yes! Even unpaid internships provide real-world experience & resume value.",
    },
    {
      q: "How to prepare for technical interviews?",
      a: "Master DSA, practice on LeetCode, work on system design basics, build projects.",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <MessageCircle className="w-20 h-20 text-primary mx-auto mb-6" />
        <p className="text-3xl md:text-5xl font-orbitron font-bold text-primary neon-glow mb-8">
          Q&A
        </p>
        <p className="text-3xl md:text-5xl font-orbitron font-bold text-primary neon-glow mb-8">
          Thank You
        </p>
      </motion.div>

      
    </div>
  );
};
