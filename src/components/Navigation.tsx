import { motion } from "framer-motion";

interface NavigationProps {
  activeSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

export const Navigation = ({ activeSection, totalSections, onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onNavigate(index)}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            activeSection === index
              ? "border-primary bg-primary scale-125 shadow-[0_0_15px_rgba(0,255,136,0.8)]"
              : "border-primary/50 bg-transparent hover:border-primary hover:scale-110"
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </nav>
  );
};
