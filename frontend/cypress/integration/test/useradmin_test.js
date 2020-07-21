describe('Test useradmin', function(){
    it('Visits userList', function(){
        // 普通用户登录
        cy.request('POST', 'http://localhost:8080/login', {'username':'user', 'password':'user'})
        cy.visit('/userList')
        cy.url().should('include', '/')
        // 登出
        cy.request('POST', 'http://localhost:8080/logout', {})
        // 管理员登陆
        cy.request('POST', 'http://localhost:8080/login', {'username':'root', 'password':'root'})
        cy.visit('/userList')
        cy.url().should('include', '/userList')
    })

    it('Test ban user', function(){
        cy.get('div[class="userListButton"]').should(($div) => {
            $div[0].click()
        })
    })
})