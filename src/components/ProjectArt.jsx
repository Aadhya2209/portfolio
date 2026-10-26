// Illustrated previews for project cards. Stylised, not screenshots.
const G = '#8be65a', C = '#5fc9d6', A = '#f0a35e', L = 'rgba(162,178,168,.28)', S = '#0c1611', T = '#f1f5f0'

const Browser = ({ children, x = 30, y = 18, w = 260, h = 150 }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" fill={S} stroke={L} />
    <circle cx={x + 14} cy={y + 12} r="3" fill={A} /><circle cx={x + 24} cy={y + 12} r="3" fill={C} /><circle cx={x + 34} cy={y + 12} r="3" fill={G} />
    <rect x={x + 48} y={y + 7} width={w - 64} height="10" rx="5" fill="rgba(162,178,168,.12)" />
    <g transform={`translate(${x},${y + 24})`}>{children}</g>
  </g>
)

const Phone = ({ x, children }) => (
  <g>
    <rect x={x} y="10" width="96" height="168" rx="16" fill={S} stroke={L} />
    <rect x={x + 36} y="16" width="24" height="5" rx="2.5" fill={L} />
    <g transform={`translate(${x},28)`}>{children}</g>
  </g>
)

const arts = {
  queue: (
    <>
      <Phone x={40}>
        <text x="48" y="22" textAnchor="middle" fontSize="8" fill={L} fontFamily="monospace">YOUR TOKEN</text>
        <text x="48" y="48" textAnchor="middle" fontSize="22" fontWeight="700" fill={G} fontFamily="sans-serif">A-24</text>
        <rect x="14" y="58" width="68" height="14" rx="7" fill="rgba(139,230,90,.15)" />
        <text x="48" y="68" textAnchor="middle" fontSize="7.5" fill={G} fontFamily="sans-serif">3 ahead · ~6 min</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}><rect x="12" y={82 + i * 15} width="72" height="11" rx="3" fill="rgba(162,178,168,.08)" />
            <rect x="16" y={85 + i * 15} width={i === 3 ? 20 : 34} height="5" rx="2.5" fill={i === 3 ? G : L} /></g>
        ))}
      </Phone>
      <g transform="translate(170,40)">
        <circle cx="55" cy="55" r="44" fill="none" stroke="rgba(162,178,168,.15)" strokeWidth="9" />
        <circle cx="55" cy="55" r="44" fill="none" stroke={G} strokeWidth="9" strokeLinecap="round" strokeDasharray="200 277" transform="rotate(-90 55 55)" />
        <text x="55" y="53" textAnchor="middle" fontSize="20" fontWeight="700" fill={T} fontFamily="sans-serif">72%</text>
        <text x="55" y="68" textAnchor="middle" fontSize="8" fill={L} fontFamily="monospace">QUEUE SERVED</text>
      </g>
    </>
  ),
  analytics: (
    <Browser>
      <g>
        {[['68.8%', G], ['86.5%', C], ['₹2.65L', A]].map(([v, c], i) => (
          <g key={v} transform={`translate(${10 + i * 82},8)`}>
            <rect width="74" height="34" rx="6" fill="rgba(162,178,168,.07)" />
            <text x="8" y="23" fontSize="13" fontWeight="700" fill={c} fontFamily="sans-serif">{v}</text>
          </g>
        ))}
        {[34, 52, 40, 70, 58, 84, 66].map((h, i) => (
          <rect key={i} x={14 + i * 20} y={118 - h} width="12" height={h} rx="3" fill={i === 5 ? G : 'rgba(139,230,90,.35)'} />
        ))}
        <circle cx="210" cy="84" r="26" fill="none" stroke="rgba(95,201,214,.25)" strokeWidth="10" />
        <circle cx="210" cy="84" r="26" fill="none" stroke={C} strokeWidth="10" strokeDasharray="112 164" transform="rotate(-90 210 84)" />
      </g>
    </Browser>
  ),
  food: (
    <Browser>
      <rect x="10" y="8" width="240" height="44" rx="6" fill="rgba(240,163,94,.12)" />
      <text x="20" y="28" fontSize="12" fontWeight="700" fill={T} fontFamily="sans-serif">Fresh. Healthy. Fast.</text>
      <rect x="20" y="36" width="44" height="9" rx="4.5" fill={G} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${10 + i * 82},62)`}>
          <rect width="74" height="56" rx="6" fill="rgba(162,178,168,.07)" />
          <circle cx="37" cy="22" r="14" fill={[G, A, C][i]} opacity=".75" />
          <circle cx="32" cy="18" r="4" fill={S} opacity=".35" /><circle cx="42" cy="25" r="3" fill={S} opacity=".35" />
          <rect x="14" y="42" width="46" height="5" rx="2.5" fill={L} />
        </g>
      ))}
    </Browser>
  ),
  learn: (
    <Browser>
      <rect x="40" y="8" width="180" height="16" rx="8" fill="rgba(162,178,168,.1)" stroke={L} />
      <circle cx="52" cy="16" r="3.5" fill="none" stroke={G} strokeWidth="1.5" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(${12 + (i % 3) * 80},${34 + Math.floor(i / 3) * 44})`}>
          <rect width="72" height="38" rx="6" fill="rgba(162,178,168,.07)" />
          <rect x="8" y="8" width="14" height="14" rx="3" fill={[G, C, A][i % 3]} opacity=".8" />
          <rect x="28" y="10" width="36" height="4" rx="2" fill={L} /><rect x="28" y="18" width="24" height="4" rx="2" fill="rgba(162,178,168,.15)" />
        </g>
      ))}
    </Browser>
  ),
  air: (
    <Browser>
      {Array.from({ length: 48 }, (_, i) => {
        const x = 14 + (i % 12) * 20, y = 12 + Math.floor(i / 12) * 14, v = Math.sin(i * 1.7) * 0.5 + 0.5
        return <circle key={i} cx={x} cy={y} r={2.5 + v * 2.5} fill={v > 0.7 ? A : v > 0.4 ? C : G} opacity={0.35 + v * 0.55} />
      })}
      <polyline points="10,112 40,100 70,106 100,84 130,90 160,70 190,78 220,58 250,64" fill="none" stroke={A} strokeWidth="2" />
      <polyline points="10,118 40,112 70,116 100,104 130,108 160,96 190,100 220,88 250,92" fill="none" stroke={C} strokeWidth="1.5" opacity=".7" />
    </Browser>
  ),
  auth: (
    <g>
      <rect x="95" y="16" width="130" height="150" rx="14" fill={S} stroke={L} />
      <rect x="146" y="30" width="28" height="22" rx="5" fill="none" stroke={G} strokeWidth="2" />
      <path d="M151 30v-6a9 9 0 0 1 18 0v6" fill="none" stroke={G} strokeWidth="2" />
      {[64, 88].map((y) => <rect key={y} x="110" y={y} width="100" height="16" rx="5" fill="rgba(162,178,168,.08)" stroke={L} />)}
      <text x="117" y="99" fontSize="10" fill={L} fontFamily="monospace">• • • • • •</text>
      <rect x="110" y="116" width="100" height="18" rx="9" fill={G} />
      <rect x="130" y="146" width="60" height="4" rx="2" fill={L} />
    </g>
  ),
  sleep: (
    <>
      <Phone x={112}>
        <circle cx="80" cy="12" r="8" fill={A} opacity=".9" /><circle cx="84" cy="9" r="7" fill={S} />
        <text x="14" y="30" fontSize="16" fontWeight="700" fill={T} fontFamily="sans-serif">7h 42m</text>
        <text x="14" y="42" fontSize="7" fill={L} fontFamily="monospace">LAST NIGHT</text>
        {[22, 38, 14, 30, 44, 18, 34, 26, 40, 20].map((h, i) => (
          <rect key={i} x={12 + i * 7.4} y={110 - h} width="5" height={h} rx="2" fill={h > 35 ? C : 'rgba(95,201,214,.4)'} />
        ))}
        <rect x="12" y="120" width="72" height="12" rx="6" fill="rgba(139,230,90,.15)" />
        <text x="48" y="129" textAnchor="middle" fontSize="7" fill={G} fontFamily="sans-serif">Sleep score 86</text>
      </Phone>
    </>
  ),
  ludo: (
    <g transform="translate(100,12)">
      <rect width="120" height="120" rx="10" fill={S} stroke={L} />
      {[[0, 0, G], [72, 0, C], [0, 72, A], [72, 72, '#e86a6a']].map(([x, y, c]) => (
        <g key={x + '-' + y}><rect x={x + 6} y={y + 6} width="42" height="42" rx="7" fill={c} opacity=".75" />
          <rect x={x + 15} y={y + 15} width="24" height="24" rx="5" fill={S} />
          <circle cx={x + 27} cy={y + 27} r="5" fill={c} /></g>
      ))}
      <path d="M60 48 L72 60 L60 72 L48 60 Z" fill={T} opacity=".8" />
      <rect x="138" y="70" width="34" height="34" rx="7" fill={T} transform="rotate(12 155 87)" />
      {[[148, 80], [162, 94], [155, 87]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="3" fill={S} transform="rotate(12 155 87)" />)}
    </g>
  ),
  chat: (
    <g>
      <rect x="40" y="26" width="150" height="34" rx="14" fill="rgba(162,178,168,.12)" />
      <rect x="54" y="38" width="96" height="5" rx="2.5" fill={L} /><rect x="54" y="47" width="60" height="5" rx="2.5" fill={L} />
      <rect x="130" y="74" width="150" height="34" rx="14" fill="rgba(139,230,90,.2)" />
      <rect x="144" y="86" width="110" height="5" rx="2.5" fill={G} opacity=".7" /><rect x="144" y="95" width="70" height="5" rx="2.5" fill={G} opacity=".5" />
      <rect x="40" y="122" width="90" height="28" rx="14" fill="rgba(162,178,168,.12)" />
      {[0, 1, 2].map((i) => <circle key={i} cx={64 + i * 14} cy="136" r="3.5" fill={L} />)}
    </g>
  ),
}

export default function ProjectArt({ kind }) {
  return (
    <svg viewBox="0 0 320 188" className="art" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {arts[kind]}
    </svg>
  )
}
