import { motion } from "framer-motion";
import { Terminal, Layers, Puzzle } from "lucide-react";

export const WhatIsProgramming = () => {
  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Programming is the art of giving instructions to a computer.
        It's problem-solving, creativity, and logic combined into one skill.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="w-16 h-16 rounded-lg border-2 border-primary flex items-center justify-center neon-border">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold text-primary">Syntax</h3>
          <p className="text-muted-foreground font-mono">
            The grammar and rules of a programming language
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="w-16 h-16 rounded-lg border-2 border-primary flex items-center justify-center neon-border">
            <Layers className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold text-primary">Logic</h3>
          <p className="text-muted-foreground font-mono">
            Breaking down problems into step-by-step solutions
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="w-16 h-16 rounded-lg border-2 border-primary flex items-center justify-center neon-border">
            <Puzzle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-orbitron font-semibold text-primary">Practice</h3>
          <p className="text-muted-foreground font-mono">
            Learning by doing - solving real problems daily
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 p-8 border border-primary/30 rounded-lg bg-card/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h3 className="text-2xl font-orbitron font-semibold mb-4 text-primary">Start Simple</h3>
        <div className="space-y-3 text-muted-foreground font-mono">
          <p className="text-xl">1. Choose a language (C, C++, Python)</p>
          <p className="text-xl">2. Learn basic syntax (variables, loops, conditions)</p>
          <p className="text-xl">3. Solve simple problems on platforms like LeetCode, HackerRank, Codeforces, CoderOJ</p>
          <p className="text-xl">4. Build small projects to apply what you learn</p>
        </div>
      </motion.div>
    </div>
  );
};
