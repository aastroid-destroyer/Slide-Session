import { motion } from "framer-motion";
import { Code2, Database, Network } from "lucide-react";

export const WhatIsCSE = () => {
  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Computer Science Engineering is the study of computers and computational systems.
        It's where theory meets practice, algorithms meet applications, and ideas become reality.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center neon-border animate-glow-pulse">
            <Code2 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold text-primary">Programming</h3>
          <p className="text-muted-foreground font-mono">Writing code that powers applications</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center neon-border animate-glow-pulse">
            <Database className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold text-primary">Data Structures</h3>
          <p className="text-muted-foreground font-mono">Organizing information efficiently</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center neon-border animate-glow-pulse">
            <Network className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold text-primary">Algorithms</h3>
          <p className="text-muted-foreground font-mono">Solving complex problems step by step</p>
        </motion.div>
      </div>
    </div>
  );
};
