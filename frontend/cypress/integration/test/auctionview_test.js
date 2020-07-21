
describe('Test auctionView', function () {
    it('Test stepper',function () {
        //发送请求
        cy.request('POST', 'http://localhost:8080/login', {'username':'user', 'password':'user'})
        cy.visit('/auction?id=1')
        for(let i=1; i<6; ++i){
            cy.get('span[class="ant-input-number-handler ant-input-number-handler-up"]').click()
            cy.get('input[class="ant-input-number-input"]').should(($input) => {
                let quantity = $input[0].getAttribute("aria-valuenow")
                expect(190+i*10).to.equal(parseInt(quantity))
            })
        }

        for(let i = 1;i<5;++i){
            cy.get('span[class="ant-input-number-handler ant-input-number-handler-down"]').click()
            cy.get('input[class="ant-input-number-input"]').should(($input) => {
                let quantity = $input[0].getAttribute("aria-valuenow")
                expect(240-i*10).to.equal(parseInt(quantity))
            })
        }
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-down ant-input-number-handler-down-disabled"]').should(($span) => {
            let status = $span[0].getAttribute('aria-disabled')
            expect('true').to.equal(status)
        })
    })

});