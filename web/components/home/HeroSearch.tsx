"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/ui/forms/SearchBar";

export function HeroSearch({ placeholder }: { placeholder: string }) {
  const [q, setQ] = useState("");
  const router = useRouter();
  return (
    <SearchBar
      value={q}
      onChange={setQ}
      onSubmit={(value) => router.push(value ? `/courses?q=${encodeURIComponent(value)}` : "/courses")}
      placeholder={placeholder}
      style={{ border: "none", marginBottom: 24, maxWidth: 460 }}
    />
  );
}
