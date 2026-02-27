"use client";
import { useEffect, useRef, useState } from "react";

const timelineEntries = [
    {
        period: "Aug 2019 – May 2023",
        role: "B.Eng Computer Engineering",
        org: "National University of Singapore",
        location: "Singapore",
        type: "education",
        detail:
            "Graduated with Distinction (4.47 GPA) with a Minor in Mathematics. Coursework in embedded systems, algorithms, signal processing, and computer vision.",
    },
    {
        period: "Jan – Aug 2021",
        role: "Research Intern",
        org: "Tee's Research Group",
        location: "Singapore",
        type: "research",
        detail:
            "Designed UART-based control pipeline for ShadowHand Robot using finger proximity signals. Embedded Mediapipe into a RealSense pipeline to capture and mirror hand gestures. Project filmed and covered by Reuters.",
    },
    {
        period: "Jan – May 2022",
        role: "System Integration Engineering Intern",
        org: "Seagate Technology",
        location: "Singapore",
        type: "industry",
        detail:
            "Facilitated cross-team knowledge transfer of a new firmware automation test tool from the Pune team to Singapore, navigating a large remote codebase and complex testing pipelines.",
    },
    {
        period: "Dec 2022 – Feb 2023",
        role: "Software Engineering Intern",
        org: "Flybot Pte",
        location: "Singapore",
        type: "industry",
        detail:
            "Implemented Vietnamese board games ('O an quan' and Mahjong) using Clojure, demonstrating strong grasp of functional programming, game logic, and state management.",
    },
    {
        period: "Nov 2023 – Sep 2024",
        role: "Software Engineer In Test",
        org: "Rohde & Schwarz Asia",
        location: "Singapore",
        type: "industry",
        detail:
            "Designed and maintained Squish automation test cases for Data Exchange and Remote Control interfaces. Achieved 95% daily analysis rate. Resolved 200+ defects in collaboration with developers. Mentored 2 interns.",
    },
    {
        period: "Apr 2025 – Present",
        role: "Research Engineer",
        org: "Center for Bioscience and Biotechnology",
        location: "Ho Chi Minh City, Vietnam",
        type: "research",
        detail:
            "Collaborating with Prof. Kiril Alexandrov's team on novel bioproduct commercialisation. Developed EasyOKAPI — a colorimetric PoC platform combining Adafruit PyBadge firmware, Flask web app, and real-time kinetic modelling. $200 hardware cost equivalent to $20k commercial systems.",
    },
];

const typeColors: Record<string, { bg: string; text: string; border: string; label: string }> = {
    education: { bg: "rgba(6,182,212,0.1)", text: "#06b6d4", border: "rgba(6,182,212,0.3)", label: "Education" },
    research: { bg: "rgba(124,58,237,0.1)", text: "#a78bfa", border: "rgba(124,58,237,0.3)", label: "Research" },
    industry: { bg: "rgba(16,185,129,0.08)", text: "#34d399", border: "rgba(16,185,129,0.25)", label: "Industry" },
};

export default function TimelineSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / width);
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    const scrollToItem = (index: number) => {
        if (!scrollRef.current) return;
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
            left: index * width,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.12 }
        );
        const els = sectionRef.current?.querySelectorAll(".reveal");
        els?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="timeline"
            ref={sectionRef}
            style={{
                padding: "100px 24px",
                background: "var(--bg-secondary)",
            }}
        >
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                {/* Header */}
                <div className="reveal" style={{ marginBottom: "64px" }}>
                    <p className="section-eyebrow">My Journey</p>
                    <h2 className="section-title">Experience &amp; Education</h2>
                    <div className="section-divider" />
                </div>

                {/* Timeline */}
                <div className="timeline-container" ref={scrollRef} onScroll={handleScroll}>
                    {/* Vertical line - hidden on mobile via CSS */}
                    <div className="timeline-line" />

                    {timelineEntries.map((entry, i) => {
                        const isLeft = i % 2 === 0;
                        const c = typeColors[entry.type];
                        return (
                            <div
                                key={i}
                                className={`timeline-item-wrap reveal reveal-delay-${Math.min(i + 1, 5)} ${isLeft ? "left" : "right"}`}
                            >
                                {/* Card */}
                                <div className="glass-card timeline-card">
                                    {/* Type badge */}
                                    <span
                                        style={{
                                            display: "inline-block",
                                            padding: "3px 10px",
                                            borderRadius: "99px",
                                            fontSize: "0.68rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            background: c.bg,
                                            color: c.text,
                                            border: `1px solid ${c.border}`,
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {c.label}
                                    </span>

                                    <div
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "var(--text-muted)",
                                            marginBottom: "4px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {entry.period}
                                    </div>

                                    <h3
                                        className="font-display"
                                        style={{
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            color: "var(--text-primary)",
                                            marginBottom: "2px",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {entry.role}
                                    </h3>

                                    <div
                                        style={{
                                            fontSize: "0.82rem",
                                            color: c.text,
                                            fontWeight: 600,
                                            marginBottom: "12px",
                                        }}
                                    >
                                        {entry.org} · {entry.location}
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "0.83rem",
                                            color: "var(--text-secondary)",
                                            lineHeight: 1.65,
                                            margin: 0,
                                        }}
                                    >
                                        {entry.detail}
                                    </p>
                                </div>

                                {/* Central dot - hidden on mobile via CSS */}
                                <div className="timeline-dot" />
                            </div>
                        );
                    })}
                </div>

                {/* Carousel Dots - only visible on mobile */}
                <div className="carousel-dots">
                    {timelineEntries.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === activeIndex ? "active" : ""}`}
                            onClick={() => scrollToItem(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile & Component styles */}
            <style>{`
        .timeline-container {
            position: relative;
        }
        .timeline-line {
            position: absolute;
            left: 50%;
            top: 8px;
            bottom: 8px;
            width: 2px;
            background: linear-gradient(to bottom, #06b6d4, #7c3aed);
            transform: translateX(-50%);
            opacity: 0.4;
        }
        .timeline-item-wrap {
            display: flex;
            margin-bottom: 48px;
            position: relative;
        }
        .timeline-item-wrap.left { justify-content: flex-start; }
        .timeline-item-wrap.right { justify-content: flex-end; }
        
        .timeline-card {
            width: calc(50% - 36px);
            padding: 22px 24px;
        }
        .timeline-dot {
            position: absolute;
            left: 50%;
            top: 28px;
            transform: translateX(-50%);
            width: 14px;
            height: 14px;
            borderRadius: 50%;
            background: linear-gradient(135deg, #06b6d4, #7c3aed);
            boxShadow: 0 0 12px rgba(6,182,212,0.6);
            z-index: 2;
            border: 2px solid var(--bg-secondary);
        }

        .carousel-dots {
            display: none;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
        }

        @media (max-width: 680px) {
          .timeline-container {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 20px 0 40px;
            gap: 20px;
            scrollbar-width: none; /* Firefox */
          }
          .timeline-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
          .timeline-line, .timeline-dot {
            display: none;
          }
          .timeline-item-wrap {
            flex-shrink: 0;
            width: 85vw;
            margin-bottom: 0;
            scroll-snap-align: center;
          }
          .timeline-card {
            width: 100%;
          }
          .carousel-dots {
            display: flex;
          }
          .carousel-dots .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--border-subtle);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .carousel-dots .dot.active {
            background: var(--cyan);
            width: 20px;
            border-radius: 4px;
          }
        }
      `}</style>
        </section>
    );
}
