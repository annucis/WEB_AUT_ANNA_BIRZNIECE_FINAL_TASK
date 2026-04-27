import FormPage from "../pageObjects/form.page";

describe("Final Task - Automation Practice Form", () => {
    it("fills the form and validates the submitted data", () => {
        FormPage.visit();

        //basic fields - example info
        FormPage.firstName.type("Anna");
        FormPage.lastName.type("Birzniece");
        FormPage.email.type("anna.birzniece@example.com");
        FormPage.gender("Female").click();
        FormPage.mobile.type("1234567890");

        //date of birth: 28 February 1930
        FormPage.dateInput.click();

        //select year
        cy.get(".react-datepicker__year-select").select("1930");
        //select month
        cy.get(".react-datepicker__month-select").select("February");
        //select day (must avoid days from previous/next month) -> otherwise the 28th is clicked in jan not feb
        cy.get(".react-datepicker__day--028:not(.react-datepicker__day--outside-month)").click();

        //subject
        FormPage.subjectsInput.type("Economics{enter}");

        //hobby
        FormPage.hobby("Music").click();

        //upload image (img name - image.png)
        FormPage.uploadPicture.selectFile("files/image.png");

        //state & city
        FormPage.state.click();
        cy.contains("div", "NCR").click();
        FormPage.city.click();
        cy.contains("div", "Delhi").click();

//In task description there were no parameters for Current Adress (did not include)

        //submit
        FormPage.submitButton.click();

        //validation
        cy.contains("td", "Student Name")
            .next()
            .should("contain", "Anna Birzniece");

        cy.contains("td", "Student Email")
            .next()
            .should("contain", "anna.birzniece@example.com");

        cy.contains("td", "Gender")
            .next()
            .should("contain", "Female");

        cy.contains("td", "Mobile")
            .next()
            .should("contain", "1234567890");

        cy.contains("td", "Date of Birth")
            .next()
            .should("contain", "28 February,1930");

        cy.contains("td", "Subjects")
            .next()
            .should("contain", "Economics");

        cy.contains("td", "Hobbies")
            .next()
            .should("contain", "Music");

        cy.contains("td", "Picture")
            .next()
            .should("contain", "image.png");

        cy.contains("td", "State and City")
            .next()
            .should("contain", "NCR Delhi");

    });


});
