# 🚀 Personal Portfolio Website

A modern, fully responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features smooth animations, mobile-friendly design, and Google Sheets integration for contact form submissions.

## ✨ Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Hover effects, transitions, and scroll animations
- **Mobile Menu** - Slide-in navigation for mobile devices
- **Tabbed Content** - Interactive tabs for Skills, Experience, and Education
- **Portfolio Gallery** - Image grid with hover zoom and overlay effects
- **Contact Form** - Integrated with Google Sheets for form submissions
- **Downloadable Resume** - One-click CV download
- **Social Media Links** - Quick access to your professional profiles

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── assets/
    ├── images/         # Your images go here
    │   ├── background.jpg    # Hero background (recommended: 1920x1080)
    │   ├── profile.jpg       # Your profile photo (recommended: 500x600)
    │   ├── work1.jpg         # Project screenshot 1 (recommended: 600x400)
    │   ├── work2.jpg         # Project screenshot 2
    │   └── work3.jpg         # Project screenshot 3
    ├── icons/          # Custom icons (optional)
    └── resume/         # Your resume PDF
        └── resume.pdf
```

## 🎨 Customization Guide

### 1. Update Your Personal Information

Open `index.html` and look for comments marked with `🔧 CHANGE THIS:`

**Update these sections:**
- Line 8: Page title
- Line 23: Your name/logo
- Line 42-43: Your job title and name
- Line 61: Profile photo path
- Line 71-77: Your bio (2-3 paragraphs)
- Lines 165-175: Your work experience
- Lines 180-184: Your education
- Lines 284-286: Your email and phone
- Lines 291-293: Your social media links
- Line 298: Resume file path
- Line 327: Footer name

**Skills are already populated** based on your tech stack:
- Languages: Python, JavaScript, TypeScript, Solidity, C++, SQL, Markdown, PowerShell
- Frameworks: React, Next.js, Node.js, Django, FastAPI, Streamlit, TailwindCSS
- AI/ML: PyTorch, TensorFlow, Keras, scikit-learn, and more
- Blockchain: Web3.js, Ethers.js, Hardhat, Foundry, Anvil
- Databases: MySQL, PostgreSQL
- Tools: Git, Docker, Redis, Selenium, and more

### 2. Customize Your Projects

In `index.html`, find the Portfolio section (around line 215):

**For each project, update:**
- Image path (`src="assets/images/work1.jpg"`)
- Project title (`<h3>`)
- Project description (`<p>`)
- Project link (`<a href="#">` - replace # with your project URL)

### 3. Add Your Images

Place your images in the `assets/images/` folder:

| File Name | Recommended Size | Description |
|-----------|------------------|-------------|
| `background.jpg` | 1920x1080 | Hero section background |
| `profile.jpg` | 500x600 | Your profile photo |
| `work1.jpg` | 600x400 | Project screenshot 1 |
| `work2.jpg` | 600x400 | Project screenshot 2 |
| `work3.jpg` | 600x400 | Project screenshot 3 |

**Image Tips:**
- Use high-quality images (but optimized for web)
- You can use placeholder images from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)
- Compress images using [TinyPNG](https://tinypng.com) before uploading

### 4. Add Your Resume

1. Save your resume as `resume.pdf`
2. Place it in `assets/resume/resume.pdf`
3. The download button will automatically work

### 5. Customize Colors

Open `style.css` and modify the CSS variables at the top (line 11-17):

```css
:root {
    --primary-color: #ff004f;        /* Main accent color (pink by default) */
    --secondary-color: #080808;      /* Dark background */
    --text-color: #fff;              /* White text */
    --text-secondary: #ababab;       /* Gray text */
    --bg-color: #080808;             /* Main background */
    --bg-secondary: #262626;         /* Secondary background */
}
```

**Popular Color Schemes:**
- **Blue Theme:** `--primary-color: #0066ff;`
- **Purple Theme:** `--primary-color: #8b5cf6;`
- **Green Theme:** `--primary-color: #10b981;`
- **Orange Theme:** `--primary-color: #f97316;`
- **Teal Theme:** `--primary-color: #14b8a6;`

