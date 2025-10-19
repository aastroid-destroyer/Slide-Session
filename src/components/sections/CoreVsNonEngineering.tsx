import { motion } from "framer-motion";
import { BookOpen, Code, TrendingUp } from "lucide-react";

export const CoreVsNonEngineering = () => {
  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Balance is key. While theoretical subjects build your foundation,
        practical coding skills are what employers really look for.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <motion.div
          className="border border-primary/30 rounded-lg p-8 bg-card/50 neon-hover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <BookOpen className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-3xl font-orbitron font-semibold mb-4 text-primary">Theory Subjects</h3>
          <h3 className="text-xl font-orbitron font-light mb-4 text-primary">Shoja Kotha Egula joto taire naire na kore sesh kora jay... Kintu Abar ekdom chere dile dhora khaba</h3>
          
        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-8 bg-card/50 neon-hover"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Code className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-3xl font-orbitron font-semibold mb-4 text-primary">Core CS Subjects</h3>
          <h3 className="text-xl font-orbitron font-light mb-4 text-primary">SPL,DS,OOP, Algorithm</h3>
          
        </motion.div>
      </div>

      <motion.div
        className="mt-8 p-6 bg-primary/10 border border-primary/50 rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-start gap-4">
          <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
          <p className="text-lg font-mono text-foreground">
            <span className="text-primary font-semibold">Pro Tip:</span> Joto Valo Kore Basic Strong korba Toto  Valo tmi agamir Subject gula Parba
          </p>
        </div>
      </motion.div>
    </div>
  );
};
