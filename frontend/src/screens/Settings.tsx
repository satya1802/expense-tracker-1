// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, Settings, AlertCircle, CheckCircle } = Icons;

const CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$", decimals: 2 },
  { code: "EUR", name: "Euro", symbol: "€", decimals: 2 },
  { code: "GBP", name: "Pound Sterling", symbol: "£", decimals: 2 },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", decimals: 0 },
  { code: "INR", name: "Indian Rupee", symbol: "₹", decimals: 2 },
  { code: "CAD", name: "Canadian Dollar", symbol: "CA$", decimals: 2 },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", decimals: 2 },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF", decimals: 2 },
  { code: "SEK", name: "Swedish Krona", symbol: "kr", decimals: 2 },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", decimals: 2 },
  { code: "ZAR", name: "South African Rand", symbol: "R", decimals: 2 },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", decimals: 2 },
];

const ACCOUNT = {
  email: "satya.ganaraju@quorq.ai",
  created_at: "14 Mar 2025",
  expense_count: 412,
  last_expense: { expense_date: "17 Nov 2026", amount: 42.8, category: "Transport" },
  month_total: 1284.35,
  month_label: "November 2026",
  session_started: "08:12",
  last_seen_at: "09:47",
  idle_lifetime: "30 minutes",
  synced_at: "09:47",
};

