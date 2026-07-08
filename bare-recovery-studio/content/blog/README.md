---
title: "How to Publish a Blog Post — Author Guide"
subject: "Internal"
date: "2025-06-18"
author: "Team Bare"
---

# Writing a Blog Post for Bare Recovery Studio

This file is a **sample and reference guide**. It does NOT appear on the live website.

To publish a real article, create a new `.md` file in this folder (`content/blog/`) with the structure shown below.

---

## 1. File Naming

Name your file using lowercase letters and hyphens — no spaces, no capitals:

```
cold-plunge-beginners-guide.md       ✅ correct
Red Light Benefits.md                ❌ wrong
```

The filename becomes the URL:
```
cold-plunge-beginners-guide.md  →  /blog/cold-plunge-beginners-guide
```

---

## 2. Required Frontmatter

Every post must start with this exact block (between the `---` dashes):

```yaml
---
title: "Your Article Title Here"
subject: "Cold Therapy"
date: "2025-07-20"
author: "Abhinav"
image: "/images/services/cold-plunge.jpg"
---
```

### Field Reference

| Field | Required | What It Does | Example |
|---|---|---|---|
| `title` | ✅ Yes | The headline shown on the page and listing card | `"5 Reasons to Cold Plunge Daily"` |
| `subject` | ✅ Yes | Category tag shown on the card | `"Cold Therapy"`, `"Recovery Science"`, `"Contrast Therapy"`, `"Red Light Therapy"`, `"Compression"`, `"Sauna"`, `"Philosophy"` |
| `date` | ✅ Yes | Publication date. Format: YYYY-MM-DD | `"2025-07-20"` |
| `author` | ✅ Yes | Author name — must match one of the names below | `"Abhinav"` or `"Team Bare"` |
| `image` | Optional | Cover photo shown in the hero and listing card | `"/images/services/cold-plunge.jpg"` |

### Available Cover Images (no upload needed)

Use any of these in the `image` field:

```
/images/services/cold-plunge.jpg
/images/services/sauna.jpg
/images/services/red-light-therapy.jpg
/images/services/compression-therapy.jpg
/images/services/contrast-therapy.jpg
```

To use a **custom image**, add it to `public/images/blog/` and reference it as `/images/blog/your-filename.jpg`.

---

## 3. Article Body

Write your article using standard Markdown after the closing `---`:

```markdown
---
title: "5 Reasons Every Runner Should Cold Plunge"
subject: "Cold Therapy"
date: "2025-07-20"
author: "Abhinav"
image: "/images/services/cold-plunge.jpg"
---

Your opening paragraph goes here. Write naturally — this becomes the
excerpt preview shown on the blog listing page.

## Section Heading (use ## for major sections)

Content under this section...

### Sub-Heading (use ### for smaller sections)

More detail here.

**Bold text** is written like this.

- Bullet point one
- Bullet point two
- Bullet point three

1. Numbered step one
2. Numbered step two
3. Numbered step three
```

### Markdown Quick Reference

| You Type | Result |
|---|---|
| `## Heading` | Large section heading |
| `### Sub-heading` | Smaller heading |
| `**bold text**` | **Bold text** |
| `- item` | Bullet point |
| `1. item` | Numbered list |

---

## 4. Read Time

Read time is **calculated automatically** from the word count using the `reading-time` library. You do not need to specify it.

---

## 5. Full Example Post

Copy and modify this for a new article:

```markdown
---
title: "The Complete Guide to Contrast Therapy for Beginners"
subject: "Contrast Therapy"
date: "2025-08-01"
author: "Abhinav"
image: "/images/services/contrast-therapy.jpg"
---

Contrast therapy — alternating between a hot sauna and a cold plunge — is the most powerful recovery protocol we offer. If you have never tried it, this guide will prepare you for your first session.

## What Is Contrast Therapy?

Contrast therapy uses the body's response to temperature extremes as a therapeutic tool. Heat causes vasodilation (blood vessels expand). Cold causes vasoconstriction (blood vessels contract). Alternating between the two creates a pumping effect that dramatically accelerates recovery.

## The Science

When you move from heat to cold, your cardiovascular system works to maintain core temperature. This process:

- Flushes metabolic waste products out of muscle tissue
- Drives fresh, oxygenated blood into recovering muscles
- Stimulates the lymphatic system, which has no pump of its own
- Triggers a norepinephrine surge that improves mood and focus

## Your First Session: What to Expect

**Before you arrive:**
- Eat a light meal 1–2 hours beforehand
- Bring a change of clothes and a towel
- Hydrate well

**The protocol:**

1. Sauna — 15 minutes at 70–80°C
2. Cold Plunge — 2–3 minutes at 10–15°C
3. Repeat for 2–3 rounds
4. Always finish with cold

The first transition from heat to cold will feel intense. This is normal. Focus on controlled, slow breathing — the discomfort passes within 30 seconds.

## Pricing at Bare Recovery Studio

- Single session: ₹1,800
- Couple session: ₹2,200

Book via WhatsApp to secure your slot.
```

---

## Need Help?

WhatsApp the team: +91 76708 61496
Email: barerecovery@gmail.com
