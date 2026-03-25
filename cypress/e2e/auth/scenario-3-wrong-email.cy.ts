import { visitEmployeeLogin, fillLoginForm, submitLogin } from '../../support/authHelpers';

describe('Feature 1 - Autentifikacija korisnika', () => {
    it('Scenario 3: Neuspešno logovanje zbog nepostojećeg korisnika', () => {
        cy.intercept('POST', '**/api/auth/login').as('login');

        visitEmployeeLogin();
        fillLoginForm('nepostoji+e2e@raf.rs', 'NekaSifra123!');
        submitLogin();

        cy.wait('@login').then(({ response }) => {
            // backend često vraća 401 i za "user ne postoji"
            expect(response?.statusCode).to.be.oneOf([401, 403, 404]);
        });

        cy.url().should('include', '/login');
        cy.contains(/ne postoj|nepostoje|unauthorized|pogrešn/i).should('be.visible');
    });
});