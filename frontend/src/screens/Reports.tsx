// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { ChevronRight, ArrowRight, AlertCircle } = Icons;

const CURRENCY = { code: "USD" };

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const CATEGORIES = [
  { id: "cat_food", name: "Food & Drink", is_default: true },
  { id: "cat_transport", name: "Transport", is_default: true },
  { id: "cat_housing", name: "Housing", is_default: true },
  { id: "cat_utilities", name: "Utilities", is_default: true },
  { id: "cat_health", name: "Health", is_default: true },
  { id: "cat_ent", name: "Entertainment", is_default: true },
  { id: "cat_shop", name: "Shopping", is_default: false },
  { id: "cat_coffee", name: "Coffee", is_default: false }
];

const EXPENSES = [
  { id: "exp_2101", category_id: "cat_housing", amount: 650.0, expense_date: "2026-09-01", notes: "Rent — Prospect Heights" },
  { id: "exp_2102", category_id: "cat_transport", amount: 33.0, expense_date: "2026-09-02", notes: "MTA OMNY weekly" },
  { id: "exp_2103", category_id: "cat_utilities", amount: 74.2, expense_date: "2026-09-04", notes: "Con Edison — August" },
  { id: "exp_2104", category_id: "cat_food", amount: 86.42, expense_date: "2026-09-05", notes: "Trader Joe's — weekly shop" },
  { id: "exp_2105", category_id: "cat_coffee", amount: 5.75, expense_date: "2026-09-08", notes: "Devoción — cortado + beans" },
  { id: "exp_2106", category_id: "cat_health", amount: 22.99, expense_date: "2026-09-09", notes: "CVS — allergy refill" },
  { id: "exp_2107", category_id: "cat_utilities", amount: 89.99, expense_date: "2026-09-11", notes: "Verizon Fios — internet" },
  { id: "exp_2108", category_id: "cat_food", amount: 41.18, expense_date: "2026-09-12", notes: "Sahadi's — pantry" },
  { id: "exp_2109", category_id: "cat_transport", amount: 18.64, expense_date: "2026-09-14", notes: "Lyft — train replacement" },
  { id: "exp_2110", category_id: "cat_ent", amount: 11.99, expense_date: "2026-09-15", notes: "Spotify Premium" },
  { id: "exp_2111", category_id: "cat_coffee", amount: 4.5, expense_date: "2026-09-17", notes: "Variety — drip" },
  { id: "exp_2112", category_id: "cat_food", amount: 38.75, expense_date: "2026-09-20", notes: "Dimes — dinner with Nadia" },
  { id: "exp_2113", category_id: "cat_ent", amount: 17.0, expense_date: "2026-09-21", notes: "Film Forum — matinee" },
  { id: "exp_2114", category_id: "cat_food", amount: 21.79, expense_date: "2026-09-24", notes: "Bodega — milk, eggs, bread" },
  { id: "exp_2115", category_id: "cat_shop", amount: 64.8, expense_date: "2026-09-26", notes: "Uniqlo — flannel shirt" },
  { id: "exp_2116", category_id: "cat_food", amount: 29.45, expense_date: "2026-09-28", notes: "Katz's — pastrami, split" },

  { id: "exp_2117", category_id: "cat_housing", amount: 650.0, expense_date: "2026-10-01", notes: "Rent — Prospect Heights" },
  { id: "exp_2118", category_id: "cat_transport", amount: 33.0, expense_date: "2026-10-02", notes: "MTA OMNY weekly" },
  { id: "exp_2119", category_id: "cat_utilities", amount: 68.44, expense_date: "2026-10-03", notes: "Con Edison — September" },
  { id: "exp_2120", category_id: "cat_food", amount: 112.36, expense_date: "2026-10-04", notes: "Whole Foods — month stock-up" },
  { id: "exp_2121", category_id: "cat_utilities", amount: 89.99, expense_date: "2026-10-05", notes: "Verizon Fios — internet" },
  { id: "exp_2122", category_id: "cat_coffee", amount: 5.75, expense_date: "2026-10-07", notes: "Devoción — cortado + beans" },
  { id: "exp_2123", category_id: "cat_transport", amount: 48.0, expense_date: "2026-10-10", notes: "Amtrak — Philadelphia return" },
  { id: "exp_2124", category_id: "cat_health", amount: 30.0, expense_date: "2026-10-13", notes: "Dr. Patel — visit copay" },
  { id: "exp_2125", category_id: "cat_ent", amount: 11.99, expense_date: "2026-10-15", notes: "Spotify Premium" },
  { id: "exp_2126", category_id: "cat_food", amount: 54.0, expense_date: "2026-10-18", notes: "Lucali — birthday dinner" },
  { id: "exp_2127", category_id: "cat_shop", amount: 38.25, expense_date: "2026-10-22", notes: "Muji — notebooks, pens" },
  { id: "exp_2128", category_id: "cat_food", amount: 45.52, expense_date: "2026-10-27", notes: "Fairway — groceries" },

  { id: "exp_2129", category_id: "cat_housing", amount: 650.0, expense_date: "2026-11-01", notes: "Rent — Prospect Heights" },
  { id: "exp_2130", category_id: "cat_transport", amount: 33.0, expense_date: "2026-11-02", notes: "MTA OMNY weekly" },
  { id: "exp_2131", category_id: "cat_utilities", amount: 81.07, expense_date: "2026-11-03", notes: "Con Edison — October" },
  { id: "exp_2132", category_id: "cat_utilities", amount: 89.99, expense_date: "2026-11-05", notes: "Verizon Fios — internet" },
  { id: "exp_2133", category_id: "cat_food", amount: 94.63, expense_date: "2026-11-06", notes: "Trader Joe's — weekly shop" },
  { id: "exp_2134", category_id: "cat_coffee", amount: 4.5, expense_date: "2026-11-07", notes: "Variety — drip" },
  { id: "exp_2135", category_id: "cat_health", amount: 16.47, expense_date: "2026-11-10", notes: "CVS — cold medicine" },
  { id: "exp_2136", category_id: "cat_transport", amount: 24.8, expense_date: "2026-11-12", notes: "Lyft — airport to home" },
  { id: "exp_2137", category_id: "cat_shop", amount: 27.5, expense_date: "2026-11-13", notes: "Powerhouse Books — two paperbacks" },
  { id: "exp_2138", category_id: "cat_ent", amount: 19.0, expense_date: "2026-11-14", notes: "BAM Rose Cinemas" },
  { id: "exp_2139", category_id: "cat_ent", amount: 11.99, expense_date: "2026-11-15", notes: "Spotify Premium" },
  { id: "exp_2140", category_id: "cat_food", amount: 42.0, expense_date: "2026-11-16", notes: "Dimes — dinner" },
  { id: "exp_2141", category_id: "cat_food", amount: 67.5, expense_date: "2026-11-17", notes: "Sahadi's — pantry + olive oil" }
];

