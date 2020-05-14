## AWS Certified Cloud Practitioner

- Udemy
- Instructor: Infinite Skills
- Completed May 1, 2019

---

# ASW VPC, EC2 and EBS

### AWS Regions
- Why is AWS investing in creating data centers around the world?
- What would influence your choice on which region you want to use?
- Application
    - Where are your customers?
    - Are they located in a particular region?
    - Wouldn't you want them to get the best user experience?
		
### Virtual Private Cloud (VPC)
- Virtual Network that is dedicated to your AWS account
- Each VPC is isolated from other VPCs
- A VPC is created in a region
- A VPC consists of Subnets
- The Subnets area then used to host your servers or EC2 Instances
	
### Elastic Compute Cloud (EC2)
- Service is used to launch and manage virtual servers on the AWS Cloud
- You don't need to manage
    - The data center
    - The networking
    - The cooling
    - THie physical hardware
    - The physical security
- You can create the virtual server on-demand
- You can terminate whenever required
- You only need to pay for how much you use
	
#### Creating an EC2 Instance
- Determine the Operating System (Windows or Linux)
- How much capacity do you want? (Instance Type)
- Where you you want to place the server?
- Add volumes to store data
- Tags are used to add metadata for your instance
- Security groups control the flow of traffic into your instance
- A private key is used to log into your instance
		
#### Cost Types:
- **On-Demand Server**
    - Cost is incurred when the Instance is in a running state
    - Pricing depende on
        - The Region
        - The Instance Type
        - The Amazon Machine Image (AMI) Type
    - Advantage - You don't pay any upfront costs
			
- **Spot Instances**
    - You pay less than the price for On-Demand servers
    - Conditions
        - AWS has the capacity ro fulfill your request
        - You have to mention what price you are willing to pay
				
- **Reserved Instances**
- You pay much less tha On-Demand
- But you need to do the following:
    - Agree to pay the costs for one or three year term
    - If you want a big discount, then you need to pay upfront
    - There are different classes of Reserved Instances:
        - Standard - You can't change the contract (ex to change your instance type)
        - Convertible - You can change the contract
- Use case
    - When you have a server that will frun 24*7 for a year
				
### Elastic Block Storage (EBS)
- A place to store data
    - Windows - C: , D:, etc
    - Linux - Mount points to attach volumes
- Volumes are a separate resource in AWS
- Features
    - You can create a volume at EC2 Instance creation or even later on
    - You can create a new volume and attach it to an Instance
    - You can detach a volume and attach it to an new Instance
    - You can change the size of the volume
    - There is also the ability to encrypt the volume
		
- IOPS is the amount of data that you read and write per second from the volume
    - Example: 100 reads and 20 wrties per second - KB/sec
- Throughput is the size of the data that you read and write per second  from the volume
    - Example:  5 read and 2 writes per second - 100MB/sec

- EBS Volume Types
    - SSD (Solid State Drive)
        - General Purpose SSD - Good for web servers
        - Provisioned IOPS - Good for databases because lots or reads and writes but size of data is small
    -HDD (Hard Disk Backed)
        - Throughput optimization - Good for things like video
        - Cold HDD - Good for things like storing archived data on EC2
			
### EBS Snapshots
- This is a point-in-time snapshot of your EBS volumes
- This is advisable when you want to take a backup of your EBS volumes
- You can restore the volume from the snapshot
- The volume can be restored ot another availability zone
- You can copy the snapshots to other regions for disaster recovery
	
### AWS Marketplace
- Has built-in solutions that you can host in AWS

---	
# Data Storage Services

### Simple Storage Service (S3)
- Object level storage
- Store objects such as files, videos, etc.
- Can store virtually any type of file
- Each object itself can be 0 bytes to 5TB
- Use Simple Storage Service for storing virtually unlimited amounts of data
- **S3 Costs**
    - Type of storage class
        - Standard Storage
            - Most durability and availability
            - Used when you need frequent access to data
            - Most expensive storage option
            - Ex: $0.023 per GB
        - Infrequent Access
            - Slight less availability than Standard Storage
            - Used when you have infrequent access to your objects
            - Ex: $0.0125 per GB
        - Glacier
            - Only used for archive storage
            - When you don't need frequent access to data
            - Ex: $0.004 per GB
		
    - Also charged based on:
        - the number and types of requests
        - data transfer out of a region
			
