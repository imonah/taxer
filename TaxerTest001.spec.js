describe('Check Data in Tables', () => {
       
    it('Home Page Visit and Upload certificates', () => {

        cy.visit('https://js-55fbfg.stackblitz.io/');
        cy.get('button').click();
        cy.get('.btn-primary').click();
        
        cy.get('.dropbox')
                .selectFile('cypress/cert/cert01.cer', { action: 'drag-drop' });
        cy.get('.btn-primary').click();
        cy.get('.dropbox')
                .selectFile('cypress/cert/cert02.cer', { action: 'drag-drop' });
        cy.get('.btn-primary').click();
        cy.get('.dropbox')
                .selectFile('cypress/cert/cert03.cer', { action: 'drag-drop' });
        cy.get('.btn-primary').click();
        cy.get('.dropbox')
                .selectFile('cypress/cert/cert04.cer', { action: 'drag-drop' });
        cy.get('.btn-primary').click();
        cy.get('.dropbox')
                .selectFile('cypress/cert/cert05.cer', { action: 'drag-drop' });
        cy.get('.list-group > :nth-child(1)').click();
        });
    
    it('Check List Visibility', () => {
        cy.get('.list-group').should('be.visible');
    })
    
    it('Check Details Visibility', () => {
        cy.get('.card-body').should('be.visible');
    })
    
    it('Check Name in List', () => {
        //  cy.get('.list-group > :nth-child(1)').invoke('text').should('eq','Таксер Тест Тестерович');
        //  cy.get('.list-group > :nth-child(1)').should('have.text','\n        Таксер Тест Тестерович\n      ');
        cy.get('.list-group > :nth-child(1)').should('include.text','Таксер Тест Тестерович');
    })  
    
    it('Check Name in Details', () => {
       // cy.get('tbody > :nth-child(1) > .ng-binding').invoke('text').should('eq','Таксер Тест Тестерович');
        cy.get('tbody > :nth-child(1) > .ng-binding').should('have.text','Таксер Тест Тестерович');
    })
    
    it('Compare Names', () => {
        cy.get('.list-group > :nth-child(1)').invoke('text')
          .then((text) => {
             const name = text
             cy.get('tbody > :nth-child(1) > .ng-binding').invoke('text')
               .then((text) => {
                const new_name = text
                expect(new_name).to.eq(name)
               })
            })
    })
    
}
)

