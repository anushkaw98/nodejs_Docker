# nodejs_Docker
node.js test application with Docker

pre-requisities 
1.install docker desktop
2.install node.js
3.code editor-visual studio

create a folder anywhere you want and go inside it,

#npm init -y
will initiate and create package.json

create index.js > ref:package.json
here you can add application details

#npm i express
create package-lock.json  > this help to create API's
https://expressjs.com use this for more info,get the helloworld from their and test
            set the port, ex;-8000
            to run > #node index.js    >> this will run locally
            will create a node_modules file,
            check on >> localhost:8000

let's test with docker,
    create a Dockerfile
          FROM  ....
          WORKDIR /..../...
          COPY .  /...
          RUN npm install
          EXPOSE 8000
          CMD node index.js

    build your image
          #docker build -t anushkaw98/nodejs:0.0.1  .  >> docker project name and version  / last . means current Dir
          check #docker container ls  >> no containers still,
          check on docker,image is there

          #docker container -d -p 3000:3000 anushkaw98/nodejs:0.0.1
          port >> machine port: Docker port
          will create a container ID
                result >>    >mynode@1.0.0 start
                             >node index.js
                              app is running at 8000
                              
          now check,
          #docker container ls  >>  there is a container

          #Docker container stop <container_name>
          to stop running container

          #Docker push anushkaw98/nodejs:0.0.1

          all above in ,https://www.youtube.com/watch?v=DQJNtDm5qy0
          to check pull from docker hub and run it and check,  localhost:8000



######
inside this repo file related to this,
like above create Dockerfile,index.js, package-lock.json, package.json

this will create api BASED Application,to that here adding few routes to it,inside index.js,
go each page and check,
      http://localhost:8000/login
      http://localhost:8000/signup







          
