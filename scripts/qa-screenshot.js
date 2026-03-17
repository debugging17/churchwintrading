#!/usr/bin/env node
/**
 * qa-screenshot.js — Visual QA for Churchwin Pitch Deck
 * Part of the web-pitch-deck skill scripts/
 *
 * Usage:
 *   node scripts/qa-screenshot.js [--url http://localhost:3000]
 *
 * Outputs screenshots for each slide at 3 viewport sizes:
 *   - 1920x1080 (Full HD / external monitor)
 *   - 1440x900  (14" laptop)
 *   - 1280x720  (13" laptop / worst case)
 *
 * Requirements:
 *   npm install puppeteer
 */

const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const CONFIG = {
  url: process.argv[3] || 'http://localhost:3000/deck',
  outputDir: path.join(process.cwd(), 'public/qa'),
  slideCount: 19,
  viewports: [
    { label: '1920x1080', width: 1920, height: 1080 },
    { label: '1440x900',  width: 1440, height: 900  },
    { label: '1280x720',  width: 1280, height: 720  }
  ],
  slideDelay: 1500  // Wait for entrance animations to complete
}

async function runQA() {
  console.log('🔍 Starting QA screenshot run...\n')

  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true })
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  for (const vp of CONFIG.viewports) {
    console.log(`📐 Viewport: ${vp.label}`)
    const vpDir = path.join(CONFIG.outputDir, vp.label)
    if (!fs.existsSync(vpDir)) fs.mkdirSync(vpDir, { recursive: true })

    const page = await browser.newPage()
    await page.setViewport({ width: vp.width, height: vp.height })
    await page.goto(CONFIG.url, { waitUntil: 'networkidle0', timeout: 30000 })
    await page.waitForTimeout(2000)

    for (let i = 0; i < CONFIG.slideCount; i++) {
      const slideNum = String(i + 1).padStart(2, '0')
      console.log(`   📸 Slide ${slideNum}/${CONFIG.slideCount}`)

      // Simulate arrow key press to navigate to next slide
      if (i > 0) {
        await page.keyboard.press('ArrowDown')
      }

      await page.waitForTimeout(CONFIG.slideDelay)

      await page.screenshot({
        path: path.join(vpDir, `slide-${slideNum}.png`),
        fullPage: false
      })
    }

    await page.close()
    console.log(`   ✅ ${CONFIG.slideCount} screenshots saved to public/qa/${vp.label}/\n`)
  }

  await browser.close()

  const totalScreenshots = CONFIG.viewports.length * CONFIG.slideCount
  console.log(`\n✅ QA complete! ${totalScreenshots} screenshots saved.`)
  console.log(`   📁 Location: ${CONFIG.outputDir}`)
  console.log('\n👀 Review checklist:')
  console.log('   □ No text overflow or clipping at 1280x720')
  console.log('   □ Logo visible on every slide')
  console.log('   □ Slide counter correct on every slide')
  console.log('   □ Orange accent colors not washed out')
  console.log('   □ Glassmorphism cards readable on all viewports')
  console.log('   □ Chart labels not truncated')
  console.log('   □ CTA button fully visible on last slide')
}

runQA().catch(err => {
  console.error('❌ QA run failed:', err)
  process.exit(1)
})
