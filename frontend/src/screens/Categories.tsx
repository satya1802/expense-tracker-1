// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, Settings, Trash, Edit, ArrowRight, AlertCircle, CheckCircle } = Icons;

const USER_EMAIL = "satya.ganaraju@quorq.ai";
const TODAY_ISO = "2026-11-19";
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const INITIAL_CATEGORIES = [
  { id: "cat_food", wf: "i-3-0-0", name: "Food", is_default: true, is_fallback: false, created_at: "2026-02-11", expense_count: 48 },
  { id: "cat_transport", wf: "i-3-0-1", name: "Transport", is_default: true, is_fallback: false, created_at: "2026-02-11", expense_count: 23 },
  { id: "cat_housing", wf: "i-3-0-2", name: "Housing", is_default: true, is_fallback: false, created_at: "2026-02-11", expense_count: 9 },
  { id: "cat_uncat", wf: "i-3-0-3", name: "Uncategorised", is_default: true, is_fallback: true, created_at: "2026-02-11", expense_count: 3 },
  { id: "cat_coffee", wf: "i-3-0-4", name: "Coffee", is_default: false, is_fallback: false, created_at: "2026-07-14", expense_count: 12 },
  { id: "cat_gym", wf: "i-3-0-5", name: "Gym", is_default: false, is_fallback: false, created_at: "2026-09-02", expense_count: 5 },
];

