"use client";

import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`rounded-lg px-5 py-4 shadow-xl text-sm max-w-sm animate-slide-up ${
            variant === "destructive"
              ? "bg-red-900 border border-red-700 text-white"
              : "bg-navy-700 border border-gold-500/30 text-white"
          }`}
        >
          {title && <p className="font-semibold">{title}</p>}
          {description && <p className="text-white/70 mt-0.5">{description}</p>}
        </div>
      ))}
    </div>
  );
}
