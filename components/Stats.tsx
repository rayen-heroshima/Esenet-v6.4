"use client";

import { motion } from 'framer-motion';
import { Briefcase, Clock, Mic } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-32 px-4 md:px-8 bg-gradient-to-b from-[#003366] to-[#004080]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <StatsCard icon={<Mic className="w-10 h-10" />} number="12" label="Speakers" />
        <StatsCard
          icon={<Briefcase className="w-10 h-10" />}
          number="20+"
          label="Companies"
        />
        <StatsCard
          icon={<Clock className="w-10 h-10" />}
          number="8"
          label="Hours of Networking"
        />
      </div>
    </section>
  );
}

function StatsCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <div className="content-visibility-auto p-12 text-center bg-white/10 border-white/20 backdrop-blur-lg">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6 }}
          className="flex justify-center mb-6 text-blue-300"
        >
          {icon}
        </motion.div>
        <motion.div
          className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {number}
        </motion.div>
        <motion.div
          className="text-lg text-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}