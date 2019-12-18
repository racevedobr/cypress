///<reference types="cypress"/>

it('Equality', () => {

    const a=1;
    expect(a).equal(1);
    expect(a, 'deveria ser 1').equal(2);

})