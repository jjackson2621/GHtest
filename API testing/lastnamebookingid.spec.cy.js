describe("Booking API Tests", () => {
    it("Retrieves booking details for first name Specific Name", () => {
    
      cy.request("https://restful-booker.herokuapp.com/booking",
      
        {
          "bookingid":"312",
              "lastname": "Jackson",},
      
      ).then((response) => {
    
        expect(response.status).to.eq(200);
        
  
  
  }); 
  
      });
  
  });