import { motion } from "framer-motion";
import { AlertCircle, Bug, Clock, Brain } from "lucide-react";

export const BeginnerChallenges = () => {
    const challenges = [
        {
            icon: AlertCircle,
            title: "Overwhelming Information",
            solution: "Focus on one language & master basics first",
        },
        {
            icon: Bug,
            title: "Debugging Errors",
            solution: "Read error messages carefully, use Google & Stack Overflow",
        },
        {
            icon: Clock,
            title: "Time Management",
            solution: "Practice daily, even 30 minutes consistently helps",
        },
        {
            icon: Brain,
            title: "Imposter Syndrome",
            solution: "Everyone starts somewhere, progress over perfection",
        },
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
                Every expert was once a beginner. These challenges are normal—
                knowing them in advance helps you overcome them faster.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
                {challenges.map((challenge, index) => (
                    <motion.div
                        key={index}
                        className="border border-primary/30 rounded-lg p-6 bg-card/50 neon-hover"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                        <div className="flex items-start gap-4">
                            <challenge.icon className="w-10 h-10 text-primary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-orbitron font-semibold mb-2 text-primary">
                                    {challenge.title}
                                </h3>
                                <p className="text-muted-foreground font-mono">
                                    <span className="text-primary">→</span> {challenge.solution}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-8 p-6 border-l-4 border-primary bg-card/30 rounded-r-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <p className="text-lg font-mono text-primary italic">
                    "The only way to learn programming is to write programs." — Dennis Ritchie
                </p>
            </motion.div>
        </div>
    );
};
