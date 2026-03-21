# Churchwin Security Audit Report
**Date:** 2026-03-21
**Target:** churchwintrading.vercel.app

## Executive Summary
This audit was performed in a read-only capacity following the strict security guardrails established for the Churchwin project. The objective was to assess the perimeter, dependency stack, and infrastructure configuration for security risks and optimization opportunities.

---

## 🛡 1. Perimeter Audit (Header Analysis)
Direct inspection of `https://churchwintrading.vercel.app/deck` revealed the following:

### ✅ Active Protections
- **Strict-Transport-Security (HSTS):** Correctly enforced (`max-age=31536000`).
- **X-Frame-Options (DENY):** Prevents clickjacking.
- **X-Content-Type-Options (nosniff):** Prevents MIME type sniffing.
- **Referrer-Policy:** Set to `strict-origin-when-cross-origin`.
- **Permissions-Policy:** Robustly restricted for camera, microphone, and geolocation.

### ⚠️ Critical Findings
- **Missing Content-Security-Policy (CSP):** Although defined in `vercel.json` (lines 54-56), the CSP header is **NOT being emitted** in the live production response. 
  - **Risk:** Increased susceptibility to XSS and unauthorized script injection.
  - **Action:** Verify Project Settings in the Vercel Dashboard to ensure "Security Headers" are not being overridden or filtered.

---

## 📦 2. Dependency Audit (Supply Chain)
Execution of `npm audit` identified **4 HIGH severity vulnerabilities** within the `next` package (version 14.2.35):

1. **GHSA-9g9p-9gw9-jx7f:** Denial of Service (DoS) via Image Optimizer `remotePatterns`.
2. **GHSA-h25m-26qc-wcjf:** DoS via insecure React Server Components (RSC) deserialization.
3. **GHSA-ggv3-7p47-pfv8:** HTTP Request Smuggling in rewrites.
4. **GHSA-3x4c-7xq6-9pq8:** Unbounded `next/image` disk cache growth (potential storage exhaustion).

### Recommendation
- **Immediate Update:** Upgrade `next` to version **15.x.x** or the latest stable patch. Note that this may involve breaking changes requiring manual verification.

---

## ☁️ 3. Infrastructure Audit (Vercel Recommendations)
Analysis of the Vercel dashboard for the `churchwintrading` project highlighted **4 primary recommendations**:

1. **Build Multiple Deployments Simultaneously:** Enabling concurrency to prevent build queueing.
2. **Get Builds up to 40% Faster:** Optimization suggestion to switch to a higher-compute build machine.
3. **Prevent Frontend-Backend Mismatches:** Recommendation to enable Skew Protection to ensure client/server version alignment during deployments.
4. **Find a Custom Domain:** Suggestion to move from `.vercel.app` to a production-grade custom domain.

---

## 📋 4. Compliance with Security Guardrails
- **Read-Only:** No code was modified or pushed during this audit.
- **Secrets:** No environment variables or keys were output or summarized.
- **Human-in-the-Loop:** All recommended fixes (package updates, header changes) require explicit user approval before execution.

---
*End of Audit Report*
