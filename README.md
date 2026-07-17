# Joopi AI | AI-Powered Sales Agents

Welcome to the **Joopi AI** frontend repository. This project is a modern, high-performance React web application built for Joopi AI's landing page and product showcase.

## 🚀 Overview

Joopi AI is an AI startup that builds and deploys elite, round-the-clock sales agents to scale your operations effortlessly:
- **"Alex" (Voice Agent)**: Handles outbound and inbound voice calls, handles objections, qualifies leads, and schedules meetings.
- **"Jennifer" (SMS Agent)**: Fast, natural text message interactions to follow up, qualify leads, and secure bookings.
- **Key Capabilities**:
  - **24/7 Lead Response**: Instant follow-up for every lead, anytime.
  - **Objection Handling**: Intelligent and context-aware responses to common sales hesitations.
  - **Meeting Booking**: Automatically books qualified leads directly into your sales reps' calendars.
  - **CRM Integration**: Seamlessly syncs data back to HubSpot, Salesforce, Close, and more.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Tailwind CSS utilized for custom layouts)
- **Icons**: Iconify (`@iconify/react`)

## 📁 Project Structure

The project is modularized for clean architecture and maintainability:

```
src/
├── components/          # Reusable UI blocks and page sections
│   ├── Navigation.tsx   # Header with custom responsive menu & animated mic logo
│   ├── HeroSection.tsx  # Main hero with CTA, features, and 3D AI Core graphic
│   ├── LogoCloud.tsx    # Trusted clients and integrations section
│   ├── UseCases.tsx     # Services grid with custom CSS visuals (Alex & Jennifer)
│   ├── ScrollingFeatures.tsx # Zig-zag layout with custom interactive UI mockups
│   ├── WorkflowSteps.tsx # 3-Phase agent deployment process breakdown
│   ├── Testimonial.tsx  # Client success stories slider
│   ├── FAQAccordion.tsx # Expandable questions section
│   └── Footer.tsx       # Mega footer with watermark & logo
├── pages/
│   └── Home.tsx         # Main page orchestrator
├── types/
│   └── index.ts         # Global TypeScript interfaces
├── App.tsx              # Application layout & Router setup
├── main.tsx             # React DOM entry point
└── index.css            # Custom styling, Tailwind directives, and keyframe animations
```

## 🎨 Design System & Aesthetics

This application relies on a premium, dark-mode design:
- **Bespoke Animations**: Custom CSS-driven 3D transforms, orbital ring paths, custom wave sweeps, and interactive hover states.
- **Micro-interactions**: Subtle hover actions on the logo (spinning ring, pulsing icon), buttons, and card containers.
- **Responsive Layout**: Native CSS styling engineered with Tailwind utility classes for high-performance responsiveness across all screen sizes.

## 🏃‍♂️ Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🚀 Deployment (Netlify)

This project is configured for continuous deployment on Netlify.
A `netlify.toml` file is included in the root directory to handle SPA redirects automatically.

## 📝 License

© 2026 Joopi AI · All rights reserved.
