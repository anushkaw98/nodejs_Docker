# nodejs_Docker
node.js test application with Docker
## pre-requisities 
- [x] install docker desktop 
- [x] install node.js 
- [x] code editor-visual studio 

## work flow
create a folder anywhere you want and go inside it,

- ```#npm init -y```
will initiate and create package.json

create index.js > 
here you can add application details

```#npm i express```
create package-lock.json  > this help to create API's,
https://expressjs.com use this for more info,get the "helloworld" from there and test,
> [!IMPORTANT]
> set the port,
             <br>ex;-8000</br>
to run >
            ```#node index.js ```   >> this will run locally
            
will create a  `node_modules` file,
check on >> ***http://localhost:8000/***

let's test with docker,
    create a Dockerfile
```            
FROM  ....
WORKDIR /..../...
COPY .  /...
RUN npm install
EXPOSE 8000
CMD node index.js
```

## build your image

```#docker build -t anushkaw98/nodejs:0.0.1  . ``` >> docker project name and version  / last 
***.***  means current Dir</br>

<br>check ```#docker container ls``` >> no containers still,
check on docker,image is there</br>

```#docker container run -d -p 3000:3000 anushkaw98/nodejs:0.0.1```
port >> machine port: Docker port
will create a container ID
```
    result >>    >mynode@1.0.0 start
                 >node index.js
                  app is running at 8000
 ```                 
now check,
```#docker container ls ``` >>  there is a container

```#Docker container stop``` <container_name>
to stop running container

```#Docker push anushkaw98/nodejs:0.0.1```

all  in one video,check ,https://www.youtube.com/watch?v=DQJNtDm5qy0

> to check, pull from docker hub again and run it k,  localhost:8000



######
inside this repo all files included, you can copy and check for testing purpose
**Dockerfile,index.js, package-lock.json, package.json**

this will create ***API BASED Application***, adding few routes edit index.js,
go each page and check,

           
           http://localhost:8000/login
           http://localhost:8000/signup
each page will visible           







          
