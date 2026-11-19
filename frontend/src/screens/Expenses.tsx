// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, ChevronRight, Clock, Trash, Edit, Filter, Download, AlertCircle, CheckCircle } = Icons;

const CURRENCY = { code: "USD", symbol: "$" };

const TODAY = "2026-11-19";

const CATEGORIES = [
  { id: "cat_food", name: "Food", is_default: true, is_fallback: false },
  { id: "cat_transport", name: "Transport", is_default: true, is_fallback: false },
  { id: "cat_housing", name: "Housing", is_default: true, is_fallback: false },
  { id: "cat_utilities", name: "Utilities", is_default: true, is_fallback: false },
  { id: "cat_health", name: "Health", is_default: true, is_fallback: false },
  { id: "cat_fun", name: "Entertainment", is_default: true, is_fallback: false },
  { id: "cat_uncat", name: "Uncategorised", is_default: true, is_fallback: true },
  { id: "cat_climb", name: "Bouldering gym", is_default: false, is_fallback: false },
  { id: "cat_vinyl", name: "Vinyl & books", is_default: false, is_fallback: false },
];

const SEED_EXPENSES = [
  { id: "exp_2291", category_id: "cat_food", amount: 18.4, expense_date: "2026-11-19", notes: "Lunch — Ba Bar, takeaway", created_at: "2026-11-19T12:41:00Z", updated_at: null },
  { id: "exp_2288", category_id: "cat_transport", amount: 3.25, expense_date: "2026-11-18", notes: "ORCA tap — 3rd & Pike", created_at: "2026-11-18T08:12:00Z", updated_at: null },
  { id: "exp_2287", category_id: "cat_vinyl", amount: 42.0, expense_date: "2026-11-18", notes: "Elliott Bay — two paperbacks", created_at: "2026-11-18T19:03:00Z", updated_at: null },
  { id: "exp_2283", category_id: "cat_food", amount: 96.73, expense_date: "2026-11-17", notes: "Weekly shop, Trader Joe's", created_at: "2026-11-17T17:22:00Z", updated_at: "2026-11-18T09:04:00Z" },
  { id: "exp_2280", category_id: "cat_climb", amount: 29.0, expense_date: "2026-11-16", notes: "Day pass + shoe rental", created_at: "2026-11-16T20:10:00Z", updated_at: null },
  { id: "exp_2276", category_id: "cat_fun", amount: 24.5, expense_date: "2026-11-15", notes: "SIFF Uptown, two tickets", created_at: "2026-11-15T21:48:00Z", updated_at: null },
  { id: "exp_2271", category_id: "cat_health", amount: 65.0, expense_date: "2026-11-14", notes: "Dentist co-pay", created_at: "2026-11-14T15:30:00Z", updated_at: null },
  { id: "exp_2268", category_id: "cat_transport", amount: 51.8, expense_date: "2026-11-13", notes: "Gas — Shell, Aurora Ave", created_at: "2026-11-13T09:02:00Z", updated_at: null },
  { id: "exp_2263", category_id: "cat_food", amount: 11.95, expense_date: "2026-11-12", notes: "Victrola coffee + scone", created_at: "2026-11-12T08:44:00Z", updated_at: null },
  { id: "exp_2259", category_id: "cat_utilities", amount: 88.12, expense_date: "2026-11-11", notes: "Seattle City Light — October", created_at: "2026-11-11T11:15:00Z", updated_at: null },
  { id: "exp_2254", category_id: "cat_uncat", amount: 15.0, expense_date: "2026-11-10", notes: "Paying Dana back — still to sort", created_at: "2026-11-10T22:01:00Z", updated_at: null },
  { id: "exp_2248", category_id: "cat_housing", amount: 1480.0, expense_date: "2026-11-08", notes: "November rent — Ballard", created_at: "2026-11-08T07:30:00Z", updated_at: null },
  { id: "exp_2244", category_id: "cat_food", amount: 34.2, expense_date: "2026-11-07", notes: "Dinner with Priya — Hale's", created_at: "2026-11-07T20:52:00Z", updated_at: null },
  { id: "exp_2239", category_id: "cat_utilities", amount: 42.68, expense_date: "2026-11-05", notes: "Internet — Ziply Fiber", created_at: "2026-11-05T10:05:00Z", updated_at: null },
  { id: "exp_2235", category_id: "cat_transport", amount: 12.75, expense_date: "2026-11-04", notes: "Link light rail, airport run", created_at: "2026-11-04T05:40:00Z", updated_at: null },
  { id: "exp_2230", category_id: "cat_fun", amount: 16.99, expense_date: "2026-11-02", notes: "Spotify + photo storage", created_at: "2026-11-02T06:00:00Z", updated_at: null },
  { id: "exp_2226", category_id: "cat_health", amount: 9.49, expense_date: "2026-11-01", notes: "Pharmacy — allergy tablets", created_at: "2026-11-01T13:21:00Z", updated_at: null },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href]';

