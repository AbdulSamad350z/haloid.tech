
// Logo Carousal Container //

const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");


// Logo Carousal Container End//

// Premier Services Scroll Container //

const slider = document.querySelector(".premier-services-cards"); // Tumhara main div

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    slider.scrollLeft = scrollLeft - walk;
});



// Premier Services Scroll Container End //


// Our Pricing Card //

const pricingData = {
  webdesign: {
      onetime: [
          { title: "Startup", 
            discount: "🎄 Christmas Discount", 
            description: "Kickstart your entrepreneurial journey, all at an unbeatable price.", 
            price: "$239",
            perhour:"", 
            buttonText: "Get Started", 
            features: ["7 Unique Pages", "5 Stock Photos", "3 Banner Designs", "1 Slider Banner", "FREE Google Friendly Sitemap", "Complete W3C Certified 48 to 72 hours TAT", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee*", "Mobile Responsive will be Additional $200*", "CMS will be Additional $250*" ], },
          
          { title: "Professional", 
            discount: "🎄 Christmas Discount", 
            description: "All-in-one solution provides the resources you need to achieve your goals.", 
            price: "$499", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "Mobile Responsive", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap", "Complete W3C Certified HTML 48 to 72 hours TAT", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *"], },
          
          { title: "Business", 
            discount: "🎄 Christmas Discount", 
            description: "Established companies looking to enhance performance and growth.", 
            price: "$999", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Upto 15 Unique Pages Website", "Cloudfare CDN integration (Fast Speed)", "Cloudfare SSL and TLS-1.2/1.3", "Mobile Responsive", "Lead Capturing Custom Forms", "Pointer Hover Effects", "Social Media Integration", "SEO optimized content", "On-page SEO configuration", "5 Stock Photos", "3 Unique Banner Design", "1 jQuery Slider Banner", "Complete W3C Certified 48 to 72 hours TAT", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *" ], }
      ],
      hourly: [
          { title: "Basic", 
            discount: "🎄 Christmas Discount", 
            description: "Kickstart your entrepreneurial journey, all at an unbeatable price.", 
            price: "$3",
            perhour:"/per hour", 
            buttonText: "Get Started", 
            features: ["7 Unique Pages", "5 Stock Photos", "3 Banner Designs", "1 Slider Banner", "FREE Google Friendly Sitemap", "Complete W3C Certified 48 to 72 hours TAT", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee*", "Mobile Responsive will be Additional $200*", "CMS will be Additional $250*" ], },
          
          { title: "Professional", 
            discount: "🎄 Christmas Discount", 
            description: "All-in-one solution provides the resources you need to achieve your goals.", 
            price: "$4", 
            perhour:"/per hour",
            buttonText: "Get Started", 
            features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "Mobile Responsive", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap", "Complete W3C Certified HTML 48 to 72 hours TAT", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *"], },
          
          { title: "Business", 
            discount: "🎄 Christmas Discount", 
            description: "Established companies looking to enhance performance and growth.", 
            price: "$6", 
            perhour:"/per hour",
            buttonText: "Get Started", 
            features: ["Upto 15 Unique Pages Website", "Cloudfare CDN integration (Fast Speed)", "Cloudfare SSL and TLS-1.2/1.3", "Mobile Responsive", "Lead Capturing Custom Forms", "Pointer Hover Effects", "Social Media Integration", "SEO optimized content", "On-page SEO configuration", "5 Stock Photos", "3 Unique Banner Design", "1 jQuery Slider Banner", "Complete W3C Certified 48 to 72 hours TAT", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *" ], }
      ]
  },
  ecommerce: {
      onetime: [
          { title: "Basic", 
            discount: "🎄 Christmas Discount", 
            description: "kickstart your entrepreneurial journey, all at an unbeatable price.", 
            price: "$499", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Custom Designed Homepage (1x Concept)", "5 Custom Designed Inner Pages", "Up to 50 Products", "Up to 7 Categories", "Content Management System", "Sales & Inventory Management", "Mini Shopping Cart Integration", "Payment Gateway Integration", "Social Media Integration (Facebook, Twitter, LinkedIn)", "Easy Product Search", "5 Premium Stock Photos", "2 Promotional Banners", "Cross Platform Responsive Compatibility (Desktop and Mobile)", "Cross Browser Compatibility (Chrome, Firefox, Safari, etc.)", "W3C Certified HTML", "Google Friendly Sitemap", "Complete Deployment", "30 Days Free Maintenance (Post-Launch Support)", "Training Manual for CMS", "Dedicated Account Manager", "24/7 Customer Support", "Unlimited Revisions", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"], },
          
          { title: "Professional", 
            discount: "🎄 Christmas Discount", 
            description: "All-in-one solution provides the resources you need to achieve your goals.", 
            price: "$999", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Custom Designed Homepage (3x Concepts)", "15 Custom Designed Inner Pages", "Interactive and Dynamic Website Design", "Up to 500 Products", "Up to 10 Categories", "15 Premium Stock Photos", "8 Promotional Banners", "2 Landing Pages Design", "Customer Login/Signup Area", "Complete Database Creation", "Shipping Merchant Integration", "Content Management System", "Sales & Inventory Management", "Manage Orders (Track Order, Billing History, Order Status, Automated Invoicing)", "Product Offers (Wish-list, Discount Options, Coupon Codes)", "Multiple Product Variations (Color, Size, Quantity, and Other Attributes)", "Intelligent Search System with Filtering Options (Search by Price, Categories, Styles, etc.)", "Product Sorting (Newest, Featured, Popular, Best Seller)", "Product Ratings & Reviews", "Easy Product Search", "Full Shopping Cart Integration", "Payment Module Integration", "Guest Checkout", "Social Media Integration (Facebook, Twitter, LinkedIn)", "SEO Friendly (Meta Tags, Meta Titles, Meta Descriptions, Keywords, W3C Compliant, etc.)", "On-Page SEO Configuration", "Search Engine Indexing (Google, Yahoo, Bing, etc.)", "Cross Platform Responsive Compatibility (Desktop and Mobile)", "Cross Browser Compatibility (Chrome, Firefox, Safari, etc.)", "Email Marketing Campaigns", "Fast Load Time", "Security Plugins", "W3C Certified HTML", "Google Friendly Sitemap", "Google Webmaster Tool", "Complete Deployment", "5 Business Email Addresses", "90 Days Free Maintenance (Post-Launch Support)", "How-To-Use Training Manual for CMS", "Industry Specified Team of Expert Designers and Developers", "Dedicated Account Manager", "24/7 Customer Support", "Unlimited Revisions", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee", "100% Ownership Rights"], },
          
          { title: "Business", 
            discount: "🎄 Christmas Discount", 
            description: "Established companies looking to enhance performance and growth.", 
            price: "$1,299", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Custom designed Homepage (3x concepts)", "20 Custom designed Inner pages", "Interactive and Dynamic Website Design", "Up to 1000 – 1500 Products", "Up to 20 Categories", "25 Premium Stock Photos", "15 Promotional Banners", "2 Landing Pages Design", "Interactive jQuery Slider", "Customer Login/Signup Area", "Complete Database Creation", "Shipping Merchant Integration", "Content Management System", "Sales & Inventory Management", "Manage orders (track order, billing history, order status, automated invoicing)", "Product offers (wish-list, discount options, coupon codes)", "Multiple Product variation (Color, Size, Quantity, and other attributes)", "Intelligent search system with filtering options (search by price, categories, Styles, etc)", "Product sorting (Newest, Featured, Popular, Best Seller)", "Product rating & reviews functionality", "Easy Product Search", "Full Shopping Cart Integration", "Payment Module Integration", "Guest Checkout", "Social Media Integration (Facebook, Twitter, LinkedIn)", "3rd Party API Integration", "SEO friendly (Meta-tags, Meta Titles, Meta Description, Keywords, W3C compliant etc)", "On-page SEO configuration", "Search Engine Indexing (Google, Yahoo, Bing, etc)", "Cross Platform Responsive Compatibility (Desktop and Mobile)", "Cross Browser Compatibility (Chrome, Firefox, Safari, etc.)", "Email Marketing Campaigns", "Fast Load Time", "Security plugins", "W3C Certified HTML", "Google Friendly Sitemap", "Google Analytic Installation", "Google Webmaster Tool", "Complete Deployment", "180 Days Free Maintenance (Post-launch support)", "Training Manual for CMS", "Industry Specified Team of Expert Designers and Developers", "Dedicated Account Manager", "24/7 Customer Support", "Unlimited Revisions", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *", "100% Ownership Rights" ], }
      ],
      hourly: [
          { title: "Basic", 
              discount: "🎄 Christmas Discount", 
              description: "kickstart your entrepreneurial journey, all at an unbeatable price.", 
              price: "$4", 
              perhour:"/per hour",
              buttonText: "Get Started", 
              features: ["Custom Designed Homepage (1x Concept)", "5 Custom Designed Inner Pages", "Up to 50 Products", "Up to 7 Categories", "Content Management System", "Sales & Inventory Management", "Mini Shopping Cart Integration", "Payment Gateway Integration", "Social Media Integration (Facebook, Twitter, LinkedIn)", "Easy Product Search", "5 Premium Stock Photos", "2 Promotional Banners", "Cross Platform Responsive Compatibility (Desktop and Mobile)", "Cross Browser Compatibility (Chrome, Firefox, Safari, etc.)", "W3C Certified HTML", "Google Friendly Sitemap", "Complete Deployment", "30 Days Free Maintenance (Post-Launch Support)", "Training Manual for CMS", "Dedicated Account Manager", "24/7 Customer Support", "Unlimited Revisions", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"], },
            
            { title: "Professional", 
              discount: "🎄 Christmas Discount", 
              description: "All-in-one solution provides the resources you need to achieve your goals.", 
              price: "$6", 
              perhour:"/per hour",
              buttonText: "Get Started", 
              features: ["Custom Designed Homepage (1x Concepts)", "5 Custom Designed Inner Pages", "Up to 50 Products", "Up to 7 Categories", "Content Management System", "Sales & Inventory Management", "Mini Shopping Cart Integration", "Payment Gateway Integration", "Social Media Integration (Facebook, Twitter, LinkedIn)", "Easy Product Search", "5 Premium Stock Photos", "2 Promotional Banners", "Cross Platform Responsive Compatibility (Desktop and Mobile)", "Cross Browser Compatibility (Chrome, Firefox, Safari, etc.)", "W3C Certified HTML", "Google Friendly Sitemap", "Complete Deployment", "30 Days Free Maintenance (Post-Launch Support)", "Training Manual for CMS", "Dedicated Account Manager", "24/7 Customer Support", "Unlimited Revisions", "100% Ownership Rights", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee" ], },
            
            { title: "Business", 
              discount: "🎄 Christmas Discount", 
              description: "Established companies looking to enhance performance and growth.", 
              price: "$8", 
              perhour:"/per hour",
              buttonText: "Get Started", 
              features: ["Custom designed Homepage (3x concepts)", "20 Custom designed Inner pages", "Interactive and Dynamic Website Design", "Up to 1000 – 1500 Products", "Up to 20 Categories", "25 Premium Stock Photos", "15 Promotional Banners", "2 Landing Pages Design", "Interactive jQuery Slider", "Customer Login/Signup Area", "Complete Database Creation", "Shipping Merchant Integration", "Content Management System", "Sales & Inventory Management", "Manage orders (track order, billing history, order status, automated invoicing)", "Product offers (wish-list, discount options, coupon codes)", "Multiple Product variation (Color, Size, Quantity, and other attributes)", "Intelligent search system with filtering options (search by price, categories, Styles, etc)", "Product sorting (Newest, Featured, Popular, Best Seller)", "Product rating & reviews functionality", "Easy Product Search", "Full Shopping Cart Integration", "Payment Module Integration", "Guest Checkout", "Social Media Integration (Facebook, Twitter, LinkedIn)", "3rd Party API Integration", "SEO friendly (Meta-tags, Meta Titles, Meta Description, Keywords, W3C compliant etc)", "On-page SEO configuration", "Search Engine Indexing (Google, Yahoo, Bing, etc)", "Cross Platform Responsive Compatibility (Desktop and Mobile)", "Cross Browser Compatibility (Chrome, Firefox, Safari, etc.)", "Email Marketing Campaigns", "Fast Load Time", "Security plugins", "W3C Certified HTML", "Google Friendly Sitemap", "Google Analytic Installation", "Google Webmaster Tool", "Complete Deployment", "180 Days Free Maintenance (Post-launch support)", "Training Manual for CMS", "Industry Specified Team of Expert Designers and Developers", "Dedicated Account Manager", "24/7 Customer Support", "Unlimited Revisions", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee *", "100% Ownership Rights" ], }
      ]
  },
  seo: {
      onetime: [
          { title: "Startup", 
            discount: "🎄 Christmas Discount", 
            description: "kickstart your entrepreneurial journey, all at an unbeatable price.", 
            price: "$250", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Website Audit", "Pages Optimized (10 pages)", "15 Selected Keywords Targeting", "Keyword Research", "Keyword Grouping", "Keyword Mapping", "On-Page Optimization", "SEO Road Map", "Blog Creation", "Webpage Copywriting (3 pages , 350 words per page )", "Title Tag Optimization (10 titles)", "Meta Description Optimization (10 meta description)", "Meta Keyword Optimization (10 meta keywords )", "Domain Redirect Optimization (10 domain redirects )", "xml Sitemap Optimization", "Robots.txt Check", "URL Rewrites (10 URL rewrites)", "Broken Link Report", "Rich Snippet Recommendations", "Breadcrumbs", "Initial Off-Page SEO", "Social Bookmarking", "Slide Share Marketing", "Forums/FAQ’s", "Link Building", "Directory Submission", "Local Business Listings"], },
          
          { title: "Professional", 
            discount: "🎄 Christmas Discount", 
            description: "All-in-one solution provides the resources you need to achieve your goals.", 
            price: "$600", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Niche Analysis", "Users Analysis", "Competitor Analysis", "35 Selected Keywords Targeting", "15 Pages Keyword Targeted", "Webpage Optimization", "Meta Tags Creation", "Keyword Optimization", "Image Optimization", "Inclusion of anchors", "Tracking & Analysis", "Google Analytics Installation", "Google Webmaster Installation", "Call To Action Plan", "Creation of Sitemaps", "Reporting", "Monthly Reporting", "Recommendation", "Email Support", "Phone Support", "Off Page Optimization", "Social Bookmarking", "Slide Share Marketing", "Forums/FAQ’s", "Link Building", "Directory Submission", "Local Business Listings" ], },
          
          { title: "Business", 
            discount: "🎄 Christmas Discount", 
            description: "Established companies looking to enhance performance and growth.", 
            price: "$999", 
            perhour:"",
            buttonText: "Get Started", 
            features: ["Niche Analysis", "Prior Analysis", "Users Analysis", "Competitor Analysis", "60+ Selected Keywords Targeting", "30 Pages Keyword Targeted", "Webpage Optimization", "Meta Tags Creation", "Keyword Optimization", "Image Optimization", "Inclusion of anchors Tags", "Inclusion of anchors Indexing Modifications", "Tracking & Analysis", "Google Places Inclusions", "Google Analytics Installation", "Google Webmaster Installation", "Call To Action Plan", "Creation of Sitemaps", "Reporting", "Monthly Reporting", "Recommendation", "Email Support", "Phone Support", "Off Page Optimization", "Social Bookmarking", "Slide Share Marketing", "Forums/FAQ’s", "Link Building", "Directory Submission", "Local Business Listings"], }
      ],
      hourly: [
          { title: "Basic", 
              discount: "🎄 Christmas Discount", 
              description: "kickstart your entrepreneurial journey, all at an unbeatable price.", 
              price: "$2", 
              perhour:"/per hour",
              buttonText: "Get Started", 
              features: ["Website Audit", "Pages Optimized (10 pages)", "15 Selected Keywords Targeting", "Keyword Research", "Keyword Grouping", "Keyword Mapping", "On-Page Optimization", "SEO Road Map", "Blog Creation", "Webpage Copywriting (3 pages , 350 words per page )", "Title Tag Optimization (10 titles)", "Meta Description Optimization (10 meta description)", "Meta Keyword Optimization (10 meta keywords )", "Domain Redirect Optimization (10 domain redirects )", "xml Sitemap Optimization", "Robots.txt Check", "URL Rewrites (10 URL rewrites)", "Broken Link Report", "Rich Snippet Recommendations", "Breadcrumbs", "Initial Off-Page SEO", "Social Bookmarking", "Slide Share Marketing", "Forums/FAQ’s", "Link Building", "Directory Submission", "Local Business Listings"], },
            
            { title: "Professional", 
              discount: "🎄 Christmas Discount", 
              description: "All-in-one solution provides the resources you need to achieve your goals.", 
              price: "$3", 
              perhour:"/per hour",
              buttonText: "Get Started", 
              features: ["Niche Analysis", "Users Analysis", "Competitor Analysis", "35 Selected Keywords Targeting", "15 Pages Keyword Targeted", "Webpage Optimization", "Meta Tags Creation", "Keyword Optimization", "Image Optimization", "Inclusion of anchors", "Tracking & Analysis", "Google Analytics Installation", "Google Webmaster Installation", "Call To Action Plan", "Creation of Sitemaps", "Reporting", "Monthly Reporting", "Recommendation", "Email Support", "Phone Support", "Off Page Optimization", "Social Bookmarking", "Slide Share Marketing", "Forums/FAQ’s", "Link Building", "Directory Submission", "Local Business Listings" ], },
            
            { title: "Enterprise", 
              discount: "🎄 Christmas Discount", 
              description: "Established companies looking to enhance performance and growth.", 
              price: "$6", 
              perhour:"/per hour",
              buttonText: "Get Started", 
              features: ["Niche Analysis", "Prior Analysis", "Users Analysis", "Competitor Analysis", "60+ Selected Keywords Targeting", "30 Pages Keyword Targeted", "Webpage Optimization", "Meta Tags Creation", "Keyword Optimization", "Image Optimization", "Inclusion of anchors Tags", "Inclusion of anchors Indexing Modifications", "Tracking & Analysis", "Google Places Inclusions", "Google Analytics Installation", "Google Webmaster Installation", "Call To Action Plan", "Creation of Sitemaps", "Reporting", "Monthly Reporting", "Recommendation", "Email Support", "Phone Support", "Off Page Optimization", "Social Bookmarking", "Slide Share Marketing", "Forums/FAQ’s", "Link Building", "Directory Submission", "Local Business Listings"], }
      ]
  }
};

function renderPricing(category, isHourly) {
const pricingTable = document.getElementById("pricingTable");
pricingTable.innerHTML = "";
const plans = pricingData[category][isHourly ? "hourly" : "onetime"];
plans.forEach(plan => {
  const card = document.createElement("div");
  card.classList.add("pricing-card");
  card.innerHTML = `
      <h3>${plan.title}</h3>
      <div class="discount-box">${plan.discount}</div>
      <p class="description">${plan.description}</p>
      <p class="price">${plan.price}<span class="perhour">${plan.perhour}</span></p>
      <button class="btn">${plan.buttonText}<i class="fas fa-arrow-up-right-from-square"></i></button>
      <ul class="feature-list">
          ${plan.features.map(feature => `<li><i class="fas fa-check"></i>${feature}</li>`).join("")}
      </ul>
  `;
  pricingTable.appendChild(card);
});
}

document.querySelectorAll(".tab-button").forEach(button => {
button.addEventListener("click", function () {
    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    renderPricing(this.dataset.category, document.getElementById("pricingToggle").checked);
});
});

document.getElementById("pricingToggle").addEventListener("change", function () {
const activeCategory = document.querySelector(".tab-button.active").dataset.category;
renderPricing(activeCategory, this.checked);
});

renderPricing("webdesign", false);

// Our Pricing Card End//