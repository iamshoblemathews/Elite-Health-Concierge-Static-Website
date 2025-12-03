#!/bin/bash

# Colors
GOLD="#D4AF37"
DARK="#0a0a0a"
DARK_ACCENT="#121212"

# 1. Appointment (Calendar Grid)
cat > assets/appointment.svg <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$DARK_ACCENT"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="$GOLD" stroke-width="0.5" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)" />
  <circle cx="400" cy="300" r="100" fill="none" stroke="$GOLD" stroke-width="2" opacity="0.2"/>
</svg>
EOF

# 2. Medicine (Cross Pattern)
cat > assets/medicine.svg <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$DARK_ACCENT"/>
  <defs>
    <pattern id="cross" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 20 30 L 40 30 M 30 20 L 30 40" stroke="$GOLD" stroke-width="1" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#cross)" />
  <path d="M 350 300 L 450 300 M 400 250 L 400 350" stroke="$GOLD" stroke-width="4" opacity="0.2"/>
</svg>
EOF

# 3. Nurse (Heartbeat)
cat > assets/nurse.svg <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$DARK_ACCENT"/>
  <path d="M 0 300 Q 200 300 300 300 L 350 200 L 400 400 L 450 300 Q 600 300 800 300" stroke="$GOLD" stroke-width="2" fill="none" opacity="0.15"/>
</svg>
EOF

# 4. Lunch (Circles)
cat > assets/lunch.svg <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$DARK_ACCENT"/>
  <circle cx="400" cy="300" r="150" stroke="$GOLD" stroke-width="1" fill="none" opacity="0.1"/>
  <circle cx="400" cy="300" r="100" stroke="$GOLD" stroke-width="1" fill="none" opacity="0.1"/>
  <circle cx="400" cy="300" r="50" stroke="$GOLD" stroke-width="1" fill="none" opacity="0.1"/>
</svg>
EOF

# 5. Beverages (Waves)
cat > assets/beverages.svg <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$DARK_ACCENT"/>
  <defs>
    <pattern id="wave" width="100" height="40" patternUnits="userSpaceOnUse">
      <path d="M 0 20 Q 25 0 50 20 T 100 20" stroke="$GOLD" stroke-width="1" fill="none" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#wave)" />
</svg>
EOF

# 6. Doctor (Stethoscope Curve)
cat > assets/doctor.svg <<EOF
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="$DARK_ACCENT"/>
  <path d="M 200 100 Q 200 500 400 500 Q 600 500 600 100" stroke="$GOLD" stroke-width="2" fill="none" opacity="0.1"/>
</svg>
EOF
