require('../spec.helper')

describe("Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    })

    it("should have a weight of 90", () => {
        expect(person.weight).to.equal(90);
    })

    it("should have a height of 186", () => {
        expect(person.height).to.equal(186);
    })
});