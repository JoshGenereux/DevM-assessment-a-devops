
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button gives correct div', async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const drawDiv = await driver.findElement(By.id('choices'))
    const displayed = await drawDiv.isDisplayed()
    expect(displayed).toEqual(true)
    await driver.sleep(2000)
})

test("see all button", async ()=>{
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)
    const botn = await driver.findElement(By.id('choices'))
    const displayed = await botn.isDisplayed()
    expect(displayed).not.toBe(true)
})