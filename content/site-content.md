# Barn Owl Analytics — Website Content Brief

Nov 12, 2026 · @Jeff Parker

**Domain:** barnowlanalytics.com · **Scope:** full replacement of the old DTC/survey site, as a single long-scroll landing page with anchor nav.&#32;

## 0. Build notes (for Claude Code)

**Positioning in one line:** Barn Owl measures the incremental sales impact of organic influencer content. That is the only thing we do.

**Design direction** (references: haus.io, measured.com, liftlab.com, thisthat.com):

- Big, confident hero: a two-line headline with motion, a one-sentence subhead, two CTAs, and an animated lift chart (spec in Section 1).
- Generous whitespace, one idea per section, short paragraphs, numbers set large.
- Palette: Same as the current page. Keep the barn owl mark and use it sparingly.
- No pricing page, no blog, no logo strip, no proof bar, no headshots for v1.
- All motion respects prefers-reduced-motion. With reduced motion on, show the final state statically.
- Primary CTA everywhere: https://calendar.app.google/kYr7jRbkcKkvQ1DcA
- Remove all old content: Shopify, survey, DTC questions, the old testimonials, and the old logo collage.

**Nav:** Why it's hard · How it works · Compare · Methods · About · Book a call (button)

## 1. Hero

**Headline (two lines, animated):**

> Organic influencer content drives sales. **Now you can prove it.**

**Headline motion:** Line 1 fades and slides up into place (\~600ms). After a \~400ms beat, line 2 reveals left to right with a mask/wipe in the amber accent color, then settles to its final color. Plays once on load.

**Subhead:** Barn Owl measures the true sales lift of organic influencer campaigns, in-store and online. We compare the people who follow your creators against matched people who don't. No promo codes, no pixels, no extra work for your creators.

