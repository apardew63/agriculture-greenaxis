export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-2 px-7 py-4
        text-white font-medium
        rounded-full
        bg-gradient-to-b from-[#2E2E33] to-[#18181B]
        shadow-[0_4px_10px_rgba(0,0,0,0.4)]
        overflow-hidden
        transition-all duration-300
        hover:scale-105
        ${className}
      `}
    >
      {/* Glossy overlay */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-b from-white/20 to-transparent
          rounded-full
          pointer-events-none
        "
      ></span>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 text-lg">→</span>
    </button>
  );
}