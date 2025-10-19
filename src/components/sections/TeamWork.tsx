import { motion } from "framer-motion";
import { Users, MessageSquare, GitBranch } from "lucide-react";

export const TeamWork = () => {
  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        No developer is an island. Real-world projects require collaboration,
        communication, and the ability to work with others effectively.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <motion.div
          className="border border-primary/30 rounded-lg p-8 bg-card/50 neon-hover flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Users className="w-16 h-16 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Collaboration</h3>
          <p className="text-muted-foreground font-mono">
            Work together on complex problems
          </p>
        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-8 bg-card/50 neon-hover flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <MessageSquare className="w-16 h-16 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Communication</h3>
          <p className="text-muted-foreground font-mono">
            Explain ideas clearly to technical & non-technical people
          </p>
        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-8 bg-card/50 neon-hover flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <GitBranch className="w-16 h-16 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Version Control</h3>
          <p className="text-muted-foreground font-mono">
            Master Git & GitHub for team development
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 p-6 bg-primary/10 border border-primary/50 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <p className="text-lg font-mono text-foreground">
          <span className="text-primary font-semibold">Remember:</span> Fail Fast, Learn Faster tmi joto beshi nijeke onnoder sathe engage korba toto taratari nijer vul ta dhorte parba toto taratari shikhba
        </p>
      </motion.div>
    </div>
  );
};
