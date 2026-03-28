# CRM Technology

## Current State
New project — no existing application files.

## Requested Changes (Diff)

### Add
- Full e-commerce homepage cloning crmtechnology.co.za
- Header with logo, search bar, login/cart icons
- Navigation bar with category links (Laptops, Components, Accessories, Surveillance, Networking, Mega Sale)
- Hero carousel with 3 featured product slides
- Shop by Category grid (8 categories: Gaming Laptops, Monitors, M.2 Cards, Printers, SSD Drives, Laptops, External HDDs, CCTV Kits)
- Easter Deals section with 3 featured deal products
- Tabbed product grid (Featured / Sale / Top Rated)
- Side-by-side promo banners (Wi-Fi Router, Laser Printer, Tool Set, External SSD)
- Top Rated / Most Viewed / Best Seller sidebar product lists
- Deal of the Day banner
- New Arrivals tabbed section (SSDs, Printers, M.2 Cards, Monitors, Laptops, External HDD, Gaming Laptops, CCTV Kits)
- Service icons (Free Pick-up, 15-day returns, 24/7 WhatsApp support)
- Footer with contact info, resource links, newsletter signup

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
- Backend: store product catalog (id, name, price, originalPrice, category, tags like featured/sale/topRated/newArrival, image placeholder)
- Frontend: full homepage layout matching the visual design with all sections
- Product data hardcoded in backend with realistic items from the scraped page
- Cart state managed in frontend (no checkout needed)
- Prices in ZAR format
