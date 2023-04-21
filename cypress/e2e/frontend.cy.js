

context('Aplicando a vaga', () => {

    beforeEach(() => {
        cy.visit('https://beedoo.com.br/')
        });
    it('', () => {
        cy.get('.rcc-links .rcc-accept-btn').click()
        
        cy.get('[href="https://app.pipefy.com/public/form/NWn55kc1"]').invoke("removeAttr", "target").click()


        cy.origin('https://app.pipefy.com', () => {

            var candidato = []

                candidato["nome"] = 'Monica'
                candidato["email"] = 'monicamoraesmcamargo@gmail.com'
                candidato["cargo"] = "Analista QA"
                candidato["tel"] = '43988463744'

            cy.get('[name="publicForm.0.nome_completo.innerValue"]').type(candidato.nome)
            expect('[name="publicForm.0.nome_completo.innerValue"]').to.be.not.null

            cy.get('#publicForm-Email-email').type(candidato.email)
            expect('#publicForm-Email-email').to.be.not.null

            cy.get('[name="publicForm.2.vaga.innerValue"]').type(candidato.cargo)
            expect('[name="publicForm.2.vaga.innerValue"]').to.be.not.null

            cy.get('.selected-flag').click() //seleciona bandeira
            cy.contains('Brazil').click()

            cy.get('#publicForm-Phone-telefone').type(candidato.tel)
            expect('#publicForm-Phone-telefone').to.be.not.null

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

