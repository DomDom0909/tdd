describe("fizzbuzz function", () => {
    beforeEach (() => {
        cy.vistit('localhost')
    })
})

it('returns fizz if the number is divisible by 3', () => {
    cy.window().then((window) => {
        const result = window.fizzbuzz(3)

        assert.equal(result, 'fizz')
    })
})

it('returns buzz if zhe number is divisible by 5', () => {
    cy.window().then((window) => {
        const result = window.fizzbuzz(5)

        assert.equal(result, 'buzz')
    })
})

cy.window().then((window) => {
    const reultat = window.fizzbuzz(7)

    assert.equal(reult, 'Number must be divisible by 3 or 5')
})

describe("add Function", () => {
    beforeEach(() => {
        cy.visit('localhost')
    })
})

it("Should add the two supplied numbers", () => {
    cy.window().then((window) => {
        const result = window.addEventListener("2,3")

        assert.equal(result, 5)
    })
})