describe('Update Booking', () => {

    it('should update booking', () => {
  
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking',
      
      {"bookingid":"312",
        "firstname": "Jasmine",
        "lastname": "Jackson",
        "totalprice": 250,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-04-01",
            "checkout": "2024-04-05"
        },
        "additionalneeds": "Pool,Breakfast"
    },
    
  ).then((response) => {
  
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('bookingid');


  }); 
  
        });
  
    });
  
