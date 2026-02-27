"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
    {
        id: "shadowhand",
        title: "ShadowHand Mirror Control",
        subtitle: "Computer Vision + Robotics · Tee's Research Group, NUS",
        youtubeId: "VSDlIMtKis0",
        tags: ["Mediapipe", "RealSense", "ShadowHand", "UART", "Python"],
        description:
            "Developed a real-time gesture mirroring pipeline using MediaPipe and Intel RealSense to capture hand movements and relay them via UART to a ShadowHand dexterous robot. Implemented proportional finger control based on proximity sensor data, creating a seamless human-robot teleoperation loop. Project was filmed and covered by Reuters.",
        architecture: [
            { step: "RealSense Camera", desc: "Depth + RGB capture" },
            { step: "MediaPipe Hand Tracking", desc: "21-landmark skeleton" },
            { step: "Gesture Decoder", desc: "Joint angle extraction" },
            { step: "UART Protocol", desc: "Real-time control messages" },
            { step: "ShadowHand Robot", desc: "Finger actuation" },
        ],
        highlight: "Covered by Reuters",
        highlightColor: "#34d399",
    },
    {
        id: "teleop",
        title: "Teleoperation Robotic Control",
        subtitle: "Remote Robotic Systems",
        youtubeId: "NCHow2tWpOY",
        tags: ["ROS2", "Python", "C++", "Teleoperation", "Robotics"],
        description:
            "Designed and implemented a teleoperation system for remote robotic control, leveraging ROS2 communication infrastructure for reliable low-latency command transmission. The system enables intuitive human-directed control of robotic actuators over a networked interface.",
        architecture: [
            { step: "Operator Interface", desc: "Input capture & encoding" },
            { step: "ROS2 Topic", desc: "Pub / Sub messaging" },
            { step: "Control Node", desc: "Command processing" },
            { step: "Robot Actuators", desc: "Real-time motion" },
        ],
        highlight: "ROS2",
        highlightColor: "#a78bfa",
    },
    {
        id: "capstone",
        title: "NUS Final Year Capstone",
        subtitle: "Integrated Systems Engineering · NUS",
        youtubeId: "_zaFwhzJeaI",
        tags: ["Embedded Systems", "Signal Processing", "Integration", "Hardware"],
        description:
            "Capstone project integrating hardware and software components into a cohesive engineering system. Demonstrated end-to-end system design skills spanning embedded firmware, real-time signal processing, and user-facing interfaces — the foundation for my current biosensing research.",
        architecture: [
            { step: "Hardware Layer", desc: "Sensor & actuator integration" },
            { step: "Embedded Firmware", desc: "Real-time control loop" },
            { step: "Data Pipeline", desc: "Signal acquisition & filtering" },
            { step: "User Interface", desc: "Visualisation & control" },
        ],
        highlight: "NUS Capstone",
        highlightColor: "#06b6d4",
    },
    {
        id: "easyokapi",
        title: "EasyOKAPI",
        subtitle: "Biosensing Platform · CBB, Vietnam",
        youtubeId: null, // Coming soon
        tags: ["CircuitPython", "Flask", "Colorimetric", "Kinetic Modelling", "Point-of-Care"],
        description:
            "End-to-end integrated platform for real-time kinetic analysis of enzyme reactions from a colorimetric point-of-care device. Firmware on Adafruit PyBadge controls optical sensing hardware; a Flask web app performs real-time parameter estimation and visualisation. At $200 hardware cost, the system rivals commercial products valued at $20,000.",
        architecture: [
            { step: "Adafruit PyBadge", desc: "Optical control firmware (CircuitPython)" },
            { step: "Colorimetric Reader", desc: "Absorbance measurement" },
            { step: "Data Transfer", desc: "Serial protocol → Flask API" },
            { step: "Kinetic Modelling", desc: "Rate estimation & fitting" },
            { step: "Web Dashboard", desc: "Real-time visualisation" },
        ],
        highlight: "$200 vs $20,000 commercial",
        highlightColor: "#f59e0b",
        comingSoon: true,
    },
];

