# Docker for the Absolute Beginner - Hands On - DevOps

- Udemy
- Instructor: Mumshad Mannambeth
- Completed: Mar 24, 2020

---

- Containers are completely isolated environments. They share the same processing kernel but have their own:
    - processes
    - services
    - networking interfaces
    - mounts
	
- Docker is not meant to virtualize and run diffferent operating systems and kernels on the same hardware.

- Docker's main purpose is to containerize applications and ship them and run them.

- Unlike virtual machines, Docker does not have it's own operating system inside of the container.  Therefore:
    - Docker has less utilization of underlying resources than virtual machines
    - Docker uses less disk space than virtual machines
    - Docker containers boot up faster, usually in seconds rather than minutes because they do not have to boot up the entire operating system.
    - Virtual machines can have different operating systems on the same host, but Docker cannot.
	
- Docker Hub is a public registry of Dockerized containers.

- You can run muliple instances of a container and if one instance fails you can destroy it and start a new one.

- Docker Images are packages (or templates) similar to a vm in the virualization world. It is used to create one or more containers.

- Docker Containers are running instances of images that are isolated and have their own environments and set of processes.

## Docker commands
- **run**
    - Star a container from an image.
    - The first time it is run it pulls down the image.
    - example:
```
docker run ubuntu
```
			
- **ps**
    - Lists all running containers and some basic information about them.
    - It shows CONTAINER ID, IMAGE, COMMAND, CREATED, STATUS, PORTS, NAMES
	
- **ps -a**
    - Lists all running containers plus previously accessed containers.

- **stop**
    - Stop a container.  You need either the container id or the container name.
		
- **rm**
    - Remove a stopped or exited container.  You need either the container id or the container name.
		
- **images**
    - List all of the images that are available to you or that you have downloaded from docker hub.
		
- **rmi**
    - Remove an image that you aren't using anymore.
    - You must ensure that no containers are running off of it.  Yupi must delete all underlying containers before you can delete the image.
		
- **pull***
    - Download an image. Do this so you don't have to wait for it when you perform a run command.
	
- Appending to commands. Example:
```
docker run ubuntu sleep 1000
```
- The container will be created and sleep 1000 seconds. So the container stays alive for 1000 seconds.
	
- Executing a command on a running container. Example:
```
docker exec infallible_curie cat /etc/hosts
```
- Executes the command on the running container.
	
- All official docker images are in the /library directory.

- Example: Start centos, run the bash command and automatically be logged into the container.
```
docker run -it centos bash
```
		
- Example: Start centos in the background an sleep for 20 seconds.
```
docker run -d centos sleep 20
```
		
## Docker run command
- Tag 
    - Use a "tag" to specify a specific version. Examples:
```
docker run ubuntu:17.0.4
docker run ubuntu:latest
```

- Attach and Detach
    - When you run a Docker container in runs in the foreground (attached mode). In other words it is attached to the output of the Docker container.
    - Specify the -d parameter to run in detached mode. Example:
```
docker run -d mmumshad/simple-webapp
```
- To attach to a running container in detached mode use the attach command. Example:
```
docker attach say_ramanujan
```
	
- STDIN
    - By default, docker containers do no listen to standard input. You have to map the STDIN to the docker container host using the -i parameter. 
    - Example:
```
docker run -i mmumshad/simple-prompt-docker
```
				
### Port Mapping
- The underlyng host where docker is installed is called docker host or docker engine.
- What ip do you use to access the docker container from your browser. There are two options:
    1. Use the ip of the Docker container. Every Docker container gets an ip assigned by default. But this is an internally bridged networking and is only available in the Docker host.
    2. Use the ip of the Docker host. For this to work you have to map the port inside the Docker container to a free ip on the Docker host.
        - Example of mapping the local port 80 to the Docker port 5000 using the -p command:
```
docker run -p 80:5000 mmumshad/simple-webapp
```
 - Note that you can run multiple instances of the application and map them to different ports on the Docker host.
 - You can't map the same port on the Docker host more than once.
				
