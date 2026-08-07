import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`glass rounded-2xl p-4 cursor-pointer transition-shadow hover:shadow-2xl ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}