- **S3 Features**
- Versioning
    - Here versions are created for each change of the object
    - This helps from accidental deletion of objects
    - Once you enable versioning you can't disable it. You can only suspend it.
- Encryption
    - This encrypts the objects at rest
    - You can use different types of Encryption
    - You can
        - allow AWS to manage the encryption
        - use the Key Management Servics (KMS)
        - use client side encryption
- Server Access Logging
    - Here you can define logs to be collected
    - Every access ot the objects in the bucket will be stored in files
    - These log files can be stored in the same or another bucket
- Cross Region Replication
    - This can be used to ensure that objects are available in another region
    - You have to ensure versioning is enaabled
    - This is good for a compliance perspective 
        - OR bringing objects closer to users 
        - OR for disaster recovery
				
### Glacier and Lifecycle Policies
- Glacier
    - Used to archive storage
    - Cost effective option
    - Retrieval time of 3-5 hours but can get expedited retrieval for a cost
    - Transfer data to Glacier two ways:
        - API
        - Lifecycle ploicies for S3
			
### Relational Database Service (RDS)
- Oracle, MySQL, Microsoft SQL Server
- To set up a database on premises:
    - Get a server
    - Get storage
    - Install the database engine
    - Setup the database
    - Have backups in place
    - Give the database to developers to work on
		
- In RDS
    - The platform is managed for you
    - You just specify the database engine, hardware specifications and additional features
    - Everything will be provisioned for yoou
    - You just start using the database
    - Backups are managed for you
    - Patching is managed for you
		
### DynamoDB
- DynamoDB is a fully managed NoSQL database
- Why NoSQL?
   - Faster access to data  (like accessing a flat file system)
   - Schema-less - You don't define a schema
        - Each table has a partition key which can serve a primary key
        - In a table that has only one partition key, no two items can have the same partition key value
        - Sort Key - all items with the same partition key are stored together in sorted order by sort key value
       - You can have a comnbination of partition key and sort key which becomes a composite primary key
   - Each document can have a varying number of attributes
   - If the number of queries is high for simple data, sometimes traditional database may not scale well to give you the best response
- Your data is represented as documents in JSON
- Don't consider NoSQL if you need complex queries or table joins
- Here you don't need to setup any servers or install the server (NOTHING)
- Just start creating tables and inserting data
- The servers behind will scall based on demand
- Used by companies when their application queries millions of rows of data
	
### Amazon Aurora
- Fully manage relational database engine
- MyuSQL and Postgres compatible
- 5 times faster thatn MySQL and 3 times faster than Postgres
- An Aurora cluster has a primary instance in one Availability Zone
     - This writes and reads data across a cluster of volumes in multiple availability zones
- You can also have Read Replicas for failover in case the primary instance fails
	
---
# Core Services
### Route 53
--------------
- Domain name system
- Use case - Point your domain name to an Elatstic Load Balancer
- In Route 53 you can buy a domain 
    - or
- You can configure a hosted zone and then map it to your external DNS provider
- You can also perform health checks on resources
- #### Routing Policies
- Simple Routing Policy
```
Route 53  => Hosted Zone =>  Resource Record A Record => EC2 Web App
														 (IP Address of EC2 Instance)
```
- Failover Routing Policy
														  
### Cloudfront
- Content Distribution Service
- Origin in the web site in S3, EC2 or custom origin
- You can enable SSL
- You can map your own custom domain
- Works with both static and dynamic content
										  
### Simple Queue Service
- Used for storing and retrieving messgaes
- It's good for decoupling various parts of a distributed system
- The source sends messages to the queue
- The destination reads the messages
- During this time the message becomes invisible (Visibility timeout)
    - During this time the message should be processed
- After processing the message should be deleted
- Two types of queues
    - Standard Queues
    - FIFO Queues - Guarantees First in and First Out processing of messages

