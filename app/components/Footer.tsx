"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Boutons sociaux */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          flex flex-col sm:flex-row 
          justify-center items-center 
          gap-4 sm:gap-6 
          mt-12 sm:mt-16 
          mb-12 sm:mb-16 
          px-4
        "
      >
        {/* Bouton GitHub */}
        <motion.a
          href="https://github.com/Phogo2112"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative 
            bg-gradient-to-r from-gray-800 via-gray-900 to-black 
            text-white 
            rounded-2xl 
            px-8 py-5 
            shadow-2xl 
            hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]
            transition-all 
            flex items-center gap-4 
            overflow-hidden 
            group 
            w-full sm:w-auto
          "
        >
          {/* Effet brillant animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Contenu */}
          <div className="relative z-10 flex items-center gap-4 w-full justify-between sm:justify-start">
            <FaGithub className="text-3xl flex-shrink-0" />
            <div className="flex flex-col items-start flex-1">
              <span className="text-xs opacity-80">Mon profil</span>
              <span className="text-lg font-bold">GitHub</span>
            </div>
            <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </div>
        </motion.a>

        {/* Bouton LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/sulyvann-dain-68848a289"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative 
            bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
            text-white 
            rounded-2xl 
            px-8 py-5 
            shadow-2xl 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
            transition-all 
            flex items-center gap-4 
            overflow-hidden 
            group 
            w-full sm:w-auto
          "
        >
          {/* Effet brillant animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Contenu */}
          <div className="relative z-10 flex items-center gap-4 w-full justify-between sm:justify-start">
            <FaLinkedin className="text-3xl flex-shrink-0" />
            <div className="flex flex-col items-start flex-1">
              <span className="text-xs opacity-80">Réseau pro</span>
              <span className="text-lg font-bold">LinkedIn</span>
            </div>
            <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </div>
        </motion.a>
      </motion.div>

      {/* COPYRIGHT */}

      <div className="border-t border-gray-200 dark:border-gray-800">
        <p className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
          © 2025 Sulyvann Dain - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
