const puppeteer = require('puppeteer');

exports.run = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://nocodeskills.fr');
  // Votre logique de scraping ou autre ici
  await browser.close();
  res.send('Script 1 exécuté avec succès');
};