### Simple Notification Service
- Delivery of messages to multiple endpoints
- Messages are pushed to subscribers (Different from the pull model of the Simple Queue Service)
	
### Migration Services
- Database Migration Service
    - Allows you to migrate databases between a source and a destination location
    - The source and destination can be on the cloud on premises or a combination of both.
    - Has support for a lot of database engines such as:
```
MySQL         Amazon Aurora          MongoDB
MariaDB       Oracle                 SAP
PosgresSQL    Microsof SQL Server
```
- Can be used to migrate existing servers to the AWS Cloud
- Workloads can be currently hosted in VMWare vSphere and Windows Hyper-V
- The server volumes are saved as AMI's
		
### Hybrid Connections
- Want to connect your VPC to a data center
- Virtual Private connection
    - The connection is over the internet
    - IPSec is used for Encryption at the IP packet level
    - Use cryptographic keys for encryption
- Direct Connect
    - Dedicated connection
		
### Addtional Points
- **IaaS** (Infrastructure as a Service)
    - You don't need to worry about the physical infrastructure
    - Example: EC2
```
Application				- managed by Customer
Operating System		- managed by Customer
Virtual Server			- managed by Customer
Physical Server			- managed by Vendor
```				
- **PaaS* (Platform as a Service)
- You don't need to worry about the physical infrastructure and the Operating System
- Example: Lambda Service
```
Application				- managed by Customer
Operating System		- managed by Vendor
Virtual Server			- managed by Vendor
Physical Server			- managed by Vendor
```	
- **SaaS** (Software as a Service)
- You don't need to worry about the entire underlying service, you just use it
- Example: Email service
```
Application				- managed by Vendor
Operating System		- managed by Vendor
Virtual Server			- managed by Vendor
Physical Server			- managed by Vendor
```
- Cost Benefits of Cloud Computing
    - No initial capital investment
    - Variable and lower operating costs
        - As AWS customers grow the overall pay-as-you-go costs will get lower
    - Stop second guessing your capacity because you can scale up and scale down as required

---		
# Automation and Optimization

### Elastic Beanstalk Service
- Helps provision environments in a faster manner
- Good for development teams to get their application up and running
- If you had to provision a web environment
    - Build a VPC with subnets
    - Build an EC2 Instance
    - Install the Web Server
    - Deploy the web environment
    - Assign an Elastic IP ti the EC2 Instance
    - Place it behind an Elastic Load Balancer
- In summary, Elastic Beanstalk Service does everything for you - you just mention the type of environment you want
    - It will create an EC2 Instance
    - It will install the web server
    - It will place it in an Autoscaling Group
    - It will place it behind an Elastic Load Balancer
    - You also get a DNS name which gets registered in Route 53
- This allows the developer to only worry about managing the code and not the environment
- Different platforms available - PHP, Python, Java with Tomcat, Windows with IIS
- You can also run Docker container environments
- You can also create your own custom environments
	
### AWS Lambda
- Fully managed compute service that is provided by AWS
    - Only worry about the code
    - AWS will manage the servers
    - You just have to deploy and run your code
    - Automatic scaling
    - Automatic patching
- Supported languages are Node.js, Java, C# and Python
- Some of the most popular use cases
    - Running of admin scripts
    - Responding to events
    - Integration with the API gateway
		
### API Gateway Service
- API - Application Program Interface
- After constructing the resources and methods you can test the API
- To make users invoke the API you need to deploy the API to a stage
- Qucik Note on the backend endpoints
    - HTTP
    - Lambda	
		
### AWS Cloudformation
- Used to with with Infrastructure as Code
- Use case
    - Depoy a VPC with subnets
    - Deploy an EC@ Instance in that subnet
    - Use the AWS Console
- With Cloudformation we can define a template of JSON code which will automatically provision everything
- Example:
```
{
	"Resources:": {
		"MyEC2": {
			"Type": "AWS::EC2::Instance",
			"Properties": {
				"ImageId": "ami-0233214e13e500f77"
			}
		}
	}
}
```

