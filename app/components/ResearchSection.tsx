"use client";
import { useEffect, useRef } from "react";

const researchPillars = [
    {
        icon: "🔬",
        title: "Intelligent Biosensing",
        desc: "Designing portable point-of-care diagnostic platforms that combine optical sensing, embedded firmware, and kinetic modelling to deliver real-time clinically actionable output.",
    },
    {
        icon: "🤖",
        title: "Human-Robot Interaction",
        desc: "Bridging computer vision and robotics to enable intuitive teleoperation and gesture-driven control, with applications in biomedical manipulation and remote environments.",
    },
    {
        icon: "🧠",
        title: "AI-Assisted Signal Interpretation",
        desc: "Applying machine learning and adaptive algorithms to decode complex biochemical signals — moving beyond static models to context-aware, real-world diagnostics.",
    },
    {
        icon: "🌏",
        title: "Translational Impact",
        desc: "Motivated by accessible healthcare technology. My EasyOKAPI platform demonstrated a $200 solution comparable to $20,000 commercial systems, proving that impact and affordability can coexist.",
    },
];

export default function ResearchSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                }),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="research"
            ref={sectionRef}
            style={{ padding: "100px 24px", background: "var(--bg-primary)" }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Header */}
                <div className="reveal" style={{ marginBottom: "56px" }}>
                    <p className="section-eyebrow">Looking Forward</p>
                    <h2 className="section-title">Research Vision &amp; PhD Direction</h2>
                    <div className="section-divider" />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "40px",
                        alignItems: "start",
                    }}
                    className="research-grid"
                >
                    {/* LEFT: Research pillars */}
                    <div>
                        <div
                            className="reveal reveal-delay-1"
                            style={{ marginBottom: "32px" }}
                        >
                            <p
                                style={{
                                    fontSize: "1.05rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.75,
                                    marginBottom: "24px",
                                }}
                            >
                                My research lies at the intersection of{" "}
                                <span style={{ color: "var(--cyan)", fontWeight: 600 }}>
                                    biosensing hardware
                                </span>
                                ,{" "}
                                <span style={{ color: "var(--violet-light)", fontWeight: 600 }}>
                                    intelligent signal processing
                                </span>
                                , and{" "}
                                <span style={{ color: "#34d399", fontWeight: 600 }}>
                                    translational engineering
                                </span>
                                . I am driven to create diagnostic tools that are not only
                                scientifically rigorous, but accessible and deployable in
                                resource-limited settings.
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            {researchPillars.map((p, i) => (
                                <div
                                    key={i}
                                    className={`glass-card reveal reveal-delay-${i + 1}`}
                                    style={{ padding: "20px 22px", display: "flex", gap: "16px" }}
                                >
                                    <span style={{ fontSize: "1.6rem", flexShrink: 0, marginTop: "2px" }}>
                                        {p.icon}
                                    </span>
                                    <div>
                                        <h3
                                            className="font-display"
                                            style={{
                                                fontSize: "0.95rem",
                                                fontWeight: 700,
                                                color: "var(--text-primary)",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {p.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: "0.83rem",
                                                color: "var(--text-secondary)",
                                                lineHeight: 1.65,
                                                margin: 0,
                                            }}
                                        >
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: QUT alignment card */}
                    <div className="reveal reveal-delay-2">
                        {/* QUT Card */}
                        <div
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(124,58,237,0.08) 100%)",
                                border: "1px solid rgba(6,182,212,0.25)",
                                borderRadius: "16px",
                                padding: "32px",
                                marginBottom: "24px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.2rem",
                                        flexShrink: 0,
                                    }}
                                >
                                    🎓
                                </div>
                                <div>
                                    <div
                                        className="font-display"
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        Proposed PhD research directions
                                    </div>
                                    {/* <div
                                        style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                                    >
                                        Under Prof. Soniya Yambem
                                    </div> */}
                                </div>
                            </div>

                            <p
                                style={{
                                    fontSize: "0.88rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                    marginBottom: "20px",
                                }}
                            >
                                I aim to pursue PhD research in{" "}
                                <strong style={{ color: "var(--text-primary)" }}>
                                    AI-assisted portable biosensing platforms
                                </strong>{" "}
                                — specifically, developing adaptive signal processing pipelines
                                and robust kinetic models capable of reliable performance under
                                real-world environmental variability.
                            </p>

                            <p
                                style={{
                                    fontSize: "0.88rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                    marginBottom: "0",
                                }}
                            >
                                QUT&apos;s research environment, with its emphasis on
                                translational biomedical engineering and industry-academia
                                collaboration, aligns directly with my experience developing
                                EasyOKAPI at CBB — where I translated fundamental bioscience
                                into practical, affordable diagnostic hardware.
                            </p>
                        </div>

                        {/* Alignment bullets */}
                        <div
                            className="glass-card"
                            style={{ padding: "24px" }}
                        >
                            <h4
                                className="font-display"
                                style={{
                                    fontSize: "0.82rem",
                                    fontWeight: 700,
                                    color: "var(--cyan)",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "16px",
                                }}
                            >
                                Research Alignment
                            </h4>
                            {[
                                {
                                    icon: "✦",
                                    text: "End-to-end biosensor design: hardware + firmware + software stack",
                                },
                                {
                                    icon: "✦",
                                    text: "Kinetic modelling and real-time enzyme analysis",
                                },
                                {
                                    icon: "✦",
                                    text: "Portable PoC systems for low-resource healthcare settings",
                                },
                                {
                                    icon: "✦",
                                    text: "Interdisciplinary integration of biomedical science & engineering",
                                },
                                {
                                    icon: "✦",
                                    text: "Strong foundation in embedded systems, CV, and data pipelines",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        gap: "12px",
                                        marginBottom: i < 4 ? "12px" : "0",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "var(--cyan)",
                                            fontSize: "0.7rem",
                                            marginTop: "3px",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {item.icon}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.84rem",
                                            color: "var(--text-secondary)",
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .research-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
