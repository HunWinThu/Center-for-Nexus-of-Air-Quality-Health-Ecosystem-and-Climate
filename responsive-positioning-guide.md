# Mobile Responsive Positioning Guide

## Current AIT:Energy Box Position
```css
right-28 sm:right-36 lg:right-40
```

## Common Positioning Options (from far-right to close-center)

### Far Right (more distance from circles)
```css
right-36 sm:right-44 lg:right-48  /* 144px, 176px, 192px */
right-32 sm:right-40 lg:right-44  /* 128px, 160px, 176px */
```

### Current Position
```css
right-28 sm:right-36 lg:right-40  /* 112px, 144px, 160px */
```

### Closer to Center (less distance from circles)
```css
right-24 sm:right-32 lg:right-36  /* 96px, 128px, 144px */
right-20 sm:right-28 lg:right-32  /* 80px, 112px, 128px */
right-16 sm:right-24 lg:right-28  /* 64px, 96px, 112px */
```

## Rules for Consistent Mobile Responsiveness

1. **Always maintain proportional gaps**
   - Mobile → Small: usually +8px to +16px difference
   - Small → Large: usually +4px to +8px difference

2. **Test pattern**: Adjust all three values by the same increment
   - Move left: subtract 4 from each (right-28 → right-24)
   - Move right: add 4 to each (right-28 → right-32)

3. **Screen size priorities**
   - Start with mobile (first value) - most critical
   - Adjust small screens for tablets
   - Fine-tune large screens for desktop

## Quick Adjustment Commands
```css
/* Move significantly left */
right-20 sm:right-28 lg:right-32

/* Move slightly left */  
right-24 sm:right-32 lg:right-36

/* Current position */
right-28 sm:right-36 lg:right-40

/* Move slightly right */
right-32 sm:right-40 lg:right-44

/* Move significantly right */
right-36 sm:right-44 lg:right-48
```