const SURFACE = "rgba(255,255,255,0.72)";
const SURFACE_DEEP = "rgba(255,255,255,0.92)";
const INK_ON_ACCENT = "rgb(255,255,255)";

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;

  const timers = React.useRef([]);
  const after = (ms, fn) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  };
  React.useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, []);

  /* ---------- currency ---------- */
  const [savedCurrency, setSavedCurrency] = React.useState("USD");
  const [currency, setCurrency] = React.useState("USD");
  const [currencyState, setCurrencyState] = React.useState("idle"); // idle | saving | saved
  const currencyDirty = currency !== savedCurrency;

  const cur = CURRENCIES.find((c) => c.code === currency) || CURRENCIES[0];
  const savedCur = CURRENCIES.find((c) => c.code === savedCurrency) || CURRENCIES[0];

  const money = (n, c) =>
    c.symbol +
    n.toLocaleString("en-US", {
      minimumFractionDigits: c.decimals,
      maximumFractionDigits: c.decimals,
    });

  const submitCurrency = (e) => {
    e.preventDefault();
    if (!currencyDirty || currencyState === "saving") return;
    setCurrencyState("saving");
    after(700, () => {
      setSavedCurrency(currency);
      setCurrencyState("saved");
      after(6000, () => setCurrencyState("idle"));
    });
  };

  /* ---------- password ---------- */
  const [pw, setPw] = React.useState({ current: "", next: "", confirm: "" });
  const [pwErrors, setPwErrors] = React.useState({});
  const [pwState, setPwState] = React.useState("idle"); // idle | saving | saved
  const [pwSavedAt, setPwSavedAt] = React.useState(null);

  const rules = [
    { key: "len", label: "At least 10 characters", ok: pw.next.length >= 10 },
    { key: "letter", label: "Contains a letter", ok: /[A-Za-z]/.test(pw.next) },
    { key: "number", label: "Contains a number", ok: /[0-9]/.test(pw.next) },
  ];

  const setField = (k) => (e) => {
    const v = e.target.value;
    setPw((p) => ({ ...p, [k]: v }));
    setPwErrors((p) => {
      if (!p[k]) return p;
      const n = { ...p };
      delete n[k];
      return n;
    });
    if (pwState === "saved") setPwState("idle");
  };

  const submitPassword = (e) => {
    e.preventDefault();
    if (pwState === "saving") return;
    const errs = {};
    if (!pw.current) errs.current = "Enter your current password to confirm this change.";
    if (!pw.next) errs.next = "Choose a new password.";
    else if (!rules.every((r) => r.ok))
      errs.next = "This password does not meet the three rules below.";
    else if (pw.next === pw.current)
      errs.next = "The new password must be different from your current one.";
    if (!pw.confirm) errs.confirm = "Type the new password a second time.";
    else if (pw.confirm !== pw.next) errs.confirm = "The two new passwords do not match.";

    setPwErrors(errs);
    if (Object.keys(errs).length > 0) return; // input is kept, nothing is cleared

    setPwState("saving");
    after(900, () => {
      setPwState("saved");
      setPwSavedAt("19 Nov 2026, 09:51");
      setPw({ current: "", next: "", confirm: "" });
    });
  };

  /* ---------- session / account ---------- */
  const [signingOut, setSigningOut] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [deactivating, setDeactivating] = React.useState(false);
  const dialogRef = React.useRef(null);
  const cancelRef = React.useRef(null);
  const deactivateBtnRef = React.useRef(null);

  const signOut = () => {
    if (signingOut) return;
    setSigningOut(true);
    after(600, () => navigate("sign-in"));
  };

  const closeModal = () => {
    if (deactivating) return;
    setModalOpen(false);
    after(0, () => deactivateBtnRef.current && deactivateBtnRef.current.focus());
  };

  const confirmDeactivate = () => {
    if (deactivating) return;
    setDeactivating(true);
    after(900, () => navigate("sign-in"));
  };

  React.useEffect(() => {
    if (!modalOpen) return;
    const focusFirst = window.setTimeout(() => {
      if (cancelRef.current) cancelRef.current.focus();
    }, 20);
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll("button:not([disabled])");
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusFirst);
      document.removeEventListener("keydown", onKey);
    };
  }, [modalOpen, deactivating]);

  /* ---------- shared styles ---------- */
  const panel = {
    border: "3px solid " + ink,
    boxShadow: "6px 6px 0 " + ink,
    backgroundColor: SURFACE,
    borderRadius: 0,
  };
  const fieldStyle = {
    border: "2px solid " + ink,
    borderRadius: 0,
    backgroundColor: SURFACE_DEEP,
    color: ink,
    fontFamily: brand.fontBody,
    fontSize: "15px",
    padding: "12px 14px",
    width: "100%",
    minHeight: "48px",
  };
  const labelStyle = {
    fontFamily: brand.fontBody,
    fontSize: "11px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: muted,
    display: "block",
    marginBottom: "8px",
  };
  const headingStyle = { fontFamily: brand.fontHeading, color: ink };
  const sectionRule = { borderTop: "1px dashed " + ink, opacity: 0.35 };

  const SectionHead = ({ number, title, id, meta }) => (
    <div className="flex items-baseline justify-between gap-4 border-b-[3px] px-6 py-5 sm:px-8" style={{ borderColor: ink }}>
      <div className="flex items-baseline gap-4">
        <span
          aria-hidden="true"
          className="text-[28px] leading-none"
          style={{ fontFamily: brand.fontHeading, color: accent }}
        >
          {number}
        </span>
        <h2 id={id} className="text-[24px] leading-none sm:text-[28px]" style={headingStyle}>
          {title}
        </h2>
      </div>
      {meta ? (
        <span className="hidden text-[11px] uppercase tracking-[0.18em] sm:block" style={{ color: muted }}>
          {meta}
        </span>
      ) : null}
    </div>
  );

  const Notice = ({ tone, icon, title, children }) => (
    <div
      className="bs-anim flex items-start gap-3 px-4 py-3"
      style={{
        border: "2px solid " + ink,
        borderLeft: "6px solid " + (tone === "accent" ? accent : ink),
        backgroundColor: SURFACE_DEEP,
        animation: "bs-rise 220ms ease-out both",
      }}
    >
      <span aria-hidden="true" className="mt-[2px] shrink-0" style={{ color: tone === "accent" ? accent : ink }}>
        {icon}
      </span>
      <p className="text-[13px] leading-[1.6]" style={{ color: ink }}>
        <span className="font-bold">{title}</span> {children}
      </p>
    </div>
  );

  const bigButton = (extra) => ({
    width: "100%",
    minHeight: "56px",
    borderRadius: 0,
    border: "3px solid " + ink,
    fontFamily: brand.fontBody,
    fontSize: "13px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 700,
    ...extra,
  });

  return (
    <div
      className="min-h-full w-full px-4 py-10 sm:px-8 sm:py-14"
      style={{
        backgroundColor: brand.backgroundColor,
        fontFamily: brand.fontBody,
        color: ink,
        fontVariantNumeric: "tabular-nums",
        ["--bs-ink"]: ink,
      }}
    >
      <style>{`
        .bs-focus:focus-visible { outline: 3px solid ${accent}; outline-offset: 2px; }
        .bs-hard { transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease; }
        .bs-hard:hover:not(:disabled) { transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--bs-ink); }
        .bs-hard:active:not(:disabled) { transform: translate(5px, 5px); box-shadow: 0 0 0 var(--bs-ink); }
        .bs-hard:disabled { opacity: 0.4; cursor: not-allowed; }
        @keyframes bs-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bs-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .bs-caret { animation: bs-blink 900ms steps(1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bs-anim, .bs-hard, .bs-caret { animation: none !important; transition: none !important; }
          .bs-hard:hover:not(:disabled), .bs-hard:active:not(:disabled) { transform: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-5xl">
        {/* Row 1 — page title */}
        <header data-wf="b-0-0" className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: muted }}>
              Account &amp; preferences — No. 04
            </p>
            <h1
              className="mt-3 text-[46px] leading-[0.92] sm:text-[64px]"
              style={{ ...headingStyle, letterSpacing: "-0.02em" }}
            >
              Settings
            </h1>
            <p className="mt-4 max-w-[62ch] text-[14px] leading-[1.65]" style={{ color: muted }}>
              Signed in as <span style={{ color: ink }}>{ACCOUNT.email}</span>. These settings apply
              only to your own ledger — {ACCOUNT.expense_count} expenses recorded since{" "}
              {ACCOUNT.created_at}.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:justify-self-end">
            <div
              className="inline-flex items-center gap-2 px-3 py-2"
              style={{ border: "2px solid " + ink, backgroundColor: SURFACE_DEEP }}
            >
              <Check className="h-4 w-4" aria-hidden="true" style={{ color: accent }} />
              <span className="text-[11px] uppercase tracking-[0.16em]" style={{ color: muted }}>
                Settings synced {ACCOUNT.synced_at}
              </span>
            </div>
          </div>
        </header>

        <div className="mt-10 h-[3px]" style={{ backgroundColor: ink }} />

        {/* Row 2 — currency form + save */}
        <div className="mt-10 grid grid-cols-12 gap-6 md:gap-8">
          <section
            data-wf="b-1-0"
            aria-labelledby="currency-heading"
            className="col-span-12 md:col-span-9"
            style={panel}
          >
            <SectionHead
              number="01"
              id="currency-heading"
              title="Currency"
              meta={"Saved · " + savedCur.code}
            />
            <form id="currency-form" onSubmit={submitCurrency} className="px-6 py-7 sm:px-8 sm:py-8">
              <Label htmlFor="display-currency" style={labelStyle}>
                Display currency
              </Label>
              <div className="grid grid-cols-12 items-start gap-6">
                <div className="col-span-12 sm:col-span-7">
                  <Select
                    id="display-currency"
                    data-wf="i-1-0-0"
                    className="bs-focus"
                    style={fieldStyle}
                    value={currency}
                    onChange={(e) => {
                      setCurrency(e.target.value);
                      if (currencyState === "saved") setCurrencyState("idle");
                    }}
                    aria-describedby="currency-help"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code} — {c.name}
                      </option>
                    ))}
                  </Select>
                  <p id="currency-help" className="mt-3 text-[12px] leading-[1.6]" style={{ color: muted }}>
                    One currency per account. Symbol shown: <span style={{ color: ink }}>{cur.symbol}</span>
                  </p>
                </div>

                <div
                  className="col-span-12 sm:col-span-5 px-4 py-4"
                  style={{ border: "2px dashed " + ink, backgroundColor: SURFACE_DEEP }}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: muted }}>
                    Preview
                  </p>
                  <p className="mt-3 text-[26px] leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {money(ACCOUNT.month_total, cur)}
                  </p>
                  <p className="mt-2 text-[12px]" style={{ color: muted }}>
                    {ACCOUNT.month_label} total
                  </p>
                  <div className="my-3" style={sectionRule} />
                  <p className="text-[12px] leading-[1.6]" style={{ color: muted }}>
                    Last expense · {ACCOUNT.last_expense.expense_date} ·{" "}
                    {ACCOUNT.last_expense.category}
                    <br />
                    <span className="text-[15px]" style={{ color: ink }}>
                      {money(ACCOUNT.last_expense.amount, cur)}
                    </span>
                  </p>
                </div>
              </div>

              <div aria-live="polite" className="mt-6 empty:mt-0">
                {currencyState === "saved" ? (
                  <Notice
                    tone="accent"
                    icon={<CheckCircle className="h-4 w-4" />}
                    title={"Currency saved as " + savedCur.code + "."}
                  >
                    Amounts across your dashboard, reports and CSV export now carry {savedCur.symbol}. No
                    figures were converted.
                  </Notice>
                ) : null}
              </div>
            </form>
          </section>

          <div className="col-span-12 md:col-span-3">
            <Button
              data-wf="b-1-1"
              type="submit"
              form="currency-form"
              className="bs-focus bs-hard"
              disabled={!currencyDirty || currencyState === "saving"}
              style={bigButton({
                backgroundColor: accent,
                color: INK_ON_ACCENT,
                boxShadow: "6px 6px 0 " + ink,
              })}
            >
              {currencyState === "saving" ? (
                <span>
                  Saving<span className="bs-caret">▌</span>
                </span>
              ) : (
                "Save currency"
              )}
            </Button>
            <p className="mt-4 text-[12px] leading-[1.6]" style={{ color: muted }}>
              {currencyDirty
                ? "Pending: " + savedCur.code + " → " + cur.code + "."
                : "Nothing to save — " + savedCur.code + " is already your currency."}
            </p>
          </div>
        </div>

        {/* Row 3 — currency note */}
        <section data-wf="b-2-0" className="mt-8">
          <div className="h-px w-full" style={{ backgroundColor: ink, opacity: 0.2 }} />
          <p className="mt-5 max-w-[78ch] text-[13px] leading-[1.7]" style={{ color: muted }}>
            All amounts are recorded and shown in this single currency. Changing it only changes the
            symbol — no amounts are converted.
          </p>
        </section>

        {/* Row 4 — password form + update */}
        <div className="mt-12 grid grid-cols-12 gap-6 md:gap-8">
          <section
            data-wf="b-3-0"
            aria-labelledby="password-heading"
            className="col-span-12 md:col-span-9"
            style={panel}
          >
            <SectionHead
              number="02"
              id="password-heading"
              title="Change password"
              meta={pwSavedAt ? "Updated " + pwSavedAt : "Last changed 02 Sep 2026"}
            />
            <form id="password-form" onSubmit={submitPassword} className="px-6 py-7 sm:px-8 sm:py-8" noValidate>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 sm:col-span-6">
                  <Label htmlFor="current-password" style={labelStyle}>
                    Current password
                  </Label>
                  <Input
                    id="current-password"
                    data-wf="i-3-0-0"
                    type="password"
                    autoComplete="current-password"
                    className="bs-focus"
                    style={{
                      ...fieldStyle,
                      borderColor: pwErrors.current ? accent : ink,
                    }}
                    value={pw.current}
                    onChange={setField("current")}
                    aria-invalid={pwErrors.current ? "true" : undefined}
                    aria-describedby={pwErrors.current ? "current-password-error" : undefined}
                  />
                  {pwErrors.current ? (
                    <p
                      id="current-password-error"
                      role="alert"
                      className="mt-2 flex items-start gap-2 text-[12px] leading-[1.55]"
                      style={{ color: ink }}
                    >
                      <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                      {pwErrors.current}
                    </p>
                  ) : null}
                </div>

                <div className="col-span-12 sm:col-span-6 hidden sm:block" aria-hidden="true" />

                <div className="col-span-12 sm:col-span-6">
                  <Label htmlFor="new-password" style={labelStyle}>
                    New password
                  </Label>
                  <Input
                    id="new-password"
                    data-wf="i-3-0-1"
                    type="password"
                    autoComplete="new-password"
                    className="bs-focus"
                    style={{ ...fieldStyle, borderColor: pwErrors.next ? accent : ink }}
                    value={pw.next}
                    onChange={setField("next")}
                    aria-invalid={pwErrors.next ? "true" : undefined}
                    aria-describedby={"password-rules" + (pwErrors.next ? " new-password-error" : "")}
                  />
                  {pwErrors.next ? (
                    <p
                      id="new-password-error"
                      role="alert"
                      className="mt-2 flex items-start gap-2 text-[12px] leading-[1.55]"
                      style={{ color: ink }}
                    >
                      <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                      {pwErrors.next}
                    </p>
                  ) : null}
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <Label htmlFor="confirm-password" style={labelStyle}>
                    Confirm new password
                  </Label>
                  <Input
                    id="confirm-password"
                    data-wf="i-3-0-2"
                    type="password"
                    autoComplete="new-password"
                    className="bs-focus"
                    style={{ ...fieldStyle, borderColor: pwErrors.confirm ? accent : ink }}
                    value={pw.confirm}
                    onChange={setField("confirm")}
                    aria-invalid={pwErrors.confirm ? "true" : undefined}
                    aria-describedby={pwErrors.confirm ? "confirm-password-error" : undefined}
                  />
                  {pwErrors.confirm ? (
                    <p
                      id="confirm-password-error"
                      role="alert"
                      className="mt-2 flex items-start gap-2 text-[12px] leading-[1.55]"
                      style={{ color: ink }}
                    >
                      <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" aria-hidden="true" style={{ color: accent }} />
                      {pwErrors.confirm}
                    </p>
                  ) : null}
                </div>
              </div>

              <div id="password-rules" className="mt-7">
                <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: muted }}>
                  Minimum strength
                </p>
                <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-8">
                  {rules.map((r) => (
                    <li key={r.key} className="flex items-center gap-2 text-[12px]" style={{ color: ink }}>
                      <span aria-hidden="true" style={{ color: r.ok ? accent : muted }}>
                        {r.ok ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      </span>
                      <span className="sr-only">{r.ok ? "Met: " : "Not met yet: "}</span>
                      {r.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div aria-live="polite" className="mt-6 empty:mt-0">
                {pwState === "saved" ? (
                  <Notice
                    tone="accent"
                    icon={<CheckCircle className="h-4 w-4" />}
                    title={"Password updated " + pwSavedAt + "."}
                  >
                    Your new password is stored hashed. Use it the next time you sign in — this session
                    stays active.
                  </Notice>
                ) : null}
              </div>
            </form>
          </section>

          <div className="col-span-12 md:col-span-3">
            <Button
              data-wf="b-3-1"
              type="submit"
              form="password-form"
              className="bs-focus bs-hard"
              disabled={pwState === "saving"}
              style={bigButton({
                backgroundColor: "transparent",
                color: ink,
                boxShadow: "6px 6px 0 " + ink,
              })}
            >
              {pwState === "saving" ? (
                <span>
                  Updating<span className="bs-caret">▌</span>
                </span>
              ) : (
                "Update password"
              )}
            </Button>
            <p className="mt-4 text-[12px] leading-[1.6]" style={{ color: muted }}>
              We never show or store your password in plain text — only a hash of it.
            </p>
          </div>
        </div>

        {/* Row 5 — session note */}
        <section data-wf="b-4-0" className="mt-12">
          <div className="h-[3px] w-full" style={{ backgroundColor: ink }} />
          <div className="mt-6 grid grid-cols-12 gap-6">
            <p className="col-span-12 max-w-[78ch] text-[13px] leading-[1.7] md:col-span-8" style={{ color: muted }}>
              Signing out ends this session. Sessions also expire after a period of inactivity, and you
              will be asked to sign in again.
            </p>
            <dl className="col-span-12 text-[12px] leading-[1.8] md:col-span-4 md:text-right" style={{ color: muted }}>
              <div className="flex justify-between gap-4 md:justify-end">
                <dt className="uppercase tracking-[0.14em]">Session started</dt>
                <dd style={{ color: ink }}>{ACCOUNT.session_started}</dd>
              </div>
              <div className="flex justify-between gap-4 md:justify-end">
                <dt className="uppercase tracking-[0.14em]">Last activity</dt>
                <dd style={{ color: ink }}>{ACCOUNT.last_seen_at}</dd>
              </div>
              <div className="flex justify-between gap-4 md:justify-end">
                <dt className="uppercase tracking-[0.14em]">Idle limit</dt>
                <dd style={{ color: ink }}>{ACCOUNT.idle_lifetime}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-5 max-w-[78ch] text-[12px] leading-[1.7]" style={{ color: muted }}>
            This account is free. There are no billing details on file and nothing to cancel — closing
            the account below simply ends access.
          </p>
        </section>

        {/* Row 6 — sign out + deactivate */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <Button
              data-wf="b-5-0"
              type="button"
              onClick={signOut}
              disabled={signingOut}
              className="bs-focus bs-hard"
              style={bigButton({
                backgroundColor: ink,
                color: brand.backgroundColor,
                boxShadow: "6px 6px 0 " + accent,
              })}
            >
              {signingOut ? (
                <span>
                  Ending session<span className="bs-caret">▌</span>
                </span>
              ) : (
                "Sign out"
              )}
            </Button>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <Button
              data-wf="b-5-1"
              type="button"
              ref={deactivateBtnRef}
              onClick={() => setModalOpen(true)}
              aria-haspopup="dialog"
              className="bs-focus bs-hard"
              style={bigButton({
                backgroundColor: "transparent",
                color: ink,
                borderStyle: "dashed",
                boxShadow: "6px 6px 0 " + ink,
              })}
            >
              Deactivate account
            </Button>
          </div>
          <p className="col-span-12 text-[12px] leading-[1.6] md:col-span-4" style={{ color: muted }}>
            Deactivation is permanent in this version. Export your expense history from the Expenses
            section first if you want a copy.
          </p>
        </div>

        <div className="h-10" />
      </div>

      {/* Row 7 — deactivate confirmation modal */}
      {modalOpen ? (
        <div
          data-wf="b-6-0"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          style={{ backgroundColor: "rgba(10,10,10,0.55)" }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="deactivate-title"
            aria-describedby="deactivate-body"
            className="bs-anim w-full max-w-xl"
            style={{
              border: "3px solid " + ink,
              boxShadow: "10px 10px 0 " + accent,
              backgroundColor: brand.backgroundColor,
              animation: "bs-rise 180ms ease-out both",
            }}
          >
            <div
              className="flex items-center justify-between gap-4 border-b-[3px] px-6 py-5 sm:px-8"
              style={{ borderColor: ink }}
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5" aria-hidden="true" style={{ color: accent }} />
                <h2 id="deactivate-title" className="text-[24px] leading-none sm:text-[28px]" style={headingStyle}>
                  Deactivate your account?
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close dialog"
                disabled={deactivating}
                className="bs-focus shrink-0 p-2 disabled:opacity-40"
                style={{ border: "2px solid " + ink, color: ink, backgroundColor: "transparent" }}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-7 sm:px-8">
              <p id="deactivate-body" className="text-[14px] leading-[1.7]" style={{ color: ink }}>
                All sessions end and you will not be able to sign in again.
              </p>
              <ul className="mt-5 text-[12px] leading-[1.9]" style={{ color: muted }}>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">—</span>
                  <span>
                    {ACCOUNT.expense_count} expenses and your categories become inaccessible
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">—</span>
                  <span>{ACCOUNT.email} can no longer sign in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">—</span>
                  <span>No charges are involved — this account has never had billing</span>
                </li>
              </ul>
            </div>

            <div
              className="flex flex-col-reverse gap-4 border-t-[3px] px-6 py-6 sm:flex-row sm:justify-end sm:px-8"
              style={{ borderColor: ink }}
            >
              <Button
                data-wf="i-6-0-1"
                ref={cancelRef}
                type="button"
                onClick={closeModal}
                disabled={deactivating}
                className="bs-focus bs-hard"
                style={bigButton({
                  width: "auto",
                  minWidth: "160px",
                  padding: "0 24px",
                  backgroundColor: "transparent",
                  color: ink,
                  boxShadow: "4px 4px 0 " + ink,
                })}
              >
                Cancel
              </Button>
              <Button
                data-wf="i-6-0-0"
                type="button"
                onClick={confirmDeactivate}
                disabled={deactivating}
                className="bs-focus bs-hard"
                style={bigButton({
                  width: "auto",
                  minWidth: "200px",
                  padding: "0 24px",
                  backgroundColor: ink,
                  color: brand.backgroundColor,
                  boxShadow: "4px 4px 0 " + accent,
                })}
              >
                {deactivating ? (
                  <span>
                    Ending all sessions<span className="bs-caret">▌</span>
                  </span>
                ) : (
                  "Yes, deactivate"
                )}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