function hexToRgba(hex, alpha) {
  const raw = String(hex || "#000000").replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return `rgba(0,0,0,${alpha})`;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function formatStamp(iso) {
  const parts = String(iso).split("-");
  if (parts.length !== 3) return iso;
  return `${parts[2]} ${MONTHS[Number(parts[1]) - 1]} ${parts[0]}`;
}

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const paper = brand.backgroundColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;

  const hard = (x) => `${x}px ${x}px 0 ${ink}`;
  const frame = { border: `3px solid ${ink}`, borderRadius: brand.radius, backgroundColor: paper };

  const [categories, setCategories] = React.useState(INITIAL_CATEGORIES);
  const [name, setName] = React.useState("");
  const [formError, setFormError] = React.useState(null);
  const [saving, setSaving] = React.useState(false);
  const [notice, setNotice] = React.useState(null);
  const [freshIds, setFreshIds] = React.useState([]);

  const [editingId, setEditingId] = React.useState(null);
  const [editName, setEditName] = React.useState("");
  const [editError, setEditError] = React.useState(null);

  const [deleteTarget, setDeleteTarget] = React.useState(null);
  const [deleting, setDeleting] = React.useState(false);

  const [selectedId, setSelectedId] = React.useState("cat_coffee");

  const timers = React.useRef([]);
  const nameInputRef = React.useRef(null);
  const confirmRef = React.useRef(null);
  const lastTriggerRef = React.useRef(null);
  const editInputRef = React.useRef(null);

  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  };

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  React.useEffect(() => {
    if (deleteTarget && confirmRef.current) confirmRef.current.focus();
  }, [deleteTarget]);

  React.useEffect(() => {
    if (editingId && editInputRef.current) editInputRef.current.focus();
  }, [editingId]);

  React.useEffect(() => {
    if (!deleteTarget) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [deleteTarget]);

  const fallback = categories.find((c) => c.is_fallback) || null;
  const selected =
    categories.find((c) => c.id === selectedId) || fallback || categories[0] || null;
  const customCount = categories.filter((c) => !c.is_default).length;
  const taggedCount = categories.reduce((sum, c) => sum + c.expense_count, 0);

  const duplicateOf = (value, exceptId) =>
    categories.some(
      (c) => c.id !== exceptId && c.name.trim().toLowerCase() === value.trim().toLowerCase()
    );

  function handleAdd(e) {
    e.preventDefault();
    const value = name.trim();
    if (!value) {
      setFormError("Give the category a name — an empty name can't be saved.");
      if (nameInputRef.current) nameInputRef.current.focus();
      return;
    }
    if (value.length > 32) {
      setFormError("Keep it to 32 characters so it fits the expense form.");
      return;
    }
    if (duplicateOf(value, null)) {
      setFormError(`You already have a category called “${value}”. Pick another name.`);
      if (nameInputRef.current) nameInputRef.current.focus();
      return;
    }
    setFormError(null);
    setSaving(true);
    later(() => {
      const id = `cat_${value.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
      setCategories((prev) => [
        ...prev,
        {
          id,
          wf: null,
          name: value,
          is_default: false,
          is_fallback: false,
          created_at: TODAY_ISO,
          expense_count: 0,
        },
      ]);
      setFreshIds((prev) => [...prev, id]);
      setSelectedId(id);
      setName("");
      setSaving(false);
      setNotice({
        tone: "ok",
        text: `“${value}” saved. It's selectable the next time you record an expense.`,
      });
    }, 420);
  }

  function startRename(cat) {
    setEditingId(cat.id);
    setEditName(cat.name);
    setEditError(null);
    setNotice(null);
  }

  function commitRename(e, cat) {
    e.preventDefault();
    const value = editName.trim();
    if (!value) {
      setEditError("A category needs a name.");
      return;
    }
    if (duplicateOf(value, cat.id)) {
      setEditError(`“${value}” is already in use.`);
      return;
    }
    const was = cat.name;
    setCategories((prev) => prev.map((c) => (c.id === cat.id ? { ...c, name: value } : c)));
    setEditingId(null);
    setEditError(null);
    setNotice({
      tone: "ok",
      text:
        was === value
          ? `“${value}” left unchanged.`
          : `Renamed “${was}” to “${value}” on ${cat.expense_count} expense${cat.expense_count === 1 ? "" : "s"}.`,
    });
  }

  function askDelete(cat, el) {
    lastTriggerRef.current = el;
    setNotice(null);
    setDeleteTarget(cat);
  }

  function closeModal() {
    setDeleteTarget(null);
    setDeleting(false);
    if (lastTriggerRef.current && lastTriggerRef.current.focus) lastTriggerRef.current.focus();
  }

  function confirmDelete() {
    const target = deleteTarget;
    if (!target) return;
    setDeleting(true);
    later(() => {
      setCategories((prev) =>
        prev
          .filter((c) => c.id !== target.id)
          .map((c) =>
            c.is_fallback ? { ...c, expense_count: c.expense_count + target.expense_count } : c
          )
      );
      if (selectedId === target.id && fallback) setSelectedId(fallback.id);
      setDeleting(false);
      setDeleteTarget(null);
      setNotice({
        tone: "ok",
        text:
          target.expense_count > 0
            ? `“${target.name}” deleted. ${target.expense_count} expenses moved to ${fallback ? fallback.name : "Uncategorised"}.`
            : `“${target.name}” deleted. No expenses were affected.`,
      });
      if (nameInputRef.current) nameInputRef.current.focus();
    }, 500);
  }

  const labelMono = "text-[11px] uppercase tracking-[0.18em]";

  const typeChip = (cat) => {
    if (cat.is_fallback)
      return { word: "Fallback", mark: "↘", fg: paper, bg: ink, border: ink };
    if (cat.is_default)
      return { word: "Default", mark: "■", fg: ink, bg: "transparent", border: ink };
    return { word: "Custom", mark: "●", fg: accent, bg: "transparent", border: accent };
  };

  return (
    <div
      data-cat-screen=""
      className="min-h-full w-full px-5 py-10 sm:px-8 lg:px-12"
      style={{
        backgroundColor: paper,
        color: ink,
        fontFamily: brand.fontBody,
        "--cat-accent": accent,
        "--cat-ink": ink,
      }}
    >
      <style>{`
        [data-cat-screen] :is(button, a, input, [tabindex]):focus-visible {
          outline: 3px solid var(--cat-accent);
          outline-offset: 2px;
        }
        [data-cat-screen] table { font-variant-numeric: tabular-nums; }
        @keyframes catRowIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
        @keyframes catPanelIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes catVeilIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes catBar { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .cat-row-in { animation: catRowIn .3s ease-out both; }
        .cat-panel-in { animation: catPanelIn .22s ease-out both; }
        .cat-veil-in { animation: catVeilIn .18s linear both; }
        .cat-bar::after { content: ""; position: absolute; inset: 0; animation: catBar 1s linear infinite; background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); }
        .cat-press { transition: transform .08s ease, box-shadow .08s ease, background-color .15s ease, color .15s ease; }
        .cat-press:active:not(:disabled) { transform: translate(3px, 3px); }
        @media (prefers-reduced-motion: reduce) {
          .cat-row-in, .cat-panel-in, .cat-veil-in, .cat-bar::after { animation: none !important; }
          .cat-press { transition: none; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl">
        {/* ─── Row 1 — page title ─────────────────────────────── */}
        <header data-wf="b-0-0" className="mb-10">
          <div
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pb-3"
            style={{ borderBottom: `3px solid ${ink}` }}
          >
            <span className={labelMono} style={{ color: accent }}>
              Section 03
            </span>
            <span className={labelMono} style={{ color: muted }}>
              Expense ledger / taxonomy
            </span>
            <span className={`${labelMono} ml-auto`} style={{ color: muted }}>
              Last synced 09:12 · {formatStamp(TODAY_ISO)}
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1
              className="text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: brand.fontHeading, letterSpacing: "-0.02em" }}
            >
              Categories
            </h1>

            <dl className="flex flex-wrap gap-x-8 gap-y-3" style={{ fontVariantNumeric: "tabular-nums" }}>
              {[
                { k: "In use", v: String(categories.length).padStart(2, "0") },
                { k: "Custom", v: String(customCount).padStart(2, "0") },
                { k: "Tagged expenses", v: String(taggedCount) },
              ].map((item) => (
                <div key={item.k} className="pl-4" style={{ borderLeft: `3px solid ${ink}` }}>
                  <dt className={labelMono} style={{ color: muted }}>
                    {item.k}
                  </dt>
                  <dd className="mt-1 text-2xl" style={{ fontFamily: brand.fontHeading }}>
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-6 max-w-[62ch] text-sm leading-relaxed" style={{ color: muted }}>
            Private to <span style={{ color: ink }}>{USER_EMAIL}</span>. Categories, expenses and
            settings are stored against your account alone — nobody else can read or edit this list.
          </p>
        </header>

        {/* Notice */}
        {notice && (
          <div
            role="status"
            className="cat-panel-in mb-8 flex items-start gap-3 px-4 py-3"
            style={{ ...frame, boxShadow: hard(4), borderColor: ink }}
          >
            <CheckCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" style={{ color: accent }} />
            <p className="flex-1 text-sm leading-relaxed">{notice.text}</p>
          </div>
        )}

        {/* ─── Row 2 — add form + primary action ──────────────── */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          <form
            id="add-category-form"
            data-wf="b-1-0"
            onSubmit={handleAdd}
            noValidate
            className="col-span-12 p-6 sm:p-8 lg:col-span-9"
            style={{ ...frame, boxShadow: hard(6) }}
          >
            <div className="flex items-baseline gap-3">
              <span className={labelMono} style={{ color: accent }}>
                01
              </span>
              <h2 className="text-3xl" style={{ fontFamily: brand.fontHeading }}>
                Add a category
              </h2>
            </div>

            <div className="mt-6 max-w-xl">
              <Label htmlFor="category-name" className={`${labelMono} block`} style={{ color: muted }}>
                Name
              </Label>
              <Input
                id="category-name"
                ref={nameInputRef}
                name="name"
                value={name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                  if (formError) setFormError(null);
                }}
                placeholder="Pharmacy"
                aria-describedby={formError ? "category-name-error" : "category-name-hint"}
                aria-invalid={formError ? "true" : undefined}
                className="mt-2 w-full px-4 py-3 text-base"
                style={{
                  border: `3px solid ${formError ? accent : ink}`,
                  borderRadius: brand.radius,
                  backgroundColor: paper,
                  color: ink,
                  fontFamily: brand.fontBody,
                }}
              />
              {formError ? (
                <p
                  id="category-name-error"
                  className="mt-3 flex items-start gap-2 text-sm leading-relaxed"
                  style={{ color: accent }}
                >
                  <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{formError}</span>
                </p>
              ) : (
                <p id="category-name-hint" className="mt-3 text-xs leading-relaxed" style={{ color: muted }}>
                  Saved to your account only. Up to 32 characters.
                </p>
              )}
            </div>
          </form>

          <div className="col-span-12 lg:col-span-3">
            <Button
              data-wf="b-1-1"
              type="submit"
              form="add-category-form"
              disabled={saving}
              className="cat-press relative flex h-full min-h-[88px] w-full items-center justify-center gap-3 overflow-hidden px-5 py-5 text-sm uppercase tracking-[0.16em]"
              style={{
                backgroundColor: saving ? ink : accent,
                color: paper,
                border: `3px solid ${ink}`,
                borderRadius: brand.radius,
                boxShadow: hard(6),
                fontFamily: brand.fontBody,
                cursor: saving ? "progress" : "pointer",
              }}
            >
              {saving ? (
                <>
                  <span className="cat-bar absolute inset-0" aria-hidden="true" />
                  <span className="relative">Saving…</span>
                </>
              ) : (
                <>
                  <Plus aria-hidden="true" className="h-5 w-5" />
                  <span>Add category</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* ─── Row 3 — rules of the list ──────────────────────── */}
        <p
          data-wf="b-2-0"
          className="my-10 py-4 text-sm leading-relaxed"
          style={{
            color: muted,
            borderTop: `1px dashed ${hexToRgba(ink, 0.45)}`,
            borderBottom: `1px dashed ${hexToRgba(ink, 0.45)}`,
          }}
        >
          <span className={`${labelMono} mr-3`} style={{ color: ink }}>
            Rules
          </span>
          Category names must be unique and cannot be empty. Default categories cannot be deleted.
        </p>

        {/* ─── Row 4 — the list ───────────────────────────────── */}
        <section data-wf="b-3-0" style={{ ...frame, boxShadow: hard(6) }}>
          <div
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-6 py-5 sm:px-8"
            style={{ borderBottom: `3px solid ${ink}` }}
          >
            <div className="flex items-baseline gap-3">
              <span className={labelMono} style={{ color: accent }}>
                02
              </span>
              <h2 className="text-3xl" style={{ fontFamily: brand.fontHeading }}>
                Your categories
              </h2>
            </div>
            <p className={labelMono} style={{ color: muted, fontVariantNumeric: "tabular-nums" }}>
              {categories.length} total · {customCount} custom
            </p>
          </div>

          {categories.length === 0 ? (
            <div className="px-6 py-14 sm:px-8">
              <Empty
                title="No categories in this account"
                description="Every expense needs somewhere to sit. Add your first category above and it will appear here straight away."
                action={
                  <Button
                    type="button"
                    onClick={() => nameInputRef.current && nameInputRef.current.focus()}
                    className="cat-press px-5 py-3 text-xs uppercase tracking-[0.16em]"
                    style={{
                      backgroundColor: accent,
                      color: paper,
                      border: `3px solid ${ink}`,
                      borderRadius: brand.radius,
                      boxShadow: hard(4),
                      fontFamily: brand.fontBody,
                    }}
                  >
                    Name a category
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full min-w-[640px] border-collapse text-left">
                <THead>
                  <TR style={{ borderBottom: `1px solid ${hexToRgba(ink, 0.35)}` }}>
                    <TH scope="col" className={`${labelMono} px-6 py-3 font-normal sm:px-8`} style={{ color: muted }}>
                      Name
                    </TH>
                    <TH scope="col" className={`${labelMono} px-4 py-3 font-normal`} style={{ color: muted }}>
                      Type
                    </TH>
                    <TH scope="col" className={`${labelMono} px-4 py-3 text-right font-normal`} style={{ color: muted }}>
                      Expenses
                    </TH>
                    <TH scope="col" className={`${labelMono} hidden px-4 py-3 font-normal md:table-cell`} style={{ color: muted }}>
                      Created
                    </TH>
                    <TH scope="col" className={`${labelMono} px-6 py-3 text-right font-normal sm:px-8`} style={{ color: muted }}>
                      Actions
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {categories.map((cat) => {
                    const chip = typeChip(cat);
                    const isSelected = selected && selected.id === cat.id;
                    const locked = cat.is_default || cat.is_fallback;
                    const editing = editingId === cat.id;
                    return (
                      <TR
                        key={cat.id}
                        className={freshIds.includes(cat.id) ? "cat-row-in" : undefined}
                        style={{
                          borderBottom: `1px solid ${hexToRgba(ink, 0.15)}`,
                          backgroundColor: isSelected ? hexToRgba(accent, 0.07) : "transparent",
                        }}
                      >
                        <TD className="px-6 py-4 align-top sm:px-8">
                          {editing ? (
                            <form onSubmit={(e) => commitRename(e, cat)} className="max-w-sm">
                              <Label
                                htmlFor={`rename-${cat.id}`}
                                className={`${labelMono} block`}
                                style={{ color: muted }}
                              >
                                New name for {cat.name}
                              </Label>
                              <Input
                                id={`rename-${cat.id}`}
                                ref={editInputRef}
                                value={editName}
                                autoComplete="off"
                                onChange={(e) => {
                                  setEditName(e.target.value);
                                  if (editError) setEditError(null);
                                }}
                                aria-invalid={editError ? "true" : undefined}
                                aria-describedby={editError ? `rename-${cat.id}-error` : undefined}
                                className="mt-2 w-full px-3 py-2 text-sm"
                                style={{
                                  border: `3px solid ${editError ? accent : ink}`,
                                  borderRadius: brand.radius,
                                  backgroundColor: paper,
                                  color: ink,
                                  fontFamily: brand.fontBody,
                                }}
                              />
                              {editError && (
                                <p
                                  id={`rename-${cat.id}-error`}
                                  className="mt-2 flex items-start gap-2 text-xs"
                                  style={{ color: accent }}
                                >
                                  <AlertCircle aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                  <span>{editError}</span>
                                </p>
                              )}
                              <div className="mt-3 flex gap-3">
                                <Button
                                  type="submit"
                                  className="cat-press inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.16em]"
                                  style={{
                                    backgroundColor: ink,
                                    color: paper,
                                    border: `3px solid ${ink}`,
                                    borderRadius: brand.radius,
                                    boxShadow: hard(3),
                                    fontFamily: brand.fontBody,
                                  }}
                                >
                                  <Check aria-hidden="true" className="h-4 w-4" />
                                  Save name
                                </Button>
                                <Button
                                  type="button"
                                  onClick={() => {
                                    setEditingId(null);
                                    setEditError(null);
                                  }}
                                  className="cat-press px-4 py-2 text-[11px] uppercase tracking-[0.16em]"
                                  style={{
                                    backgroundColor: "transparent",
                                    color: ink,
                                    border: `3px solid ${ink}`,
                                    borderRadius: brand.radius,
                                    fontFamily: brand.fontBody,
                                  }}
                                >
                                  Keep {cat.name}
                                </Button>
                              </div>
                            </form>
                          ) : (
                            <button
                              type="button"
                              data-wf={cat.wf || undefined}
                              aria-pressed={isSelected}
                              onClick={() => setSelectedId(cat.id)}
                              className="cat-press -ml-3 flex min-h-[44px] items-center gap-3 px-3 text-left"
                            >
                              <span
                                aria-hidden="true"
                                className="h-6 w-[3px] shrink-0"
                                style={{ backgroundColor: isSelected ? accent : "transparent" }}
                              />
                              <span>
                                <span
                                  className="block text-lg leading-tight"
                                  style={{ fontFamily: brand.fontHeading }}
                                >
                                  {cat.name}
                                </span>
                                <span className={`${labelMono} block`} style={{ color: muted }}>
                                  {isSelected ? "Selected" : "Select"}
                                </span>
                              </span>
                            </button>
                          )}
                        </TD>

                        <TD className="px-4 py-4 align-top">
                          <Badge
                            className={`${labelMono} inline-flex items-center gap-2 px-2.5 py-1`}
                            style={{
                              backgroundColor: chip.bg,
                              color: chip.fg,
                              border: `1px solid ${chip.border}`,
                              borderRadius: brand.radius,
                              fontFamily: brand.fontBody,
                            }}
                          >
                            <span aria-hidden="true">{chip.mark}</span>
                            {chip.word}
                          </Badge>
                        </TD>

                        <TD
                          className="px-4 py-4 text-right align-top text-sm"
                          style={{ fontVariantNumeric: "tabular-nums" }}
                        >
                          {cat.expense_count}
                        </TD>

                        <TD
                          className="hidden px-4 py-4 align-top text-sm md:table-cell"
                          style={{ color: muted, fontVariantNumeric: "tabular-nums" }}
                        >
                          {formatStamp(cat.created_at)}
                        </TD>

                        <TD className="px-6 py-4 text-right align-top sm:px-8">
                          {locked ? (
                            <span
                              className={`${labelMono} inline-block px-3 py-2`}
                              style={{
                                color: muted,
                                border: `1px dashed ${hexToRgba(ink, 0.4)}`,
                                borderRadius: brand.radius,
                              }}
                            >
                              {cat.is_fallback ? "Locked · fallback" : "Locked · default"}
                            </span>
                          ) : (
                            <div className="flex flex-wrap justify-end gap-2">
                              <Button
                                type="button"
                                onClick={() => startRename(cat)}
                                className="cat-press inline-flex min-h-[44px] items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.16em]"
                                style={{
                                  backgroundColor: "transparent",
                                  color: ink,
                                  border: `3px solid ${ink}`,
                                  borderRadius: brand.radius,
                                  fontFamily: brand.fontBody,
                                }}
                              >
                                <Edit aria-hidden="true" className="h-4 w-4" />
                                <span>
                                  Rename<span className="sr-only"> {cat.name}</span>
                                </span>
                              </Button>
                              <Button
                                type="button"
                                onClick={(e) => askDelete(cat, e.currentTarget)}
                                className="cat-press inline-flex min-h-[44px] items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.16em]"
                                style={{
                                  backgroundColor: "transparent",
                                  color: accent,
                                  border: `3px solid ${accent}`,
                                  borderRadius: brand.radius,
                                  fontFamily: brand.fontBody,
                                }}
                              >
                                <Trash aria-hidden="true" className="h-4 w-4" />
                                <span>
                                  Delete<span className="sr-only"> {cat.name}</span>
                                </span>
                              </Button>
                            </div>
                          )}
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>
          )}
        </section>

        {/* ─── Row 6 — cross-link to the expense ledger ───────── */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {selected ? (
            <button
              type="button"
              data-wf="b-5-0"
              onClick={() => navigate("expenses")}
              className="cat-press inline-flex min-h-[44px] items-center gap-2 text-sm"
              style={{ color: accent, textUnderlineOffset: "6px", textDecoration: "underline" }}
            >
              <span>
                See the {selected.expense_count} expense{selected.expense_count === 1 ? "" : "s"} in “
                {selected.name}”
              </span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          ) : (
            <span className="text-sm" style={{ color: muted }}>
              Select a category to jump to its expenses.
            </span>
          )}
          <p className={labelMono} style={{ color: muted }}>
            Currency and account settings live in Settings
          </p>
        </div>
      </div>

      {/* ─── Row 5 — delete + reassign confirmation ─────────── */}
      {deleteTarget && (
        <div
          data-wf="b-4-0"
          className="fixed inset-0 z-50 flex items-center justify-center px-5 py-10"
        >
          <button
            type="button"
            aria-label="Cancel deletion and close this dialog"
            onClick={closeModal}
            className="cat-veil-in absolute inset-0 h-full w-full cursor-default"
            style={{ backgroundColor: hexToRgba(ink, 0.62) }}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-copy"
            className="cat-panel-in relative w-full max-w-xl p-6 sm:p-8"
            style={{
              ...frame,
              boxShadow: `10px 10px 0 ${ink}, 0 24px 48px ${hexToRgba(ink, 0.35)}`,
            }}
          >
            <p className={labelMono} style={{ color: accent }}>
              Confirm · reassignment
            </p>
            <h2
              id="delete-dialog-title"
              className="mt-3 text-3xl leading-tight"
              style={{ fontFamily: brand.fontHeading }}
            >
              Delete “{deleteTarget.name}”?
            </h2>
            <p id="delete-dialog-copy" className="mt-4 text-sm leading-relaxed" style={{ color: muted }}>
              {deleteTarget.expense_count > 0 ? (
                <>
                  <span style={{ color: ink, fontVariantNumeric: "tabular-nums" }}>
                    {deleteTarget.expense_count} expenses
                  </span>{" "}
                  use it and will be reassigned to{" "}
                  <span style={{ color: ink }}>{fallback ? fallback.name : "Uncategorised"}</span>. The
                  expenses themselves are kept — only the label changes.
                </>
              ) : (
                <>No expenses use “{deleteTarget.name}”, so nothing will be reassigned.</>
              )}
            </p>

            <div
              className="mt-6 flex items-center justify-between px-4 py-3 text-sm"
              style={{
                border: `1px dashed ${hexToRgba(ink, 0.4)}`,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <span className={labelMono} style={{ color: muted }}>
                {deleteTarget.name} → {fallback ? fallback.name : "Uncategorised"}
              </span>
              <span>{deleteTarget.expense_count} moved</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse">
              <Button
                data-wf="i-4-0-0"
                ref={confirmRef}
                type="button"
                onClick={confirmDelete}
                disabled={deleting}
                className="cat-press relative inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 overflow-hidden px-5 py-3 text-xs uppercase tracking-[0.16em]"
                style={{
                  backgroundColor: deleting ? ink : accent,
                  color: paper,
                  border: `3px solid ${ink}`,
                  borderRadius: brand.radius,
                  boxShadow: hard(5),
                  fontFamily: brand.fontBody,
                  cursor: deleting ? "progress" : "pointer",
                }}
              >
                {deleting ? (
                  <>
                    <span className="cat-bar absolute inset-0" aria-hidden="true" />
                    <span className="relative">Reassigning…</span>
                  </>
                ) : (
                  <>
                    <Trash aria-hidden="true" className="h-4 w-4" />
                    Delete and reassign
                  </>
                )}
              </Button>
              <Button
                data-wf="i-4-0-1"
                type="button"
                onClick={closeModal}
                className="cat-press inline-flex min-h-[48px] items-center justify-center px-5 py-3 text-xs uppercase tracking-[0.16em]"
                style={{
                  backgroundColor: "transparent",
                  color: ink,
                  border: `3px solid ${ink}`,
                  borderRadius: brand.radius,
                  fontFamily: brand.fontBody,
                }}
              >
                Cancel
              </Button>
            </div>

            <p className="mt-5 text-xs" style={{ color: muted }}>
              Press Esc to cancel. Nothing is removed until you confirm.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