export default function Screen() {
  const navigate = useNavigate();
  const primary = brand.primaryColor;
  const accent = brand.accentColor;
  const neutral = brand.neutralColor;
  const bg = brand.backgroundColor;

  const [rows, setRows] = React.useState(SEED_EXPENSES);
  const [loading, setLoading] = React.useState(true);
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [from, setFrom] = React.useState("2026-11-01");
  const [to, setTo] = React.useState("2026-11-30");

  const [formOpen, setFormOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);
  const [draft, setDraft] = React.useState({ amount: "", expense_date: TODAY, category_id: "cat_food", notes: "" });
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);

  const [deleteTarget, setDeleteTarget] = React.useState(null);
  const [deleting, setDeleting] = React.useState(false);

  const [notice, setNotice] = React.useState(null); // { tone: 'done' | 'note', text }
  const [exporting, setExporting] = React.useState(false);
  const [highlightId, setHighlightId] = React.useState(null);
  const [syncLabel, setSyncLabel] = React.useState("syncing…");

  const timers = React.useRef([]);
  const triggerRef = React.useRef(null);
  const formDialogRef = React.useRef(null);
  const deleteDialogRef = React.useRef(null);
  const firstFieldRef = React.useRef(null);
  const cancelDeleteRef = React.useRef(null);

  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
    return t;
  };

  React.useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      setSyncLabel("last synced 09:12 · local copy");
    }, 700);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  React.useEffect(() => {
    if (formOpen && firstFieldRef.current) firstFieldRef.current.focus();
  }, [formOpen]);

  React.useEffect(() => {
    if (deleteTarget && cancelDeleteRef.current) cancelDeleteRef.current.focus();
  }, [deleteTarget]);

  const money = (n) =>
    CURRENCY.symbol + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const catName = (id) => (CATEGORIES.find((c) => c.id === id) || { name: "Uncategorised" }).name;

  const weekday = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return WEEKDAYS[d.getDay()];
  };

  const prettyDate = (iso) => {
    const [y, m, d] = iso.split("-");
    return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
  };

  const filtered = React.useMemo(() => {
    return rows
      .filter((r) => (categoryFilter === "all" ? true : r.category_id === categoryFilter))
      .filter((r) => (from ? r.expense_date >= from : true))
      .filter((r) => (to ? r.expense_date <= to : true))
      .sort((a, b) =>
        a.expense_date === b.expense_date
          ? String(b.created_at).localeCompare(String(a.created_at))
          : b.expense_date.localeCompare(a.expense_date)
      );
  }, [rows, categoryFilter, from, to]);

  const filteredTotal = filtered.reduce((s, r) => s + r.amount, 0);
  const largest = filtered.reduce((m, r) => Math.max(m, r.amount), 0);
  const hasAnyExpenses = rows.length > 0;
  const filtersActive = categoryFilter !== "all" || from !== "2026-11-01" || to !== "2026-11-30";

  const flash = (tone, text) => {
    setNotice({ tone, text });
    later(() => setNotice(null), 6000);
  };

  const openAdd = (e) => {
    triggerRef.current = e && e.currentTarget;
    setEditingId(null);
    setDraft({
      amount: "",
      expense_date: TODAY,
      category_id: categoryFilter === "all" ? "cat_food" : categoryFilter,
      notes: "",
    });
    setErrors({});
    setFormOpen(true);
  };

  const openEdit = (expense, e) => {
    triggerRef.current = e && e.currentTarget;
    setEditingId(expense.id);
    setDraft({
      amount: expense.amount.toFixed(2),
      expense_date: expense.expense_date,
      category_id: expense.category_id,
      notes: expense.notes || "",
    });
    setErrors({});
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setSaving(false);
    later(() => triggerRef.current && triggerRef.current.focus && triggerRef.current.focus(), 10);
  };

  const validate = (d) => {
    const next = {};
    const raw = String(d.amount).trim().replace(/^\$/, "");
    if (!raw) next.amount = "Enter an amount — an expense can't be saved without one.";
    else if (!/^\d*\.?\d+$/.test(raw)) next.amount = "Numbers only, like 24.50. Drop any letters or commas.";
    else if (Number(raw) <= 0) next.amount = "The amount has to be greater than zero.";
    if (!d.expense_date) next.expense_date = "Pick the date you spent it.";
    else if (d.expense_date > TODAY) next.expense_date = `That's after today (${TODAY}). Log spending once it has happened.`;
    if (!d.category_id) next.category_id = "Every expense needs a category. Pick Uncategorised if you're unsure.";
    return next;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const next = validate(draft);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSaving(true);
    const amount = Number(String(draft.amount).trim().replace(/^\$/, ""));
    later(() => {
      if (editingId) {
        setRows((prev) =>
          prev.map((r) =>
            r.id === editingId
              ? { ...r, amount, expense_date: draft.expense_date, category_id: draft.category_id, notes: draft.notes.trim(), updated_at: "2026-11-19T14:05:00Z" }
              : r
          )
        );
        setHighlightId(editingId);
        flash("done", `Updated — ${money(amount)} in ${catName(draft.category_id)} on ${draft.expense_date}.`);
      } else {
        const id = "exp_" + Math.floor(2300 + Math.random() * 699);
        setRows((prev) => [
          { id, category_id: draft.category_id, amount, expense_date: draft.expense_date, notes: draft.notes.trim(), created_at: "2026-11-19T14:05:00Z", updated_at: null },
          ...prev,
        ]);
        setHighlightId(id);
        flash("done", `Saved — ${money(amount)} in ${catName(draft.category_id)} on ${draft.expense_date}.`);
      }
      setSyncLabel("saved 14:05 · local copy");
      later(() => setHighlightId(null), 2200);
      closeForm();
    }, 520);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setDeleting(true);
    const target = deleteTarget;
    later(() => {
      setRows((prev) => prev.filter((r) => r.id !== target.id));
      setDeleting(false);
      setDeleteTarget(null);
      setSyncLabel("saved 14:06 · local copy");
      flash("done", `Deleted — ${money(target.amount)}, ${target.notes || catName(target.category_id)}. It no longer counts in reports or exports.`);
      later(() => triggerRef.current && triggerRef.current.focus && triggerRef.current.focus(), 10);
    }, 420);
  };

  const runExport = () => {
    setExporting(true);
    later(() => {
      setExporting(false);
      const label = `expenses_${from || "start"}_${to || "today"}.csv`;
      if (filtered.length === 0) {
        flash("note", `Nothing to export — ${label} was written with the header row (amount, date, category, notes) and no data rows.`);
      } else {
        flash("done", `Exported ${filtered.length} ${filtered.length === 1 ? "row" : "rows"} to ${label} — amount, date, category, notes.`);
      }
    }, 900);
  };

  const trapKeys = (e, ref, onClose) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !ref.current) return;
    const nodes = Array.from(ref.current.querySelectorAll(FOCUSABLE));
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const mono = { fontFamily: brand.fontBody };
  const serif = { fontFamily: brand.fontHeading };
  const label = "text-[11px] uppercase tracking-[0.18em]";
  const blockStyle = { border: `3px solid ${primary}`, backgroundColor: bg, borderRadius: 0 };
  const fieldStyle = {
    border: `3px solid ${primary}`,
    borderRadius: 0,
    backgroundColor: bg,
    color: primary,
    fontFamily: brand.fontBody,
    fontVariantNumeric: "tabular-nums",
  };

  const css = `
    .ledger :focus-visible { outline: 3px solid ${accent}; outline-offset: 2px; }
    .ledger button, .ledger input, .ledger select, .ledger textarea { border-radius: 0 !important; }
    .ledger table { font-variant-numeric: tabular-nums; }
    @keyframes bsRowIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    @keyframes bsSheetIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
    @keyframes bsPulse { 0%,100% { opacity: .35; } 50% { opacity: .8; } }
    .bs-row-in { animation: bsRowIn 420ms cubic-bezier(.2,.7,.3,1); }
    .bs-sheet-in { animation: bsSheetIn 180ms cubic-bezier(.2,.7,.3,1); }
    .bs-skel { animation: bsPulse 1.1s ease-in-out infinite; }
    .bs-press { transition: transform 110ms ease, box-shadow 110ms ease, background-color 110ms ease, color 110ms ease; }
    .bs-press:active { transform: translate(3px,3px); box-shadow: 0 0 0 ${primary} !important; }
    .bs-rowhover { transition: background-color 120ms ease; }
    @media (prefers-reduced-motion: reduce) {
      .ledger *, .bs-row-in, .bs-sheet-in, .bs-skel, .bs-press { animation: none !important; transition: none !important; }
    }
  `;

  const BtnSolid = ({ children, ...rest }) => (
    <Button
      {...rest}
      className={"bs-press min-h-[48px] px-5 text-[13px] uppercase tracking-[0.14em] font-bold inline-flex items-center justify-center gap-2 " + (rest.className || "")}
      style={{ backgroundColor: accent, color: "#ffffff", border: `3px solid ${primary}`, boxShadow: `5px 5px 0 ${primary}`, fontFamily: brand.fontBody, ...(rest.style || {}) }}
    >
      {children}
    </Button>
  );

  const BtnOutline = ({ children, ...rest }) => (
    <Button
      {...rest}
      className={"bs-press min-h-[48px] px-5 text-[13px] uppercase tracking-[0.14em] font-bold inline-flex items-center justify-center gap-2 " + (rest.className || "")}
      style={{ backgroundColor: bg, color: primary, border: `3px solid ${primary}`, boxShadow: `5px 5px 0 ${primary}`, fontFamily: brand.fontBody, ...(rest.style || {}) }}
    >
      {children}
    </Button>
  );

  const errorNote = (id, msg) =>
    msg ? (
      <p id={id} role="alert" className="mt-2 flex gap-2 pl-2 text-[12px] leading-relaxed" style={{ ...mono, color: primary, borderLeft: `4px solid ${accent}` }}>
        <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="font-bold">{msg}</span>
      </p>
    ) : null;

  return (
    <div className="ledger w-full px-4 pb-24 pt-8 sm:px-8" style={{ backgroundColor: bg, color: primary, ...mono }}>
      <style>{css}</style>

      {/* ───────────── b-0-0 page title ───────────── */}
      <header data-wf="b-0-0" className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-5" style={{ borderBottom: `3px solid ${primary}` }}>
          <div>
            <p className={label} style={{ color: neutral }}>
              Ledger · private account · {CURRENCY.code}
            </p>
            <h1 className="mt-2 text-[44px] leading-[0.95] sm:text-[60px]" style={serif}>
              Expenses
            </h1>
            <p className="mt-3 max-w-[58ch] text-[13px] leading-relaxed" style={{ color: neutral }}>
              Everything you've logged, newest first. Only you can see this ledger —{" "}
              <span style={{ color: primary }} aria-live="polite">
                {syncLabel}
              </span>
              .
            </p>
          </div>
          <dl className="flex gap-10 pb-1" style={{ fontVariantNumeric: "tabular-nums" }}>
            <div>
              <dt className={label} style={{ color: neutral }}>
                Total in range
              </dt>
              <dd className="mt-1 text-[34px] leading-none sm:text-[42px]" style={{ ...serif, color: accent }}>
                {loading ? "——" : money(filteredTotal)}
              </dd>
            </div>
            <div>
              <dt className={label} style={{ color: neutral }}>
                Entries
              </dt>
              <dd className="mt-1 text-[34px] leading-none sm:text-[42px]" style={serif}>
                {loading ? "—" : filtered.length}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto mt-8 max-w-[1180px]">
        {/* ───────────── Row 2 ───────────── */}
        <div className="grid grid-cols-12 gap-5">
          {/* b-1-0 filter bar */}
          <section data-wf="b-1-0" className="col-span-12 lg:col-span-8 p-5" style={{ ...blockStyle, boxShadow: `6px 6px 0 ${primary}` }}>
            <h2 className={label + " mb-4 flex items-center gap-2"} style={{ color: neutral }}>
              <Filter className="h-4 w-4" aria-hidden="true" />
              01 — Filter the history
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <Label htmlFor="f-category" className={label + " block mb-2 font-bold"} style={{ color: primary }}>
                  Category
                </Label>
                <Select
                  id="f-category"
                  data-wf="i-1-0-0"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="h-[48px] w-full px-3 text-[14px]"
                  style={fieldStyle}
                >
                  <option value="all">All categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                      {c.is_default ? "" : " (custom)"}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="f-from" className={label + " block mb-2 font-bold"} style={{ color: primary }}>
                  From
                </Label>
                <Input id="f-from" data-wf="i-1-0-1" type="date" value={from} max={to || undefined} onChange={(e) => setFrom(e.target.value)} className="h-[48px] w-full px-3 text-[14px]" style={fieldStyle} />
              </div>
              <div>
                <Label htmlFor="f-to" className={label + " block mb-2 font-bold"} style={{ color: primary }}>
                  To
                </Label>
                <Input id="f-to" data-wf="i-1-0-2" type="date" value={to} min={from || undefined} onChange={(e) => setTo(e.target.value)} className="h-[48px] w-full px-3 text-[14px]" style={fieldStyle} />
              </div>
            </div>
            <p className="mt-4 text-[12px]" style={{ color: neutral }}>
              {filtersActive ? "Filters applied — the table, the totals and the CSV export all follow them." : "Showing November 2026. Narrow the dates or pick a category to focus the ledger."}
            </p>
          </section>

          {/* b-1-1 / b-1-2 actions */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 sm:flex-row lg:flex-col">
            <BtnSolid data-wf="b-1-1" onClick={openAdd} className="w-full sm:flex-1 lg:flex-none lg:h-[86px] lg:text-[15px]">
              <Plus className="h-5 w-5" aria-hidden="true" />
              Add expense
            </BtnSolid>
            <BtnOutline data-wf="b-1-2" onClick={runExport} disabled={exporting} aria-busy={exporting} className="w-full sm:flex-1 lg:flex-none lg:h-[86px]" style={exporting ? { opacity: 0.7 } : undefined}>
              <Download className="h-4 w-4" aria-hidden="true" />
              {exporting ? "Writing CSV…" : "Export CSV"}
            </BtnOutline>
          </div>
        </div>

        {/* status strip */}
        <div aria-live="polite" className="mt-5">
          {notice ? (
            <div
              className="bs-sheet-in flex items-start gap-3 px-5 py-4 text-[13px] leading-relaxed"
              style={
                notice.tone === "done"
                  ? { backgroundColor: primary, color: bg, border: `3px solid ${primary}` }
                  : { backgroundColor: bg, color: primary, border: `3px solid ${primary}`, borderLeft: `10px solid ${accent}` }
              }
            >
              {notice.tone === "done" ? <CheckCircle className="mt-[1px] h-4 w-4 shrink-0" aria-hidden="true" /> : <AlertCircle className="mt-[1px] h-4 w-4 shrink-0" aria-hidden="true" />}
              <span>
                <strong className="uppercase tracking-[0.14em] mr-2 text-[11px]">{notice.tone === "done" ? "Done" : "Note"}</strong>
                {notice.text}
              </span>
            </div>
          ) : null}
        </div>

        {/* ───────────── b-2-0 table ───────────── */}
        <section data-wf="b-2-0" className="mt-6" style={{ ...blockStyle, boxShadow: `6px 6px 0 ${primary}` }}>
          <div className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-5" style={{ borderBottom: `3px solid ${primary}` }}>
            <h2 className="text-[24px] leading-none sm:text-[30px]" style={serif}>
              Expense history{" "}
              <span className="text-[13px] align-middle" style={{ ...mono, color: neutral }}>
                (most recent first)
              </span>
            </h2>
            <p className={label} style={{ color: neutral }}>
              02 — {from || "start"} → {to || TODAY}
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full min-w-[760px] border-collapse text-left" style={{ fontVariantNumeric: "tabular-nums" }}>
              <caption className="sr-only">Your recorded expenses, newest first, with amount, category and notes</caption>
              <THead>
                <TR style={{ borderBottom: `3px solid ${primary}` }}>
                  <TH data-wf="i-2-0-0" scope="col" className={label + " px-5 py-3 font-bold"} style={{ color: neutral, width: "16%" }}>
                    Date
                  </TH>
                  <TH data-wf="i-2-0-1" scope="col" className={label + " px-5 py-3 font-bold"} style={{ color: neutral, width: "20%" }}>
                    Category
                  </TH>
                  <TH data-wf="i-2-0-2" scope="col" className={label + " px-5 py-3 font-bold text-right"} style={{ color: neutral, width: "16%" }}>
                    Amount ({CURRENCY.code})
                  </TH>
                  <TH data-wf="i-2-0-3" scope="col" className={label + " px-5 py-3 font-bold"} style={{ color: neutral, width: "32%" }}>
                    Notes
                  </TH>
                  <TH data-wf="i-2-0-4" scope="col" className={label + " px-5 py-3 font-bold text-right"} style={{ color: neutral, width: "16%" }}>
                    Actions
                  </TH>
                </TR>
              </THead>
              <TBody aria-busy={loading}>
                {loading
                  ? [0, 1, 2, 3, 4].map((i) => (
                      <TR key={i} style={{ borderBottom: `1px dashed ${neutral}66` }}>
                        <TD className="px-5 py-5" colSpan={5}>
                          <span className="sr-only">Pulling your ledger…</span>
                          <span className="bs-skel block h-3 w-full" style={{ backgroundColor: neutral, opacity: 0.35, animationDelay: i * 90 + "ms" }} />
                        </TD>
                      </TR>
                    ))
                  : filtered.map((r) => {
                      const share = largest > 0 ? Math.max(6, Math.round((r.amount / largest) * 100)) : 0;
                      const isNew = r.id === highlightId;
                      return (
                        <TR
                          key={r.id}
                          className={"bs-rowhover " + (isNew ? "bs-row-in" : "")}
                          style={{ borderBottom: `1px dashed ${neutral}66`, backgroundColor: isNew ? accent + "1f" : "transparent" }}
                        >
                          <TD className="px-5 py-4 align-top text-[13px]">
                            <span className="block font-bold">{r.expense_date}</span>
                            <span className="block text-[11px] uppercase tracking-[0.14em]" style={{ color: neutral }}>
                              {weekday(r.expense_date)} · {prettyDate(r.expense_date)}
                            </span>
                          </TD>
                          <TD className="px-5 py-4 align-top">
                            <Badge
                              className="inline-block px-2 py-1 text-[11px] uppercase tracking-[0.12em] font-bold"
                              style={{ border: `2px solid ${primary}`, backgroundColor: r.category_id === "cat_uncat" ? primary : bg, color: r.category_id === "cat_uncat" ? bg : primary, borderRadius: 0 }}
                            >
                              {catName(r.category_id)}
                            </Badge>
                          </TD>
                          <TD className="px-5 py-4 align-top text-right">
                            <span className="block text-[17px] font-bold">{money(r.amount)}</span>
                            <span className="mt-2 ml-auto block h-[4px]" style={{ width: share + "%", backgroundColor: r.amount >= 100 ? accent : primary, opacity: r.amount >= 100 ? 1 : 0.35 }} aria-hidden="true" />
                          </TD>
                          <TD className="px-5 py-4 align-top text-[13px] leading-relaxed" style={{ color: r.notes ? primary : neutral }}>
                            {r.notes || "— no note"}
                            {r.updated_at ? (
                              <span className="mt-1 block text-[11px] uppercase tracking-[0.14em]" style={{ color: neutral }}>
                                edited
                              </span>
                            ) : null}
                          </TD>
                          <TD className="px-5 py-4 align-top">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={(e) => openEdit(r, e)}
                                className="bs-press inline-flex min-h-[40px] items-center gap-1 px-3 text-[11px] uppercase tracking-[0.12em] font-bold"
                                style={{ border: `2px solid ${primary}`, backgroundColor: bg, color: primary }}
                              >
                                <Edit className="h-3.5 w-3.5" aria-hidden="true" />
                                Edit<span className="sr-only"> {r.notes || catName(r.category_id)}, {money(r.amount)}</span>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  triggerRef.current = e.currentTarget;
                                  setDeleteTarget(r);
                                }}
                                className="bs-press inline-flex min-h-[40px] items-center gap-1 px-3 text-[11px] uppercase tracking-[0.12em] font-bold"
                                style={{ border: `2px solid ${primary}`, backgroundColor: bg, color: primary }}
                              >
                                <Trash className="h-3.5 w-3.5" aria-hidden="true" />
                                Delete<span className="sr-only"> {r.notes || catName(r.category_id)}, {money(r.amount)}</span>
                              </button>
                            </div>
                          </TD>
                        </TR>
                      );
                    })}
              </TBody>
            </Table>
          </div>

          {!loading && filtered.length > 0 ? (
            <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 text-[12px]" style={{ borderTop: `3px solid ${primary}`, fontVariantNumeric: "tabular-nums" }}>
              <span style={{ color: neutral }} className="uppercase tracking-[0.14em]">
                {filtered.length} of {rows.length} entries · {categoryFilter === "all" ? "all categories" : catName(categoryFilter)}
              </span>
              <span className="text-[14px] font-bold">
                Range total <span style={{ color: accent }}>{money(filteredTotal)}</span> {CURRENCY.code}
              </span>
            </div>
          ) : null}
        </section>

        {/* ───────────── b-3-0 empty state ───────────── */}
        {!loading && filtered.length === 0 ? (
          <section data-wf="b-3-0" className="mt-6 px-6 py-10" style={{ ...blockStyle, boxShadow: `6px 6px 0 ${primary}` }}>
            {hasAnyExpenses ? (
              <Empty
                title="Nothing in this slice of the ledger"
                description={`No expenses between ${from || "the beginning"} and ${to || TODAY}${categoryFilter === "all" ? "" : " in " + catName(categoryFilter)}. Widen the dates or switch the category back to all.`}
                action={
                  <BtnOutline
                    onClick={() => {
                      setCategoryFilter("all");
                      setFrom("2026-11-01");
                      setTo("2026-11-30");
                    }}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                    Reset filters
                  </BtnOutline>
                }
              />
            ) : (
              <Empty
                title="The ledger is blank"
                description="No expenses yet. Add your first expense to start tracking your spending."
                action={
                  <BtnSolid onClick={openAdd}>
                    <Plus className="h-5 w-5" aria-hidden="true" />
                    Add expense
                  </BtnSolid>
                }
              />
            )}
          </section>
        ) : null}
      </div>

      {/* ───────────── b-4-0 add / edit modal ───────────── */}
      {formOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-10"
          style={{ backgroundColor: "rgba(10,10,10,0.55)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeForm();
          }}
        >
          <form
            data-wf="b-4-0"
            ref={formDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="expense-form-title"
            onKeyDown={(e) => trapKeys(e, formDialogRef, closeForm)}
            onSubmit={submitForm}
            className="bs-sheet-in w-full max-w-[640px]"
            style={{ backgroundColor: bg, border: `3px solid ${primary}`, boxShadow: `10px 10px 0 ${accent}` }}
          >
            <div className="flex items-start justify-between gap-4 px-6 py-5" style={{ borderBottom: `3px solid ${primary}` }}>
              <div>
                <p className={label} style={{ color: neutral }}>
                  {editingId ? "Edit entry · " + editingId : "New entry"}
                </p>
                <h2 id="expense-form-title" className="mt-1 text-[28px] leading-none sm:text-[34px]" style={serif}>
                  {editingId ? "Edit expense" : "Add expense"}
                </h2>
              </div>
              <button type="button" onClick={closeForm} aria-label="Close without saving" className="bs-press inline-flex h-[44px] w-[44px] items-center justify-center" style={{ border: `2px solid ${primary}`, backgroundColor: bg, color: primary }}>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-6">
              {Object.keys(errors).length > 0 ? (
                <div role="alert" className="mb-6 px-4 py-3 text-[13px]" style={{ border: `3px solid ${primary}`, borderLeft: `10px solid ${accent}` }}>
                  <strong className="uppercase tracking-[0.14em] text-[11px]">Not saved yet</strong>
                  <span className="ml-2">
                    {Object.keys(errors).length} {Object.keys(errors).length === 1 ? "field needs" : "fields need"} a fix. What you typed is still here.
                  </span>
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="e-amount" className={label + " block mb-2 font-bold"}>
                    Amount ({CURRENCY.code})
                  </Label>
                  <div className="flex items-stretch">
                    <span aria-hidden="true" className="flex w-[48px] items-center justify-center text-[18px] font-bold" style={{ border: `3px solid ${primary}`, borderRight: "none", backgroundColor: primary, color: bg }}>
                      {CURRENCY.symbol}
                    </span>
                    <Input
                      id="e-amount"
                      data-wf="i-4-0-0"
                      ref={firstFieldRef}
                      inputMode="decimal"
                      autoComplete="off"
                      placeholder="0.00"
                      value={draft.amount}
                      onChange={(e) => setDraft({ ...draft, amount: e.target.value })}
                      aria-invalid={errors.amount ? "true" : undefined}
                      aria-describedby={errors.amount ? "e-amount-err" : undefined}
                      className="h-[52px] w-full px-3 text-[18px] font-bold"
                      style={fieldStyle}
                    />
                  </div>
                  {errorNote("e-amount-err", errors.amount)}
                </div>

                <div className="sm:col-span-1">
                  <Label htmlFor="e-date" className={label + " block mb-2 font-bold"}>
                    Date
                  </Label>
                  <Input
                    id="e-date"
                    data-wf="i-4-0-1"
                    type="date"
                    value={draft.expense_date}
                    max={TODAY}
                    onChange={(e) => setDraft({ ...draft, expense_date: e.target.value })}
                    aria-invalid={errors.expense_date ? "true" : undefined}
                    aria-describedby={errors.expense_date ? "e-date-err" : undefined}
                    className="h-[52px] w-full px-3 text-[15px]"
                    style={fieldStyle}
                  />
                  {errorNote("e-date-err", errors.expense_date)}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="e-category" className={label + " block mb-2 font-bold"}>
                    Category
                  </Label>
                  <Select
                    id="e-category"
                    data-wf="i-4-0-2"
                    value={draft.category_id}
                    onChange={(e) => setDraft({ ...draft, category_id: e.target.value })}
                    aria-invalid={errors.category_id ? "true" : undefined}
                    aria-describedby={errors.category_id ? "e-category-err" : "e-category-hint"}
                    className="h-[52px] w-full px-3 text-[15px]"
                    style={fieldStyle}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                        {c.is_fallback ? " — fallback" : c.is_default ? "" : " — custom"}
                      </option>
                    ))}
                  </Select>
                  {errors.category_id ? (
                    errorNote("e-category-err", errors.category_id)
                  ) : (
                    <p id="e-category-hint" className="mt-2 text-[12px]" style={{ color: neutral }}>
                      A category is required. Food is pre-selected; choose Uncategorised if you'll sort it later.
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="e-notes" className={label + " block mb-2 font-bold"}>
                    Notes (optional)
                  </Label>
                  <Textarea
                    id="e-notes"
                    data-wf="i-4-0-3"
                    rows={3}
                    maxLength={140}
                    value={draft.notes}
                    placeholder="What was it for?"
                    onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                    aria-describedby="e-notes-count"
                    className="w-full px-3 py-3 text-[14px] leading-relaxed"
                    style={fieldStyle}
                  />
                  <p id="e-notes-count" className="mt-2 text-[12px]" style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}>
                    {draft.notes.length}/140 characters
                  </p>
                </div>
              </div>
            </div>

            {/* ───────────── Row 6: save / cancel / manage categories ───────────── */}
            <div className="grid grid-cols-12 items-center gap-4 px-6 py-5" style={{ borderTop: `3px solid ${primary}` }}>
              <div className="col-span-6 sm:col-span-3">
                <BtnSolid data-wf="b-5-0" type="submit" disabled={saving} aria-busy={saving} className="w-full" style={saving ? { opacity: 0.75 } : undefined}>
                  {saving ? (
                    <>
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      Saving…
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Save expense
                    </>
                  )}
                </BtnSolid>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <BtnOutline data-wf="b-5-1" type="button" onClick={closeForm} disabled={saving} className="w-full">
                  Cancel
                </BtnOutline>
              </div>
              <div className="col-span-12 sm:col-span-6 sm:text-right">
                <button
                  type="button"
                  data-wf="b-5-2"
                  onClick={() => navigate("categories")}
                  className="inline-flex min-h-[44px] items-center gap-1 text-[13px] font-bold"
                  style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "4px", textDecorationThickness: "2px" }}
                >
                  Need another category? Manage categories
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}

      {/* ───────────── b-6-0 delete confirmation ───────────── */}
      {deleteTarget ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10"
          style={{ backgroundColor: "rgba(10,10,10,0.55)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !deleting) setDeleteTarget(null);
          }}
        >
          <div
            data-wf="b-6-0"
            ref={deleteDialogRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            aria-describedby="delete-desc"
            onKeyDown={(e) => trapKeys(e, deleteDialogRef, () => !deleting && setDeleteTarget(null))}
            className="bs-sheet-in w-full max-w-[560px]"
            style={{ backgroundColor: bg, border: `3px solid ${primary}`, boxShadow: `10px 10px 0 ${primary}` }}
          >
            <div className="px-6 py-6">
              <p className={label} style={{ color: neutral }}>
                Confirm removal · {deleteTarget.id}
              </p>
              <h2 id="delete-title" className="mt-2 text-[26px] leading-tight sm:text-[30px]" style={serif}>
                Delete this expense?
              </h2>
              <p id="delete-desc" className="mt-3 text-[13px] leading-relaxed" style={{ color: neutral }}>
                It will be removed from your history, reports and exports. This can't be undone.
              </p>

              <dl className="mt-5 px-4 py-4 text-[13px]" style={{ border: `3px solid ${primary}`, fontVariantNumeric: "tabular-nums" }}>
                <div className="flex justify-between gap-4">
                  <dt style={{ color: neutral }}>Amount</dt>
                  <dd className="font-bold">{money(deleteTarget.amount)} {CURRENCY.code}</dd>
                </div>
                <div className="mt-2 flex justify-between gap-4">
                  <dt style={{ color: neutral }}>Date</dt>
                  <dd className="font-bold">{deleteTarget.expense_date}</dd>
                </div>
                <div className="mt-2 flex justify-between gap-4">
                  <dt style={{ color: neutral }}>Category</dt>
                  <dd className="font-bold">{catName(deleteTarget.category_id)}</dd>
                </div>
                <div className="mt-2 flex justify-between gap-4">
                  <dt style={{ color: neutral }}>Notes</dt>
                  <dd className="text-right">{deleteTarget.notes || "— no note"}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row" style={{ borderTop: `3px solid ${primary}` }}>
              <Button
                data-wf="i-6-0-0"
                type="button"
                onClick={confirmDelete}
                disabled={deleting}
                aria-busy={deleting}
                className="bs-press min-h-[48px] flex-1 px-5 text-[13px] uppercase tracking-[0.14em] font-bold inline-flex items-center justify-center gap-2"
                style={{ backgroundColor: primary, color: bg, border: `3px solid ${primary}`, boxShadow: `5px 5px 0 ${accent}`, fontFamily: brand.fontBody, opacity: deleting ? 0.75 : 1 }}
              >
                <Trash className="h-4 w-4" aria-hidden="true" />
                {deleting ? "Deleting…" : "Delete expense"}
              </Button>
              <BtnOutline
                data-wf="i-6-0-1"
                type="button"
                ref={cancelDeleteRef}
                disabled={deleting}
                onClick={() => {
                  setDeleteTarget(null);
                  later(() => triggerRef.current && triggerRef.current.focus && triggerRef.current.focus(), 10);
                }}
                className="flex-1"
              >
                Cancel
              </BtnOutline>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
