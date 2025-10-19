import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PresentationSectionProps {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
}

export const PresentationSection = ({ id, title, children, className = "" }: PresentationSectionProps) => {
    return (
        <section
            id={id}
            className={`min-h-screen w-full snap-section flex items-center justify-center p-8 relative ${className}`}
        >
            <div className="max-w-6xl w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-8 neon-glow text-primary"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {title}
                    </motion.h2>
                    {children}
                </motion.div>
            </div>
        </section>
    );
};
