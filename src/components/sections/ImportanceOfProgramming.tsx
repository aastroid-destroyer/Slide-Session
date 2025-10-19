import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

export const ImportanceOfProgramming = () => {
  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Programming is the language of the digital age. It's not just about writing code—
        it's about logical thinking, problem-solving, and creating solutions that impact millions.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <motion.div
          className="border border-primary/30 rounded-lg p-6 neon-hover bg-card/50"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Code className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">CSE pore tmi ki korte parba</h3>
          <ul>
            <li className="text-muted-foreground font-mono text-xl">মায়ের দোয়া PC Parts</li>
            <li className="text-muted-foreground font-mono text-xl">Flexiload Shop</li>
            <li className="text-muted-foreground font-mono text-xl">Photocopy Shop</li>
            <li className="text-muted-foreground font-mono text-xl">Keyboard Repair Shop</li>
            <li className="text-muted-foreground font-mono text-xl">Laptop Charger Rent</li>
            <li className="text-muted-foreground font-mono text-xl">USB Cable Store</li>
            <li className="text-muted-foreground font-mono text-xl">Wi-Fi Password Seller</li>
            <li className="text-muted-foreground font-mono text-xl">Data Recovery by Prayer</li>
            <li className="text-muted-foreground font-mono text-xl">Printer Ink Dealer</li>
          </ul>


        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-6 neon-hover bg-card/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Lightbulb className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Actual Core Area Of CSE</h3>
          <ul>
            <li className="text-muted-foreground font-mono text-xl">Data Structures and Algorithms</li>
            <li className="text-muted-foreground font-mono text-xl">Computer Architecture</li>
            <li className="text-muted-foreground font-mono text-xl">Operating Systems</li>
            <li className="text-muted-foreground font-mono text-xl">Databases</li>
            <li className="text-muted-foreground font-mono text-xl">Computer Networks</li>
            <li className="text-muted-foreground font-mono text-xl">Software Engineering</li>
            <li className="text-muted-foreground font-mono text-xl">Artificial Intelligence and Machine Learning</li>
            <li className="text-muted-foreground font-mono text-xl">Cybersecurity</li>
            <li className="text-muted-foreground font-mono text-xl">Web and App Development</li>
            <li className="text-muted-foreground font-mono text-xl">Cloud Computing</li>
            <li className="text-muted-foreground font-mono text-xl">Embedded Systems</li>
            <li className="text-muted-foreground font-mono text-xl">IoT (Internet of Things)</li>
          </ul>
        </motion.div>

        <motion.div
          className="border border-primary/30 rounded-lg p-6 neon-hover bg-card/50"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Target className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">Career Growth</h3>
          <ul>
            <li className="text-muted-foreground font-mono text-xl">Software Developer</li>
            <li className="text-muted-foreground font-mono text-xl">Data Scientist</li>
            <li className="text-muted-foreground font-mono text-xl">AI/ML Engineer</li>
            <li className="text-muted-foreground font-mono text-xl">Systems Analyst</li>
            <li className="text-muted-foreground font-mono text-xl">Cybersecurity Specialist</li>
            <li className="text-muted-foreground font-mono text-xl">Cloud Engineer</li>
            <li className="text-muted-foreground font-mono text-xl">Game Developer</li>
            <li className="text-muted-foreground font-mono text-xl">Researcher or Academic</li>
          </ul>

        </motion.div>
      </div>

      <motion.div
        className="mt-8 p-6 border-l-4 border-primary bg-card/30 rounded-r-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <p className="text-lg font-mono italic text-primary">
          "Programming is learned by writing programs." — Brian Kernighan
        </p>
      </motion.div>
    </div>
  );
};
