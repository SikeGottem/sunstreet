interface LogoProps {
  className?: string;
}

/* Verco — clean lowercase wordmark with period, rounded sans-serif */
export function VercoLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* v */}
      <path d="M4 12 L16 40 L28 12 L23 12 L16 32 L9 12Z" />
      {/* e */}
      <path d="M34 26 Q34 16 44 16 Q54 16 54 26 L34 26 Z M34 29 L54 29 Q53 40 44 40 Q34 40 34 30Z M38 24 L50 24 Q49 19 44 19 Q39 19 38 24Z" fillRule="evenodd" />
      {/* r */}
      <path d="M60 17 L60 40 L65 40 L65 26 Q67 19 74 19 L74 16 Q68 16 65 20 L65 17Z" />
      {/* c */}
      <path d="M96 19 Q88 16 82 19 Q76 23 76 28 Q76 34 82 37 Q88 40 96 37 L96 34 Q89 37 84 34 Q80 31 80 28 Q80 24 84 21 Q89 19 96 21Z" />
      {/* o */}
      <path d="M112 16 Q102 16 102 28 Q102 40 112 40 Q122 40 122 28 Q122 16 112 16Z M112 19 Q118 19 118 28 Q118 37 112 37 Q106 37 106 28 Q106 19 112 19Z" fillRule="evenodd" />
      {/* dot */}
      <circle cx="130" cy="38" r="3" />
    </svg>
  );
}

/* Lion Nathan — bold "LION" uppercase, strong geometric sans */
export function LionNathanLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 240 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* L */}
      <path d="M8 8 L16 8 L16 36 L34 36 L34 42 L8 42Z" />
      {/* I */}
      <path d="M40 8 L48 8 L48 42 L40 42Z" />
      {/* O */}
      <path d="M68 8 Q54 8 54 25 Q54 42 68 42 Q82 42 82 25 Q82 8 68 8Z M68 14 Q76 14 76 25 Q76 36 68 36 Q60 36 60 25 Q60 14 68 14Z" fillRule="evenodd" />
      {/* N */}
      <path d="M88 8 L96 8 L116 34 L116 8 L124 8 L124 42 L116 42 L96 16 L96 42 L88 42Z" />
      {/* space + NATHAN */}
      <g transform="translate(134, 0)">
        {/* N */}
        <path d="M0 8 L6 8 L20 32 L20 8 L26 8 L26 42 L20 42 L6 18 L6 42 L0 42Z" />
        {/* A */}
        <path d="M40 42 L30 8 L37 8 L44 34 L51 8 L58 8 L48 42Z M35 28 L53 28 L53 33 L35 33Z" />
        {/* T */}
        <path d="M58 8 L80 8 L80 14 L72 14 L72 42 L66 42 L66 14 L58 14Z" />
        {/* H */}
        <path d="M82 8 L88 8 L88 22 L100 22 L100 8 L106 8 L106 42 L100 42 L100 28 L88 28 L88 42 L82 42Z" />
      </g>
    </svg>
  );
}

