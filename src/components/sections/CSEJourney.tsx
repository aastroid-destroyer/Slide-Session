import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase } from "lucide-react";

export const CSEJourney = () => {
  const journeySteps = [
    {
      icon: GraduationCap,
      title: "Learn",
      description: "সবচেয়ে বেশি সময় দিবে শেখার জন্যই",
    },
    {
      icon: Code2,
      title: "Try & Try Again",
      description: "তুমি হেরে যাবা ওইদিন যেদিন তুমি চেষ্টা করা ছেড়ে দিবা",
    },
    {
      icon: Briefcase,
      title: "Succeed",
      description: "নিজেকে নিজের স্বপ্নের জায়গায় নিয়ে যাও",
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-4xl md:text-7xl lg:text-8xl text-foreground/90 font-mono leading-relaxed mb-4 neon-glow">
          Your CSE Journey
        </p>
        <p className="text-2xl md:text-4xl text-foreground/90 font-mono leading-relaxed mb-4 v">
          Welcome to Your
        </p>
        <p className="text-3xl md:text-5xl font-orbitron font-bold text-primary neon-glow mb-8">
          Computer Science Engineering Journey
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-3xl mx-auto">
          Tumi Kivabe Valo Korba er jonno Halka Patla ekta Session
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center space-y-6 p-8 border border-primary/30 rounded-lg bg-card/50 neon-hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
          >
            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center neon-border animate-glow-pulse">
              <step.icon className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-orbitron font-bold text-primary">{step.title}</h3>
            <p className="text-lg text-muted-foreground font-mono">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <p className="text-2xl font-mono text-primary animate-pulse">
          Let's get started with your Mentors ↓
        </p>
      </motion.div>
    </div>
  );
};
