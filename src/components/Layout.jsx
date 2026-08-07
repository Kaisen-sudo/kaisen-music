import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.4, ease: 'easeInOut' };

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main
        className="flex-1 container mx-auto px-4 py-8"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}