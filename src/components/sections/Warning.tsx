import { motion } from "framer-motion";
import { Terminal, Layers, Puzzle, Brain, Axe, Scale, Network } from "lucide-react";
/* Haeeee */
export const Warning = () => {
    return (
        <div className="space-y-8">
            <motion.div
                className="mt-12 p-8 border border-primary/30 rounded-lg bg-card/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <h1 className="text-center text-5xl font-orbitron font-semibold mb-4 text-primary neon-glow">Warning.....Warning</h1>
                <h1 className="text-center text-5xl font-semibold mb-4 text-red-600 
               drop-shadow-[0_0_20px_rgba(255,1,1,100)] 
               ">
                    !!!!!!!!!!
                </h1>


            </motion.div>


            <motion.div
                className="mt-12 p-8 border border-primary/30 rounded-lg bg-card/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <div className="flex gap-5">
                    <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center neon-border animate-glow-pulse">
                        <Network className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-5xl font-orbitron font-semibold mb-4 text-primary">Say No To AI <br /> <span className="text-2xl">বিশেষ করে আমাদের চলার সঙ্গী ChatGPT ভাই</span></h3>
                </div>

                <div className="space-y-4 text-muted-foreground font-mono">
                    <p className="flex gap-4 text-2xl"> <Axe />  ChatGPT or Onno jekono AI use kora mane Nijer Paye Nije Kural Mara</p>
                    <p className="flex gap-4 text-2xl"> <Scale />  Ritu Medam er Samne Chat GPT niye dhora mane Jibon dhongsho</p>
                    <p className="flex gap-4 text-2xl"> <Brain />  Make Your Brain The most Powerfull Compiler</p>
                    <p className="flex gap-4 text-2xl"> <Brain /> AI amader analytical thinking nosto kore dey, tai nijer valo ta bujhar cheshta korba</p>

                </div>
            </motion.div>
        </div>
    );
};