### Volume Mapping
- When databases and files are created in a container they are stored in the directory /var/lib/<name of iDocker image> inside the Docker container by default.
- To retain the data after the container is stopped persist it using the -v (volume mapping) parameter. Example:
```
docker run -v /opt/datadir:/var/lib/<name of iDocker image> <name of iDocker image> 
```
- This mounts the specified directory inside the Docker container.
				
			
## Docker Images
1. Create a docker file named Dockerfile. Example:
```
FROM Ubuntu 

RUN apt-get update
RUN apt-get install python

RUN pip install flask
RUN pip install flask-mysql

COPY . /opt/source-code

ENTRYPOINT FLASK_APP=/opt/source-code/app.py flash run
```			
2. Build the Docker image.
```
docker build Dockerfile -t mmumshad/my-custom-app
```
3. Push the Docker image to Docker Hub.
```
docker push mmumshad/my-custom-app
```
- Dockerfile instructions:
```
FROM instruction defines the base os for the container.
All Dockerfiles must start with a FROM instruction.
Every Docker image must be based off of another image.

RUN instruction tells Docker to run a particular command.

COPY instruction copies files from the local system onto the Docker image.

ENTRYPOINT allows you to specify a commmand that will be run when the image is run as a container.
```

- Each step adds a layer to the process. You can see these by using the Docker history command.
```
docker history <Docker image name>
```

- All of the Docker layers are cached so if an error occurs it restarts buillding from there. Or if you add instructions it can do the same thing.

### Docker setup debugging
- [https://development.robinwinslow.uk/2016/06/23/fix-docker-networking-dns/](https://development.robinwinslow.uk/2016/06/23/fix-docker-networking-dns/)
- Check internet connectivity:
```
docker run busybox ping -c 1 192.203.230.10 
```
- Try resolving a domain:
```
docker run busybox nslookup google.com
```

---
## Creating a dockerized container demo
- https://github.com/mmumshad/simple-webapp-flask

- Install all required dependencies and configure the web server
```
docker run -it ubuntu bash
apt-get update
apt-get install -y python
apt-get install python-pip
pip install flask
pip install flask-mysql
```
- Start web server
```
FLASK_APP=app.py flask run --host=0.0.0.0
```

#### Dockerfile file contents:
```
FROM ubuntu

RUN apt-get update
RUN apt-get install -y python python-pip
RUN pip install flask

COPY app.py /opt/app.py

ENTRYPOINT FLASK_APP=app.py flask run --host=0.0.0.0
```

#### app.py file contents (in the same directory as the Dockerfile):
```
import os
from flask import Flask
app = Flask(__name__)

@app.route("/")
def main():
    return "Welcome!"

@app.route('/how are you')
def hello():
    return 'I am good, how about you?'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
```

- Build the Docker image
```
docker build . -t my-flask-app
```
---

- Containers are not meant to host an operating system. 

- Containers are meant to run a specific task or process.

- Once the task is complete the container exists.

- The task is defined by the CMD instruction in the Dockerfile.
    - CMD command param1
        - or
    - CMD ["command", "param1"]

- You can override the default task by appending a command (like sleep 5) to the end of the Docker command.
    - ENTRYPOINT instruction is like a command instruction
```
ENTRYPOINT ["sleep"]
```	
- Difference between CMD instruction and ENTRYPOINT instruction:
    - **CMD** - docker command parameters will replace the CMD
	- **ENTRYPOINT** - docker command parameters will get appended to the ENTRYPOINT

- To specify default parameters:
```
ENTRYPOINT ["sleep"]
CMD ["5"]
```


### docker-compose.yml (DOCKER COMPOSE FILE)
```
services:
	web:
		image: "mmumshad/simple-webapp"
		ports:
			- "80:5000"

	database:
		image: "mysql"
		volumes:
			- /opt/data:/var/lib/mysql
    		environment:
		      - MYSQL_ROOT_PASSWORD=password
```

- **docker-composer up**	start the docker container
- **docker-composer stop**	stop the docker container
- **docker-composer down	bring down the entire docker container

---
## Docker Swarm

- Docker Swarm allows you to manage multiple machines together as a single cluster

- One host must be the master (ie. Swarm Manager) and the others are slave (ie. workers)

- After joining the swarm the other workers are also referred to as nodes.

#### docker-compose.yml
```
services:
	web:
		image: "mmumshad/simple-webapp"
		deploy:
			replicas: 5

	database:
		image: "mysql"
```
```
docker stack deploy -c docker-compose.yml
```

- Load balancing is out of scope for this course.

---
## Docker Networking
- When you install Docker it create 3 networks automatically:
    1. Bridge - default network a container gets attached to
        - private internal network created by docker on the host
        - all containers attach to this network by default and get an internal ip address usually in the range 172.17.0.2, 172.17.0.3, 172.17.0.4, etc.
        - containers can access each other using these ips
    2. none - docker run ubuntu --network=none
    3. host - docker run ubuntu --network=<host>

- To create your own internal docker network:
```
docker network create4 -- driver brodge --subnet 182.18.0.0/16 custom-isolated-network
```

- To see all docker networks
```
docker network ls
```
