// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Switch, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, ChevronRight, Home, Clock, ArrowLeft, ArrowRight } = Icons;

const TODAY = "2026-11-19";

const USER = { id: "usr_8f21", email: "satya.ganaraju@quorq.ai", currency: "USD" };

const CATEGORIES = [
  { id: "cat_food", user_id: "usr_8f21", name: "Food", is_default: true, is_fallback: false },
  { id: "cat_transport", user_id: "usr_8f21", name: "Transport", is_default: true, is_fallback: false },
  { id: "cat_housing", user_id: "usr_8f21", name: "Housing", is_default: true, is_fallback: false },
  { id: "cat_utilities", user_id: "usr_8f21", name: "Utilities", is_default: true, is_fallback: false },
  { id: "cat_health", user_id: "usr_8f21", name: "Health", is_default: true, is_fallback: false },
  { id: "cat_fun", user_id: "usr_8f21", name: "Entertainment", is_default: true, is_fallback: false },
  { id: "cat_studio", user_id: "usr_8f21", name: "Side project", is_default: false, is_fallback: false },
  { id: "cat_none", user_id: "usr_8f21", name: "Uncategorised", is_default: true, is_fallback: true }
];

const EXPENSES = [
  // November 2026 — 37 entries, USD 1,248.50
  { id: "exp_2141", user_id: "usr_8f21", category_id: "cat_food", amount: 57.2, expense_date: "2026-11-01", notes: "Brunch — Golden Diner" },
  { id: "exp_2142", user_id: "usr_8f21", category_id: "cat_housing", amount: 220.0, expense_date: "2026-11-01", notes: "Rent — November share" },
  { id: "exp_2143", user_id: "usr_8f21", category_id: "cat_fun", amount: 13.5, expense_date: "2026-11-01", notes: "Film — Metrograph" },
  { id: "exp_2144", user_id: "usr_8f21", category_id: "cat_food", amount: 38.4, expense_date: "2026-11-02", notes: "Trader Joe's, Union Sq" },
  { id: "exp_2145", user_id: "usr_8f21", category_id: "cat_transport", amount: 38.6, expense_date: "2026-11-02", notes: "OMNY weekly ride" },
  { id: "exp_2146", user_id: "usr_8f21", category_id: "cat_health", amount: 9.9, expense_date: "2026-11-02", notes: "Duane Reade — prescription" },
  { id: "exp_2147", user_id: "usr_8f21", category_id: "cat_food", amount: 9.75, expense_date: "2026-11-03", notes: "Lunch — Sweetgreen" },
  { id: "exp_2148", user_id: "usr_8f21", category_id: "cat_housing", amount: 18.5, expense_date: "2026-11-03", notes: "Renters insurance" },
  { id: "exp_2149", user_id: "usr_8f21", category_id: "cat_studio", amount: 14.0, expense_date: "2026-11-03", notes: "Domain renewal — hadley.studio" },
  { id: "exp_2150", user_id: "usr_8f21", category_id: "cat_food", amount: 24.6, expense_date: "2026-11-04", notes: "Greenmarket haul" },
  { id: "exp_2151", user_id: "usr_8f21", category_id: "cat_utilities", amount: 62.4, expense_date: "2026-11-04", notes: "Con Edison — electric" },
  { id: "exp_2152", user_id: "usr_8f21", category_id: "cat_food", amount: 61.2, expense_date: "2026-11-05", notes: "Whole Foods shop" },
  { id: "exp_2153", user_id: "usr_8f21", category_id: "cat_transport", amount: 47.8, expense_date: "2026-11-05", notes: "Amtrak — Hudson return" },
  { id: "exp_2154", user_id: "usr_8f21", category_id: "cat_fun", amount: 28.0, expense_date: "2026-11-05", notes: "Show — Baby's All Right" },
  { id: "exp_2155", user_id: "usr_8f21", category_id: "cat_food", amount: 54.0, expense_date: "2026-11-06", notes: "Dinner — Lilia" },
  { id: "exp_2156", user_id: "usr_8f21", category_id: "cat_utilities", amount: 21.9, expense_date: "2026-11-06", notes: "Verizon Fios — share" },
  { id: "exp_2157", user_id: "usr_8f21", category_id: "cat_studio", amount: 12.0, expense_date: "2026-11-06", notes: "Figma seat" },
  { id: "exp_2158", user_id: "usr_8f21", category_id: "cat_food", amount: 14.5, expense_date: "2026-11-07", notes: "Coffee beans — Sey" },
  { id: "exp_2159", user_id: "usr_8f21", category_id: "cat_health", amount: 48.0, expense_date: "2026-11-07", notes: "Dentist — cleaning copay" },
  { id: "exp_2160", user_id: "usr_8f21", category_id: "cat_fun", amount: 31.4, expense_date: "2026-11-07", notes: "Books — McNally Jackson" },
  { id: "exp_2161", user_id: "usr_8f21", category_id: "cat_food", amount: 42.15, expense_date: "2026-11-08", notes: "Trader Joe's, Union Sq" },
  { id: "exp_2162", user_id: "usr_8f21", category_id: "cat_housing", amount: 21.5, expense_date: "2026-11-08", notes: "Laundry card top-up" },
  { id: "exp_2163", user_id: "usr_8f21", category_id: "cat_none", amount: 20.0, expense_date: "2026-11-08", notes: "Cash — no receipt" },
  { id: "exp_2164", user_id: "usr_8f21", category_id: "cat_food", amount: 8.9, expense_date: "2026-11-09", notes: "Lunch — Sweetgreen" },
  { id: "exp_2165", user_id: "usr_8f21", category_id: "cat_transport", amount: 41.2, expense_date: "2026-11-09", notes: "OMNY weekly ride" },
  { id: "exp_2166", user_id: "usr_8f21", category_id: "cat_fun", amount: 24.0, expense_date: "2026-11-09", notes: "Bar — Tørst" },
  { id: "exp_2167", user_id: "usr_8f21", category_id: "cat_food", amount: 73.3, expense_date: "2026-11-10", notes: "FreshDirect delivery" },
  { id: "exp_2168", user_id: "usr_8f21", category_id: "cat_utilities", amount: 12.0, expense_date: "2026-11-10", notes: "Mint Mobile" },
  { id: "exp_2169", user_id: "usr_8f21", category_id: "cat_studio", amount: 16.0, expense_date: "2026-11-10", notes: "Zine proofs — Linco" },
  { id: "exp_2170", user_id: "usr_8f21", category_id: "cat_food", amount: 6.8, expense_date: "2026-11-11", notes: "Bakery — She Wolf" },
  { id: "exp_2171", user_id: "usr_8f21", category_id: "cat_transport", amount: 36.4, expense_date: "2026-11-11", notes: "Lyft — JFK run" },
  { id: "exp_2172", user_id: "usr_8f21", category_id: "cat_health", amount: 12.0, expense_date: "2026-11-11", notes: "Gym day pass — Chalk" },
  { id: "exp_2173", user_id: "usr_8f21", category_id: "cat_food", amount: 22.0, expense_date: "2026-11-12", notes: "Veg box — Norwich Meadows" },
  { id: "exp_2174", user_id: "usr_8f21", category_id: "cat_transport", amount: 22.4, expense_date: "2026-11-12", notes: "Citi Bike day pass" },
  { id: "exp_2175", user_id: "usr_8f21", category_id: "cat_health", amount: 14.7, expense_date: "2026-11-12", notes: "Physical therapy copay" },
  { id: "exp_2176", user_id: "usr_8f21", category_id: "cat_fun", amount: 21.5, expense_date: "2026-11-12", notes: "Exhibition — The Whitney" },
  { id: "exp_2177", user_id: "usr_8f21", category_id: "cat_studio", amount: 28.0, expense_date: "2026-11-12", notes: "Stock photos — Unsplash+" },

  // October 2026
  { id: "exp_2101", user_id: "usr_8f21", category_id: "cat_none", amount: 15.0, expense_date: "2026-10-01", notes: "Cash — stoop sale" },
  { id: "exp_2102", user_id: "usr_8f21", category_id: "cat_utilities", amount: 21.9, expense_date: "2026-10-03", notes: "Verizon Fios — share" },
  { id: "exp_2103", user_id: "usr_8f21", category_id: "cat_fun", amount: 24.0, expense_date: "2026-10-06", notes: "Records — Academy LPs" },
  { id: "exp_2104", user_id: "usr_8f21", category_id: "cat_food", amount: 27.3, expense_date: "2026-10-08", notes: "Greenmarket haul" },
  { id: "exp_2105", user_id: "usr_8f21", category_id: "cat_studio", amount: 42.0, expense_date: "2026-10-10", notes: "Poster run — Linco" },
  { id: "exp_2106", user_id: "usr_8f21", category_id: "cat_transport", amount: 63.5, expense_date: "2026-10-12", notes: "Amtrak — Philly return" },
  { id: "exp_2107", user_id: "usr_8f21", category_id: "cat_health", amount: 19.99, expense_date: "2026-10-15", notes: "Flu shot — Duane Reade" },
  { id: "exp_2108", user_id: "usr_8f21", category_id: "cat_food", amount: 81.4, expense_date: "2026-10-17", notes: "FreshDirect delivery" },
  { id: "exp_2109", user_id: "usr_8f21", category_id: "cat_utilities", amount: 58.7, expense_date: "2026-10-19", notes: "Con Edison — electric" },
  { id: "exp_2110", user_id: "usr_8f21", category_id: "cat_housing", amount: 220.0, expense_date: "2026-10-21", notes: "Rent — October share" },
  { id: "exp_2111", user_id: "usr_8f21", category_id: "cat_food", amount: 68.5, expense_date: "2026-10-24", notes: "Dinner — Thai Diner" },
  { id: "exp_2112", user_id: "usr_8f21", category_id: "cat_fun", amount: 26.0, expense_date: "2026-10-26", notes: "Halloween show — Elsewhere" },
  { id: "exp_2113", user_id: "usr_8f21", category_id: "cat_transport", amount: 39.8, expense_date: "2026-10-28", notes: "OMNY weekly ride" },
  { id: "exp_2114", user_id: "usr_8f21", category_id: "cat_food", amount: 44.2, expense_date: "2026-10-30", notes: "Trader Joe's, Union Sq" },

  // September 2026
  { id: "exp_2061", user_id: "usr_8f21", category_id: "cat_food", amount: 72.0, expense_date: "2026-09-02", notes: "Dinner — Misi" },
  { id: "exp_2062", user_id: "usr_8f21", category_id: "cat_studio", amount: 14.0, expense_date: "2026-09-06", notes: "Domain — hadley.studio" },
  { id: "exp_2063", user_id: "usr_8f21", category_id: "cat_utilities", amount: 51.3, expense_date: "2026-09-10", notes: "Con Edison — electric" },
  { id: "exp_2064", user_id: "usr_8f21", category_id: "cat_health", amount: 45.0, expense_date: "2026-09-14", notes: "Physical therapy copay" },
  { id: "exp_2065", user_id: "usr_8f21", category_id: "cat_food", amount: 8.9, expense_date: "2026-09-17", notes: "Lunch — Sweetgreen" },
  { id: "exp_2066", user_id: "usr_8f21", category_id: "cat_fun", amount: 13.5, expense_date: "2026-09-20", notes: "Film — Metrograph" },
  { id: "exp_2067", user_id: "usr_8f21", category_id: "cat_housing", amount: 220.0, expense_date: "2026-09-22", notes: "Rent — September share" },
  { id: "exp_2068", user_id: "usr_8f21", category_id: "cat_transport", amount: 37.4, expense_date: "2026-09-25", notes: "OMNY weekly ride" },
  { id: "exp_2069", user_id: "usr_8f21", category_id: "cat_food", amount: 52.1, expense_date: "2026-09-28", notes: "Big shop — Wegmans" }
];

