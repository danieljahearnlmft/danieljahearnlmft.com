# The Tight Engine — 30-Day Kill List
**Goal:** By July 1, everything is solid. One focused hour a day. Built toward the TEDx (Aug–Oct) and a "full-blown organization."

**Prepared:** May 23, 2026

---

## THE ONE-YEAR HORIZON
This time next year: **a second book done.** The 30 days below aren't busywork — they build the engine that makes a second book possible without everything else collapsing while you write. A tight engine runs itself; a loose one eats the hours a book needs. Build the machine now so next year you can disappear into the writing.

The TEDx (Aug–Oct) lands into this engine. The book grows out of it.

---

## THE NORTH STAR

Three consolidations, in priority order:
1. **Everything lands at / flows through `daniel@danieljahearnlmft.com`** (Workspace is now live)
2. **Substack is the single email engine** (kill Kit)
3. **The personal-network activation** — one soft email to your ~1,000 Gmail contacts inviting them to the Substack

Underneath those: small fixes to the site, the app audio re-record, and tying it all into one funnel.

**The posting schedule is the tightening force.** The biweekly Substack article spine is what *pulls* everything else into alignment — every article needs the funnel working, the links right, the inbox monitored. Keep the rhythm and the engine tightens itself. Drop it and things drift loose again.

---

## ✅ ALREADY DONE (May 23)
- **Squarespace: DEAD.** All three website subscriptions cancelled (danieljahearnlmft.com site, peanutbuttersundays, fife-harmonica already expired). Live sites are on Netlify, untouched. Domain kept ($20/yr). *Day 1 task: confirm the site still loads + domain still active — belt-and-suspenders after cancelling.*
- **PDF self-hosted** off Kit's CDN — live at danieljahearnlmft.com/why-your-teen-is-pushing-you-away.pdf
- **Contact-form leak found + fixed** — Netlify notifications were spam-trapped; filter built, sender added to contacts
- **Google Forms leak fixed** — filter built in @gmail for forms-receipts-noreply@google.com

---

## ✅ STATUS UPDATE (May 24)
**~4 days ahead of schedule. Days 2, 3, 4, 8, 9, 10 (in part), and several Day 25 items already complete.**

### Done since May 23 (beyond the original list)

