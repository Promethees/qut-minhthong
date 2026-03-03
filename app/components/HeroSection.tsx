"use client";
import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

function initCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width;
    const H = canvas.height;
    const NODE_COUNT = 80;
    const MAX_DIST = 160;

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 0.6,
    }));

    let raf: number;

    function tick() {
        ctx.clearRect(0, 0, W, H);

        // Move nodes
        for (const n of nodes) {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
        }

        // Draw connections
        for (let i = 0; i < NODE_COUNT; i++) {
            for (let j = i + 1; j < NODE_COUNT; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.35;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw nodes
        for (const n of nodes) {
            ctx.beginPath();
            const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 2.5);
            grad.addColorStop(0, "rgba(6, 182, 212, 0.9)");
            grad.addColorStop(1, "rgba(124, 58, 237, 0)");
            ctx.fillStyle = grad;
            ctx.arc(n.x, n.y, n.radius * 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        raf = requestAnimationFrame(tick);
    }

    tick();
    return () => cancelAnimationFrame(raf);
}

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        const cleanup = initCanvas(canvas);
        window.addEventListener("resize", resize, { passive: true });
        return () => {
            cleanup();
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "linear-gradient(180deg, #050c1a 0%, #07111f 60%, #0a1628 100%)",
            }}
        >
            {/* Animated canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.75,
                }}
            />

            {/* Radial glow */}
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                    padding: "0 24px",
                    maxWidth: "800px",
                    animation: "heroFadeIn 1s ease forwards",
                }}
            >
                {/* Eyebrow */}
                <div className="section-eyebrow" style={{ marginBottom: "20px" }}>
                    {/* PhD Applicant · QUT · Brisbane, Australia */}
                    Introductory website
                </div>

                {/* Name */}
                <h1
                    className="font-display"
                    style={{
                        fontSize: "clamp(2.6rem, 7vw, 5rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: "20px",
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                    }}
                >
                    Tra Quang <br />
                    <span className="gradient-text">Minh Thong</span>
                </h1>

                {/* Sub-title */}
                <p
                    style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                        color: "var(--text-secondary)",
                        marginBottom: "16px",
                        fontWeight: 500,
                    }}
                >
                    Research Engineer · Biosensing Systems · Robotics & Computer Vision
                </p>

                {/* Credentials line */}
                <p
                    style={{
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        marginBottom: "40px",
                        letterSpacing: "0.01em",
                    }}
                >
                    B.Eng Computer Engineering — National University of Singapore (4.47, Honours with Distinction) &nbsp;
                    <br />
                    ·&nbsp;
                    Center for Bioscience &amp; Biotechnology, Vietnam
                </p>

                {/* Buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <a href="#projects" className="btn-primary">
                        View My Work ↓
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tqmthong/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Promethees"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        GitHub
                    </a>
                </div>

                {/* Scroll indicator */}
                <div
                    style={{
                        marginTop: "72px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        opacity: 0.5,
                    }}
                >
                    <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        scroll
                    </span>
                    <div
                        style={{
                            width: "1.5px",
                            height: "40px",
                            background: "linear-gradient(to bottom, var(--cyan), transparent)",
                            borderRadius: "1px",
                            animation: "scrollBounce 2s ease-in-out infinite",
                        }}
                    />
                </div>
            </div>

            <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.3); }
        }
      `}</style>
        </section>
    );
}