### Elastic Container Service
- Container management service
- Launch a cluster and alow you to host your Docker containers on this service
- Your application must consist of Docker containers

---
# AWS Security and Monitoring

### Shared Responsibility Model
- Customer - Responsible for Security IN the Cloud
    - Customer Data
    - Platform, Applications, Identity & Access Management (IAM)
    - Operating System, Network & Firewall Configuration
    - Client-Side Data / Encryption & Data Integrity / Authentication
    - Server-Side Encryption (File System and/or Data)
    - Networking Traffic Protection (Encryption, Integrity, Identity)
						
- AWS - Responsible for Security OF the Cloud
    - Software
        - Compute / Storage / Database / Networking
    - Hardware / AWS Global Infrastructure
        - Regions / Availability Zones / Edge Locations

- EC2 Instance
    - You are responsible for conrolling incoming traffic - Security Groups or NACL
    - You are responsible for patching the servers
    - AWS is responsible for replacing the physical servers that reach end of life
		
- EBS Volumes
    - You are responsible for backups - EBS Snapshots
    - You are responsible for Encryption
		
- S3 Buckets
    - You are responsible for Encryption
    - Enabling versions and Multi-Factor Authentication (MFA)
	
- Relations Database Service
    - AWS is responsible for pacthing the OS and database engine
    - You are responsible for the database and fine tuning queries
		
- Elastic Beanstalk
    - AWS is responsible for upgrading the platform version (Ex. PHP to a higher version)
		
### Identity and Access Management (IAM)
- DON'T USE THE ROOT ACCOUNT
- Put a strong password for the root account
- Enable Multi-Factor Authentication
- Delete the root access keys
- Create an IAM user with Administrator Access
	
### IAM Policies
- An entity that provides persmisson to a resource or user/group
- JSON based documents
- Can be used to allow or deny access
- Each policy consists of the following:
    - Effect - whether the policy allows or denies
    - Action - the list of actions that are allowed or denied by the policy
    - Resource - the list of resources on which the actions can occur
    - Condition (Optional) - the circumstances under whcih the policiy grants permisson
