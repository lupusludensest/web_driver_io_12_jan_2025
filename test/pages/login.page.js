class LoginPage {
    get usernameTextbox() { 
        return $('#username');
    }
    
    get passwordTextbox() { 
        return $('#password'); 
    }
    
    get loginButton() { 
        return $('button[type="submit"]');
    }
    
    get loginMessage() { 
        return $('#flash');
    }
    
    get errorMessage() { 
        return $('#flash'); // Assuming the same element displays error messages
    }
    
    async login(username, password) {
        await this.usernameTextbox.setValue(username);
        await this.passwordTextbox.setValue(password);
        await this.loginButton.click();

        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');
        // await $('button[type="submit"]').click();
        // await $('#flash').toHaveTextContaining('You logged into a secure area!');
    }

    async checkMessage(msg) {
        const message = await this.loginMessage.getText();
        if (!message.includes(msg)) {
            throw new Error(`Expected message to contain: "${msg}". Actual: "${message}"`);
        }
    }
}

module.exports = new LoginPage();