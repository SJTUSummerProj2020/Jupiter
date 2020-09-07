## 后端服务器部署流程

1. github action 指南 [link](https://docs.github.com/cn/actions)

2. 助教的release版本action：

   ```yaml
   name: Release
   
   on:
     release:
       types: [published]
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       - name: Set up JDK 1.8
         uses: actions/setup-java@v1
         with:
           java-version: 1.8
       - name: Test with Maven
         run: mvn test
       - name: Build with Maven
         run: mvn -B package --file pom.xml
       - name: Push to GitHub Packages
         uses: docker/build-push-action@v1
         with:
           username: ${{ github.actor }}
           password: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
           registry: docker.pkg.github.com
           # repository 的路径名必须全部小写
           repository: "heycat-svg/jupiter-backend/backend"
           tag_with_ref: true
   ```

3. 配置dockerFile

   ```dockerfile
   FROM openjdk:15-jdk-alpine
   WORKDIR /app
   COPY target/*.jar /app
   # 此处的jupiter-backend.jar是经过mvn build生成的jar包名称，要在porm.xml的<build></build>中加入<finalName>[name]</finalName>
   ENTRYPOINT ["java", "-jar", "jupiter-backend.jar"]
   EXPOSE 8080
   ```

3. 登录EC2，安装docker [link](https://www.cnblogs.com/walker-lin/p/11214127.html)
   - 有关docker的命令 [link](https://www.cnblogs.com/bethal/p/5945038.html)
4. 安装java环境 [link](https://zhuanlan.zhihu.com/p/101920303)
5. 执行`docker run -p 8080:8080 [包的地址 如：docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME]`
   - 关于`-p`参数，见[端口映射](https://www.cnblogs.com/williamjie/p/9915036.html)
   - 关于如何再container和EC2 shell中切换，见[link](https://www.cnblogs.com/520yang/articles/8744454.html)

6. 配置EC2的安全组，开放8080端口

