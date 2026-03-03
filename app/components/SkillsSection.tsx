"use client";
import { useEffect, useRef } from "react";

const skillCategories = [
    {
        label: "Programming Languages",
        icon: "⌨️",
        skills: ["Python", "JavaScript", "Java", "Clojure", "C/C++", "PostgreSQL"],
        color: "#06b6d4",
    },
    {
        label: "Robotics",
        icon: "🤖",
        skills: ["ROS-Industry", "ROS2", "UART Control", "Proportional Control"],
        color: "#a78bfa",
    },
    {
        label: "Computer Vision",
        icon: "👁️",
        skills: ["Mediapipe", "Intel RealSense", "OpenCV", "Gesture Recognition"],
        color: "#34d399",
    },
    {
        label: "Embedded & Hardware",
        icon: "🔬",
        skills: ["CircuitPython", "Adafruit PyBadge", "Colorimetric Sensors", "Optical Hardware", "FPGA programming"],
        color: "#f59e0b",
    },
    {
        label: "Web & Backend",
        icon: "🌐",
        skills: ["Flask", "REST APIs", "Real-time Data Viz", "HTML / CSS / JS"],
        color: "#06b6d4",
    },
    {
        label: "DevOps & Testing",
        icon: "🔧",
        skills: ["Jenkins", "Squish", "Cucumber", "Linux", "SSH", "GitLab CI"],
        color: "#a78bfa",
    },
    {
        label: "Version Control",
        icon: "📦",
        skills: ["Git", "GitHub", "GitLab", "Jazz RTC"],
        color: "#34d399",
    },
    {
        label: "Documentation",
        icon: "📝",
        skills: ["LaTeX", "Markdown", "Technical Reports"],
        color: "#f59e0b",
    },
];

export default function SkillsSection() {
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
            id="skills"
            ref={sectionRef}
            style={{ padding: "100px 24px", background: "var(--bg-primary)" }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Header */}
                <div className="reveal" style={{ marginBottom: "56px" }}>
                    <p className="section-eyebrow">What I Work With</p>
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="section-divider" />
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {skillCategories.map((cat, i) => (
                        <div
                            key={i}
                            className={`glass-card reveal reveal-delay-${Math.min(i + 1, 5)}`}
                            style={{ padding: "24px" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "16px",
                                }}
                            >
                                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: "0.88rem",
                                        fontWeight: 700,
                                        color: cat.color,
                                        margin: 0,
                                        letterSpacing: "0.01em",
                                    }}
                                >
                                    {cat.label}
                                </h3>
                            </div>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-pill"
                                        style={{
                                            background: `${cat.color}12`,
                                            borderColor: `${cat.color}30`,
                                            color: cat.color,
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
