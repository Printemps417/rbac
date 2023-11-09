FROM eclipse-temurin:8-jre

RUN mkdir -p /rabc_backend
WORKDIR /rabc_backend

## 将Jar 文件复制到镜像中
COPY ./ssadmin-system/target/ssadmin-system.jar app.jar

## 设置 TZ 时区
ENV TZ=Asia/Shanghai

## 设置 JAVA_OPTS 环境变量，可通过 docker run -e "JAVA_OPTS=" 进行覆盖
ENV JAVA_OPTS="-Xms512m -Xmx512m -Djava.security.egd=file:/dev/./urandom"

## 应用参数
ENV ARGS=""

EXPOSE 8088

## 启动后端项目
CMD java ${JAVA_OPTS} -jar app.jar $ARGS