/* Babcock & Brown — spaced uppercase, slightly condensed */
export function BabcockBrownLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 460 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 10)">
        {/* BABCOCK */}
        {/* B */}
        <path d="M0 0 L14 0 Q22 0 22 7 Q22 12 17 14 Q23 16 23 23 Q23 30 14 30 L0 30Z M6 5 L6 12 L13 12 Q17 12 17 8.5 Q17 5 13 5Z M6 17 L6 25 L14 25 Q18 25 18 21 Q18 17 14 17Z" />
        {/* A */}
        <path d="M36 30 L27 0 L33 0 L39.5 24 L46 0 L52 0 L43 30Z M32 20 L47 20 L47 24 L32 24Z" />
        {/* B */}
        <path d="M55 0 L69 0 Q77 0 77 7 Q77 12 72 14 Q78 16 78 23 Q78 30 69 30 L55 30Z M61 5 L61 12 L68 12 Q72 12 72 8.5 Q72 5 68 5Z M61 17 L61 25 L69 25 Q73 25 73 21 Q73 17 69 17Z" />
        {/* C */}
        <path d="M97 3 Q89 0 84 3 Q80 6 80 15 Q80 24 84 27 Q89 30 97 27 L97 23 Q91 26 87 24 Q83 21 83 15 Q83 9 87 6 Q91 4 97 6Z" />
        {/* O */}
        <path d="M110 0 Q100 0 100 15 Q100 30 110 30 Q120 30 120 15 Q120 0 110 0Z M110 4 Q116 4 116 15 Q116 26 110 26 Q104 26 104 15 Q104 4 110 4Z" fillRule="evenodd" />
        {/* C */}
        <path d="M137 3 Q129 0 124 3 Q120 6 120 15 Q120 24 124 27 Q129 30 137 27 L137 23 Q131 26 127 24 Q123 21 123 15 Q123 9 127 6 Q131 4 137 6Z" />
        {/* K */}
        <path d="M140 0 L146 0 L146 13 L157 0 L164 0 L152 14 L165 30 L158 30 L146 15 L146 30 L140 30Z" />
        
        {/* & */}
        <g transform="translate(175, 0)">
          <path d="M12 30 Q5 30 2 27 Q0 24 0 20 Q0 16 4 13 L8 10 Q5 6 5 3 Q5 0 10 0 Q15 0 15 4 Q15 7 11 10 L15 15 L18 10 L22 10 L17 18 L22 24 L18 24 L14 19 Q11 24 8 27 Q12 28 16 26 L16 30 Q14 30 12 30Z M6 20 Q6 25 10 25 L11 24 Q8 20 6 17 Q4 18 4 20Z M10 4 Q8 4 8 5.5 Q8 7 10 9 Q12 7 12 5 Q12 4 10 4Z" />
        </g>

        {/* BROWN */}
        <g transform="translate(205, 0)">
          {/* B */}
          <path d="M0 0 L14 0 Q22 0 22 7 Q22 12 17 14 Q23 16 23 23 Q23 30 14 30 L0 30Z M6 5 L6 12 L13 12 Q17 12 17 8.5 Q17 5 13 5Z M6 17 L6 25 L14 25 Q18 25 18 21 Q18 17 14 17Z" />
          {/* R */}
          <path d="M28 0 L42 0 Q50 0 50 9 Q50 16 44 18 L52 30 L46 30 L38 18 L34 18 L34 30 L28 30Z M34 5 L34 14 L41 14 Q45 14 45 9.5 Q45 5 41 5Z" />
          {/* O */}
          <path d="M63 0 Q53 0 53 15 Q53 30 63 30 Q73 30 73 15 Q73 0 63 0Z M63 4 Q69 4 69 15 Q69 26 63 26 Q57 26 57 15 Q57 4 63 4Z" fillRule="evenodd" />
          {/* W */}
          <path d="M76 0 L82 0 L87 22 L92 0 L97 0 L102 22 L107 0 L113 0 L105 30 L99 30 L94.5 10 L90 30 L84 30Z" />
          {/* N */}
          <path d="M116 0 L122 0 L136 24 L136 0 L142 0 L142 30 L136 30 L122 6 L122 30 L116 30Z" />
        </g>
      </g>
    </svg>
  );
}

/* Ageas — lowercase with distinctive angular design */
export function AgeasLogo({ className = "h-8" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 180 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* a */}
      <path d="M20 16 Q12 16 8 20 Q4 24 4 30 Q4 36 8 38 Q12 40 20 40 L24 40 L24 30 Q24 20 20 16Z M20 20 Q22 22 22 30 L22 37 L20 37 Q14 37 10 34 Q8 32 8 30 Q8 26 10 23 Q14 20 20 20Z" />
      {/* g */}
      <path d="M44 16 Q36 16 32 20 Q28 24 28 30 Q28 36 32 38 Q36 40 44 40 L48 40 L48 44 Q48 48 40 48 L36 48 L36 45 L40 45 Q44 45 44 44 L44 40 Q36 40 32 37 Q28 34 28 30 Q28 24 32 20 Q36 16 44 16Z M44 20 Q38 20 35 23 Q32 26 32 30 Q32 34 35 36 Q38 37 44 37 L44 20Z" />
      {/* e */}
      <path d="M56 28 Q56 20 64 16 Q72 16 72 24 L56 28Z M56 30 Q56 37 64 40 Q72 40 72 36 L68 36 Q68 37 64 37 Q59 37 56 30Z M60 25 L68 22 Q67 19 64 19 Q60 19 60 25Z" />
      {/* a */}
      <path d="M92 16 Q84 16 80 20 Q76 24 76 30 Q76 36 80 38 Q84 40 92 40 L96 40 L96 30 Q96 20 92 16Z M92 20 Q94 22 94 30 L94 37 L92 37 Q86 37 82 34 Q80 32 80 30 Q80 26 82 23 Q86 20 92 20Z" />
      {/* s */}
      <path d="M114 19 Q108 16 104 19 Q102 21 102 24 Q102 27 106 28 L112 30 Q116 31 116 34 Q116 40 108 40 Q104 40 102 38 L104 35 Q106 37 108 37 Q114 37 114 34 Q114 32 110 31 L106 29 Q102 28 102 24 Q102 20 104 18 Q108 16 114 19Z" />
    </svg>
  );
}
