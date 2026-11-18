export function SystemDataBus() {
  return (
    <svg className="system-data-bus" viewBox="0 0 1000 700" aria-hidden="true">
      <ellipse className="system-data-bus__path" cx="640" cy="510" rx="288" ry="47" pathLength="100" data-data-bus />
      <ellipse className="system-data-bus__path system-data-bus__path--inner" cx="640" cy="510" rx="210" ry="30" pathLength="100" data-data-bus />
      <ellipse className="system-data-bus__path system-data-bus__path--outer" cx="640" cy="510" rx="356" ry="69" pathLength="100" data-data-bus />
    </svg>
  )
}
