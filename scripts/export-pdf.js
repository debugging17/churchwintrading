#!/usr/bin/env node
/**
 * export-pdf.js — Churchwin Pitch Deck PDF Export
 * Part of the web-pitch-deck skill scripts/
 *
 * Usage:
 *   node scripts/export-pdf.js [--url http://localhost:3000] [--output public/exports]
 *
 * Requirements:
 *   npm install puppeteer pdf-lib
 */

const puppeteer = require('puppeteer')
const { PDFDocument } = require('pdf-lib')
const fs = require('fs')
const path = require('path')

const CONFIG = {
  url: process.argv[3] || 'http://localhost:3000/deck?mode=print',
  outputDir: process.argv[5] || path.join(process.cwd(), 'public/exports'),
  slideCount: 26,           // Update to match actual slide count
  viewport: { width: 1920, height: 1080 },
  slideDelay: 1200,         // ms to wait for animations to complete
  filename: `churchwin-deck-${new Date().toISOString().split('T')[0]}.pdf`
}

async function exportToPDF() {
  console.log('🚀 Starting PDF export...')
  console.log(`   URL: ${CONFIG.url}`)
  console.log(`   Slides: ${CONFIG.slideCount}`)

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true })
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  })

  const page = await browser.newPage()
  await page.setViewport(CONFIG.viewport)

  // Navigate to print mode (disables Swiper, enables full-page static layout)
  await page.goto(CONFIG.url, { waitUntil: 'networkidle0', timeout: 60000 })
  await new Promise(r => setTimeout(r, 2000)) // Wait for fonts + images

  const screenshots = []

  // Screenshot each slide
  for (let i = 0; i < CONFIG.slideCount; i++) {
    console.log(`   📸 Capturing slide ${i + 1}/${CONFIG.slideCount}...`)

    // In print mode, slides are stacked vertically — scroll to each
    await page.evaluate((slideIndex, slideHeight) => {
      window.scrollTo(0, slideIndex * slideHeight)
    }, i, CONFIG.viewport.height)

    await new Promise(r => setTimeout(r, CONFIG.slideDelay))

    const screenshot = await page.screenshot({
      type: 'png',
      clip: {
        x: 0,
        y: i * CONFIG.viewport.height,
        width: CONFIG.viewport.width,
        height: CONFIG.viewport.height
      }
    })
    screenshots.push(screenshot)
  }

  await browser.close()
  console.log('✅ All slides captured. Building PDF...')

  // Stitch screenshots into PDF
  const pdfDoc = await PDFDocument.create()

  for (const screenshot of screenshots) {
    const pngImage = await pdfDoc.embedPng(screenshot)
    const page = pdfDoc.addPage([CONFIG.viewport.width, CONFIG.viewport.height])
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: CONFIG.viewport.width,
      height: CONFIG.viewport.height
    })
  }

  const pdfBytes = await pdfDoc.save()
  const outputPath = path.join(CONFIG.outputDir, CONFIG.filename)
  fs.writeFileSync(outputPath, pdfBytes)

  console.log(`\n✅ PDF exported successfully!`)
  console.log(`   📄 Output: ${outputPath}`)
  console.log(`   📦 Size: ${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB`)
}

exportToPDF().catch(err => {
  console.error('❌ Export failed:', err)
  process.exit(1)
})
