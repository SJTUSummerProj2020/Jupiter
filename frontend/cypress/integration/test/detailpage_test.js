var sum = 0
describe('Test detailpage', function(){
    it('Test options', function(){
        // login first
        cy.request('POST', 'http://localhost:8080/login', {'username':'user', 'password':'user'})
        cy.visit('/detail?id=514')
        // 逐一点击场次 测试价格
        cy.get('input[value="2020-07-09 周四 21:00"]').click()
        cy.get('input[value="80元（预售票）"]').click()
        cy.get('div[class="ant-col detail-card-money"]').should('contain', '80')
        // 测试数量
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-up"]').click()
        cy.get('input[class="ant-input-number-input"]').should(($input) => {
            var input = $input[0]
            var quantity = input.getAttribute("aria-valuenow")
            sum = quantity * 80
            
        })
        cy.get('div[class="ant-col detail-card-money"]').should(($div) => {
            let text = $div[0].innerHTML
            console.log(text)
            expect(parseInt(text)).to.equal(sum)
        })
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-down"]').click()

        // 第二轮
        cy.get('input[value="2020-07-10 周五 21:00"]').click()
        cy.get('input[value="100元（预售票）"]').click()
        cy.get('div[class="ant-col detail-card-money"]').should('contain', '100')
        // 数量
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-up"]').click()
        cy.get('input[class="ant-input-number-input"]').should(($input) => {
            var input = $input[0]
            var quantity = input.getAttribute("aria-valuenow")
            sum = quantity * 100
            
        })
        cy.get('div[class="ant-col detail-card-money"]').should(($div) => {
            let text = $div[0].innerHTML
            console.log(text)
            expect(parseInt(text)).to.equal(sum)
        })
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-down"]').click()

        // 第三轮
        cy.get('input[value="2020-07-11 周六 21:00"]').click()
        cy.get('input[value="100元（预售票）"]').click()
        cy.get('div[class="ant-col detail-card-money"]').should('contain', '100')
        // 数量
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-up"]').click()
        cy.get('input[class="ant-input-number-input"]').should(($input) => {
            var input = $input[0]
            var quantity = input.getAttribute("aria-valuenow")
            sum = quantity * 100
            
        })
        cy.get('div[class="ant-col detail-card-money"]').should(($div) => {
            let text = $div[0].innerHTML
            console.log(text)
            expect(parseInt(text)).to.equal(sum)
        })
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-down"]').click()
    })

    // 测试步进器
    it('Test stepper', function(){
        // 向上加到6
        for(let i=1; i<6; ++i){
            cy.get('span[class="ant-input-number-handler ant-input-number-handler-up"]').click()
            cy.get('input[class="ant-input-number-input"]').should(($input) => {
                var quantity = $input[0].getAttribute("aria-valuenow")
                expect(i+1).to.equal(parseInt(quantity))
            })
        }
        cy.get('span[class="ant-input-number-handler ant-input-number-handler-up ant-input-number-handler-up-disabled"]').should(($span) => {
            var status = $span[0].getAttribute('aria-disabled')
            expect('true').to.equal(status)
        })
    })

    // 购买流程
    it('Test kaimono', function(){
        // logout
        cy.request('POST', 'http://localhost:8080/logout', {})
        cy.visit('/detail?id=514')
        // 未登录状态购买
        cy.get('.detail-card-buy-button').click()
        cy.url().should('include', '/login')
        cy.contains('请登录')
        // 模拟登录
        cy.get('input[placeholder="用户名"').type('user')
        cy.get('input[placeholder="密码"]').type('user')
        cy.get('button[type="submit"]').click()
        // 登陆状态购买
        cy.wait(200)
        cy.visit('/detail?id=514')
        cy.wait(200)
        cy.get('.detail-card-buy-button').click()
        cy.url().should('include', '/detailOrder')
    })
})