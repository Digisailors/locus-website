const { chromium } = require('playwright');

(async () => {
  console.log('🚀 Launching browser...');
  
  const browser = await chromium.launch({
    headless: false,  // Show browser window
    slowMo: 50       // Slow down actions for visibility
  });
  
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  
  const page = await context.newPage();
  
  console.log('📱 Opening website...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  console.log('✅ Website loaded!');
  console.log(`📄 Page title: ${await page.title()}`);
  console.log(`📊 Page URL: ${page.url()}`);
  
  // Take screenshot
  await page.screenshot({ path: 'website-test.png', fullPage: true });
  console.log('📸 Screenshot saved: website-test.png');
  
  // Check for errors
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  
  // Wait and scroll through sections
  console.log('⏳ Scrolling through page...');
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 2000));
  
  console.log('✅ Test complete!');
  console.log('🛑 Browser will stay open for 30 seconds...');
  
  await page.waitForTimeout(30000); // Keep open for 30 seconds
  await browser.close();
})();