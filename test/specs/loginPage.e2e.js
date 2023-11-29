const loginPage = require("../pageobjects/loginPage.page")


describe('Login/Sign Up Form', () => {
    it('should signup with valid credentials', async () => {
        await loginPage.signUp('testing123@mailnator.com', 'SuperSecretPassword!')
        await expect(loginPage.popupSignupSuccessMessage).toBeExisting()
        await expect(loginPage.popupSignupSuccessMessage).getText('You successfully signed up!')
    })
})