**Site funnel tightened (commits ca54ceb, db4fb44):**
- Substack URL fixed sitewide: `substack.com/@danieljahearnlmft` → `danieljahearnlmft.substack.com` (Footer, Contact, Writing pages)
- All 3 Google Form intake buttons on `/services` replaced with Calendly Free 15-Min Consult
- Kit "Free Parent Guide" CTAs on `/services` and `/the-way-back-home` replaced with direct PDF download (no email gate; Daniel's call: "just give them the guide")
- Footer Kit "Stay in touch" form replaced with Substack subscribe CTA
- Hero subhead rewritten to lead with father/parent + teenagers
- Hero secondary CTA changed from "Learn My Approach" → "Try the Daily Practice" (app button)
- Services grid collapsed from 3 cards to 2 (Individual for Men & Fathers + Parent Support Groups)
- Men's cohort line removed from homepage
- Quiet "Couples and family work also available" link added to homepage services

**Brand voice cleanup (commit 9e8b63b):**
- "One of six" killed sitewide (20 instances across 14 files)
- Replaced with provenance language: "trained directly with Dr. Daniel P. Brown and Dr. David Elliott"
- `/iat-certified-therapist` page reframed from "I am rare" to "what IAT certification requires" — same SEO target, quieter voice
- Hanging parenthetical fixed in homepage credential bar
- Nav "Daily Practice" → "Practice" (cleaner, less generic)
- App section added to homepage (between Services and Book) to surface waybackhome.app properly given 5x traffic

**App (waybackhome.app repo, commit 6612dba):**
- Substack subscribe iframe embedded directly in app, replacing the old redirect form
- Users now subscribe to Substack inline without leaving the app

**Calendly intake (manual, in browser):**
- Fee-acknowledgment screening question added: $300 individual / $400 couples & family
- Gates calls by fee fit; preserves Google-Form-style fee realization without the Google Form

**Substack:**
- Welcome email confirmed saved (Daniel: "did days ago")

**Bios (saved to memory, ready to paste):**
- Instagram, LinkedIn, and Substack bios standardized with shared tagline anchor
- All "one of six" claims removed from Substack bio
- Typos fixed in Substack bio (`certifed` → `certified`, `clincans` → `clinicians`)

**Pathwork page (commits May 19–20):**
- Hero overlay added with "Western / Dharma / Friends" stacked typography on Lubra tree photo
- Body copy edits (benediction added, "What a gift" removed, "Sherab Chamma: All Ma -" preserved)
- Doorway section restructured; "Pathwork Oracle" hyperlinked inline to Amazon
- Contact links visibility boosted + direct mailto added

**Psychology Today cancellation initiated** (May 24, in progress) — saves $360/year once confirmed.

---

## 📅 THIS WEEK (May 25–29)

### Mon May 25 — chill day (optional 10 min)
- [ ] Cmd+Shift+R on danieljahearnlmft.com → verify "one of six" is gone from credential bar
- [ ] Gmail → Settings → Forwarding and POP/IMAP → add `daniel@danieljahearnlmft.com` → verify → enable forwarding
- [ ] Substack → Profile → Edit profile → check contact email; change to daniel@ if still gmail

### Tue May 26 — Substack publish day (Jewel Tree)
- [ ] 7am PT: publish Jewel Tree (draft at `drafts/substack-02-jewel-tree-v3.md`)
- [ ] Mid-morning: IG quote card + LinkedIn cross-post (stagger 30–60 min)
- [ ] Anytime today: re-upload transparent-PNG logo on Substack (fixes dark-mode header weirdness)

### Wed May 27 — Network email kickoff
- [ ] AM: filter Google Contacts (remove ex-clients, vendors, utility companies, customer-service contacts)
- [ ] AM: create 10 labels in Google Contacts (`Net 1` through `Net 10`), assign ~100 contacts to each
- [ ] Afternoon: send BCC Batch 1 = warmest 100 (close friends/family)
- [ ] Send from `danieljahearn@gmail.com`, subject `Hey from Daniel`, body from "Network email draft" section below

### Thu May 28
- [ ] AM: BCC Batch 2
- [ ] Afternoon: BCC Batch 3

### Fri May 29
- [ ] AM: BCC Batch 4
- [ ] Afternoon: BCC Batch 5
- (Batches 6–10 next week)

### Deferred (NOT this week)
- Kit migration emails + Kit closure → mid-June
- Google Forms ownership transfer to daniel@ → Week 3 (fiddly, fresh head only)
- ✅ GSC sitemap for waybackhome.app → DONE May 25 (verified via HTML file; sitemap submitted)
- App audio re-record → when studio booked
- PT cancellation confirmation → check inbox 24 hr after initiating

---

## 🎯 WHAT'S LEFT (priority order, longer view)

1. ✅ **Reply to the 4 spam-trapped humans** — DONE May 24.

2. **(Optional, 5-min safety play)** Fix the Google Form `forms.gle/7izvTY7Yi2TcDiGp6` confirmation message/redirect to serve the new self-hosted PDF (`/why-your-teen-is-pushing-you-away.pdf`) instead of the dead Kit CDN link. All site CTAs are already repointed, so this is just catching stragglers via bookmarks / old emails / old Kit content. Manual in Google Forms.

3. ✅ **Submit waybackhome.app sitemap to Google Search Console** — DONE May 25 (HTML-file verified; sitemap.xml submitted).

4. **Send Kit migration emails** (Version A: PDF folks; Version B: main list); wait 1–2 weeks; close Kit. (Days 11–12 + Day 26.)

5. **daniel@ workspace migration** (Week 3, Days 15–19; fiddly, fresh head). Concrete sub-tasks:
   - [ ] **Gmail auto-forwarding to daniel@.** gmail.com → Settings (gear) → See all settings → Forwarding and POP/IMAP → "Add a forwarding address" → `daniel@danieljahearnlmft.com` → verify → enable "Forward a copy of incoming mail." Result: every reply to old danieljahearn@gmail.com lands in daniel@ inbox automatically. Reply from daniel@ to teach contacts the new address organically.
   - [ ] **Substack account email → daniel@.** Substack → avatar → Settings → Account → change Email to `daniel@danieljahearnlmft.com`. Click verify link in confirmation email.
   - [ ] **Substack reply-to email → daniel@.** Substack → Settings → Publication settings → set Reply-to to `daniel@danieljahearnlmft.com`. Means subscriber replies on your posts land in daniel@.
   - [ ] **Transfer Google Forms ownership to daniel@** (5 forms: Individual Therapy, Family, Couples, Parent Guide, Parent Support Group Enrollment). Test each by sending a fake submission.
   - [ ] **Verify inbox routing.** Send a test through every form + the contact form. Confirm all land in daniel@.
   - [ ] **(Skip for now)** Custom from-domain on Substack — requires paid plan + DNS setup; not worth the time tonight.

6. **Personal network email** (the highest-upside item; Days 22–24):
   - [ ] Filter Google Contacts: remove former clients (clinical ethics), one-off vendors, service providers
   - [ ] Create 10 labels in Google Contacts (`Net 1` through `Net 10`), assign ~100 contacts to each
   - [ ] Send BCC from danieljahearn@gmail.com (the address contacts know), 2–3 batches/day spread Mon–Thu
   - [ ] Subject `Hey from Daniel`; plain text only; plain URLs (not hyperlinked words); no images; no unsubscribe link
   - [ ] Email body lives in this file under "Network email draft" below
   - [ ] Replies will forward to daniel@ via the forwarding rule above; reply from daniel@ to migrate the relationship

7. **Re-record app audio** (final week before TEDx season; needs studio time — Daniel will book).

---

## 📨 Network email draft (paste-ready)

**Subject:** Hey from Daniel

**Body** (plain text, no formatting, plain URLs only):

```
Hey,

It's been a while. Wanted to send a quick personal note.

This year I wrote a book called The Way Back Home: Healing Attachment Wounds With Your Teen. It's out now in paperback, Kindle, and on Audible. The book is the same clinical work I've been doing with families for the last decade, translated for parents.

Alongside it I built a free practice app at waybackhome.app and started a Substack at danieljahearnlmft.substack.com with field notes on attachment, adolescence, and the body.

If any of that sounds useful, I'd love for you to come along on the Substack. If not, no pressure at all; I just wanted to put it on your radar in case the timing's right.

Either way, hope you're well.

Daniel
```

**Send from:** `danieljahearn@gmail.com` (the address contacts already have)
**To:** yourself (`daniel@danieljahearnlmft.com` or `danieljahearn@gmail.com`)
**Bcc:** one Google Contacts label at a time (e.g., `Net 1`, then `Net 2`...)

## ❌ Items that turned out NOT needed (skip)
- **/consulting in top nav** — already accessible under "Work With Me → Organizations & Teams." Standalone would add nav clutter; skip.
- **Cohort waitlist line on /mens-work** — cohort on hold per Daniel; no waitlist active.
- **Substack-gate the free guide** — Daniel chose: give the guide away free, no email capture ("I'm nice"). Trust + generosity over bait-and-switch.

---

## 💰 CASH ON THE TABLE (do first — these are literally money/clients)
These are loose ends where revenue or relationships are sitting unclaimed:
- [ ] **3 spam-trapped contact inquiries** — people who wanted to work with you, got silence. Reply now. (Antioch student especially — fellow clinician, network value.)
- [ ] **Parent Support Group enrollment** (rachaelleelove77@gmail.com, May 19) — someone signed up for a paid group and hasn't heard back.
- [ ] **The guide form serves a dead Kit link** — anyone downloading the free guide right now may get a broken/soon-dead link instead of the funnel into your list. Repoint it. (Every guide download is a potential subscriber/client.)
- [ ] **Consulting page is invisible** (not in nav) — organizations can't find your speaking/consulting offer. This is the TEDx-adjacent revenue lane. Surface it.

---

## THE NORTH STAR (consolidations)

Three consolidations, in priority order:
1. **Everything lands at / flows through `daniel@danieljahearnlmft.com`** (Workspace is now live)
2. **Substack is the single email engine** (kill Kit)
3. **The personal-network activation** — one soft email to your ~1,000 Gmail contacts inviting them to the Substack

---

## FULL OPEN-ITEMS INVENTORY

### danieljahearnlmft.com (site)
- [ ] Footer Substack link is wrong sitewide: `substack.com/@danieljahearnlmft` → should be `danieljahearnlmft.substack.com` (also in the app's text and the PDF — fix everywhere)
- [ ] "Stay in touch" subscribe box on homepage — confirm where it submits; if Kit, repoint to Substack
- [ ] "Free Parent Guide" form (`forms.gle/7izvTY7Yi2TcDiGp6`) still delivers the OLD Kit CDN PDF — repoint to `danieljahearnlmft.com/why-your-teen-is-pushing-you-away.pdf`
- [ ] Consulting/speaking page (`/consulting/`) not in top nav — add it (drives organizational gigs + TEDx-adjacent bookings)
- [ ] Add book as a credential line on the consulting page

### Google Forms (4+ scattered)
- [ ] Individual Therapy, Family, Couples, Parent Guide, + Parent Support Group Enrollment
- [ ] All currently owned by / notifying **@gmail** (filter now protects them)
- [ ] MIGRATION GOAL: transfer ownership (or add as editor + re-toggle notifications) to `daniel@danieljahearnlmft.com`
- [ ] Long-term: consider consolidating into one intake system

### Email / Kit
- [ ] PDF re-host DONE ✅ (live on own domain)
- [ ] Replace site-wide Kit signup forms with Substack embeds
- [ ] Decide fate of the 5 scattered Google Forms (keep/kill each)
- [ ] Migration emails drafted (Version A: PDF folks; Version B: main list) — `kit-migration-email.md`
- [ ] Send migration emails → wait 1–2 weeks → close Kit

### waybackhome.app
- [ ] Re-record the daily meditation/guided audio (voice + quality pass) — content task, own sitting
- [ ] Fix the app's Substack text reference if it uses the wrong URL format
- [ ] Confirm Substack links still live after any redeploy
- [ ] App is otherwise solid: five conditions, R.E.A.L., privacy, reminders, journal all working ✅

### Substack
- [ ] Confirm welcome email saved (free + paid)
- [ ] Submit waybackhome.app sitemap to Search Console as separate property

### NEW — Personal network activation
- [ ] Export ~1,000 Gmail contacts
- [ ] Draft ONE soft, personal "I started a Substack" email
- [ ] Send in small batches (BCC, or a mail-merge tool) — friendly, no-pressure, "join if you'd like"

### Repo housekeeping
- [ ] Habit: `git pull` first thing every session; confirm working directory
- [ ] (Stray 87MB file — confirmed doesn't exist ✅)
- [ ] (Optional) delete duplicate clone at `~/Projects/danieljahearnlmft.com` — fresh-head task, low priority

### Human follow-ups (not system — just people waiting)
- [ ] Reply to 3 contact-form messages that were spam-trapped (Antioch student especially)
- [ ] Reply to Parent Support Group enrollment (rachaelleelove77@gmail.com, May 19)

---

## THE 30-DAY KILL LIST
*One hour a day. Grouped so related work clusters. Rest days built in — skipping is fine, the point is steady not heroic.*

### WEEK 1 — Close the loops already open (May 24–30)
**Day 1 —** Reply to the 3 spam-trapped humans + the parent-group enrollment. (Clears the conscience; these are real people.)
**Day 2 —** Fix the footer Substack URL in the repo (`substack.com/@danieljahearnlmft` → `danieljahearnlmft.substack.com`). One find-and-replace, commit, push. Same fix in the app text.
**Day 3 —** Repoint the "Free Parent Guide" form to the new self-hosted PDF. Update the form's confirmation message/redirect.
**Day 4 —** Confirm Substack welcome email is saved (free + paid). Write it if not.
**Day 5 —** Submit waybackhome.app sitemap to Search Console. (Quick SEO win.)
**Day 6 —** REST / buffer / overflow.
**Day 7 —** Review week. What's still open? Adjust.

### WEEK 2 — The Kit kill (May 31–Jun 6)
**Day 8 —** Replace Kit signup form on homepage ("Stay in touch" box) with Substack embed.
**Day 9 —** Replace Kit forms on remaining pages (contact, services, book, parent-groups, men's-work).
**Day 10 —** Audit the 5 scattered Google Forms — decide keep/kill each. Document.
**Day 11 —** Send Kit migration email Version A (the ~24 PDF folks).
**Day 12 —** Send Kit migration email Version B (main list). Set a 2-week reminder: "close Kit ~Jun 26."
**Day 13 —** REST / buffer.
**Day 14 —** Review week.

### WEEK 3 — The daniel@ migration (Jun 7–13)
*This is the fiddly Workspace consolidation — fresh head only.*
**Day 15 —** Transfer ownership of Individual Therapy form to daniel@ (or add as editor + toggle notifications signed in AS daniel@). Test it.
**Day 16 —** Same for Family & Couples forms.
**Day 17 —** Same for Parent Guide + Parent Support Group forms.
**Day 18 —** Verify ALL form notifications now land at daniel@. Send a test through each. Confirm filters.
**Day 19 —** Move/forward any remaining contact streams to daniel@. Confirm one inbox to rule them all.
**Day 20 —** REST / buffer.
**Day 21 —** Review week. By now: Kit dying, forms consolidated, one inbox.

### WEEK 4 — The network activation + polish (Jun 14–20)
**Day 22 —** Export ~1,000 Gmail contacts to CSV. Clean the obvious junk (old businesses, dead addresses).
**Day 23 —** Draft the ONE soft personal email. (I'll help — voice: warm, "people I've known across different dimensions of life," no pressure.)
**Day 24 —** Send network email in batches (50–100 at a time, BCC, spread over the day or few days).
**Day 25 —** Add /consulting/ to top nav. Add book credential to consulting page.
**Day 26 —** Close Kit (if 2 weeks elapsed since migration emails + opt-ins settled).
**Day 27 —** REST / buffer.
**Day 28 —** Review. Everything functional should now be done.

### WEEK 5 — The content/quality pass (Jun 21–27)
*The engine is tight; now make it shine before TEDx season.*
**Day 29 —** Re-record the app's daily audio (voice/quality pass) — Part 1. Own intentional sitting.
**Day 30 —** Re-record Part 2 + deploy. Final walkthrough of the whole funnel: site → app → Substack → email → all landing at daniel@.

**By July 1:** Kit dead. Forms consolidated to daniel@. Network activated. Site polished. App audio refreshed. One clean engine.

---

## WHAT "TIGHT ENGINE" LOOKS LIKE BY JULY

```
        Personal network (1,000) ──┐
        Instagram / LinkedIn ───────┤
        waybackhome.app ────────────┼──→ SUBSTACK (the engine, the list you own)
        danieljahearnlmft.com ──────┤         │
        The book / Audible ─────────┘         ├──→ Book sales
                                              ├──→ App users
        All inquiries ──→ daniel@ ────────────┼──→ Parent groups
        (one inbox, spam-proofed)             ├──→ 1:1 / family work
                                              └──→ Consulting / speaking (TEDx-fed)
```

Everything flows inward to the Substack list and the daniel@ inbox. Nothing leaks. That's the organization the TEDx talk will land into.

---

## NOTES
- **One hour a day is the cap, not the floor.** Some days are 15 min. The rest days are real — use them.
- **Functional before pretty.** Weeks 1–3 fix what could lose you money/inquiries. Weeks 4–5 are growth + polish.
- **The daniel@ form migration (Week 3) is the fiddliest** — Chrome multi-account confusion. Do it rested, one form at a time, always confirming which account you're actually signed into.
- **The network email is the single highest-upside item** — 1,000 warm personal contacts is a bigger launch list than months of organic Substack growth. Treat Day 23's draft with care.
