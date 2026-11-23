"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Hero } from "@/sections/Hero";
import { Hub } from "@/sections/Hub";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import {
  positions,
  nextSection,
  type Section,
  type Dir,
} from "@/lib/portfolio-data";

const sectionLabels: Record<Section, string> = {
  hero: "Início",
  hub: "Navegue",
  projects: "Projetos",
  experience: "Experiência",
  contact: "Contato",
};

const minimapCells: (Section | null)[] = [
  null,
  "hero",
  null,
  "projects",
  "hub",
  "experience",
  null,
  "contact",
  null,
];

export function Portfolio() {
  const [section, setSection] = useState<Section>("hero");
  const [dark, setDark] = useState(false);
  const lock = useRef(0);
  const touch = useRef<[number, number] | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const go = useCallback((dir: Dir) => {
    const now = Date.now();
    if (now < lock.current) return;
    setSection((current) => {
      const next = nextSection(current, dir);
      if (next) lock.current = now + 1250;
      return next ?? current;
    });
  }, []);

  useEffect(() => {
    const canScroll = (target: EventTarget | null, dy: number): boolean => {
      let el = target as HTMLElement | null;
      while (el && el !== document.body) {
        if (el.dataset?.["scroll"] !== undefined) {
          if (dy > 0) return el.scrollTop + el.clientHeight < el.scrollHeight - 2;
          return el.scrollTop > 2;
        }
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      const { deltaX: dx, deltaY: dy } = e;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 18) return;
      if (Math.abs(dx) > Math.abs(dy)) go(dx > 0 ? "right" : "left");
      else if (!canScroll(e.target, dy)) go(dy > 0 ? "down" : "up");
    };

    const keyMap: Record<string, Dir> = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
    };

    const onKey = (e: KeyboardEvent) => {
      const dir = keyMap[e.key];
      if (dir) {
        e.preventDefault();
        go(dir);
      }
      if (e.key === "Escape") {
        setSection((s) => (s === "hero" ? s : "hub"));
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) touch.current = [t.clientX, t.clientY];
    };

    const onTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0];
      if (!touch.current || !t) return;
      const dx = touch.current[0] - t.clientX;
      const dy = touch.current[1] - t.clientY;
      touch.current = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
      if (Math.abs(dx) > Math.abs(dy)) go(dx > 0 ? "right" : "left");
      else if (!canScroll(e.target, dy)) go(dy > 0 ? "down" : "up");
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [go]);

  const [cx, cy] = positions[section];

  return (
    <div className="app">
      <header className="site-header">
        <div className="site-header__controls">
          <span className="site-header__label">{sectionLabels[section]}</span>
          <button
            onClick={() => setDark((d) => !d)}
            className="theme-toggle"
            aria-label="Alternar tema"
          >
            <span className="theme-toggle__track">
              <span
                className={`theme-toggle__thumb ${dark ? "theme-toggle__thumb--dark" : "theme-toggle__thumb--light"}`}
              />
            </span>
            {dark ? "Escuro" : "Claro"}
          </button>
        </div>
      </header>

      <div
        className="canvas"
        style={{
          transform: `translate(${-cx * 100}vw, ${-cy * 100}vh)`,
        }}
      >
        <Panel id="hero" current={section}>
          <Hero onNext={() => go("down")} />
        </Panel>
        <Panel id="hub" current={section}>
          <Hub go={go} />
        </Panel>
        <Panel id="projects" current={section}>
          <Projects back={() => go("right")} />
        </Panel>
        <Panel id="experience" current={section}>
          <Experience back={() => go("left")} />
        </Panel>
        <Panel id="contact" current={section}>
          <Contact back={() => go("up")} />
        </Panel>
      </div>

      <nav className="minimap" aria-label="Mapa">
        {minimapCells.map((cell, index) =>
          cell ? (
            <button
              key={index}
              onClick={() => setSection(cell)}
              aria-label={sectionLabels[cell]}
              title={sectionLabels[cell]}
              className={`minimap__dot ${section === cell ? "minimap__dot--active" : ""}`}
            />
          ) : (
            <span key={index} className="minimap__spacer" />
          ),
        )}
      </nav>
    </div>
  );
}

interface PanelProps {
  id: Section;
  current: Section;
  children: ReactNode;
}

function Panel({ id, current, children }: PanelProps) {
  const [x, y] = positions[id];
  const isActive = id === current;

  return (
    <section
      aria-hidden={!isActive}
      className={`panel ${isActive ? "panel--active" : "panel--idle"}`}
      style={{ left: `${x * 100}vw`, top: `${y * 100}vh` }}
    >
      {isActive && <div className="panel__inner">{children}</div>}
    </section>
  );
}
