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
        // 登出
        cy.request('POST', 'http://localhost:8080/logout', {})
    })

    it('Test ban user', function(){
        // 登录
        cy.request('POST', 'http://localhost:8080/login', {'username':'root', 'password':'root'})
        cy.visit('/userList')
        cy.get('.ant-list-items>li').eq(1).contains('封 禁').click()
        cy.get('.ant-list-items>li').eq(1).contains('解 禁')
        cy.contains('修改成功！')
        // 管理员登出
        cy.request('POST', 'http://localhost:8080/logout', {})
        // user用户尝试登录
        cy.visit('/login')
        cy.get('input[placeholder="用户名"').type('user')
        cy.get('input[placeholder="密码"]').type('user')
        cy.get('button[type="submit"]').click()
        cy.contains('您的账户已被禁用')
        // 管理员再次登录
        cy.request('POST', 'http://localhost:8080/login', {'username':'root', 'password':'root'})
        cy.visit('/userList')
        cy.get('.ant-list-items>li').eq(1).contains('解 禁').click()
        cy.get('.ant-list-items>li').eq(1).contains('封 禁')
        cy.contains('修改成功！')
        // 管理员登出
        cy.request('POST', 'http://localhost:8080/logout', {})
        // user再次登陆
        cy.visit('/login')
        cy.get('input[placeholder="用户名"').type('user')
        cy.get('input[placeholder="密码"]').type('user')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/')
        // user登出
        cy.request('POST', 'http://localhost:8080/logout', {})
    })
})