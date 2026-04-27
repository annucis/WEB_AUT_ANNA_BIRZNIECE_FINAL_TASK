class FormPage {
    static visit() {
        cy.visit("/automation-practice-form");
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get email() {
        return cy.get("#userEmail");
    }

    static gender(genderText) {
        return cy.contains("label", genderText);
    }

    static get mobile() {
        return cy.get("#userNumber");
    }

    static get dateInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get subjectsInput() {
        return cy.get("#subjectsInput");
    }

    static hobby(hobbyText) {
        return cy.contains("label", hobbyText);
    }

    static get uploadPicture() {
        return cy.get("#uploadPicture");
    }

    static get state() {
        return cy.get("#state");
    }

    static get city() {
        return cy.get("#city");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

}

export default FormPage;
