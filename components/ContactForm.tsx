"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || "", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      reset();
    } catch (err: any) {
      setServerError(err.message);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-soft"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isSubmitSuccessful && (
        <div className="p-4 bg-green-100 text-green-800 rounded">
          Thanks for your message! I'll get back to you soon.
        </div>
      )}
      {serverError && (
        <div className="p-4 bg-red-100 text-red-800 rounded">
          {serverError}
        </div>
      )}

      <div>
        <label className="block font-body mb-1">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-body mb-1">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          })}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block font-body mb-1">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={5}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-primary text-white rounded-lg font-body hover:bg-opacity-90 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
} 