describe('Test homepage, login and register', function(){
    it('Visit homepage', function(){
        cy.visit('/')
        cy.url().should('include', '/')
        cy.get('a[href="/login"]').should('contain', '登录')
    })

    // 测试登陆转跳
    it('Login jump', function(){
        cy.visit('/')
        cy.get('a[href="/login"]').click()
        cy.url().should('include', '/login')
    })

    // 测试搜索转跳
    it('Search test', function(){
        cy.visit('/')
        cy.get('input[placeholder="搜索你感兴趣的演出"]').type(`${"皇后乐队"}{enter}`)
        cy.url().should('include', 'search?name=')
        cy.wait(500)
        cy.get('div[class="ant-card-meta-title"]').should(($div) => {
            // console.log($div[0])
            let text = $div[0].innerHTML
            expect(true).to.equal(/.*皇后乐队.*/.test(text))
        })
    })

    it('Click goods', function(){
        // 未登录状态点击商品会进入登录界面
        cy.visit('/')
        cy.get('a').should(($a) => {
            let pattern = /.*detail\?id=[0-9]+/
            for(let i = 0;i<20; ++i){
                let link = $a[i].href
                if(pattern.test(link)){
                    $a[i].click()
                    break
                }
            }
        })
        cy.url().should('include', '/detail')
    })

    // 测试登录(错误信息)
    it('Login test with wrong password', function(){
        cy.visit('/login')
        cy.get('input[placeholder="用户名"').type('user')
        cy.get('input[placeholder="密码"]').type('xxxxx')
        cy.get('button[type="submit"]').click()
        cy.contains('用户名或密码错误，请重新输入！')
    })

    // 测试登陆
    it('Login test', function(){
        cy.visit('/login')
        cy.get('input[placeholder="用户名"').type('user')
        cy.get('input[placeholder="密码"]').type('user')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/')
        cy.get('div[class="ant-dropdown-trigger"]').should('contain', 'user')
        // 登出
        cy.request('POST', 'http://localhost:8080/logout', {})
    })

    // 测试登出
    it('Logout test', function(){
        // 先登录
        cy.request('POST', 'http://localhost:8080/login', {'username':'user', 'password': 'user'})

        cy.get('div[class="ant-dropdown-trigger"]').click()
        cy.contains('退出登录').click()
        cy.contains('退出登录').click()
        cy.contains('登出成功')
    })

    // 测试注册
    it('Register test', function(){
        cy.visit('/login')
        cy.get('a[class="register"]').click()
        cy.url().should('include', '/register')
        cy.get('input[placeholder="用户名"]').type('test')
        cy.get('input[placeholder="密码"]').type('test')
        // 测试确认密码
        cy.get('input[placeholder="确认密码"').type('testtttttttt')
        cy.get('div[class="ant-select-selector"]').click()
        cy.contains('+86').click()
        cy.get('input[placeholder="电话号码"]').type('54749110')
        cy.contains('两次输入的密码不一致')
        // 输入一致密码
        cy.get('input[placeholder="确认密码"]').clear()
        cy.get('input[placeholder="确认密码"]').type('test')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/login')
        // 测试登陆
        cy.get('input[placeholder="用户名"').type('test')
        cy.get('input[placeholder="密码"]').type('test')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/')
        cy.get('div[class="ant-dropdown-trigger"]').should('contain', 'test')
        // 登出
        cy.request('POST', 'http://localhost:8080/logout', {})
        // 测试重复用户名
        cy.visit('/register')
        cy.get('input[placeholder="用户名"]').type('test')
        cy.get('input[placeholder="密码"]').type('test')
        cy.get('input[placeholder="确认密码"]').type('test')
        cy.get('div[class="ant-select-selector"]').click()
        cy.contains('+86').click()
        cy.get('input[placeholder="电话号码"]').type('54749110')
        cy.get('button[type="submit"]').click()
        cy.contains('存在相同用户名，请更换用户名')
    })

})

