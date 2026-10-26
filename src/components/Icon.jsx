const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export default function Icon({ name }) {
  if (name === 'graph')
    return (
      <svg {...common}>
        <circle cx="5" cy="6" r="2.2" /><circle cx="19" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" />
        <path d="M7 7l3.5 9M17 7l-3.5 9M7.2 6h9.6" />
      </svg>
    )
  if (name === 'code')
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="2.5" /><path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  )
}
