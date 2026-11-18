export function SystemPulse() {
  return (
    <svg className="system-pulse" viewBox="0 0 1000 700" aria-hidden="true">
      <ellipse className="system-pulse__ring" cx="640" cy="500" rx="18" ry="5" data-core-pulse />
      <ellipse className="system-pulse__ring system-pulse__ring--secondary" cx="640" cy="500" rx="12" ry="3.5" data-core-pulse />
    </svg>
  )
}
