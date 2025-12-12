# 🌐 Hidden Dependency Risk Tracker (HDRT) — Frontend

HDRT Frontend is a modern, production-grade **Next.js 15** dashboard application built to visualize and interact with the Hidden Dependency Risk Tracker backend.  
It delivers **role-based interfaces**, **real-time analytics**, and **clean UI/UX** for Admins, Managers, and Employees.

The frontend uses enterprise standards such as **React Server Components (RSC)**, **Server Actions**, **shadcn/UI** and a fully modular component architecture designed to scale.

---

## 🎯 Project Purpose

HDRT Frontend transforms backend risk analytics into **interactive dashboards** that help organizations:

- Expose hidden dependency risks  
- Visualize workload & system ownership  
- Improve decision-making through intuitive UI  
- Manage teams, tasks, systems, and users seamlessly  

This frontend is optimized for clarity, stability, and real-time operational awareness.

---

## 🚀 MVP Features

- Full **role-based dashboards** (Admin, Manager, Employee)
- Secure data fetching using Server Components + Server Actions
- Beautiful, responsive UI using **ShadCN + TailwindCSS**
- Centralized API service layer
- Risk visualization with badges, bars, and score mapping
- Enterprise-level module isolation
- Pagination + Filtering + Searching across all modules
- Soft-delete representation across UI

---

## 🛠 Tech Stack

- **Next.js 15** (App Router + RSC)
- **TypeScript** (default)
- **TailwindCSS**
- **ShadCN UI**
- **Lucide Icons**
- **ESLint + Prettier**
- **JWT-secured API calls**

---


This structure ensures:

- Clear domain-driven architecture  
- High reusability  
- Role-based routing clarity  
- Clean separation of UI & service layers  

---

## 🔐 Authentication Flow

HDRT implements:

- Secure login / session handling  
- HttpOnly cookie-based auth  
- Middleware-level role protection  
- Auto-fetch of logged-in user (`/auth/me`)

| Role      | Access Level |
|-----------|--------------|
| **Admin** | Full control over system, tasks, teams, users |
| **Manager** | Manage tasks, teams, and team-level risks |
| **Employee** | View and manage assigned tasks |

---

## 🌐 API Layer (Integrating Backend)

All backend communication is performed through a centralized `services/` layer.

Example:

```ts
export async function getRiskDashboard() {
  const response = await serverFetch.get("/riskAnalysis");
  return response.json();
}
```
## This ensures:

Type-safe requests

Centralized error handling

Zero exposure of secrets to the client

## 🧩 Core UI Components

Shared Components

TablePagination

TableSkeleton loaders

Filters (search, sort, dropdown)

Shared modals & dialog components

Risk badges & risk color helpers

Layout navigation for each role

Admin Modules

Manage Users

Manage Employees

Manage Tasks

Manage Teams

Manage Systems

Risk Dashboard

Manager Modules

My Team

Team Systems

Task Management

Team Risk Dashboard

Employee Module

My Task Overview

## 📊 Risk Visualization

Risk is displayed using:

Color-coded risk badges

Progress indicators

Aggregated score summaries

Dashboard-level analytics

Risk color mapping example:
```ts
export const getRiskColor = (level: RiskLevel) => ({
  LOW: "bg-green-50 border-green-300 text-green-700",
  MEDIUM: "bg-yellow-50 border-yellow-300 text-yellow-700",
  HIGH: "bg-red-50 border-red-300 text-red-700",
}[level]);
```
### 🚦 Soft Deletion Strategy (Frontend)

Soft deletes are visually represented:

Entity	UI Representation
Employee	Faded row + "Deleted" badge
Manager	Soft-deleted indicator
Task	Status = CANCELLED
Team	Status = DELETED
System	Status = DELETED

This ensures UI matches backend logic.

## 📦 Environment Variables

Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1

💻 Running Locally
npm install
npm run dev


Open:

http://localhost:3000

🧱 Production Build
npm run build
npm run start

## 🌱 Future Enhancements

Recharts visual dashboards

Global search

Graph-based system dependency view

Notification center

PDF/CSV report export

Real-time updates via SSE/WebSockets

## 🏁 HDRT Frontend — MVP Completed

A fully modular, scalable, enterprise-ready frontend designed to transform backend analytics into interactive insight.

