/**
 * Animated aurora / mesh-gradient backdrop. Pure CSS (keyframes live in
 * globals.css), so it ships zero JavaScript and pauses under reduced-motion.
 * Decorative only — always aria-hidden.
 */
export default function AuroraBackground({
  className = '',
}: {
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      <div className="noise-overlay" />
    </div>
  )
}
