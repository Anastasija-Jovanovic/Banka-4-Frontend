import { visitEmployeeLogin, fillLoginForm, submitLogin } from '../../support/authHelpers';

describe('Feature 1 - Autentifikacija korisnika', () => {
    it('Scenario 2: Neuspešno logovanje zbog pogrešne lozinke', () => {
        cy.intercept('POST', '**/api/auth/login').as('login');

        visitEmployeeLogin();
        fillLoginForm('admin@raf.rs', 'pogresna123');
        submitLogin();

        cy.wait('@login').then(({ response }) => {
            expect(response?.statusCode).to.be.oneOf([401, 403]);
        });

        // ostaje na login stranici
        cy.url().should('include', '/login');

        // poruka može da varira zavisno od FE implementacije
        cy.contains(/neispravn|pogrešn|unauthorized|forbidden/i).should('be.visible');
    });
});