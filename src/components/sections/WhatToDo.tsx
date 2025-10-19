import { motion } from "framer-motion";
import { CheckCircle2, Code, GitBranch, Rocket } from "lucide-react";

export const WhatToDo = () => {
  const actionItems = [
    "Master one programming language deeply (C/C++/Python)",
    "Solve DSA problems daily (LeetCode, Codeforces, HackerRank)",
    "Build real projects & host them on GitHub",
    "Learn Git, Linux basics, and development tools",
    "Contribute to open source projects",
    "Network with peers, attend hackathons",
    "Create a strong LinkedIn & GitHub profile",
    "Stay consistent—progress compounds over time",
  ];

  return (

    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <motion.div
          className="flex flex-col items-center text-center p-6 border border-primary/30 rounded-lg bg-card/50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Code className="w-12 h-12 text-primary mb-3" />
          <p className="font-mono text-2xl text-muted-foreground">Code Every Day</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center p-6 border border-primary/30 rounded-lg bg-card/50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <GitBranch className="w-12 h-12 text-primary mb-3" />
          <p className="font-mono text-2xl text-muted-foreground">Eat Error</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center p-6 border border-primary/30 rounded-lg bg-card/50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Rocket className="w-12 h-12 text-primary mb-3" />
          <p className="font-mono text-2xl text-muted-foreground">Stay Consistent</p>
        </motion.div>
      </div>
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Your roadmap to success. Follow these steps consistently,
        and you'll be unstoppable by the time placements arrive.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-4 mt-12">
        {actionItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 border border-primary/30 rounded-lg p-4 bg-card/50 neon-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground/90 font-mono">{item}</p>
          </motion.div>
        ))}
      </div>


    </div>
  );
};
