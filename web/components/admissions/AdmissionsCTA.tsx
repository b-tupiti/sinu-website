"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/actions/Button";
import { Card } from "@/components/ui/surfaces/Card";
import { Toast } from "@/components/ui/feedback/Toast";
import { Dialog } from "@/components/ui/feedback/Dialog";

export function AdmissionsCTA({ ctaBody, contactEmail, contactPhone }: { ctaBody: string; contactEmail: string; contactPhone: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <Card style={{ background: "var(--brand-primary-tint)", border: "none" }}>
        <h2 style={{ margin: "0 0 8px", fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h3)", color: "var(--text-heading)" }}>Ready to start?</h2>
        <p style={{ margin: "0 0 18px", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "var(--text-body)" }}>{ctaBody}</p>
        <div style={{ display: "flex", gap: 10 }}>
          <Button onClick={() => setOpen(true)}>Start application</Button>
          <Link href="/courses" style={{ textDecoration: "none" }}>
            <Button variant="secondary">Browse courses first</Button>
          </Link>
        </div>
        <p style={{ margin: "16px 0 0", fontFamily: "var(--font-sans)", fontSize: "var(--t-sm)", color: "var(--text-muted)" }}>
          Questions?{" "}
          <a href={`mailto:${contactEmail}`} style={{ color: "var(--link)" }}>
            {contactEmail}
          </a>{" "}
          · {contactPhone}
        </p>
      </Card>
      {sent && (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 120 }}>
          <Toast tone="success" onDismiss={() => setSent(false)}>
            Application started. We emailed you a link to continue.
          </Toast>
        </div>
      )}
      <Dialog
        open={open}
        title="Start your application"
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                setSent(true);
              }}
            >
              Continue
            </Button>
          </>
        }
      >
        You&apos;ll be taken to the student portal to create an account. Have your national ID or passport ready.
      </Dialog>
    </>
  );
}
