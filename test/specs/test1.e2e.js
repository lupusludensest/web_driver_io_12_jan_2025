
describe('Demo Tests', function () {

    it('My First Test',  async () => {

        browser.url('https://google.com') 

        await $('[name="q"]').setValue('webdriverio')

        // await $('[name="btnK"]').click()

        browser.keys('Enter')

        browser.pause(5000)

        

    })
})