import { expect, test, } from "@playwright/test"

test("PVR Cinemas", async ({ page }) => {

  // launching brower
  await page.goto("https://www.pvrcinemas.com/");
  // Select City
  await page.getByRole('heading', { name: "Chennai" }).click()
  // Select Cinema
  await page.locator('//span[@class="cinemas-inactive"]').click()
  await page.getByRole('button', { name: "Select Cinema" }).click()
  // Select Show
  await page.locator('//span[text()="PVR VR Chennai Anna Nagar"]').click()
  // Select Date
  await page.getByText("Tomorrow").click();
  // Select Movie
  await page.locator('//li[@role="option"]//span[text()="CHENNAI LOVE STORY"]').click();
  // Select Time
  await page.getByText("03:40 PM").click()
  // Book 
  await page.getByRole('button', { name: "Submit" }).click()
  // Terms and conditions
  await page.getByRole('button', { name: "Accept" }).click()
  // Select seat
  await page.locator('//span[@id="PR.PRIME|B:2"]').click()
  // page title
  console.log(await page.title())
  // Displaying Movie name
  const movie_name = await page.locator('//h5').innerText();
  console.log(movie_name);
  // Dsiplaying Ticket amount
  const amount = page.locator('//h6[text() = "242.61"]')
  const totalamount = await amount.innerText()
  console.log("Grand Total:", totalamount);


})
