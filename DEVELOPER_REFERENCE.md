# 🚀 Developer Quick Reference

## Start Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## Environment Setup

### Create `.env.local`

```env
# EmailJS Configuration (get from https://emailjs.com)
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Never commit `.env.local`** - it's in .gitignore

---

## Project Structure Quick Guide

```
src/
├── components/          # React components
│   ├── shared/         # Reusable components (header, card, links)
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── ServicesSection.tsx
│
├── contexts/            # Context providers
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
│
├── hooks/              # Custom hooks
│   ├── useScrollThrottle.ts
│   ├── useFormDebounce.ts
│   └── useResponsiveAnimation.ts
│
├── constants/          # Centralized constants
│   ├── animations.ts
│   └── links.ts
│
├── config/             # Configuration
│   └── i18n.ts         # i18n initialization
│
├── translations/       # Language files
│   ├── en.json
│   └── ar.json
│
├── App.tsx            # Main app component
├── index.css          # Global styles
└── main.tsx           # Entry point
```

---

## Key Technologies

| Stack       | Version | Purpose              |
| ----------- | ------- | -------------------- |
| React       | 18.2.0  | UI Framework         |
| TypeScript  | 5.0.2   | Type Safety          |
| Vite        | 4.5.14  | Build Tool           |
| Tailwind    | 3.3.5   | Styling              |
| Framer      | 10.16.4 | Animations           |
| i18next     | 23.7.6  | Internationalization |
| React Icons | 4.11.0  | Icons                |
| EmailJS     | 3.2.0   | Contact Form         |

---

## Common Tasks

### Add New Translation

1. **Add key to translation files:**
   - `src/translations/en.json`
   - `src/translations/ar.json`

2. **Use in component:**

   ```tsx
   import { useTranslation } from "react-i18next";

   export const MyComponent = () => {
     const { t } = useTranslation();
     return <div>{t("my.key")}</div>;
   };
   ```

### Add New Component

1. **Create component file** in `src/components/`
2. **Export from App.tsx**
3. **Add to appropriate Context** if needed

### Add New Animation

1. **Define in** `src/constants/animations.ts`
2. **Use with Framer Motion:**

   ```tsx
   import { animationConfig } from "../constants/animations";

   <motion.div {...animationConfig.fadeIn}>Content</motion.div>;
   ```

### Theme Toggle

Uses **ThemeContext**:

```tsx
const { theme, toggleTheme } = useContext(ThemeContext);
```

### Language Toggle

Uses **LanguageContext**:

```tsx
const { language, setLanguage } = useContext(LanguageContext);
```

---

## Performance Best Practices

✅ **Already Implemented:**

- Lazy loading for heavy sections
- Code splitting with vendors separated
- Custom hooks for event optimization
- Shared components to reduce duplication
- Centralized constants for consistency
- Responsive animations

⚠️ **When Adding New Code:**

- Use shared components when possible
- Extract repeated logic to hooks
- Add constants to animations.ts or links.ts
- Use lazy loading for new heavy sections
- Throttle scroll/resize events
- Debounce form inputs

---

## Build & Deployment

### Local Build

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

1. Update `base` in `vite.config.ts` to `/repository-name/`
2. Enable GitHub Pages in repository settings
3. Select `gh-pages` branch as source

### Environment Variables for CI/CD

Add to GitHub Secrets:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Troubleshooting

| Issue                    | Solution                               |
| ------------------------ | -------------------------------------- |
| Translations not showing | Check i18n.ts is imported in main.tsx  |
| EmailJS not working      | Verify .env.local variables            |
| Build errors             | Run `npm install` then `npm run build` |
| Hot reload not working   | Restart dev server: `npm run dev`      |
| TypeScript errors        | Run `npm run lint` to check            |

---

## Performance Metrics

**Current Build Output:**

- Bundle: 386 KB total
- Main chunk: 37.93 KB (gzip: 12.16 KB)
- Build time: 1.84s
- Modules: 376 transformed

---

## Useful Links

- **Vite Documentation:** https://vitejs.dev
- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **i18next:** https://www.i18next.com

---

**Questions?** Check SETUP.md or SECURITY.md for detailed guides.
