// Placeholder icon — swap for the real Figma "icon-modal" export when available.
export default function GalleryIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="14" height="14" rx="2" />
      <path d="M7 6V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2" />
      <circle cx="8" cy="11" r="1.5" />
      <path d="M4 17l3.5-3.5a1 1 0 0 1 1.4 0L11 15.5" />
    </svg>
  );
}
