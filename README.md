# When2Meet

A lightweight scheduling poll tool for small groups. Mobile-first, no accounts required.

---

## Poll types

### Availability Grid

The organizer picks a date range (up to 2 weeks) and a time window. Respondents tap cells in a grid to mark themselves **Available ✓**, **Maybe ~**, or leave blank. Results show as a heatmap with the best slot highlighted automatically.

### Specific Options

The organizer proposes up to 8 specific date + time range slots (e.g. "Sat May 16 · 6 PM – 10 PM"). Respondents vote **Available**, **Maybe**, or **Can't** on each one. Results rank the options by score.

---

## Usage

### 1. Create a poll

- Enter an event name and optional description
- Choose a poll type: **Availability Grid** or **Specific Options**
- Set your timezone (auto-detected) and optionally a response deadline and expected headcount
- Hit **Create Poll** → share the link

### 2. Fill out availability

**Grid:** Tap cells to cycle Available → Maybe → blank. Use the **All / None** column shortcuts to fill quickly.

**Options:** Tap **Available**, **Maybe**, or **Can't** for each proposed time slot.

- Enter your name and hit **Submit**
- Results update in real time for everyone with the link

### 3. View results

- Switch to the **Results** tab anytime
- Grid mode: heatmap shows slot popularity; hover or tap a cell to see who's in
- Options mode: ranked list with score bars and name tags per slot
- ⭐ marks the best time automatically

### 4. Add to calendar

- After submitting, tap **Add to Calendar** to download a `.ics` file
- Uses the best slot; works with Apple Calendar, Google Calendar, and Outlook

### 5. Edit a poll

- If you created the poll, an **✏️ Edit Poll** button appears when you reopen it
- Change the name, dates, options, deadline, or headcount and save
- Editing is tied to the device/browser you created the poll on

---

## Stack

- Single `index.html` file — no build step
- [Firebase Firestore](https://firebase.google.com/docs/firestore) for real-time data storage
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) font
- `.ics` calendar files generated client-side

---

## Limits

| Thing | Limit |
|---|---|
| Date range (grid) | Up to 14 days |
| Options (specific) | Up to 8 slots |
| Name length | 40 characters |
| Event name | 80 characters |
