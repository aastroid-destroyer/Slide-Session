import { motion } from "framer-motion";
import { Award, Briefcase, TrendingUp } from "lucide-react";

export const CGPAImportance = () => {
  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Let's be honest: CGPA matters, but it's not everything.
        It opens doors, but skills keep you in the room.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <motion.div
          className="border border-primary/30 rounded-lg p-6 bg-card/50 neon-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Award className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Eligibility</h3>
          <p className="text-muted-foreground font-mono">Many companies have CGPA cutoffs (3.5-3.6)</p>
        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-6 bg-card/50 neon-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Briefcase className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Think Outside The Box</h3>
          <p className="text-muted-foreground font-mono">Kokhono Ek Mukhi Chinta korba na</p>
        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-6 bg-card/50 neon-hover"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TrendingUp className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">How Skills Matters</h3>
          <p className="text-muted-foreground font-mono">Skills & projects matter more in interviews (BD Jobs er kothai dhoro)</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 border-l-4 border-primary p-6 bg-card/30 rounded-r-lg space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <p className="text-lg font-mono text-foreground">
          <span className="text-primary font-bold">Reality Check:</span>
        </p>
        <p className="text-muted-foreground font-mono">
          A 3.9 or 4.00 CGPA with no projects {'<'} A 3.5 or 3.6 CGPA with strong GitHub profile & live projects
        </p>
        <p className="text-primary font-mono italic">
          Maintain decent CGPA, but invest time in gaining skills in programming.
        </p>
      </motion.div>
    </div>
  );
};
