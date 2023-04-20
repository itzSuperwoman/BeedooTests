

import * as GETUsers from '../integration/payloads/GETUsers.request'

context('TESTE API', () => {
    it('Validar status code', () => {

        GETUsers.allUsers().then((Response) => {

            cy.log(Response.status)
            cy.log(Response.statusText)
            cy.log(Response.body)

            expect(Response.status).to.eq(200);
            expect(Response.statusText).to.eq('OK');
            expect(Response.body).to.be.not.null;
            
        })

    });

    it('Listar dados', () => {

        GETUsers.allUsers().then((Response) => {

            const gender = Response.body.results[0].gender;
            const title = Response.body.results[0].name.title;
            const firstName = Response.body.results[0].name.first;
            const lastName = Response.body.results[0].name.last;
            const streetNumber = Response.body.results[0].location.street.number;
            const streetName = Response.body.results[0].location.street.name;
            const city = Response.body.results[0].location.city;
            const state = Response.body.results[0].location.state;
            const country = Response.body.results[0].location.country;
            const postcode = Response.body.results[0].location.postcode;
            const latitude = Response.body.results[0].location.coordinates.latitude;
            const longitude = Response.body.results[0].location.coordinates.longitude;
            const email = Response.body.results[0].email;
            const phone = Response.body.results[0].phone;
            const cell = Response.body.results[0].cell;
            const largePicture = Response.body.results[0].picture.large;
            const mediumPicture = Response.body.results[0].picture.medium;
            const thumbnail = Response.body.results[0].picture.thumbnail;

            cy.log(`Gender: ${gender}`);
            cy.log(`Title: ${title}`);
            cy.log(`First Name: ${firstName}`);
            cy.log(`Last Name: ${lastName}`);
            cy.log(`Street Number: ${streetNumber}`);
            cy.log(`Street Name: ${streetName}`);
            cy.log(`City: ${city}`);
            cy.log(`State: ${state}`);
            cy.log(`Country: ${country}`);
            cy.log(`Postcode: ${postcode}`);
            cy.log(`Latitude: ${latitude}`);
            cy.log(`Longitude: ${longitude}`);
            cy.log(`Email: ${email}`);
            cy.log(`Phone: ${phone}`);
            cy.log(`Cell: ${cell}`);
            cy.log(`Large Picture: ${largePicture}`);
            cy.log(`Medium Picture: ${mediumPicture}`);
            cy.log(`Thumbnail: ${thumbnail}`);

            expect(Response.body.results).to.be.not.null;
            expect(Response.body.results).to.have.length(1)
            
            
        
        })
    })
});




