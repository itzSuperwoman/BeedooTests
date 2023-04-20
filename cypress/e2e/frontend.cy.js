

context('Aplicando a vaga', () => {

    beforeEach(() => {
        cy.visit('https://beedoo.com.br/')
        });
    it('', () => {
        cy.get('.rcc-links .rcc-accept-btn').click()
        
        cy.get('[href="https://app.pipefy.com/public/form/NWn55kc1"]').invoke("removeAttr", "target").click()


        cy.origin('https://app.pipefy.com', () => {

            cy.get('[name="publicForm.0.nome_completo.innerValue"]').type('Monica Adriana Moraes Camargo')
            cy.get('#publicForm-Email-email').type('monicamoraescamargo@gmail.com')
            cy.get('[name="publicForm.2.vaga.innerValue"]').type('Analista QA')
            cy.get('.selected-flag').click() //seleciona bandeira
            cy.contains('Brazil').click()
            cy.get('#publicForm-Phone-telefone').type(43988463744)
            cy.contains('Anexe seu currículo').click()
    
            
            cy.get('input[type=file]').selectFile({
                contents: Cypress.Buffer.from('file contents'),
                fileName: 'CV-QA.pdf', 
                mimeType: 'application/pdf', // lista: https://www.itmnetworks.com.br/lista-completa-de-mime-types
                lastModified: new Date().getTime(),}, {force: true})

            cy.get('#publicForm-LongText-por_que_voc_est_aplicando_para_esta_vaga').type('Por me identificar muito com a cultura da empresa! Também quero ser abeedoozida.')
            cy.get('#submit-form-button').click()
        
            })
    })
});

