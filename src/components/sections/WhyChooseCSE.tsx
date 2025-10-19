import { motion } from "framer-motion";
import { Cpu, Rocket, Zap } from "lucide-react";

export const WhyChooseCSE = () => {
  const reasons = [
    { icon: Cpu, text: "Shape the future with cutting-edge technology" },
    { icon: Rocket, text: "Endless career opportunities in tech" },
    { icon: Zap, text: "Solve real-world problems with code" },
  ];

  return (
    <div className="space-y-8">
      <motion.p
        className="text-xl md:text-2xl text-foreground/90 font-mono leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Computer Science Engineering isn't just a degree— Eta Korba tumi tomar future er rasta khule neyar jonno jekhane tmi chailei je kono dike move korte Parba...
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="border border-primary/30 rounded-lg p-6 neon-hover bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <reason.icon className="w-12 h-12 text-primary mb-4" />
            <p className="text-lg font-mono">{reason.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
