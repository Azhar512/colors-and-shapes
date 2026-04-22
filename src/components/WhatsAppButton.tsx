import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966543650900?text=Hello%2C%20I%20need%20appliance%20repair%20service"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
