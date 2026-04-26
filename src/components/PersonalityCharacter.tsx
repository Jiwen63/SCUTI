import React from 'react';

interface Props {
  personalityId: string;
  size?: 'sm' | 'md' | 'lg';
}

// 10种人格配图，简洁可爱风格
const characters: Record<string, React.ReactNode> = {
  // 🐱 猫女
  "猫女": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#FFF0F5" />
      <polygon points="26,28 38,54 14,48" fill="#FFB6C1" />
      <polygon points="94,28 82,54 106,48" fill="#FFB6C1" />
      <circle cx="44" cy="56" r="7" fill="#333" />
      <circle cx="76" cy="56" r="7" fill="#333" />
      <circle cx="46" cy="54" r="2.5" fill="#fff" />
      <circle cx="78" cy="54" r="2.5" fill="#fff" />
      <ellipse cx="60" cy="72" rx="5" ry="3" fill="#FF8FAB" />
      <path d="M52 78 Q60 85 68 78" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M24 60 Q10 52 14 42" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <path d="M24 66 Q8 64 12 56" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <path d="M96 60 Q110 52 106 42" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <path d="M96 66 Q112 64 108 56" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <circle cx="46" cy="58" r="5" fill="#C5CAE9" opacity="0.5" />
      <circle cx="74" cy="58" r="5" fill="#C5CAE9" opacity="0.5" />
    </svg>
  ),

  // 😴 超级旷工
  "超级旷工": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#F3E5F5" />
      <rect x="22" y="30" width="76" height="58" rx="12" fill="#CE93D8" />
      <rect x="30" y="38" width="60" height="42" rx="8" fill="#E1BEE7" />
      <circle cx="60" cy="50" r="14" fill="#BA68C8" />
      <ellipse cx="60" cy="72" rx="14" ry="10" fill="#BA68C8" />
      <line x1="46" y1="48" x2="54" y2="50" stroke="#7B1FA2" strokeWidth="2" strokeLinecap="round" />
      <line x1="66" y1="50" x2="74" y2="48" stroke="#7B1FA2" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 60 Q60 62 66 60" stroke="#7B1FA2" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 44 Q30 36 38 38" stroke="#9C27B0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M90 44 Q90 36 82 38" stroke="#9C27B0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="50" y="56" fontSize="8" fill="#fff" fontWeight="bold">zz</text>
      <text x="66" y="56" fontSize="8" fill="#fff" fontWeight="bold">z</text>
    </svg>
  ),

  // 🍜 大胃袋
  "大胃袋": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#FFF8EE" />
      <circle cx="36" cy="38" r="11" fill="#FFCC80" opacity="0.8" />
      <circle cx="84" cy="36" r="9" fill="#A5D6A7" opacity="0.8" />
      <circle cx="60" cy="32" r="13" fill="#FFAB91" opacity="0.8" />
      <circle cx="46" cy="58" r="7" fill="#333" />
      <circle cx="74" cy="58" r="7" fill="#333" />
      <circle cx="48" cy="56" r="2.5" fill="#fff" />
      <circle cx="76" cy="56" r="2.5" fill="#fff" />
      <ellipse cx="60" cy="74" rx="6" ry="4" fill="#FF9800" />
      <path d="M50 82 Q60 90 70 82" stroke="#555" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="74" r="7" fill="#FFEB3B" opacity="0.6" />
      <circle cx="88" cy="72" r="6" fill="#FFCC80" opacity="0.6" />
      <circle cx="60" cy="86" r="6" fill="#FF7043" opacity="0.5" />
    </svg>
  ),

  // 💄 美妆博主
  "美妆博主": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#FFF0F7" />
      <circle cx="60" cy="52" r="18" fill="#F48FB1" />
      <ellipse cx="60" cy="80" rx="20" ry="14" fill="#F48FB1" />
      <rect x="36" y="38" width="22" height="10" rx="5" fill="#FCE4EC" transform="rotate(-15 47 43)" />
      <rect x="62" y="36" width="22" height="10" rx="5" fill="#FCE4EC" transform="rotate(15 73 41)" />
      <circle cx="50" cy="50" r="4" fill="#fff" />
      <circle cx="70" cy="50" r="4" fill="#fff" />
      <circle cx="50" cy="50" r="2" fill="#333" />
      <circle cx="70" cy="50" r="2" fill="#333" />
      <ellipse cx="60" cy="60" rx="4" ry="3" fill="#FF69B4" />
      <path d="M54 66 Q60 70 66 66" stroke="#AD1457" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="44" cy="58" rx="6" ry="4" fill="#FF80AB" opacity="0.5" />
      <ellipse cx="76" cy="58" rx="6" ry="4" fill="#FF80AB" opacity="0.5" />
      <line x1="80" y1="30" x2="86" y2="20" stroke="#FF69B4" strokeWidth="1.5" />
      <rect x="82" y="12" width="10" height="12" rx="2" fill="#FF69B4" />
    </svg>
  ),

  // 🎉 社交炸弹
  "社交炸弹": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#FCE4EC" />
      <circle cx="60" cy="52" r="18" fill="#EC407A" />
      <ellipse cx="60" cy="80" rx="20" ry="14" fill="#EC407A" />
      <rect x="28" y="40" width="22" height="10" rx="5" fill="#F8BBD9" transform="rotate(-20 39 45)" />
      <rect x="70" y="38" width="22" height="10" rx="5" fill="#F8BBD9" transform="rotate(20 81 43)" />
      <circle cx="50" cy="50" r="4" fill="#fff" />
      <circle cx="70" cy="50" r="4" fill="#fff" />
      <circle cx="50" cy="50" r="2" fill="#333" />
      <circle cx="70" cy="50" r="2" fill="#333" />
      <path d="M50 60 Q60 70 70 60" stroke="#880E4F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="34" cy="70" r="7" fill="#FF80AB" opacity="0.5" />
      <circle cx="86" cy="70" r="7" fill="#FF80AB" opacity="0.5" />
      <circle cx="32" cy="68" r="4" fill="#fff" opacity="0.6" />
      <circle cx="88" cy="68" r="4" fill="#fff" opacity="0.6" />
    </svg>
  ),

  // 🧊 炮弹小猫
  "炮弹小猫": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#E0F7FA" />
      <polygon points="24,30 36,54 12,50" fill="#80DEEA" />
      <polygon points="96,30 84,54 108,50" fill="#80DEEA" />
      <circle cx="60" cy="52" r="18" fill="#4FC3F7" />
      <ellipse cx="60" cy="80" rx="18" ry="14" fill="#4FC3F7" />
      <line x1="44" y1="50" x2="52" y2="50" stroke="#0D47A1" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="68" y1="50" x2="76" y2="50" stroke="#0D47A1" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M54 60 L60 63 L66 60" stroke="#0D47A1" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="44" cy="60" rx="5" ry="3" fill="#FF80AB" opacity="0.6" />
      <ellipse cx="76" cy="60" rx="5" ry="3" fill="#FF80AB" opacity="0.6" />
      <circle cx="52" cy="36" r="3" fill="#BBDEFB" opacity="0.7" />
      <circle cx="68" cy="34" r="2" fill="#BBDEFB" opacity="0.7" />
    </svg>
  ),

  // 💕 大象
  "大象": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#FFF0F5" />
      <circle cx="60" cy="54" r="20" fill="#FF80AB" />
      <ellipse cx="60" cy="80" rx="18" ry="14" fill="#FF80AB" />
      <path d="M42 50 Q38 54 42 58" stroke="#AD1457" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M78 50 Q82 54 78 58" stroke="#AD1457" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="52" r="5" fill="#fff" />
      <circle cx="70" cy="52" r="5" fill="#fff" />
      <circle cx="50" cy="52" r="2.5" fill="#AD1457" />
      <circle cx="70" cy="52" r="2.5" fill="#AD1457" />
      <path d="M52 64 Q60 72 68 64" stroke="#880E4F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M44 40 Q40 32 48 36" stroke="#FFCDD2" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M76 40 Q80 32 72 36" stroke="#FFCDD2" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  ),

  // 🎲 酱香老抽
  "酱香老抽": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#EFEBE9" />
      <circle cx="60" cy="54" r="20" fill="#A1887F" />
      <ellipse cx="60" cy="80" rx="18" ry="14" fill="#A1887F" />
      <polygon points="60,24 66,40 60,38 54,40" fill="#795548" />
      <circle cx="50" cy="52" r="5" fill="#fff" />
      <circle cx="70" cy="52" r="5" fill="#fff" />
      <circle cx="50" cy="52" r="3" fill="#3E2723" />
      <circle cx="70" cy="52" r="3" fill="#3E2723" />
      <path d="M50 64 Q56 68 64 64 Q72 68 76 64" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M30 54 Q24 46 30 40" stroke="#BCAAA4" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M90 54 Q96 46 90 40" stroke="#BCAAA4" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="78" y="38" width="14" height="14" rx="3" fill="#8D6E63" transform="rotate(15 85 45)" />
      <circle cx="82" cy="44" r="1.5" fill="#fff" />
      <circle cx="88" cy="44" r="1.5" fill="#fff" />
      <circle cx="85" cy="48" r="1.5" fill="#fff" />
    </svg>
  ),

  // 🏆 比尔盖茨
  "比尔盖茨": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#E3F2FD" />
      <circle cx="60" cy="52" r="18" fill="#1E88E5" />
      <ellipse cx="60" cy="80" rx="18" ry="14" fill="#1E88E5" />
      <rect x="36" y="36" width="48" height="16" rx="4" fill="none" stroke="#1565C0" strokeWidth="2" />
      <line x1="36" y1="44" x2="84" y2="44" stroke="#1565C0" strokeWidth="2" />
      <circle cx="50" cy="52" r="3" fill="#0D47A1" />
      <circle cx="70" cy="52" r="3" fill="#0D47A1" />
      <path d="M52 62 Q60 66 68 62" stroke="#0D47A1" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <polygon points="60,12 63,20 60,19 57,20" fill="#FFD700" />
      <polygon points="60,12 65,22 60,20 55,22" fill="#FFC107" />
      <rect x="74" y="38" width="14" height="18" rx="2" fill="#90CAF9" transform="rotate(5 81 47)" />
      <line x1="76" y1="43" x2="84" y2="43" stroke="#64B5F6" strokeWidth="1.5" />
      <line x1="76" y1="47" x2="84" y2="47" stroke="#64B5F6" strokeWidth="1.5" />
    </svg>
  ),

  // 🎮 段位王
  "段位王": (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="62" r="44" fill="#EDE7F6" />
      <circle cx="60" cy="52" r="18" fill="#7C4DFF" />
      <ellipse cx="60" cy="80" rx="18" ry="14" fill="#7C4DFF" />
      <rect x="36" y="36" width="48" height="16" rx="4" fill="none" stroke="#4527A0" strokeWidth="2" />
      <line x1="36" y1="44" x2="84" y2="44" stroke="#4527A0" strokeWidth="2" />
      <circle cx="50" cy="52" r="3" fill="#1A237E" />
      <circle cx="70" cy="52" r="3" fill="#1A237E" />
      <path d="M52 62 Q60 66 68 62" stroke="#1A237E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M34 36 L38 28 L42 36" fill="#B388FF" />
      <path d="M78 36 L82 28 L86 36" fill="#B388FF" />
      <rect x="44" y="18" width="32" height="14" rx="4" fill="#311B92" transform="rotate(-5 60 25)" />
      <text x="48" y="28" fontSize="8" fill="#FFD700" fontWeight="bold">KING</text>
    </svg>
  ),
};

const sizeMap = {
  sm: 48,
  md: 80,
  lg: 120,
};

export default function PersonalityCharacter({ personalityId, size = 'md' }: Props) {
  const svg = characters[personalityId] || characters["社交炸弹"];
  const px = sizeMap[size];

  return (
    <div style={{ width: px, height: px, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', height: '100%' }}>
        {svg}
      </div>
    </div>
  );
}