const DEFAULT_FROM = "2026-09-01";
const DEFAULT_TO = "2026-11-30";

const GROUPINGS = [
  { key: "day", label: "Day", wf: "i-1-1-0" },
  { key: "week", label: "Week", wf: "i-1-1-1" },
  { key: "month", label: "Month", wf: "i-1-1-2" }
];

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const paper = brand.backgroundColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;

  const [from, setFrom] = React.useState(DEFAULT_FROM);
  const [to, setTo] = React.useState(DEFAULT_TO);
  const [grouping, setGrouping] = React.useState("month");
  const [recalculating, setRecalculating] = React.useState(false);

  React.useEffect(() => {
    setRecalculating(true);
    const t = setTimeout(() => setRecalculating(false), 420);
    return () => clearTimeout(t);
  }, [from, to, grouping]);

  const rangeBroken = Boolean(from) && Boolean(to) && from > to;
  const rangeMissing = !from || !to;
  const blocked = rangeBroken || rangeMissing;

  const rows = React.useMemo(() => {
    if (blocked) return [];
    return EXPENSES.filter((e) => e.expense_date >= from && e.expense_date <= to).sort((a, b) =>
      a.expense_date < b.expense_date ? -1 : 1
    );
  }, [from, to, blocked]);

  const total = rows.reduce((s, e) => s + e.amount, 0);

  const byCategory = React.useMemo(() => {
    const map = new Map();
    rows.forEach((e) => map.set(e.category_id, (map.get(e.category_id) || 0) + e.amount));
    return Array.from(map.entries())
      .map(([id, amount]) => {
        const cat = CATEGORIES.find((c) => c.id === id);
        return { id, name: cat ? cat.name : "Uncategorised", is_default: cat ? cat.is_default : true, amount };
      })
      .sort((a, b) => b.amount - a.amount);
  }, [rows]);

  const buckets = React.useMemo(() => {
    const map = new Map();
    rows.forEach((e) => {
      let key = e.expense_date;
      if (grouping === "month") key = e.expense_date.slice(0, 7);
      if (grouping === "week") {
        const p = e.expense_date.split("-").map(Number);
        const d = new Date(p[0], p[1] - 1, p[2]);
        const shift = (d.getDay() + 6) % 7;
        d.setDate(d.getDate() - shift);
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        key = `${d.getFullYear()}-${mm}-${dd}`;
      }
      map.set(key, (map.get(key) || 0) + e.amount);
    });
    return Array.from(map.entries())
      .map(([key, amount]) => ({ key, amount }))
      .sort((a, b) => (a.key < b.key ? -1 : 1));
  }, [rows, grouping]);

  const maxBucket = buckets.reduce((m, b) => Math.max(m, b.amount), 0);
  const peak = buckets.reduce((m, b) => (!m || b.amount > m.amount ? b : m), null);
  const maxCat = byCategory.length ? byCategory[0].amount : 0;

  const money = (n) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const bucketLabel = (key) => {
    if (grouping === "month") {
      const p = key.split("-");
      return `${MONTHS[Number(p[1]) - 1].toUpperCase()} ’${p[0].slice(2)}`;
    }
    const p = key.split("-");
    return `${MONTHS[Number(p[1]) - 1].toUpperCase()} ${Number(p[2])}`;
  };

  const bucketSpoken = (key) => {
    if (grouping === "month") {
      const p = key.split("-");
      return `${MONTHS[Number(p[1]) - 1]} ${p[0]}`;
    }
    const p = key.split("-");
    const base = `${MONTHS[Number(p[1]) - 1]} ${Number(p[2])}, ${p[0]}`;
    return grouping === "week" ? `week commencing ${base}` : base;
  };

  const rangeTitle = () => {
    if (blocked) return "selected range";
    const f = from.split("-");
    const t = to.split("-");
    if (f[0] === t[0] && f[1] === t[1]) return `${MONTHS[Number(f[1]) - 1]} ${f[0]}`;
    if (f[0] === t[0]) return `${MONTHS[Number(f[1]) - 1]} to ${MONTHS[Number(t[1]) - 1]} ${f[0]}`;
    return `${MONTHS[Number(f[1]) - 1]} ${f[0]} to ${MONTHS[Number(t[1]) - 1]} ${t[0]}`;
  };

  const block = {
    border: `3px solid ${ink}`,
    boxShadow: `6px 6px 0 ${ink}`,
    backgroundColor: paper,
    borderRadius: brand.radius
  };

  const monoLabel = "text-[11px] uppercase tracking-[0.18em]";

  const resetRange = () => {
    setFrom(DEFAULT_FROM);
    setTo(DEFAULT_TO);
  };

  const blockHead = (num, title, sub, serif) => (
    <div className="flex items-start gap-3 px-5 pt-5 pb-4 sm:px-6 sm:pt-6">
      <span
        aria-hidden="true"
        className="shrink-0 px-2 py-[3px] text-[11px] font-bold tracking-[0.2em]"
        style={{ backgroundColor: ink, color: paper }}
      >
        {num}
      </span>
      <div className="min-w-0">
        <h2
          className={serif ? "text-[20px] sm:text-[23px] leading-[1.25]" : `${monoLabel} font-bold pt-[3px]`}
          style={serif ? { fontFamily: brand.fontHeading, letterSpacing: "-0.01em" } : undefined}
        >
          {title}
        </h2>
        {sub ? (
          <p className={`${monoLabel} mt-1.5`} style={{ color: muted }}>
            {sub}
          </p>
        ) : null}
      </div>
    </div>
  );

  const chartNotice = (headline, body) => (
    <div className="px-5 pb-6 sm:px-6">
      <div
        className="flex items-start gap-3 p-4"
        style={{ border: `1px dashed ${ink}`, backgroundColor: "rgba(10,10,10,0.03)" }}
      >
        <AlertCircle className="h-4 w-4 mt-[2px] shrink-0" aria-hidden="true" style={{ color: accent }} />
        <div>
          <p className={`${monoLabel} font-bold`}>{headline}</p>
          <p className="mt-1.5 text-[13px] leading-[1.6]" style={{ color: muted }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );

  const dimmed = { opacity: recalculating ? 0.42 : 1, transition: "opacity 220ms ease" };

  const labelEvery = buckets.length > 10 ? Math.ceil(buckets.length / 7) : 1;

  return (
    <div
      className="min-h-full w-full px-4 py-8 sm:px-8 sm:py-12"
      style={{ backgroundColor: paper, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{`
        .rp-f:focus-visible { outline: 3px solid ${accent}; outline-offset: 2px; }
        .rp-row { transition: background-color 140ms ease; }
        .rp-row:hover { background-color: rgba(10,10,10,0.05); }
        .rp-bar { transform-origin: bottom; animation: rp-grow 460ms cubic-bezier(.2,.75,.25,1) both; }
        .rp-fill { transform-origin: left; animation: rp-wide 520ms cubic-bezier(.2,.75,.25,1) both; }
        .rp-enter { animation: rp-up 320ms ease-out both; }
        @keyframes rp-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes rp-wide { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes rp-up { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .rp-bar, .rp-fill, .rp-enter { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1180px]" style={{ fontVariantNumeric: "tabular-nums" }}>
        {/* Row 1 — page title */}
        <header data-wf="b-0-0" className="mb-10">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div>
              <p className={`${monoLabel} font-bold`} style={{ color: muted }}>
                Personal ledger · {CURRENCY.code}
              </p>
              <h1
                className="mt-2 text-[44px] sm:text-[60px] leading-[0.95]"
                style={{ fontFamily: brand.fontHeading, letterSpacing: "-0.02em" }}
              >
                Reports
              </h1>
            </div>
            <div className="text-right">
              <p className={monoLabel} style={{ color: muted }}>
                {recalculating ? "Recalculating figures…" : "Figures current as of"}
              </p>
              <p className="mt-1 text-[13px] font-bold">2026-11-19 09:41</p>
            </div>
          </div>
          <div className="mt-5" style={{ borderTop: `3px solid ${ink}` }} />
          <p className="mt-3 max-w-[66ch] text-[13px] leading-[1.6]" style={{ color: muted }}>
            Everything below is calculated from your own expenses only, in your configured currency. No conversion is
            applied.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {/* Row 2 — filter bar */}
          <section data-wf="b-1-0" className="col-span-12 lg:col-span-7" style={block}>
            {blockHead("01", "Date range", "Inclusive of both dates", false)}
            <div className="px-5 pb-6 sm:px-6">
              <div className="flex flex-wrap items-end gap-x-6 gap-y-5">
                <div className="min-w-[160px] flex-1">
                  <Label htmlFor="rp-from" className={`${monoLabel} font-bold block mb-2`}>
                    From
                  </Label>
                  <Input
                    id="rp-from"
                    data-wf="i-1-0-0"
                    type="date"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    aria-invalid={rangeBroken || undefined}
                    aria-describedby={blocked ? "rp-range-msg" : undefined}
                    className="rp-f w-full text-[15px] font-bold"
                    style={{
                      border: `3px solid ${ink}`,
                      borderRadius: brand.radius,
                      backgroundColor: paper,
                      color: ink,
                      padding: "10px 12px",
                      fontFamily: brand.fontBody,
                      minHeight: 48
                    }}
                  />
                </div>
                <span aria-hidden="true" className="hidden pb-3 text-[18px] sm:block">
                  →
                </span>
                <div className="min-w-[160px] flex-1">
                  <Label htmlFor="rp-to" className={`${monoLabel} font-bold block mb-2`}>
                    To
                  </Label>
                  <Input
                    id="rp-to"
                    data-wf="i-1-0-1"
                    type="date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    aria-invalid={rangeBroken || undefined}
                    aria-describedby={blocked ? "rp-range-msg" : undefined}
                    className="rp-f w-full text-[15px] font-bold"
                    style={{
                      border: `3px solid ${ink}`,
                      borderRadius: brand.radius,
                      backgroundColor: paper,
                      color: ink,
                      padding: "10px 12px",
                      fontFamily: brand.fontBody,
                      minHeight: 48
                    }}
                  />
                </div>
              </div>

              <div className="mt-4" aria-live="polite" id="rp-range-msg">
                {rangeBroken ? (
                  <p className="flex items-start gap-2 text-[13px] leading-[1.6]" style={{ color: ink }}>
                    <AlertCircle className="h-4 w-4 mt-[3px] shrink-0" aria-hidden="true" style={{ color: accent }} />
                    <span>
                      <strong>The range runs backwards.</strong> {from} falls after {to}. Swap the two dates and the
                      report runs again — your entries are untouched.
                    </span>
                  </p>
                ) : rangeMissing ? (
                  <p className="flex items-start gap-2 text-[13px] leading-[1.6]" style={{ color: ink }}>
                    <AlertCircle className="h-4 w-4 mt-[3px] shrink-0" aria-hidden="true" style={{ color: accent }} />
                    <span>Both dates are needed before totals can be worked out.</span>
                  </p>
                ) : (
                  <p className={monoLabel} style={{ color: muted }}>
                    {rows.length} {rows.length === 1 ? "expense" : "expenses"} counted · totals update as you type
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Row 2 — grouping tabs */}
          <section data-wf="b-1-1" className="col-span-12 lg:col-span-5" style={block}>
            {blockHead("02", "Grouping", "Applies to the time chart", false)}
            <div className="px-5 pb-6 sm:px-6">
              <div role="group" aria-label="Group spending over time by" className="flex" style={{ border: `3px solid ${ink}` }}>
                {GROUPINGS.map((g, i) => {
                  const active = grouping === g.key;
                  return (
                    <button
                      key={g.key}
                      data-wf={g.wf}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setGrouping(g.key)}
                      className="rp-f flex-1 text-[13px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        minHeight: 48,
                        padding: "12px 8px",
                        backgroundColor: active ? ink : "transparent",
                        color: active ? paper : ink,
                        borderLeft: i === 0 ? "none" : `3px solid ${ink}`,
                        transition: "background-color 140ms ease, color 140ms ease"
                      }}
                    >
                      {active ? "✓ " : ""}
                      {g.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-[13px] leading-[1.6]" style={{ color: muted }}>
                Currently plotting <strong style={{ color: ink }}>by {grouping}</strong> — {buckets.length}{" "}
                {buckets.length === 1 ? "bar" : "bars"} across the range.
              </p>
            </div>
          </section>

          {/* Row 3 — spending by category */}
          <section data-wf="b-2-0" className="col-span-12 lg:col-span-6" style={block}>
            {blockHead("03", `Spending by category — ${rangeTitle()} (${CURRENCY.code})`, null, true)}
            {blocked ? (
              chartNotice("Report paused", "Fix the date range in section 01 and the category split redraws straight away.")
            ) : byCategory.length === 0 ? (
              chartNotice(
                "Nothing to plot",
                "No expenses fall inside these dates, so there is no category split to draw. Widen the range to pick up earlier entries."
              )
            ) : (
              <div className="px-5 pb-6 sm:px-6" style={dimmed}>
                <ul className="space-y-4">
                  {byCategory.map((c, i) => {
                    const share = total > 0 ? (c.amount / total) * 100 : 0;
                    const width = maxCat > 0 ? (c.amount / maxCat) * 100 : 0;
                    return (
                      <li key={c.id}>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className={`${monoLabel} font-bold truncate`}>
                            {c.name}
                            {!c.is_default ? (
                              <span className="ml-2 font-normal" style={{ color: muted }}>
                                custom
                              </span>
                            ) : null}
                          </span>
                          <span className="shrink-0 text-[13px] font-bold">
                            {money(c.amount)}
                            <span className="ml-2 font-normal" style={{ color: muted }}>
                              {share.toFixed(1)}%
                            </span>
                          </span>
                        </div>
                        <div className="mt-2 h-[18px] w-full" style={{ border: `1px solid rgba(10,10,10,0.2)` }}>
                          <div
                            key={`${c.id}-${from}-${to}`}
                            className="rp-fill h-full"
                            aria-hidden="true"
                            style={{
                              width: `${width}%`,
                              backgroundColor: i === 0 ? accent : ink,
                              animationDelay: `${i * 45}ms`
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5 flex items-center gap-2 text-[12px]" style={{ color: muted }}>
                  <span aria-hidden="true" className="inline-block h-3 w-3" style={{ backgroundColor: accent }} />
                  Largest category: {byCategory[0].name} · {CURRENCY.code} {money(byCategory[0].amount)}
                </p>
              </div>
            )}
          </section>

          {/* Row 3 — spending over time */}
          <section data-wf="b-2-1" className="col-span-12 lg:col-span-6" style={block}>
            {blockHead("04", `Spending over time — by ${grouping} (${CURRENCY.code})`, null, true)}
            {blocked ? (
              chartNotice("Report paused", "The time series needs a start date on or before the end date.")
            ) : buckets.length === 0 ? (
              chartNotice(
                "No periods to plot",
                "There are no expenses between these dates. Your earliest recorded expense is 2026-09-01."
              )
            ) : (
              <figure className="px-5 pb-6 sm:px-6 m-0" style={dimmed}>
                <div className="relative" style={{ height: 196, borderBottom: `3px solid ${ink}` }}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 flex justify-between"
                    style={{ borderTop: `1px dashed rgba(10,10,10,0.3)` }}
                  >
                    <span className="pt-1 text-[11px]" style={{ color: muted }}>
                      {money(maxBucket)}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0"
                    style={{ top: "50%", borderTop: `1px dashed rgba(10,10,10,0.2)` }}
                  />
                  <div className="absolute inset-0 flex items-end gap-[3px] pt-5">
                    {buckets.map((b, i) => {
                      const h = maxBucket > 0 ? (b.amount / maxBucket) * 100 : 0;
                      const isPeak = peak && b.key === peak.key;
                      return (
                        <div
                          key={`${grouping}-${b.key}`}
                          className="rp-bar flex-1 min-w-[4px] relative"
                          title={`${bucketSpoken(b.key)} — ${CURRENCY.code} ${money(b.amount)}`}
                          style={{
                            height: `${Math.max(h, 1.5)}%`,
                            backgroundColor: ink,
                            animationDelay: `${Math.min(i * 35, 420)}ms`
                          }}
                        >
                          {isPeak ? (
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 top-0"
                              style={{ height: 6, backgroundColor: accent }}
                            />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-2 flex gap-[3px]">
                  {buckets.map((b, i) => (
                    <span
                      key={`lbl-${b.key}`}
                      className="flex-1 min-w-[4px] text-[10px] uppercase tracking-[0.1em] overflow-hidden whitespace-nowrap"
                      style={{ color: muted }}
                      aria-hidden="true"
                    >
                      {i % labelEvery === 0 ? bucketLabel(b.key) : ""}
                    </span>
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-2 text-[12px]" style={{ color: muted }}>
                  <span aria-hidden="true" className="inline-block h-3 w-3" style={{ backgroundColor: accent }} />
                  Peak {grouping}: {peak ? bucketSpoken(peak.key) : "—"} · {CURRENCY.code}{" "}
                  {peak ? money(peak.amount) : "0.00"}
                </figcaption>
                <ul className="sr-only">
                  {buckets.map((b) => (
                    <li key={`sr-${b.key}`}>
                      {bucketSpoken(b.key)}: {CURRENCY.code} {money(b.amount)}
                    </li>
                  ))}
                </ul>
              </figure>
            )}
          </section>

          {/* Row 4 — category breakdown table */}
          <section data-wf="b-3-0" className="col-span-12" style={block}>
            {blockHead(
              "05",
              `Category breakdown — total ${CURRENCY.code} ${money(total)}`,
              blocked ? "Awaiting a valid range" : `${rangeTitle()} · open a row for the entries behind it`,
              true
            )}
            <div className="px-5 pb-6 sm:px-6" style={dimmed}>
              <div style={{ borderTop: `3px solid ${ink}` }}>
                <Table className="w-full text-left" style={{ fontVariantNumeric: "tabular-nums" }}>
                  <THead>
                    <TR style={{ backgroundColor: "rgba(10,10,10,0.05)" }}>
                      <TH
                        data-wf="i-3-0-0"
                        scope="col"
                        className={`${monoLabel} font-bold py-3 px-3`}
                        style={{ borderBottom: `1px solid rgba(10,10,10,0.2)` }}
                      >
                        Category
                      </TH>
                      <TH
                        data-wf="i-3-0-1"
                        scope="col"
                        className={`${monoLabel} font-bold py-3 px-3 text-right`}
                        style={{ borderBottom: `1px solid rgba(10,10,10,0.2)` }}
                      >
                        Total
                      </TH>
                      <TH
                        data-wf="i-3-0-2"
                        scope="col"
                        className={`${monoLabel} font-bold py-3 px-3`}
                        style={{ borderBottom: `1px solid rgba(10,10,10,0.2)` }}
                      >
                        Share of spending
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    {byCategory.length === 0 ? (
                      <TR>
                        <TD colSpan={3} className="py-6 px-3 text-[13px] leading-[1.6]" style={{ color: muted }}>
                          {blocked
                            ? "No figures yet — correct the date range in section 01."
                            : "No categories to total. Nothing was spent between these dates."}
                        </TD>
                      </TR>
                    ) : (
                      byCategory.map((c, i) => {
                        const share = total > 0 ? (c.amount / total) * 100 : 0;
                        return (
                          <TR
                            key={c.id}
                            className="rp-row rp-enter cursor-pointer"
                            style={{
                              borderBottom: `1px solid rgba(10,10,10,0.15)`,
                              animationDelay: `${i * 40}ms`
                            }}
                            onClick={() => navigate("expenses")}
                          >
                            <TD className="py-3 px-3">
                              <button
                                type="button"
                                className="rp-f inline-flex items-center gap-2 text-[14px] font-bold"
                                style={{ minHeight: 44, color: ink }}
                                aria-label={`View ${c.name} expenses`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate("expenses");
                                }}
                              >
                                <span className="underline underline-offset-4" style={{ textDecorationThickness: 2 }}>
                                  {c.name}
                                </span>
                                {!c.is_default ? (
                                  <Badge
                                    className="text-[10px] uppercase tracking-[0.14em] px-2 py-[2px] font-bold"
                                    style={{
                                      border: `1px solid ${ink}`,
                                      borderRadius: brand.radius,
                                      backgroundColor: "transparent",
                                      color: muted
                                    }}
                                  >
                                    Custom
                                  </Badge>
                                ) : null}
                                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                              </button>
                            </TD>
                            <TD className="py-3 px-3 text-right text-[14px] font-bold whitespace-nowrap">
                              {CURRENCY.code} {money(c.amount)}
                            </TD>
                            <TD className="py-3 px-3">
                              <div className="flex items-center gap-3">
                                <div
                                  className="h-[10px] w-[120px] shrink-0 hidden sm:block"
                                  style={{ border: `1px solid rgba(10,10,10,0.25)` }}
                                  aria-hidden="true"
                                >
                                  <div
                                    className="h-full"
                                    style={{ width: `${share}%`, backgroundColor: i === 0 ? accent : ink }}
                                  />
                                </div>
                                <span className="text-[13px]">{share.toFixed(1)}%</span>
                              </div>
                            </TD>
                          </TR>
                        );
                      })
                    )}
                    {byCategory.length > 0 ? (
                      <TR style={{ borderTop: `3px solid ${ink}` }}>
                        <TD className={`${monoLabel} font-bold py-3 px-3`}>Total</TD>
                        <TD className="py-3 px-3 text-right text-[15px] font-bold whitespace-nowrap">
                          {CURRENCY.code} {money(total)}
                        </TD>
                        <TD className="py-3 px-3 text-[13px]">100.0%</TD>
                      </TR>
                    ) : null}
                  </TBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Row 5 — empty state / report footer */}
          <section data-wf="b-4-0" className="col-span-12">
            {blocked ? (
              <div style={block} className="px-5 py-8 sm:px-6">
                <Empty
                  title="The report can't run on this range"
                  description={
                    rangeBroken
                      ? `“From” is set to ${from} and “To” to ${to}, so the range reads backwards. Swap the dates above to see your category split again.`
                      : "Set both a start and an end date above and the figures will be worked out instantly."
                  }
                  action={
                    <Button
                      type="button"
                      onClick={resetRange}
                      className="rp-f text-[12px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        backgroundColor: ink,
                        color: paper,
                        borderRadius: brand.radius,
                        border: `3px solid ${ink}`,
                        padding: "12px 18px",
                        minHeight: 48
                      }}
                    >
                      Reset to Sep 1 – Nov 30
                    </Button>
                  }
                />
              </div>
            ) : rows.length === 0 ? (
              <div style={block} className="px-5 py-8 sm:px-6">
                <Empty
                  title="No expenses in this date range — try a wider range"
                  description={`Nothing was recorded between ${from} and ${to}. Your ledger runs from 2026-09-01 to 2026-11-17, so stretching the dates will bring the charts back.`}
                  action={
                    <Button
                      type="button"
                      onClick={resetRange}
                      className="rp-f text-[12px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        backgroundColor: ink,
                        color: paper,
                        borderRadius: brand.radius,
                        border: `3px solid ${ink}`,
                        padding: "12px 18px",
                        minHeight: 48
                      }}
                    >
                      Widen to Sep 1 – Nov 30
                    </Button>
                  }
                />
              </div>
            ) : (
              <div className="pt-1" style={{ borderTop: `1px dashed rgba(10,10,10,0.35)` }}>
                <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pt-4">
                  <p className={monoLabel} style={{ color: muted }}>
                    End of report · {rows.length} expenses · {byCategory.length} categories · {from} → {to}
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate("expenses")}
                    className="rp-f inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em]"
                    style={{ minHeight: 44, color: ink }}
                  >
                    Open full expense history
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
