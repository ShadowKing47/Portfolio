# Chatter Project Images - Setup Instructions

## Required Images for Chatter Project Card

You need to add the following images to make the Chatter project card display properly:

### 1. Thumbnail Image (Required)
**File:** `chatter-thumb.jpg`
**Location:** `assets/images/chatter-thumb.jpg`
**Specifications:**
- Format: JPG (optimized)
- Dimensions: 600×400 pixels
- File size: < 150KB
- Purpose: Fast-loading thumbnail with lazy loading

### 2. Full Resolution Image (Optional)
**File:** `chatter.png`
**Location:** `assets/images/chatter.png`
**Specifications:**
- Format: PNG
- Dimensions: 1920×1080 pixels
- File size: < 500KB
- Purpose: High-quality image when clicked (lazy loaded)

### 3. Retina Image (Optional)
**File:** `chatter@2x.png`
**Location:** `assets/images/chatter@2x.png`
**Specifications:**
- Format: PNG
- Dimensions: 3840×2160 pixels (2x)
- File size: < 1MB
- Purpose: Crisp display on retina/high-DPI screens

## What to Capture for Your Screenshots

Choose one of these options:

### Option 1: Interface Screenshot
- Screenshot of the Chatter messaging interface
- Show the chat window, wallet connection, message history
- Use developer tools to create a clean mockup if needed

### Option 2: Network Visualization
- Create a diagram showing the on-chain architecture
- Illustrate: Smart Contract → Events → Indexer → Frontend
- Use tools like Excalidraw, Figma, or draw.io

### Option 3: Code + Demo Combo
- Split screen: Code on left, running app on right
- Highlight key Solidity functions or EIP-4337 integration
- Shows both technical depth and working product

### Option 4: Use Placeholder Graphics
- Create a placeholder with project name and tech stack
- Use Canva or Figma templates
- Background: blockchain-themed gradient or network pattern
- Text: "Chatter — On-Chain Messaging DApp"

## Quick Steps

1. **Create your images** using one of the options above
2. **Optimize them:**
   - Use [TinyPNG](https://tinypng.com) to compress
   - Ensure dimensions match specifications
3. **Rename them:**
   - Main thumbnail: `chatter-thumb.jpg`
   - (Optional) Full: `chatter.png`
   - (Optional) Retina: `chatter@2x.png`
4. **Delete the `.placeholder` files** in `assets/images/`
5. **Add your actual images** to `assets/images/`

## Current Status

✅ HTML structure added  
✅ CSS styling configured  
✅ SEO metadata (JSON-LD) added  
✅ Lazy loading enabled  
✅ Accessibility (alt text, aria-labels) implemented  
⏳ **Waiting for images** - Add your images to complete the project card!

## Temporary Workaround

Until you add images, you can:
- Use any existing project image as a placeholder
- Rename one of your current images to `chatter-thumb.jpg`
- The card will still display with proper layout and hover effects

---

**Need help?** Check the main `assets/images/README.md` for image resources and tools.
