"use client";

import { useState, useCallback } from "react";

type ToastVariant = "default" | "destructive";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
}

let listeners: Array<(toasts: Toast[]) => void> = [];
let toastList: Toast[] = [];

function notify() {
  listeners.forEach((l) => l([...toastList]));
}

export function toast({
  title,
  description,
  variant = "default",
}: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2);
  toastList.push({ id, title, description, variant });
  notify();
  setTimeout(() => {
    toastList = toastList.filter((t) => t.id !== id);
    notify();
  }, 4000);
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const subscribe = useCallback((cb: (t: Toast[]) => void) => {
    listeners.push(cb);
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  }, []);

  useState(() => {
    const unsub = subscribe(setToasts);
    return unsub;
  });

  return { toasts, toast };
}