- IAM Policy Example:
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "*",
			"Resource": "*"
		}
	]
}
```
- Benefit is the granular leel of access thatn can be provided, Examples
    - For S3 Buckets if you don't want a user to upload object, but just read objects
        - Simple Storage Service is known as the service to which access needs to be provided
        - The S3 Service has differen actions such as GetObject and PutObject
        - You put the Access of Allow or Deny
        - You can also add more granular access like specific buckets
    - For EC2 Instances IT personnel can only create EC2 Inatances but not terminate them
		
### IAM Roles
- Set of permissions
- The permissions include the AWS services and actions that are allowed
- Roles can be assigned to
    - Users
    - Web Serivice ex. EC2 Instance
    - External User
- Roles are a more secure way of accessing resources
- Better than using AWS Access keys to access resources
	
### Introduction to Encryption
- Encryption at Rest - encrypting data on a phycial device
    - Needs to be encrypted to keep someone who gets a hold of the device from reading it
- Encryption in Transit - encrypting when data is being transferred from one place to another
    - If someone gets a hold of the data in the middle they will not be able to access it
		
### Key Management Service
- Master Key => Data Key => Data

- Use to create and manage mster keys
- Disable, delete and mange the lifecycle of the keys
- Key points about the Data Key
    - The data key is in plain text.
    - You have to manage the data key.
- You can also use the Master Key from the Key Management services to encrypt data such as passwords
- The Master key can encrypt a maximum of 48KB of data
	
### Encryption as Rest
- Simple Storage Service
    - Easily enable encryption at rest for an objet or the entire bucket itself
    - Here there is no interruption ot operations on the bucket
    - You can use the Encryption provided by AWS or use the KMS Service
	
- Other services
    - Relational database service
        - Can only be done when the database is created
        - All data and logs are encrypted
    - DynamoDB
    - Elastic File System
    - EBS Volume
		
### Cloudwatch
- Monitoring and Loggin service available with AWS
- View different metrics for your AWS resources
- Example: EC2 Instances - Monitor the CPU Utilization over time
- Create alarms based on those metrics
    - Example: if CPU Utilization goves over 70% you can alert the IT Administration staff
- You can perform actions like stopping or rebooting an Instance if a threshold is reached
- You can create a Dashboard fo commonly viewed metrics
- You can send logs from vvarious services into Cloudwatch logs
- You can search the logs for patterns and trigger alerts

### Cloudtrail
- Achieve governance, compliance and enable operational and ricks audit for your AWS account
- Records all actions - user, role or AWS service
- All calls made via the console, Command Line interface, SDK or API
- Trail
- Configure
- Allows you to send Cloutrail events to S3 bucket
- These logs which are delivered can be encrypted using KMS
- Configure delivery to Cloudwatch logs - from here you can create a filter and configure a notification
- One specific region or all regions
- Advantages of all regions
    - All trails can be sent to one S3 bucket
    - If any regions are added in AWS this will automatically be configured
- Decide on recording or management
    - Control events - Creating a policy, role, VPC
    - Data Events - If someone gets an object in S3
		
### AWS Config
- Provide a detailed view of the resources in your AWS account
- Keeping track of all of your resources can be overwhelming
- Check for changes in a configuration item
- View details of the change
	
### Protecting Web Applications
- WAG (Web Application Firewall)
    - Web Application Security Risk (OWASP 10)
    - Cross Site Scripting
    - SQL Injection
    - Sensitive Data Exposure
    - Firewall
        - Firewall will have Rules; Rule will help filter the traffic
    - Managed Service
    - Helps protect Web applications sitting behind an Application Load Balancer and Cloudfront
    - You can define Rules for traffic
    - You can also buy off the shelf products for the rule and apply them
    - Here you can allow or block traffic based on the rules
		
### Penetration Testing
- Usage of tools and techniques to simulate attacks against a system / applications
- Helps to see how vulnerable a system is to attacks
- Famous Tools
    - Kali Linux
    - Metasploit - Vulnerability scanning
    - NMap
- If you want to conduct penetration testing - Then you need to get prior authroization from AWS first
- You need to fill out a form and get thir consent
- There are solutions available from the AWS Marketplace

### AWS Trusted Advisor
	
### AWS Inspector
- Can be used to detect security vulnerabilites in your AWS resources such as EC2 Instances
- Here you have an AWS Inspector agent that runs on the EC2 Instance
- It checks the system for vulnerabilities and gives a report
- The report has a classification for the non-compliance violations
- Steps:
    - First define your target - Tag you Instances
    - Then define the assessment
    - A Service role will be created for you
    - Then run the assessment
    - View the report
	
---
# Costing

### AWS Support Plans
- Basic
- Developer
- Business
- Enterprise
	
### AWS Costing

### AWS Organizations
- Provides central management for your AWS Accounts
- Consolidated billing feature for your accounts
- Can organize the accounts into different organization units
- Define different access policies for the OU
- You can Deny access to users and groups
	
### Total Cost of Ownership
- Cost of the System
    - Server
    - Application Server support
    - Hardware support
    - People cost
    - Maintenance
    - Database server
    - Database engine
- Pay as yoou go model
- No Upfront costs
- Make use of reserve pricing
- AWS costs reduce as they grow
- Turn off resources when not in use
#### Scenario 1 - Steady usage of servers that wil run almost 24*7
- Can use Reserved capacity which will save on cost in the long run
		
#### Scenario 2 - don't know utilization / no historical data / initial months will be expermentation on usge.
- Best to use On-Demand instance (when usage is low you can turn off additional resources)
		
---
# AWS Organizations

### Fault Tolerance and High Availability
- How well does your system respond to failures?
- How much downtime does your system undertake?
- How crucual is the system to the business?
- What can go wrong?
    - The EC2 Instance goes down
    - You apply a security patch (Applications go down)
    - You deploy an application update. (It goes down)
    - The database instance goes down
- If the EC2 Instance goes down or if the application updates causes failure
    - Have another instance either up and running or dynamically build it
    - Use Cloudformation
    - Use Amazon Machine Images
    - Have a load balancer because even in one instance goes down one will still be available
    - AWS RDS has features such as Multi-Availability Zones and Read Replica
    - Offset the failure on the database
    - There is an additional cost associated
    - You just need to do a cost/benefit analysis vs. the added cost
    - DynammoDB
    - Decoupling systems
    - If the worker process goes down don't know which tasks are remaining
		
### Disaster Recovery
- What happens if the entire region goes down
- AWS Services are built with high availability in mind for a particular region
- Disaster recovery scenarios
- Disaster Revovery Method
    1. Backup and Restore
        - Take snapshots of EBS Volumes
        - Keep AMIs ready
        - Store backups in S3 buckets in another region - Cross Region Replication
        - In case of a disaster restore everything
        - This method takes the most amount of time to get back up and running, but can be the most cost effective
    2. Pilot Light
        - Keep another minimum version of the system running
        - The main components are not running
        - Reduce the overall cost
        - Route 53
    3. Warm standby
        - Keep another running environment
        - But the backup is not accessible
        - Only if a disaster happens, then the failover happends
        - Route 53
        - High cost solution
    4. Multi Site
        - You have the same environment running in multiple regions
        - But you can distribute the weight of traffic
        - Route 52 Weighted Routing policy can be used to route traffic based on weights
		
    - Important points
        - Understand the cost implication
        - Test out the recovery process
        - See if the time to recover meets the business needs
        - See the replication techniques
            - Synchronous - between Availability Zones
        - Asynchronous - between Regions

---
# Data Analytics

### AWS Kinesis
- AWS Kinesis Data Streams
    - To put data records to the stream (AWS Kinesis put-record)
        - Kinesis API
        - Kinesis Producer Library
    - To get records from the stream (AWS Kinesis get-record - provide the shard iterator)
        - Kinesis API
        - Kinesis Consumer Library
    - You have to implement the code for the producer and the consumer
    - WHen you place records in the shard using the API you can get back the shard ID and the sequence number
	
- AWS Kinesis Firehose
    - Send data directly to a Simple Storage service
	
- AWS Kinesis Video Streams
	
	- AWS Kinesis Data Analytics
	
### AWS Athena
- Interactive query service
- That works with data stored in the Simple Storage Service (S3)
- Using standard SQL
- Serverless
- Only pay for the queries that are run
- Analyze unstrucured, semi-structured, and strucctured data in S3
- Like CSV, JSON or event Apalche Parquet or Apache ORC
- Setup is simple
    - First create a database in Athena
    - The create a table based on the underlying data format
    - When spcifying the data format, you also specify the use of SerDe (Serializer/Deserializer)
		
### AWS Redshift
- Columnar database
- Used for storing large amounts of data
- Data are housing solution
- Petabyte storage
- When to use redshift over a traditional row-based dattabase
    - When you need to store large amounst of historical data and perform analytics over the data
        - Ex: Calculating sum, averages, etc.
        - Grouping analytics
        - Analytics where the columns are searched more than the rows of data
    - Use Cases
        - An application can use MySQL to store transactional data
        - At the end of each year the transactional data can be shifted to Redshift for analytics
        - The transactional database can then be used for the new years data
  - When you insert data into a Redshift database it needs to be done in bulk
- Single row inserts are not efficient and shoud be avoided
    - Instead create a staging table with all of your data to be inserted
    - Merge the data from the staging table into your main table
		
### AWS QuickSight
- Visualization tool
- Work with various data sources
- Can also discover data sources
- First need to sign-up and start using it
	
### AWS Data Pipeline
- Web service that enables the movement and transformation of data
- Use case scenario
    - Daily job to transfer data from an EC2 Instance - Log files
    - These files can be transferred S3 on a daily basis
    - The files can then be processed by an EMR cluster
    - Task 1 - Transfer to log file to S3
    - Task 2 - Launch an EMR cluster to process the files
    - All of these tasks are then part of a data pipeline
    - Example - export data from a DynamoDB to S3