## 📮 Setting Up Google Sheets Contact Form

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form" (or anything you like)
4. Add headers in the first row: `Date | Name | Email | Message`

### Step 2: Create Google Apps Script

1. In your spreadsheet, click **Extensions → Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;
    
    sheet.appendRow([
        new Date(),
        data.Name,
        data.Email,
        data.Message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
        "result": "success"
    })).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (💾 icon)

### Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ and select **Web app**
3. Configure:
   - **Description:** Portfolio Contact Form
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/...`)

### Step 4: Update Your Website

1. Open `script.js`
2. Find line 51: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace with your actual Web App URL:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL_HERE';
   ```
4. Save the file

### Testing the Form

1. Open your website
2. Go to the Contact section
3. Fill out and submit the form
4. Check your Google Sheet - a new row should appear!
5. You should see "Message sent successfully!" on the website

## 🌐 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)

#### Using Vercel Dashboard:

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **Add New → Project**
3. Import your GitHub repository (or upload folder)
4. Click **Deploy**
5. Your site will be live at `https://your-project.vercel.app`

#### Using Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to your project folder
cd c:\Users\91995\OneDrive\Desktop\Portfolio

# Deploy
vercel

# Follow the prompts and your site will be deployed!
```

### Option 2: Deploy to Netlify

#### Using Netlify Dashboard:

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **Add new site → Deploy manually**
3. Drag and drop your Portfolio folder
4. Your site will be live at `https://your-site.netlify.app`

#### Using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your project
cd c:\Users\91995\OneDrive\Desktop\Portfolio

# Deploy
netlify deploy --prod

# Follow the prompts
```

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository **Settings → Pages**
4. Select source: **main branch**
5. Your site will be live at `https://yourusername.github.io/portfolio`

## 🛠️ Local Development

To test locally, you can use:

### Option 1: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → Open with Live Server

### Option 2: Python HTTP Server
```bash
cd c:\Users\91995\OneDrive\Desktop\Portfolio
python -m http.server 8000
# Open http://localhost:8000
```

### Option 3: Node.js HTTP Server
```bash
npx http-server
# Open http://localhost:8080
```

## 📝 Quick Checklist Before Going Live

- [ ] Replace all placeholder text with your information
- [ ] Add all your images to `assets/images/`
- [ ] Add your resume PDF to `assets/resume/`
- [ ] Update social media links
- [ ] Set up Google Sheets integration
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Customize color scheme (optional)
- [ ] Check all links work
- [ ] Test resume download button
- [ ] Review and fix any typos

## 🎯 Performance Tips

1. **Optimize Images:**
   - Use [TinyPNG](https://tinypng.com) to compress images
   - Convert to WebP format for better compression
   - Aim for images under 500KB each

2. **Add Loading Animation:**
   - Uncomment the typing animation in `script.js` (line 166)

3. **Enable Caching:**
   - When deploying, enable browser caching for static assets

## 🐛 Troubleshooting

**Contact form not working?**
- Check that you copied the correct Google Apps Script URL
- Make sure the script is deployed with "Anyone" access
- Check browser console for errors (F12)

**Images not showing?**
- Verify file paths are correct
- Check that images are in the right folder
- Make sure image names match exactly (case-sensitive)

**Mobile menu not working?**
- Clear browser cache
- Check that `script.js` is properly linked in HTML

**Site not responsive?**
- Test in Chrome DevTools device mode (F12 → Toggle device toolbar)
- Check for CSS syntax errors

## 📚 Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling & Animations
- **JavaScript (Vanilla)** - Interactivity
- **Font Awesome** - Icons
- **Google Apps Script** - Form submissions

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your portfolio!

## 🤝 Need Help?

If you run into issues:
1. Check the comments in the code (marked with 🔧)
2. Review the troubleshooting section above
3. Test in browser console (F12) for JavaScript errors
4. Ensure all file paths are correct

---

**Made with ❤️ for your success!**

Good luck with your portfolio! 🚀
