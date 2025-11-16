"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";



export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjkpoeop");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto mt-10 p-8 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl border border-white/20 "
    >
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Contactez-moi ✉️
      </h2>

      {state.succeeded ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-green-400 text-center text-lg"
        >
          Merci ! Votre message a bien été envoyé 🚀
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* NOM + PRENOM */}
          <div className="flex flex-row gap-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-[var(--color-accent)] mb-1"
              >
                Prénom :
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 bg-white/20 text-[var(--color-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
                placeholder="Jean"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-[var(--color-accent)] mb-1"
              >
                Nom :
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 bg-white/20 text-[var(--color-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
                placeholder="Dupont"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-[var(--color-accent)] mb-1"
            >
              Email :
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-white/20 text-[var(--color-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              placeholder="votre@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* SUJET */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm text-[var(--color-accent)] mb-1"
            >
              Sujet :
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              className="w-full px-3 py-2 bg-white/20 text-[var(--color-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              placeholder="Raison du contact"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-[var(--color-accent)] mb-1"
            >
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 bg-white/20 text-[var(--color-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
              placeholder="Écrivez votre message ici..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* BOUTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all"
          >
            {state.submitting ? "Envoi..." : "Envoyer"}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