**CTAs:** Book a call (primary) · See how it works (anchor to #how)

**Animated lift chart (hero visual):**

- Axes: time on the X axis (unlabeled) and Sales on the Y axis. Keep it minimal, with no gridlines or only very faint ones.
- Two lines: "Followers" (yellow) and "Matched control" (blue).
- Sequence, about 4–5s total, starting after the headline lands:
  1. Both lines draw left to right together, moving almost identically with small realistic wiggles.
  2. At \~40% of the width, a dashed vertical marker drops in, labeled "Campaign goes live."
  3. After the marker, the Followers line rises and separates from the control line, which stays flat.
  4. The gap between the lines fills with a soft amber gradient, and the label "Incremental lift" fades in on the gap.
- Plays once and holds the final state. Optional subtle replay on hover.
- Build as inline SVG with stroke-dasharray line drawing, or as a lightweight JS animation. No heavy chart library is needed.

## 2. TL;DR: Why influencer lift is hard to measure, and why it matters  (#why)

**Section headline:** Influencer is a sales channel. It's measured like a popularity contest.

**Intro:** Brands now put a serious share of their budget into creators. Most still report on it with likes, views, and earned media value. Those numbers say people saw the content. They don't say whether anyone bought something they wouldn't have bought anyway. That's the only question finance and leadership cares about.

**Q&A block** (accordion or 2-column cards):

**Why is organic influencer so hard to measure?** Organic content leaves no traceable digital trail. A follower watches a Reel, then buys at the grocery store three days later, or searches the brand on Amazon, or tells a friend. There's no click to track, no cookie to follow, and the purchase happens somewhere the platform can't see.

**Why can't the platforms measure it?** Platform lift studies only work on paid media, because the platform controls who sees a paid ad and who doesn't. Nobody controls who sees an organic post. That's why organic has been the largest unmeasured line item in most marketing budgets.

**What does "incremental" mean?** Incremental sales are the sales that happened because of the campaign. They're the difference between what exposed people bought and what they would have bought without it - this is called the ***c**a**u**s**a**l****** **l**i**f**t****.*&#32;

**Why does it matter now?** Influencer budgets are growing faster than the evidence behind them. When budgets tighten, the channel that can't prove its return gets cut first. Incrementality turns "we think it's working" into a number you can defend to a CFO or CMO.

**What do you need from our creators?** Nothing beyond what they already give your agency, usually post-level reach. We never need creator logins, links, or codes.

**Can you measure a campaign that already ran?** Yes. Studies can be ordered before launch or after a campaign ends, as long as the purchase data covers the window and reliable pre-period.

## 3. The comparison: how other methods fall short  (#compare)

**Section headline:** Every other influencer metric answers a different question.

**Intro:** Most influencer measurement tells you about attention, or about the small slice of buyers who leave a trail. Barn Owl measures incremental sales across everyone your creators reached.

| Method | What it actually measures | Causal (incremental)? | Captures offline sales? | Works for organic? | The catch |
| --- | --- | --- | --- | --- | --- |
| Vanity metrics (views, engagement) | Attention | ✗ | ✗ | ✓ | Reach isn't revenue.&#32; |
| Promo codes | Code redemptions | ✗ | ◐ | ✓ | Codes leak to coupon sites, and they miss everyone who bought without one. |
| Affiliate links / click tracking | Last-click online conversions | ✗ | ✗ | ✓ | Nearly all influenced buyers never click. Retail purchases are invisible. |
| Brand lift surveys | Stated awareness and intent | ✓ | ✗ | ◐ | Measures what people say, not what they buy. |
| Social listening | Mentions and sentiment | ✗ | ✗ | ✓ | Conversation volume isn't purchase behavior. |
| Multi-touch attribution (MTA) | Credit across tracked digital touchpoints | ✗ | ✗ | ✗ | Organic social views aren't touchpoints MTA can see. |
| Platform conversion lift studies | Incremental conversions from ads | ✓ | ◐ | ✗ | Paid media only. The platform has to control the holdout. |
| Geo-holdout lift studies | Incremental conversions from ads | ✓ | ✓ | ✗ | Paid media only. Organic content cannot be geo-targetted. |
| Media mix modeling (MMM) | Channel-level contribution over time | ◐ | ✓ | ◐ | Organic influencer may too small and too bursty to separate out. If it can, MMM measure only the full channel, not specific campaigns or influencers. |
| **Barn Owl follower-based incrementality** | **Incremental sales per household and iROAS** | **✓** | **✓** | **✓** | Needs enough reach to detect lift. We check feasibility up front. |

(✓ = yes, ◐ = partially, ✗ = no)

**Below the table:** It's the one method in this table that is causal, sees offline sales, and works for organic content.

## 4. How it works  (#how)

**Section headline:** A real counterfactual for organic content, in three steps.

**Graphic:** Three horizontal steps connected by arrows, ending in a static version of the hero lift chart.

**Step 1 — Resolve follower identities.** We resolve the identities of your creators' followers into privacy-safe, hashed household profiles. This becomes your exposed group. In parallel, we build a control group: demographically matched people who don't follow any creator in the campaign.

**Step 2 — Match to outcome data.** Both groups are matched to real purchase data. Depending on your category, that means retail and loyalty-card data or your own first-party sales, signup, or deposit data.&#32;

**Step 3 — Compare exposed vs. matched control.** We compare what followers bought during the campaign with what the matched control bought. The difference is your incremental lift. We scale it to your campaign's estimated household reach to get total incremental revenue and incremental ROAS (iROAS).

## 5. What you get + Is it a fit?  (#results)

**Section headline:** Not a dashboard. A decision.

**What's in every study:**

- **Lift %** on your primary KPI: exposed households vs. the matched control
- **iROAS or CPIA**, matched to your KPI: incremental return on ad spend for sales KPIs, or cost per incremental acquisition for order, signup, or deposit KPIs
- **Up to four additional KPIs** when the data is available, such as new buyers, reactivated customers, or high-value segments
- **Test cells** defined around what you want to learn: individual creators, message, campaign, creator tier, and more
- **Statistical confidence on every number**, so you know when a result is real and when it's noise
- **Recommendations** on what to scale, what to cut, and how to set up the next test

**Is your campaign a fit?** Lift detection depends on two things: how many households your creators reached, and how often people buy your product. Higher reach or a faster-moving product makes a smaller lift visible. We run a free feasibility check before every study, so you never pay for a test that can't give an answer.

- Measures in-store sales, online orders, signups and deposits, or any outcome tied to a resolvable identity
- Order before launch or after a campaign ends
- Results about two weeks after the measurement window closes

**Pricing line:** Studies are priced as a fraction of the campaign spend they measure. Book a call for a quote.

## 6. Companion method: time-based counterfactual  (#methods)

**Section headline:** When a follower test isn't possible, we forecast the counterfactual.

**Body:** Some campaigns can't use a follower-based control. The audience may be too small to resolve, every customer may be exposed at once, or the outcome may only exist as a total, like national sales. For these, we build a forecasting model on the pre-campaign period that accounts for trend, seasonality, pricing, promotions, and other marketing spend. We project it forward to estimate what sales would have been without the campaign, then measure the gap between that forecast and what actually happened.

- **Best for:** launches, always-on programs, brands with clean daily or weekly sales data
- **What you get:** incremental lift with a forecast confidence band, plus iROAS
- **Honest limits:** other things happening at the same time, like a competitor's promo or a viral moment, can blur the read. We flag them, and we'll tell you when a follower-based study would give a cleaner answer.

**Visual:** One actual-sales line, plus a dashed forecast line with a shaded confidence band that starts at "Campaign goes live". The area between the actual and forecast lines is labeled "Incremental lift". This can reuse the hero animation pattern.

## 7. About Barn Owl  (#about)

**Section headline:** Influencer measurement is all we do.

**Body:** Barn Owl Analytics is a specialist measurement firm focused on one problem: proving the sales impact of organic influencer marketing. We don't sell media, manage creators, or take a cut of anyone's spend. Our only job is to tell you, as accurately as possible, what your influencer program is actually worth.

Our team brings measurement and data science experience from Haus, Amazon, and Recast, and has built incrementality measurement programs for brands in DTC, CPG, food & beverage, and sportsbooks.

**Why a barn owl:** Barn owls hunt in complete darkness. They don't need to see their prey. Their ears are offset so precisely that they can pinpoint a mouse from sound alone. That's our job: finding the signal you can't see. Organic influencer leaves no clicks and no cookies, but the impact is still there for anyone who knows how to listen.

Visual: royalty-free image of a Barn Owl

## 8. Contact / final CTA  (#contact)

**Headline:** Find out what your influencers are really worth.

**Body:** Tell us about your next campaign, or one that just ended. We'll run a free feasibility check and show you what a study would measure.

**CTAs:** Book a call (calendar link) · info@barnowlanalytics.com

**Footer:** © 2026 Barn Owl Analytics · All rights reserved

## SEO / meta

- **Title:** Barn Owl Analytics | Organic Influencer Incrementality Measurement
- **Meta description:** Measure the true incremental sales lift of organic influencer campaigns, in-store and online. Follower-based matched-control studies, no promo codes, nothing needed from creators.
- **OG image:** final frame of the hero lift chart + owl mark

## Deferred to v2

- Client logo strip (FanDuel and others, pending permission)
- Proof bar stats
- Team headshots
