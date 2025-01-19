describe("My First Recirded Test", () => {
  it("tests My First Recirded Test", async () => {
    await browser.setWindowSize(765, 551)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")

    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#content").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("i.fa.fa-2x.fa-sign-in").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("i.icon-2x.icon-signout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
