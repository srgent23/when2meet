# WhenFree

A lightweight scheduling poll tool for small friend groups. Think Doodle or WhenToMeet, but stripped down, mobile-first, and built to live in a group chat.

**No accounts. No backend. No database.** Everything runs client-side — the entire poll (config + all responses) travels in a single shareable URL.

---

## Usage

Open `index.html` in any browser. No build step, no server required.

### 1. Create a poll (organizer)

- Enter an event name and optional description
- Pick a date range on the calendar (up to 2 weeks)
- Set a time range and timezone (auto-detected from your browser)
- Optionally add a response deadline and expected headcount
- Hit **Create Poll** → copy the link → drop it in the group chat

### 2. Fill out availability (respondents)

- Open the link; enter your name
- Tap grid cells to cycle: **Available ✓** → **Maybe ~** → *(blank)*
- Use the **All / None** buttons at the top of each column to fill a whole day at once
- Hit **Submit** → the URL updates with your response included → copy and reshare

### 3. View results

- Switch to the **Results** tab anytime
- Heatmap grid shows slot popularity (darker green = more people free)
- ⭐ marks the single best time slot automatically
- Hover or tap a cell to see exactly who is available / maybe

### 4. Add to calendar

- After submitting, tap **Add to Calendar** to download a `.ics` file
- Uses the best slot if one is determined, otherwise uses a placeholder time
- Works with Apple Calendar, Google Calendar, and Outlook

---

## How state works

All data lives in the URL hash as a base64-encoded JSON blob:

```
https://yoursite.com/index.html#<base64>
```

The blob contains:
- Poll config (name, dates, time range, timezone, deadline)
- All responses as compact digit strings (`0` = none, `1` = available, `2` = maybe)

When someone submits, their response is added to the blob and the URL updates. Sharing the new URL propagates everyone's responses to the next person. No server involved at any point.

`localStorage` is used only to remember your name for a given poll so your slots pre-fill if you open the link again.

---

## Features

- Single HTML file, works offline after first load
- Mobile-first grid with large tap targets and horizontal scroll
- Per-column Select All / Clear All shortcuts
- Live count badges on each cell (how many others picked it)
- Edit your own response — just resubmit with the same name
- Floating **Copy Link** button always visible for easy resharing
- Dark theme, [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) font
- `.ics` generated entirely client-side using the iCalendar spec

---

## Constraints & limits

| Thing | Limit |
|---|---|
| Date range | Up to 14 days |
| Time range | Any start/end hour (same day) |
| Respondents | No hard limit; URL grows ~85 chars per person |
| Name length | 40 characters |
| Event name | 80 characters |

URL length stays manageable: a 14-day poll × 6-hour window × 10 people encodes to roughly 1,500–1,800 characters total.

---

## No-backend tradeoff

Because responses accumulate in the URL, **each person needs to reshare the updated link after submitting** so others get their response. The flow is:

1. Organizer shares link → Person A fills out → reshares updated link → Person B fills out → reshares → etc.

This is intentional — it keeps the tool completely serverless while still letting everyone see the combined results.