const PERIODS = [
  { key: "last7", label: "Last 7 days", wf: "i-1-0-0", from: "2026-11-13", to: "2026-11-19", caption: "13 – 19 Nov 2026", short: "last 7 days", grouping: "daily" },
  { key: "month", label: "This month", wf: "i-1-0-1", from: "2026-11-01", to: "2026-11-30", caption: "November 2026", short: "this month", grouping: "daily" },
  { key: "quarter", label: "Last 3 months", wf: "i-1-0-2", from: "2026-09-01", to: "2026-11-19", caption: "1 Sep – 19 Nov 2026", short: "last 3 months", grouping: "monthly" }
];

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Screen() {
  const navigate = useNavigate();
  const P = brand.primaryColor;
  const A = brand.accentColor;
  const N = brand.neutralColor;
  const BG = brand.backgroundColor;

  const [active, setActive] = React.useState("month");
  const [loading, setLoading] = React.useState(false);
  const firstRun = React.useRef(true);
  const tabRefs = React.useRef([]);

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 430);
    return () => clearTimeout(t);
  }, [active]);

  const period = PERIODS.find((p) => p.key === active) || PERIODS[1];

  const round2 = (n) => Math.round(n * 100) / 100;
  const amount = (n) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const money = (n) => USER.currency + " " + amount(n);
  const prettyDate = (iso) => {
    const d = new Date(iso + "T00:00:00Z");
    return DAYS_SHORT[d.getUTCDay()] + " " + d.getUTCDate() + " " + MONTHS_SHORT[d.getUTCMonth()];
  };

  const rows = React.useMemo(
    () =>
      EXPENSES.filter((e) => e.expense_date >= period.from && e.expense_date <= period.to).sort(
        (a, b) => (a.expense_date < b.expense_date ? 1 : -1)
      ),
    [period]
  );

  const total = round2(rows.reduce((s, e) => s + e.amount, 0));

  const byCategory = React.useMemo(() => {
    const out = CATEGORIES.map((c) => ({
      id: c.id,
      name: c.name,
      is_fallback: c.is_fallback,
      value: round2(rows.filter((e) => e.category_id === c.id).reduce((s, e) => s + e.amount, 0)),
      count: rows.filter((e) => e.category_id === c.id).length
    })).filter((c) => c.value > 0);
    out.sort((a, b) => b.value - a.value);
    return out;
  }, [rows]);

  const series = React.useMemo(() => {
    const endIso = period.to > TODAY ? TODAY : period.to;
    const points = [];
    if (period.grouping === "monthly") {
      let d = new Date(period.from + "T00:00:00Z");
      const end = new Date(endIso + "T00:00:00Z");
      while (d <= end) {
        const key = d.toISOString().slice(0, 7);
        points.push({
          key,
          label: MONTHS_SHORT[d.getUTCMonth()].toUpperCase(),
          full: MONTHS_SHORT[d.getUTCMonth()] + " 2026",
          value: 0
        });
        d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1));
      }
      rows.forEach((e) => {
        const p = points.find((pt) => pt.key === e.expense_date.slice(0, 7));
        if (p) p.value = round2(p.value + e.amount);
      });
    } else {
      let d = new Date(period.from + "T00:00:00Z");
      const end = new Date(endIso + "T00:00:00Z");
      while (d <= end) {
        const key = d.toISOString().slice(0, 10);
        points.push({ key, label: String(d.getUTCDate()), full: prettyDate(key), value: 0 });
        d = new Date(d.getTime() + 86400000);
      }
      rows.forEach((e) => {
        const p = points.find((pt) => pt.key === e.expense_date);
        if (p) p.value = round2(p.value + e.amount);
      });
    }
    return points;
  }, [rows, period]);

  const maxPoint = series.reduce((m, p) => (p.value > m ? p.value : m), 0);
  const maxCat = byCategory.length ? byCategory[0].value : 0;
  const perDay = series.length ? round2(total / series.length) : 0;
  const lastEntry = EXPENSES.slice().sort((a, b) => (a.expense_date < b.expense_date ? 1 : -1))[0];
  const isEmpty = rows.length === 0;
  const neverLogged = EXPENSES.length === 0;

  const onTabKey = (e) => {
    const i = PERIODS.findIndex((p) => p.key === active);
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % PERIODS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + PERIODS.length) % PERIODS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = PERIODS.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(PERIODS[next].key);
    const el = tabRefs.current[next];
    if (el) el.focus();
  };

  const label = "text-[11px] uppercase tracking-[0.2em] font-semibold";
  const frame = { border: "3px solid " + P, backgroundColor: BG, borderRadius: 0 };
  const num = { fontVariantNumeric: "tabular-nums" };

  const Skeleton = ({ className }) => (
    <span
      aria-hidden="true"
      className={"block wf-skel " + (className || "")}
      style={{ backgroundColor: P, opacity: 0.12 }}
    />
  );

  return (
    <div
      className="w-full px-4 sm:px-6 lg:px-10 py-8 lg:py-12"
      style={{ fontFamily: brand.fontBody, color: P, backgroundColor: BG }}
    >
      <style>{`
        @keyframes wfRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes wfGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes wfSweep { from { background-position: 0 0; } to { background-position: 22px 0; } }
        .wf-rise { animation: wfRise .3s cubic-bezier(.2,.7,.3,1) both; }
        .wf-rise-2 { animation-delay: .05s; }
        .wf-rise-3 { animation-delay: .1s; }
        .wf-bar { transform-origin: bottom; animation: wfGrow .45s cubic-bezier(.2,.7,.3,1) both; }
        .wf-barx { transform-origin: left; animation: wfGrow .45s cubic-bezier(.2,.7,.3,1) both; }
        .wf-skel { animation: wfSweep .8s linear infinite; }
        .wf-shadow { box-shadow: 6px 6px 0 ${P}; }
        .wf-press { transition: transform .12s ease, box-shadow .12s ease; box-shadow: 6px 6px 0 ${P}; }
        .wf-press:hover { transform: translate(3px, 3px); box-shadow: 3px 3px 0 ${P}; }
        .wf-press:active { transform: translate(6px, 6px); box-shadow: 0 0 0 ${P}; }
        .wf-tab { transition: background-color .12s ease, color .12s ease; }
        .wf-focus:focus-visible { outline: 3px solid ${A}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .wf-rise, .wf-bar, .wf-barx, .wf-skel { animation: none !important; }
          .wf-press, .wf-tab { transition: none !important; }
          .wf-press:hover, .wf-press:active { transform: none; box-shadow: 6px 6px 0 ${P}; }
        }
      `}</style>

      {/* ── Masthead ───────────────────────────────────────────── */}
      <header data-wf="b-0-0" className="max-w-[1180px] mx-auto">
        <div
          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2"
          style={{ color: N }}
        >
          <p className={label}>No. 01 — Personal ledger</p>
          <p className={label} style={num}>
            Thu 19 Nov 2026 · {USER.currency}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <h1
            className="text-[52px] sm:text-[68px] lg:text-[80px] leading-[0.88] tracking-[-0.02em]"
            style={{ fontFamily: brand.fontHeading }}
          >
            Dashboard
          </h1>
          <p
            className="text-[11px] leading-5 uppercase tracking-[0.14em] max-w-[21rem]"
            style={{ color: N }}
          >
            <Clock className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" aria-hidden="true" />
            Figures as of 09:12 — they refresh the moment you record an expense.
          </p>
        </div>

        <div className="mt-6" style={{ borderTop: "3px solid " + P }} />
        <div className="mt-[3px]" style={{ borderTop: "1px solid " + P }} />

        <p className="mt-3 text-[11px] uppercase tracking-[0.16em]" style={{ color: N }}>
          Private ledger — only you can see these figures · {USER.email}
        </p>
      </header>

      <div className="max-w-[1180px] mx-auto">
        {/* ── Period tabs ──────────────────────────────────────── */}
        <div data-wf="b-1-0" className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div
              role="tablist"
              aria-label="Summary period"
              className="inline-flex"
              style={{ border: "3px solid " + P }}
            >
              {PERIODS.map((p, i) => {
                const on = p.key === active;
                return (
                  <button
                    key={p.key}
                    data-wf={p.wf}
                    ref={(el) => (tabRefs.current[i] = el)}
                    role="tab"
                    id={"tab-" + p.key}
                    aria-selected={on}
                    aria-controls="summary-panel"
                    tabIndex={on ? 0 : -1}
                    onKeyDown={onTabKey}
                    onClick={() => setActive(p.key)}
                    className={
                      "wf-tab wf-focus min-h-[44px] px-4 sm:px-6 text-[11px] sm:text-xs uppercase tracking-[0.16em] " +
                      (on ? "font-bold" : "font-medium")
                    }
                    style={{
                      borderLeft: i === 0 ? "none" : "3px solid " + P,
                      backgroundColor: on ? P : "transparent",
                      color: on ? BG : P
                    }}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            <p className={label + " pb-1"} style={{ color: N }}>
              Showing <span style={{ color: P }}>{period.caption}</span>
            </p>
          </div>

          <p className="sr-only" aria-live="polite">
            {loading
              ? "Recalculating your summary."
              : "Showing " +
                period.caption +
                ", " +
                rows.length +
                " expenses, total " +
                money(total) +
                "."}
          </p>
        </div>

        <div
          id="summary-panel"
          role="tabpanel"
          key={active}
          aria-labelledby={"tab-" + active}
          aria-busy={loading}
        >
          {/* ── Totals ─────────────────────────────────────────── */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            <section
              data-wf="b-2-0"
              className="md:col-span-4 wf-shadow wf-rise p-6 lg:p-7"
              style={{ border: "3px solid " + P, backgroundColor: P, color: BG }}
            >
              <h2 className={label} style={{ color: BG, opacity: 0.75 }}>
                Total spent this month
              </h2>
              {loading ? (
                <>
                  <Skeleton className="mt-6 h-12 w-3/4" />
                  <Skeleton className="mt-4 h-3 w-1/2" />
                </>
              ) : (
                <>
                  <p className="mt-5 flex items-baseline gap-2" style={num}>
                    <span className="text-sm uppercase tracking-[0.2em]" style={{ opacity: 0.7 }}>
                      {USER.currency}
                    </span>
                    <span className="text-[44px] lg:text-[52px] leading-none font-bold">
                      {amount(total)}
                    </span>
                  </p>
                  <div className="mt-5" style={{ borderTop: "1px dashed " + BG, opacity: 0.4 }} />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.14em]" style={num}>
                    {period.caption} · {money(perDay)} per{" "}
                    {period.grouping === "monthly" ? "month" : "day"}
                  </p>
                </>
              )}
            </section>

            <section
              data-wf="b-2-1"
              className="md:col-span-4 wf-shadow wf-rise wf-rise-2 p-6 lg:p-7"
              style={frame}
            >
              <h2 className={label} style={{ color: N }}>
                Expenses recorded
              </h2>
              {loading ? (
                <>
                  <Skeleton className="mt-6 h-12 w-1/3" />
                  <Skeleton className="mt-4 h-3 w-2/3" />
                </>
              ) : (
                <>
                  <p className="mt-5 text-[44px] lg:text-[52px] leading-none font-bold" style={num}>
                    {rows.length}
                  </p>
                  <div
                    className="mt-5"
                    style={{ borderTop: "1px solid " + P, opacity: 0.15 }}
                  />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.14em]" style={{ color: N, ...num }}>
                    {byCategory.length} categories used · last entry {prettyDate(lastEntry.expense_date)}
                  </p>
                </>
              )}
            </section>

            <section
              data-wf="b-2-2"
              className="md:col-span-4 wf-shadow wf-rise wf-rise-3 p-6 lg:p-7"
              style={frame}
            >
              <h2 className={label} style={{ color: N }}>
                Top category
              </h2>
              {loading ? (
                <>
                  <Skeleton className="mt-6 h-10 w-2/3" />
                  <Skeleton className="mt-4 h-3 w-1/2" />
                </>
              ) : byCategory.length === 0 ? (
                <>
                  <p
                    className="mt-5 text-[34px] leading-none"
                    style={{ fontFamily: brand.fontHeading, color: N }}
                  >
                    None yet
                  </p>
                  <div className="mt-5" style={{ borderTop: "1px solid " + P, opacity: 0.15 }} />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.14em]" style={{ color: N }}>
                    A leader appears once this period has an entry
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="mt-4 text-[34px] lg:text-[40px] leading-none"
                    style={{ fontFamily: brand.fontHeading }}
                  >
                    {byCategory[0].name}
                  </p>
                  <p className="mt-2 text-xl font-bold" style={num}>
                    {money(byCategory[0].value)}
                  </p>
                  <div className="mt-4" style={{ borderTop: "1px solid " + P, opacity: 0.15 }} />
                  <p className="mt-3 text-[11px] uppercase tracking-[0.14em]" style={{ color: N, ...num }}>
                    {((byCategory[0].value / total) * 100).toFixed(1)}% of {period.short} ·{" "}
                    {byCategory[0].count} entries
                  </p>
                </>
              )}
            </section>
          </div>

          {/* ── Figures ────────────────────────────────────────── */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Fig. 1 — by category */}
            <section
              data-wf="b-3-0"
              className="md:col-span-6 wf-shadow wf-rise p-6 lg:p-7"
              style={frame}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-[22px] leading-tight" style={{ fontFamily: brand.fontHeading }}>
                  Spending by category
                </h2>
                <span className={label} style={{ color: N }}>
                  Fig. 1
                </span>
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em]" style={{ color: N }}>
                {period.caption}
              </p>
              <div className="mt-4" style={{ borderTop: "1px solid " + P, opacity: 0.15 }} />

              {loading ? (
                <ul className="mt-6 space-y-5">
                  {[72, 54, 38, 26].map((w, i) => (
                    <li key={i}>
                      <Skeleton className="h-3 w-1/3" />
                      <Skeleton className="mt-2 h-3" />
                    </li>
                  ))}
                </ul>
              ) : byCategory.length === 0 ? (
                <p className="mt-8 mb-4 text-[13px] leading-6" style={{ color: N }}>
                  No category totals to plot — nothing was recorded in {period.caption}. The
                  breakdown fills in as soon as an expense lands in this range.
                </p>
              ) : (
                <ol className="mt-6 space-y-5">
                  {byCategory.map((c, i) => (
                    <li key={c.id}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[11px] uppercase tracking-[0.16em] font-semibold">
                          <span style={{ color: N, ...num }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>{" "}
                          {c.name}
                          {c.is_fallback ? (
                            <span className="ml-2 font-normal" style={{ color: N }}>
                              (fallback)
                            </span>
                          ) : null}
                        </span>
                        <span className="text-[12px] font-bold whitespace-nowrap" style={num}>
                          {money(c.value)}
                          <span className="ml-2 font-normal" style={{ color: N }}>
                            {((c.value / total) * 100).toFixed(1)}%
                          </span>
                        </span>
                      </div>
                      <div
                        className="mt-2 h-3"
                        aria-hidden="true"
                        style={{ borderBottom: "1px solid " + P }}
                      >
                        <div
                          className="h-3 wf-barx"
                          style={{
                            width: Math.max((c.value / maxCat) * 100, 1.5) + "%",
                            backgroundColor: i === 0 ? A : P,
                            animationDelay: i * 40 + "ms"
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>

            {/* Fig. 2 — over time */}
            <section
              data-wf="b-3-1"
              className="md:col-span-6 wf-shadow wf-rise wf-rise-2 p-6 lg:p-7"
              style={frame}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-[22px] leading-tight" style={{ fontFamily: brand.fontHeading }}>
                  Spending over time
                </h2>
                <span className={label} style={{ color: N }}>
                  Fig. 2
                </span>
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em]" style={{ color: N, ...num }}>
                {period.grouping === "monthly" ? "Monthly" : "Daily"} ·{" "}
                {maxPoint > 0 ? "Peak " + money(maxPoint) : "No peak yet"}
              </p>
              <div className="mt-4" style={{ borderTop: "1px solid " + P, opacity: 0.15 }} />

              {loading ? (
                <div className="mt-6 h-[196px] flex items-end gap-[4px]" aria-hidden="true">
                  {[40, 72, 30, 88, 54, 64, 36, 92, 48, 60, 28, 76].map((h, i) => (
                    <Skeleton key={i} className="flex-1" style={{ height: h + "%" }} />
                  ))}
                </div>
              ) : maxPoint === 0 ? (
                <p className="mt-8 mb-4 text-[13px] leading-6" style={{ color: N }}>
                  The line is flat at zero for {period.caption}. Nothing has been logged in this
                  window, so there is no trend to read yet.
                </p>
              ) : (
                <ul className="mt-6 h-[200px] flex items-stretch gap-[3px]">
                  {series.map((pt, i) => {
                    const isPeak = pt.value === maxPoint && pt.value > 0;
                    return (
                      <li key={pt.key} className="flex-1 min-w-0 flex flex-col">
                        <div className="flex-1 flex items-end" aria-hidden="true">
                          <div
                            className="w-full wf-bar"
                            style={{
                              height: pt.value > 0 ? Math.max((pt.value / maxPoint) * 100, 2) + "%" : "2px",
                              backgroundColor: isPeak ? A : P,
                              opacity: pt.value > 0 ? 1 : 0.2,
                              animationDelay: i * 22 + "ms"
                            }}
                          />
                        </div>
                        <span className="sr-only">
                          {pt.full}: {money(pt.value)}
                          {isPeak ? " — highest in this period" : ""}
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-2 text-center text-[9px] tracking-tight"
                          style={{ color: isPeak ? A : N, ...num }}
                        >
                          {pt.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          </div>

          {/* ── Actions ────────────────────────────────────────── */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div data-wf="b-4-0" className="md:col-span-4">
              <Button
                onClick={() => navigate("expenses")}
                className="wf-press wf-focus w-full min-h-[56px] px-6 inline-flex items-center justify-center gap-3 text-[13px] uppercase tracking-[0.18em] font-bold"
                style={{
                  backgroundColor: A,
                  color: BG,
                  border: "3px solid " + P,
                  borderRadius: 0,
                  fontFamily: brand.fontBody
                }}
              >
                <Plus className="w-5 h-5" aria-hidden="true" />
                Add expense
              </Button>
            </div>

            <div data-wf="b-4-1" className="md:col-span-4">
              <button
                type="button"
                onClick={() => navigate("reports")}
                className="wf-focus w-full min-h-[56px] px-2 inline-flex items-center justify-between gap-3 text-[13px] uppercase tracking-[0.18em] font-semibold"
                style={{ color: P, borderBottom: "3px solid " + P, borderRadius: 0 }}
              >
                See full reports
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden md:block md:col-span-4" aria-hidden="true">
              <div style={{ borderTop: "1px dashed " + P, opacity: 0.35 }} />
              <div className="mt-[6px]" style={{ borderTop: "1px dashed " + P, opacity: 0.35 }} />
            </div>
          </div>

          {/* ── Nothing to show ────────────────────────────────── */}
          {isEmpty && !loading ? (
            <section
              data-wf="b-5-0"
              className="mt-8 wf-shadow wf-rise p-2"
              style={{ border: "3px solid " + P, backgroundColor: BG }}
            >
              <div style={{ border: "1px dashed " + P }}>
                <p className={label + " px-6 pt-5"} style={{ color: N }}>
                  No. 06 — Nothing to show
                </p>
                <Empty
                  className="px-6 pb-8 pt-2"
                  title={
                    neverLogged
                      ? "No expenses yet"
                      : "Nothing recorded for " + period.caption
                  }
                  description={
                    neverLogged
                      ? "Record your first expense to see your spending summary here."
                      : "Your summary is blank for this window. The last entry on file is " +
                        lastEntry.notes +
                        " — " +
                        money(lastEntry.amount) +
                        " on " +
                        prettyDate(lastEntry.expense_date) +
                        ". Switch to This month, or log what you've spent since."
                  }
                  action={
                    <Button
                      onClick={() => navigate("expenses")}
                      className="wf-press wf-focus min-h-[48px] px-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] font-bold"
                      style={{
                        backgroundColor: A,
                        color: BG,
                        border: "3px solid " + P,
                        borderRadius: 0,
                        fontFamily: brand.fontBody
                      }}
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                      {neverLogged ? "Record first expense" : "Add expense"}
                    </Button>
                  }
                />
              </div>
            </section>
          ) : null}
        </div>

        <p
          className="mt-12 pt-4 text-[10px] uppercase tracking-[0.18em]"
          style={{ color: N, borderTop: "1px solid " + P }}
        >
          Amounts shown in {USER.currency}, exactly as entered — no conversion is applied. Free to
          use, always.
        </p>
      </div>
    </div>
  );
}
