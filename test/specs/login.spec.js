const LoginPage = require('../pages/login.page');

describe('Demo Test', () => {
    it('Login Test with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.checkMessage('You logged into a secure area!');
    });

    it('Login Test with invalid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await LoginPage.login('wronguser', 'wrongpassword');
        await LoginPage.checkMessage('Your username is invalid!'); // Adjust this as needed.
    });
});