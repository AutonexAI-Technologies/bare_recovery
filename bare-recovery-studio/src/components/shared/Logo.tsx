// Logo SVG based on the physical signage:
// Top row: Bold B · hourglass/bowtie shape · Bold R
// Bottom row: BARE (large) | RECOVERY (smaller, tight tracking)

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'white' | 'black'
  showText?: boolean
}

const sizes = {
  sm: { width: 100, height: 48 },
  md: { width: 140, height: 68 },
  lg: { width: 200, height: 96 },
}

export default function Logo({ size = 'md', variant = 'white', showText = true }: LogoProps) {
  const fill = variant === 'white' ? '#F5F5F2' : '#0B0B0B'
  const { width, height } = sizes[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bare Recovery Studio logo"
    >
      {/* TOP ROW: B  [bowtie]  R */}
      {/* B — bold serif-style */}
      <text
        x="0"
        y="42"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="900"
        fontSize="44"
        fill={fill}
        letterSpacing="-2"
      >
        B
      </text>

      {/* Bowtie / hourglass shape — centered between B and R */}
      {/* Pinched in the middle — like a horizontal bowtie */}
      <path
        d="M70 14 L105 28 L105 28 C108 29 108 29 105 30 L105 30 L70 44 L70 44 C67 43 67 43 70 42 L70 14Z M130 14 L95 28 L95 28 C92 29 92 29 95 30 L95 30 L130 44 L130 44 C133 43 133 43 130 42 L130 14Z"
        fill={fill}
      />

      {/* R — bold serif-style */}
      <text
        x="136"
        y="42"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="900"
        fontSize="44"
        fill={fill}
        letterSpacing="-2"
      >
        R
      </text>

      {showText && (
        <>
          {/* BARE — large */}
          <text
            x="0"
            y="78"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="800"
            fontSize="28"
            fill={fill}
            letterSpacing="4"
          >
            BARE
          </text>

          {/* RECOVERY — smaller, tight */}
          <text
            x="0"
            y="96"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="500"
            fontSize="16"
            fill={fill}
            letterSpacing="5"
          >
            RECOVERY
          </text>
        </>
      )}
    </svg>
  )
}