function ArchPipeline({ steps }: { steps: { step: string; desc: string }[] }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0",
                marginTop: "20px",
            }}
        >
            {steps.map((s, i) => (
                <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
                >
                    <div
                        style={{
                            padding: "8px 12px",
                            borderRadius: "8px",
                            background: "rgba(6,182,212,0.08)",
                            border: "1px solid rgba(6,182,212,0.2)",
                            textAlign: "center",
                            minWidth: "90px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "#06b6d4",
                                marginBottom: "2px",
                            }}
                        >
                            {s.step}
                        </div>
                        <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>
                            {s.desc}
                        </div>
                    </div>
                    {i < steps.length - 1 && (
                        <div
                            style={{
                                color: "var(--text-muted)",
                                fontSize: "0.9rem",
                                padding: "0 4px",
                            }}
                        >
                            →
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                }),
            { threshold: 0.08 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [activeIdx]);

    const active = projects[activeIdx];

    return (
        <section
            id="projects"
            ref={sectionRef}
            style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Header */}
                <div className="reveal" style={{ marginBottom: "48px" }}>
                    <p className="section-eyebrow">Selected Work</p>
                    <h2 className="section-title">Highlighted Projects</h2>
                    <div className="section-divider" />
                </div>

                {/* Project Tabs */}
                <div
                    className="reveal reveal-delay-1"
                    style={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBottom: "36px",
                    }}
                >
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => setActiveIdx(i)}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "1px solid",
                                borderColor:
                                    activeIdx === i ? "var(--cyan)" : "var(--border-subtle)",
                                background:
                                    activeIdx === i
                                        ? "rgba(6,182,212,0.12)"
                                        : "transparent",
                                color:
                                    activeIdx === i
                                        ? "var(--cyan)"
                                        : "var(--text-secondary)",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                fontFamily: "var(--font-inter), system-ui, sans-serif",
                            }}
                        >
                            {p.title}
                            {p.comingSoon && (
                                <span
                                    style={{
                                        fontSize: "0.65rem",
                                        padding: "2px 7px",
                                        borderRadius: "99px",
                                        background: "rgba(245,158,11,0.15)",
                                        color: "#f59e0b",
                                        border: "1px solid rgba(245,158,11,0.3)",
                                    }}
                                >
                                    Soon
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Active Project Card */}
                <div
                    className="glass-card reveal reveal-delay-2"
                    style={{ padding: "36px", overflow: "hidden" }}
                    key={active.id}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "36px",
                            alignItems: "start",
                        }}
                        className="project-grid"
                    >
                        {/* LEFT: Video or placeholder */}
                        <div>
                            {active.youtubeId ? (
                                <div className="youtube-embed">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${active.youtubeId}`}
                                        title={active.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div
                                    style={{
                                        aspectRatio: "16/9",
                                        borderRadius: "10px",
                                        background:
                                            "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(124,58,237,0.08))",
                                        border: "1px dashed rgba(6,182,212,0.25)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "12px",
                                    }}
                                >
                                    <div style={{ fontSize: "2.5rem" }}>🎬</div>
                                    <p
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "var(--text-muted)",
                                            textAlign: "center",
                                            margin: 0,
                                        }}
                                    >
                                        Demo video coming soon
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* RIGHT: Info */}
                        <div>
                            {/* Highlight badge */}
                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "4px 12px",
                                    borderRadius: "99px",
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    background: `${active.highlightColor}15`,
                                    color: active.highlightColor,
                                    border: `1px solid ${active.highlightColor}35`,
                                    marginBottom: "14px",
                                    letterSpacing: "0.04em",
                                }}
                            >
                                ★ {active.highlight}
                            </span>

                            <h3
                                className="font-display"
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    marginBottom: "6px",
                                    color: "var(--text-primary)",
                                }}
                            >
                                {active.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: "0.82rem",
                                    color: "var(--text-muted)",
                                    marginBottom: "16px",
                                }}
                            >
                                {active.subtitle}
                            </p>

                            {/* Tags */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                    marginBottom: "20px",
                                }}
                            >
                                {active.tags.map((tag) => (
                                    <span key={tag} className="tag-pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "0.87rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                    marginBottom: "0",
                                }}
                            >
                                {active.description}
                            </p>
                        </div>
                    </div>

                    {/* Architecture Pipeline */}
                    <div
                        style={{
                            marginTop: "32px",
                            paddingTop: "28px",
                            borderTop: "1px solid var(--border-subtle)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "0.72rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--text-muted)",
                                marginBottom: "0",
                                fontWeight: 600,
                            }}
                        >
                            System Architecture
                        </p>
                        <ArchPipeline steps={active.architecture} />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 700px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
