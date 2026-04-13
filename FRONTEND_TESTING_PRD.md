# Frontend Testing PRD — भडगाव E-NagarPalika Citizens Portal
**Version:** 1.0  
**Date:** 2026-04-13  
**Project:** Bhadgaon Nagar Palika Digital Services — Next.js App  
**Test Type:** Frontend (Browser Automation)  
**Local Port:** 3000

---

## 1. Project Overview

The Bhadgaon municipal portal is a mobile-first Next.js 16 application that allows citizens to:
- Access government services digitally (property tax, water bill, certificates)
- Lodge and track civic complaints
- Receive notifications and government alerts
- View application statuses on a central dashboard
- Authenticate via OTP (mobile number + 4-digit OTP)

The app uses mocked data for all backend interactions. Navigation is driven by a persistent `BottomNav` component present on all post-login pages.

---

## 2. Pages & Routing Map

| Route              | Page                     | Description                                              |
|--------------------|--------------------------|----------------------------------------------------------|
| `/`                | Splash / Landing         | Animated splash screen with "प्रवेश करा" CTA button      |
| `/login`           | OTP Login                | Mobile number input → OTP verification → redirect to dashboard |
| `/dashboard`       | Home Dashboard           | Quick services tray, notices, application status, help CTA |
| `/property-tax`    | Property Tax Payment     | 3-step flow: search → details → payment success          |
| `/complaints`      | Complaint Registration   | New complaint form + "My Complaints" tab view            |
| `/notifications`   | Notifications            | List of alerts, success, and informational notices       |
| `/services`        | All Services             | Full services directory                                  |
| `/profile`         | Citizen Profile          | User profile page                                        |

---

## 3. Top 5 Critical Frontend Test Cases

The following are the **5 highest-priority** end-to-end frontend tests for this application.

---

### TEST-01: Splash Screen → Login Page Navigation
**Priority:** P0 — Critical  
**Objective:** Verify that the animated splash screen loads correctly and navigating to the login page works.

**Preconditions:** App is running at `http://localhost:3000`.

**Steps:**
1. Open `http://localhost:3000`
2. Wait for the splash animation to complete (approx. 1.5s)
3. Verify that the heading "भडगाव नगरपरिषद सेवा" is visible
4. Verify the "प्रवेश करा" CTA button appears
5. Click the "प्रवेश करा" button
6. Verify user is redirected to `/login`
7. Verify the login card with "स्वागत आहे" heading is visible

**Expected Result:** User successfully navigates from the splash screen to the login page without errors.

---

### TEST-02: OTP Login Flow — Mobile Number + OTP Verification
**Priority:** P0 — Critical  
**Objective:** Verify the complete login authentication flow using mobile number and OTP.

**Preconditions:** User is on `/login`.

**Steps:**
1. Verify the mobile number input field (`#mobile-input`) is present
2. Verify "OTP पाठवा" button (`#send-otp-btn`) is disabled when input is empty
3. Enter a 10-digit mobile number (e.g., `9876543210`)
4. Verify the send-OTP button becomes enabled (opacity: 1)
5. Click the "OTP पाठवा" button
6. Verify OTP input fields appear (4 boxes, `#otp-0` through `#otp-3`)
7. Enter `1` in each OTP field
8. Click the "सत्यापित करा" button (`#verify-otp-btn`)
9. Verify loading spinner appears
10. Verify redirect to `/dashboard` within 2 seconds

**Expected Result:** Complete login flow works end-to-end; user lands on dashboard post-OTP verification.

---

### TEST-03: Dashboard — Service Card Navigation to Property Tax
**Priority:** P1 — High  
**Objective:** Verify the dashboard loads all key components and service card navigation works.

**Preconditions:** User is on `/dashboard`.

**Steps:**
1. Verify the header shows "भडगाव नगरपरिषद" title
2. Verify the "त्वरित सेवा" section is visible with 4 service cards
3. Verify "मालमत्ता कर" card is present
4. Click the "मालमत्ता कर" service card
5. Verify user is redirected to `/property-tax`
6. Verify the property search form is displayed with a property ID input
7. Verify "शोध घ्या" button is disabled when input is empty
8. Navigate back to dashboard
9. Verify "तक्रार नोंदणी" card is present and click it
10. Verify user is redirected to `/complaints`

**Expected Result:** All quick service cards are visible and navigate to the correct routes.

---

### TEST-04: Complaint Registration — Submit New Complaint Form
**Priority:** P1 — High  
**Objective:** Verify that a citizen can successfully submit a new civic complaint and view existing complaints.

**Preconditions:** User is on `/complaints`.

**Steps:**
1. Verify "नागरी समस्या" heading is visible
2. Verify the "नवीन तक्रार" tab is active by default
3. Verify complaint form has: category dropdown, description textarea, location input
4. Select "रस्ते आणि खड्डे" from the category dropdown
5. Enter "वॉर्ड ४ मध्ये मुख्य रस्त्यावर मोठे खड्डे आहेत" in the description textarea
6. Enter "वॉर्ड क्र. ४, शिवाजी नगर" in the location input
7. Click "तक्रार नोंदवा" button
8. Verify loading state shows "नोंदवत आहे..."
9. Verify success card with "तक्रार नोंदवली!" message appears
10. Verify automatic tab switch to "माझ्या तक्रारी" showing complaint history

**Expected Result:** Complaint form submission works correctly with proper loading and success feedback states.

---

### TEST-05: Bottom Navigation — Tab Switching Across All Pages
**Priority:** P1 — High  
**Objective:** Verify that the BottomNav component renders correctly on all authenticated pages and tab switching works.

**Preconditions:** User is logged in and on `/dashboard`.

**Steps:**
1. Verify BottomNav component is visible at the bottom of the dashboard
2. Verify all 4 nav tabs are present (Home/घर, Services/सेवा, Complaints/तक्रारी, Profile/प्रोफाइल or Notifications/सूचना)
3. Click the Notifications tab in the bottom nav
4. Verify navigation to `/notifications`
5. Verify 3 notification cards are displayed (alert, success, info types)
6. Verify unread notification has blue dot indicator
7. Click the Complaints tab
8. Verify navigation to `/complaints`
9. Click the "माझ्या तक्रारी" tab
10. Verify the 2 mock complaints (C-1092, C-0845) are listed with correct statuses

**Expected Result:** BottomNav persists and functions correctly across all authenticated pages, enabling seamless tab switching.

---

## 4. Non-Functional Requirements

| Requirement         | Expectation                                              |
|---------------------|----------------------------------------------------------|
| Responsiveness      | App renders correctly in mobile viewport (390×844)       |
| Load time           | Each page should be interactive within 3 seconds         |
| Animation           | Splash and login animations should complete without glitches |
| Marathi Text        | All Devanagari text must render correctly                |
| No console errors   | No critical JavaScript errors in the browser console      |

---

## 5. Test Environment

| Parameter     | Value                                      |
|---------------|--------------------------------------------|
| Framework     | Next.js 16 (React 19)                      |
| Dev Server    | `npm run dev` at `http://localhost:3000`   |
| Device Type   | Mobile (390×844 viewport)                  |
| Test Tool     | TestSprite                                 |
| Language      | JavaScript / React                         |
| Auth Type     | Mocked OTP (any 10-digit number + any 4-digit OTP) |

---

## 6. Out of Scope

- Backend API integration (all data is mocked)
- Payment gateway real transactions
- SMS OTP delivery (hardcoded flow)
- Profile page detailed editing
- Services directory (`/services`) navigation deep-dive
