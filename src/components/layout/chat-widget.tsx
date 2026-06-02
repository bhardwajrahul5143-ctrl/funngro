"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            role="dialog"
            aria-label="Chat support"
          >
            <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
              <span className="font-semibold">Funngro Support</span>
              <button onClick={() => setOpen(false)} aria-label="Close chat">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <p className="mb-4 text-sm text-muted-foreground">
                Hi! How can we help you today? Ask about projects, hiring, or getting started.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage("");
                }}
                className="flex gap-2"
              >
                <label htmlFor="chat-input" className="sr-only">Your message</label>
                <input
                  id="chat-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="icon" aria-label="Send message">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg shadow-primary/30"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat support"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
