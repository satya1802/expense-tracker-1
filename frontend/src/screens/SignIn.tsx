// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, ArrowLeft, ArrowRight, AlertCircle } = Icons;

const PRODUCT = "expense tracker 1";
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';
const TABS = [
  { key: "signin", label: "Sign in", wf: "i-1-0-0" },
  { key: "signup", label: "Sign up", wf: "i-1-0-1" },
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Screen() {
  const navigate = useNavigate();
  const [mode, setMode] = React.useState("signin");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    if (status !== "working") return undefined;
    const t = setTimeout(() => navigate("dashboard"), 700);
    return () => clearTimeout(t);
  }, [status]);

  const thick = `3px solid ${brand.primaryColor}`;
  const hard = `8px 8px 0 ${brand.primaryColor}`;
  const field = {
    border: thick,
    borderRadius: brand.radius,
    height: 48,
    backgroundColor: "transparent",
    fontFamily: MONO,
    color: brand.primaryColor,
  };

  const submit = (intent) => {
    if (status === "working") return;
    setMode(intent);
    if (!EMAIL_RE.test(email.trim())) {
      setError("email");
      return;
    }
    if (intent === "signup" ? password.length < 8 : password.length === 0) {
      setError("password");
      return;
    }
    setError(null);
    setStatus("working");
  };

  const working = status === "working";

  return (
    <div
      className="flex min-h-screen flex-col px-6 py-6 sm:px-12 sm:py-8"
      style={{
        color: brand.primaryColor,
        fontFamily: brand.fontBody,
        backgroundColor: brand.backgroundColor,
        ["--ed-accent"]: brand.accentColor,
      }}
    >
      <style>{`
        .ed-focus:focus-visible { outline: 3px solid var(--ed-accent); outline-offset: 3px; }
        .ed-press:active { transform: translate(2px, 2px); }
        @keyframes ed-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .ed-enter { animation: ed-rise .26s ease-out both; }
        @keyframes ed-blink { 0%, 100% { opacity: 1; } 50% { opacity: .25; } }
        .ed-blink { animation: ed-blink 1s steps(1, end) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ed-enter, .ed-blink { animation: none; }
          .ed-press { transition: none; }
        }
      `}</style>

      <header
        className="flex flex-wrap items-center justify-between gap-2 pb-4"
        style={{ borderBottom: thick, fontFamily: MONO }}
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em]">{PRODUCT}</p>
        <p className="text-xs uppercase">Private ledger — one account, one currency</p>
      </header>

      <div className="grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
        <h1
          data-wf="b-0-0"
          className="text-[clamp(44px,8vw,104px)] font-bold leading-[0.86] tracking-tight"
          style={{ fontFamily: brand.fontHeading }}
        >
          Sign in to your account
          <span style={{ color: brand.accentColor }}>.</span>
        </h1>

        <main
          className="p-6 sm:p-8"
          style={{
            border: thick,
            boxShadow: hard,
            borderRadius: brand.radius,
            backgroundColor: brand.backgroundColor,
          }}
        >
          <div
            data-wf="b-1-0"
            role="tablist"
            aria-label="Account access"
            className="grid grid-cols-2"
            style={{ border: thick, borderRadius: brand.radius }}
          >
            {TABS.map((t, i) => {
              const on = mode === t.key;
              return (
                <button
                  key={t.key}
                  data-wf={t.wf}
                  role="tab"
                  type="button"
                  id={`ed-tab-${t.key}`}
                  aria-selected={on}
                  aria-controls="ed-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => {
                    setMode(t.key);
                    setError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      const next = TABS[(i + 1) % TABS.length];
                      setMode(next.key);
                      setError(null);
                      const el = document.getElementById(`ed-tab-${next.key}`);
                      if (el) el.focus();
                    }
                  }}
                  className="ed-focus flex min-h-[48px] items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                  style={{
                    fontFamily: MONO,
                    backgroundColor: on ? brand.primaryColor : "transparent",
                    color: on ? brand.backgroundColor : brand.primaryColor,
                    borderLeft: i === 1 ? thick : "none",
                    borderRadius: brand.radius,
                  }}
                >
                  {on ? <Check size={14} aria-hidden="true" /> : null}
                  {t.label}
                </button>
              );
            })}
          </div>

          <div id="ed-panel" role="tabpanel" aria-labelledby={`ed-tab-${mode}`}>
            {working ? (
              <p
                role="status"
                className="ed-enter mt-7 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: MONO }}
              >
                <span className="ed-blink" style={{ color: brand.accentColor }} aria-hidden="true">
                  ▌
                </span>{" "}
                {mode === "signup" ? "Creating your account" : "Checking your details"} — opening your dashboard
              </p>
            ) : null}

            <form
              data-wf="b-2-0"
              className="mt-7 space-y-6"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                submit(mode);
              }}
            >
              <div className="space-y-2">
                <label
                  htmlFor="ed-email"
                  className="block text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: MONO }}
                >
                  01 / Email
                </label>
                <input
                  data-wf="i-2-0-0"
                  id="ed-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@yourdomain.com"
                  value={email}
                  disabled={working}
                  aria-invalid={error === "email"}
                  aria-describedby="ed-note"
                  onChange={(e) => setEmail(e.target.value)}
                  className="ed-focus w-full px-3 text-sm outline-none disabled:opacity-60"
                  style={field}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="ed-password"
                  className="block text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: MONO }}
                >
                  02 / Password
                </label>
                <input
                  data-wf="i-2-0-1"
                  id="ed-password"
                  type="password"
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  value={password}
                  disabled={working}
                  aria-invalid={error === "password"}
                  aria-describedby="ed-note"
                  onChange={(e) => setPassword(e.target.value)}
                  className="ed-focus w-full px-3 text-sm outline-none disabled:opacity-60"
                  style={field}
                />
                <p className="text-[11px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: brand.neutralColor }}>
                  {mode === "signup"
                    ? "At least 8 characters. Stored hashed, never in plain text."
                    : "Your session ends when you sign out, or after a spell of inactivity."}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  data-wf="b-3-0"
                  type="button"
                  disabled={working}
                  onClick={() => submit("signin")}
                  className="ed-focus ed-press flex h-14 w-full items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] transition-transform disabled:opacity-60"
                  style={
                    mode === "signin"
                      ? {
                          backgroundColor: brand.primaryColor,
                          color: brand.backgroundColor,
                          border: thick,
                          borderRadius: brand.radius,
                          boxShadow: `4px 4px 0 ${brand.accentColor}`,
                          fontFamily: MONO,
                        }
                      : {
                          backgroundColor: "transparent",
                          color: brand.primaryColor,
                          border: thick,
                          borderRadius: brand.radius,
                          fontFamily: MONO,
                        }
                  }
                >
                  Sign in
                  {mode === "signin" ? <ArrowRight size={16} aria-hidden="true" /> : null}
                </button>
                <button
                  data-wf="b-3-1"
                  type="button"
                  disabled={working}
                  onClick={() => submit("signup")}
                  className="ed-focus ed-press flex h-14 w-full items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] transition-transform disabled:opacity-60"
                  style={
                    mode === "signup"
                      ? {
                          backgroundColor: brand.primaryColor,
                          color: brand.backgroundColor,
                          border: thick,
                          borderRadius: brand.radius,
                          boxShadow: `4px 4px 0 ${brand.accentColor}`,
                          fontFamily: MONO,
                        }
                      : {
                          backgroundColor: "transparent",
                          color: brand.primaryColor,
                          border: thick,
                          borderRadius: brand.radius,
                          fontFamily: MONO,
                        }
                  }
                >
                  Create account
                  {mode === "signup" ? <ArrowRight size={16} aria-hidden="true" /> : null}
                </button>
              </div>
            </form>
          </div>

          <div data-wf="b-4-0" id="ed-note" className="mt-6 space-y-3">
            <p className="text-xs uppercase leading-relaxed" style={{ fontFamily: MONO }}>
              New here? Sign up with your email and a password of at least 8 characters.
            </p>
            {error ? (
              <p
                role="alert"
                className="ed-enter flex items-start gap-2 p-3 text-xs font-bold uppercase leading-relaxed"
                style={{
                  fontFamily: MONO,
                  border: thick,
                  borderRadius: brand.radius,
                  borderLeft: `10px solid ${brand.accentColor}`,
                }}
              >
                <AlertCircle size={14} className="mt-[2px] shrink-0" aria-hidden="true" />
                <span>That email or password is not valid — check and try again.</span>
              </p>
            ) : null}
          </div>
        </main>
      </div>

      <footer
        className="flex flex-wrap justify-between gap-2 pt-3 text-xs uppercase"
        style={{ borderTop: thick, fontFamily: MONO, color: brand.neutralColor }}
      >
        <span>© 2026 {PRODUCT}</span>
        <span>Free to use · No card, ever · Your data stays yours</span>
      </footer>
    </div>
  );
}
