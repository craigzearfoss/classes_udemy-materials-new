## Benefits of moving to cloud computing
- Trade capital expense for variable expense
- Benefit from massive economies of scale
- Stop guessing about capacity
- Increase speed and agility
- Stop spending money running and maintaining data centers
- Go global in minutes
	
### Note that:
- You do not gain greater control of the infrastructure layer as AWS largely control this
- Though AWS is compliant with lots of security compliance programs, not all programs in all local countries will be included
	
## Cost considerations when moving to AWS
- AMIs of the servers (Some have licensing fees)
- Instance types of the servers / Compute hardware
- The number of servers migrated (you will reduce the physical management of these)
- Compute capacity of the database server
- Amount of data egress
- No charge for VPCs, IAM users or data ingress
- Data center security
- The following have to be paid both for on-premises and the cloud so there is little difference
    - Firewall management
    - Application licensing
    - Operating system patching
	
## Benefits of using the AWS Managed Services
- Provides simple and efficient means to make controlled changes to your infrastructure
- Enables you to quickly and easily make the request through a dedicated self-service console
- Manages the daily operations of your AWS infrastructure in alignment with ITIL processes
- Provides a baseline integration with IT Service Management (ITSM) tools such as the ServiceNow platform
- Provides ongoing management of your AWS infrastructure so you can focus on your applications
- Implements best practices to maintain your infrastructure to help to reduce your operational overhead and risk
- Currently supports the 20+ services most critical for Enterprises and will continues to expand
- Designed to meet the needs of Enterprises that require
    - Stringent SLA
    - Adherence to corporate compliance
    - Integration with their systems and ITIL®-based processes
	
## Advantages of using the AWS cloud computing over legacy IT
- You don't need to worry about over-provisioning because you can scale elastically
- You can bring products to market faster

## Agility of AWS Cloud
- Pay as you go
- Infrastructure scalability; use resources based on demand (teminate whenever required)
	
### AWS Free Tier enables you to gain free, hands-on experience with the AWS platform, products, and services and is valid of 12 months
	
### Instance type is determined by the amount of CPU and Memory that is allocated to the instance.

## AWS Regions
- Geographical areas that are used to host resources
- Each region consists of 2 or more availability zones
- Each region is designed to be completely isolated form the other Amazon Regions
- Use multiple Regions when application is mission critical and afford little downtime , even in case of disaster (ie. high availability)
- If you need to have a disaster recovery mechanism in place , then plan to place your resources in multiple regions
- Have direct, low-latency, high throughput and redundant network connections between each other
- You should put resources in regions closest to the customer for lower latency and better user experience
- VPCs exist within accounts on a per region basis
- You can get 5 Elastic IP addresses per region by default
	
## AWS Availability Zones
- Logical representations of one or more data centers
- They are physically separate and isolated from each other
- Good to use multiple AZs for high availability and fault tolerance
- In case a Region goes down you should use AZs in multiple Regions to increase fault tolerance
- They have direct, low-latency, high throughput and redundant network connections between each other
- You can create one or more subnets within each Availability Zone

## AWS Data Center
- Physical location where the hardware is placed for hosting AWS resources

---
# PRODUCTS AND SERVICES
## AWS Management Console
- Allows you to manage services through a web-based user interface
- The link to access the AWS Management Console is https://AWSAccountID.signin.aws.amazon.com/console
- You need a user name and password to log in

## Amazon EC2 (Elastic Cloud Compute)
- The equivalent of a virtual server
- EC2 servers are placed in the AWS Virtual Private Cloud.
- You only pay for what you use
- To enabling an EC2 web server to serve web pages on the Internet you need to configue
    - Security group rules configured to allow HTTP/HTTPS
    - A public IP address assigned to an instance in a public subnet
    - An Internet Gateway attached to the VPC
    - An entry in the route table for the subnet that points to it
- A private IP address will always be assigned to instances in EC2, but these do not enable access from the Internet
- You cannot add a public elastic IP address to an EC2 instance in a private subnet or update security group rules to allow connectivity
    - Deploy a bastion host server into a public subnet and use that to jump across from the public subnet to the private subnet
- Key pairs are created in EC2 and are used for encrypting logon information when loging in to EC2 instances
    - Key Pairs unique to the region in which you have created them
    - A key pair is required to decrypt the Administrator password of a newly launched Amazon EC2 Windows instance
        - You can decrypt it through the console or using the CLI
- A primary key is required to securely log into Linux-based instances
- An access key and secret ID are associated with IAM accounts and are used for signing programmatic requests
- For Windows based instances, the private key file can be used to generate a password
- User data
    - You can pass user data to the instance to specify a script to be run during launch
        - You can pass two types of user data to Amazon EC2
            1. Shell scripts
            2. Cloud-init directives
        - User data is limited to 16KB
        - User data and meta data are not encrypted
- Can you used to host an RDS compatible relational database if you are not able to use the managed RDS
- You can manually install the database software of your choice
- NOT integrated with KMS encryption 
- Benefits over non-cloud servers
    - Elastic web-scaling
        - Increase or decrease capacity within minutes not hours
        - Commission one to thousands of instances simultaneously
    - Inexpensive
        - Charging very low rates base on a capacity consumed
- Does not provide any control of the hypervisor or underlying hardware infrastructure
- EC2 is NOT integrated with KMS encryption
- Amazon does not offer fault tolerance for EC2, you need to design this into your application stack (and assume things will fail)
- Highly reliable environment where replacement instances can be rapidly and predictably commissioned with Service Level Agreements (SLAs) of 95% for each region
- From the EC2 Management Console you can
    - Manage Elastic Load Balancing
    - Manage Auto Scaling
    - Manage Snapshots
- Standard pricing model includes:
    - Data tranfer out
    - Number of requests
    - Storage used
- Allow root level access to the operating system
- Root storage devices that are available for EC2 instances (ie. can be booted)
    - Instance Store
    - EBS volume
- Managed at a regional (rather than global) level
- Network Address Translation (NAT) instances are used by EC2 instances in private subnets to access the Internet
- Hourly billing based on usage
    - Billing timeframes for on-demand EC2 instances are:
        - Per hour
        - Per second (only for Amazon Linux and Ubuntu)
- You are charged for:
    - Compute uptime of the instance based on the family and type you chose
    - Amount of data provisioned
- You do not pay for:
    - Basic monitoring (detailed monitoring is charged)
    - Amazon Machine Images (AMIs) 
    - Private IP addresses
- You can reserve EC2 instances
- A launch configuration is the template used to create new EC2 instances and includes parameters such as:
    - Instance family
    - Instance type
    - AMI
    - Key pair
- When an EC2 instance is terminated:
    - Root EBS volumes are deleted by default
    - Non-root EBS volumes are retained by deffault

## Amazon Simple Storage Service (S3)
- Meant for storing objects that are accessed frequently
- Offers object-based storage which is flat file storage (so you cannot install applications or format)
- Objects are redundantly stored on multiple devices across multiple facilities in an Amazon S3 region
- Object-level, not file-level, storage system
- The two components are:
    - Buckets (root level folders)
    - Objects (files, images, etc. that you upload)
- S3 objects consist of:
    - Key (name of the object)
    - Value (data made up of a sequence of bytes)
    - Version ID (used for versioning)
    - Metadata (data about the data that is stored)
- You can create folders within buckets and also upload objects
- HTTP responses when uploading an object:
    - 200 codes indicates a successful upload
    - 300 code indicates a redirection
    - 400 code indicates a client error
    - 500 code indicates a server error
- Automatically scales in both capacity and performance as required
    - You don't need to specify any capacity at any time
- Provides maximum availability and durability
- Use to store critical objects or files
- For storing of objects such as files, videos and pictures (even when they will be processed at a later time)
- Every object will get a URL which can be used to download the object
- Maximum file size is 5TB
- Naming rules
    - Must be from 3 to 63 characters in length
    - Can only contain lowercase letters, numbers and hyphens
    - Cannot be formatted as an IP address
    - Must be unique across all of AWS
- Global namespace but buckets and objects are created within a region
- Versioning cannot be disabled, only suspended
- You don't need to specify any capacity
- You cannot reserve capacity because it is a pure pay as you go service
- Objects can be versioned to help prevent accidental deletion
- Use MFA delete to add a layer of additional security to prevent accidental deletion
- Available data consistency models
    - Read after write consitency for PUTS of new objects
    - Eventual consistency for overwrite PUTS and DELETES
- Can be used as a static website
    - Use Bucket Policies to make the entire bucket public
    - Ensure that you are not blocking access at the account level
    - The minimum files you need to upload are:
        - Index.html
        - Error.html
- Data never leaves that region unless explicitly configured to do so through cross-region replication (CRR)
    - Configured at the bucket level
    - Versioning must be enabled for both the source and destination buckets
- Objects within a bucket are replicated within a region across multiple AZs (except for the One-Zone IA class)
- Uploading files directly to S3 features multi-part upload and transfer acceleration
- Features associated with uploading files directly to S3
    - Multi-part upload
    - Transfer Acceleration
        - Uses CloudFront’s globally distributed edge locations to provide fast file transfers over long distances
        - Reasons to use Transfer Acceleration include
            - You have customers that upload to a centralized bucket from all over the world
            - You transfer gigabytes to terabytes of data on a regular basis across continents
            - You underutilize the available bandwidth over the Internet when uploading to Amazon S3
- Accessed via RESTful protocol over HTTP
    - HTTPS protocol is used if you want to encrypt files as they are transmitted over the Internet to an Amazon S3 bucket
        - HTTPS works on port 443 and requires an SSL Certificate
- You can use Lifecycle Management to automatically move objects from one storage class to another
- S3 Event Notifications is a feature that notifies you when certain events happen in your S3 bucket
- You need to grant public access and read/write access if you want to be able to access files over a web browser
    - Also ensure that you are not blocking access at the account level
- Use the AWS Configure command and your Access Key ID and Secret Access Key to enable full S3 access from an EC2 Instance
- Cost determined by
    - Storage Class
    - Amount of storage
- Cannot be mounted and used as a virtual hard drive (For this use EBS)
- You cannot create nested buckets
- Has a regional (rather than a global) scope (even though namespaces are global)
- Notifications can be sent to
    - SNS Topics
    - SWS Queues
    - Lambda functions
- Permissions can be granted at the bucket level and the individual file level by:
    - Bucket Policies
    - Access Control Lists
		
### Amazon S3 Standard
- Provides immediate retrieval but is not less cost-effective compared to Standard-Infrequent access
- Stores data in a minimum of three Availability Zones 
- Availability Service Level Agreement (SLA) is 99.999999999%
- Charges for:
    - Per GB/month storage fee
    - Data transfer out of S3
    - No data retrieval fee

###	Amazon S3 Standard-Infrequent Access (S3 Standard-IA) 
- For objects retrieved infrequently, but must be available for retrieval immediately
- Stores data in a minimum of three Availability Zones 
- Offers the high durability, high throughput, and low latency of S3 Standard
- Has a minimum storage duration charge of 30 days
- Availability Service Level Agreement (SLA) is 99.99%
- Charges for:
    - Minimum capacity charge per object
    - Data retrieval fee
			
### Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) 
- For objects retrieved infrequently, but must be available for retrieval immediately
- Cheaper than S3 Standard-IA
- Stores data in a single Availability Zone
- Has a minimum storage duration charge of 30 days
- Lower durability than S3 Standard-IA
- Availability Service Level Agreement (SLA) is 99%
- Charges for:
    - Minimum capacity charge per object
    - Data retrieval fee
			
## Amazon Instance Store
- Type of ephemeral block-based volume that can be attached to a single EC2 instance at a time (not persistent)
- Block-based storage device
- More limited in compatibility with EC2 instance types than EBS

## Amazon Elastic Block Storage (EBS)
- A virtual hard disk in the cloud
- Provides persistent block-level storage volumes for use with Amazon EC2 instances
- Block storage means you can mount the volume for operating systems and format and partition as if it is a local disk (not NFS)
- Can only be accessed by EC2 instances from the same Availability Zone 
- Can be considered a "virtual hard disk in the cloud"
- Create an EBS volume and attach to an EC2 instance to store data
- EBS Instance must be in the same Availability Zone where the EC2 Instance resides
- You CAN attach multiple EBS volumes to an EC2 Instance.
- You CANNOT connect multiple EC2 instances to a single EBS volume (instead use EFS)
- EBS volumes can be backed up by taking a snapshot
- EBS volume data persists independently of the life of the instance
- The root EBS device is the volume the OS boots from
- When an EC2 instance is terminated:
    - Root EBS volumes are deleted by default
    - Non-root EBS volumes are retained by deffault
- Integrated with KMS encryption
- Both non-root and root can be encrypted if launched from an encrypted AMI
- EBS volume types
    - General purpose SSD (gp2) 
        - Up to 10,000 per volume 
        - 3 IOPS per GiB and can burst up to 3000 IOPS (volumes > 334GB)
        - Suggested for boot volume for most workloads
        - Provides a good balance of price to performance
    - Cold HDD (sc1) 
        - Good for throughput oriented storage for infrequently accessed data 
        - Up to (250 or 500) IOPS per volume 
        - Cannot be used as a boot volume
    - Provisioned IOPS (io1) 
        - Built for High Input and Output operations
        - Up to 32,000 IOPS per volume
        - Up to 50 IOPS per GiB
        - High performance applications that require sustained IOPS
        - Good for databases
        - Expensive
    - Throughput Optimized HDD (st1) volumes
        - Up to 500 IOPS 
        - Ideal for streaming workloads with fast throughput such as big data and data warehouses
- Integrated with KMS encryption 
- Fundamental charges are:
    - The amount of data storage provisioned (not consumed)
    - Provisioned IOPS
    - You pay for the storage consumed by snapshots, not by the number of snapshots

## Amazon Elastic File System (EFS)
- Fully-managed service that makes it easy to set up and scale file storage in the Amazon Cloud
- Built to elastically scale on demand without disrupting applications
- Allows you to connect hundreds or thousands of EC2 instances concurrently
- Allows you to connect to storage from on-premise servers using standard file protocols
- Uses the NFSv4.1 protocol
- EFS filesystems are mounted using the file-level NFS protocol
- One EFS can be connected to multiple Amazon EC2 instances and on-premises servers can simultaneously (unlike EBS)
    - Can concurrently connect 1 to 1000s of EC2 instances, from multiple Availability Zones
    - So applications that scale beyond a single instance can access a file system
- Access to EFS file systems from on-premises servers can be enabled via:
    - Direct Connect
    - An IPSec site to site VPN Connection between your on-premises datacenter and your Amazon VPC
- You mount an EFS file system on your on-premises Linux server using the standard Linux mount command for mounting a file system via the NFSv4.1 protocol
- A network filesystem, not a virtual hard disk so:
    - It cannot have an operating system installed
    - It cannot be formatted and used as a locally attached disk
- Has a regional (rather than a global) scope

## Amazon Snowball
- Offers a petabyte-scale data transport solution
- Uses devices designed to be secure to transfer large amounts of data into and out of the AWS Cloud
- Bypasses the Internet and offers a reliable method to get large amounts of data uploaded into the cloud
		
## AWS Snowmobile
- The first exabyte-scale data migration service that allows you to move very large datasets from on-premises to AWS

## AWS Glacier
- Best solution for storing archive data (cold storage that is not frequently accessed)
- Retrieval time normally takes 3-5 hours
- Expedited retrieval takes 1-5 minutes but there is an additional charge
- Has a minimum storage duration charge of 90 days
- Far cheaper than S3 storage
- There is a charge for data retrieval
- There is not Service Level Agreement (SLA) 
- Put object in Glacier by:
    - S3 lifecycle policies
    - Glacier API
- Maximum size of a single Amazon Glacier Archive is 40TB
- You can store an unlimited number of archives and an unlimited amount of data in Amazon Glacier
- Stores objects as a collection in an archive file format like a tar or zip file
- Charges are for:
    - Data storage
    - Retrieval requests

## Amazon EBS Snapshots
- Used to take a backups of EC2 instance and EBS Volumes
- Creates a point-in-time copy of the instance
- Snapshots are stored on S3
- Snapshots are incremental
- Only the most recent snapshot is required to restore an EBS volume
		
## Amazon Data Lifecycle Manager (DLM)
- Automates the creation, retention, and deletion of snapshots taken to back up your Amazon EBS volumes

## Cross Region Replication
- Used to replicate Amazon S3 buckets that are across regions
- The replication is asyncrhonous
- Amazon does not replicate data across Regions automatically
- Buckets configured for cross-region replication can be owned by the same AWS account or by different account
- Only use this if you are not restricted by any compliance laws
- Use to protect Amazon S3 data from a regional disaster
- Lifecycle actions CANNOT be configured to move to another storage class in a different region

## Amazon Auroura
- MySQL / Postgres compatible relational database engine from Amazon
- 5 times faster than MySQL and 3 times faster than Postgres
- Data is replicated 6 ways, across 3 AZs by default
- A MySQL and Postgres RDS offering from Amazon
- Implementing a Multi-Master configuration adds the ability to scale out write performance across multiple Availability Zones
    - Allows applications to direct read/write workloads to multiple instances in a database cluster
    - Higher availability
- Cost effective

## Amazon DynamoDB
- Fully managed NoSQL database on the AWS Cloud
- You need to specify the read/write capacity of the DB
- Stores three geographically distributed replicas of each table 
    - Enables high availability and data durability
    - Synchronously replicates data across 3 facilitiess within a region
- Seamless scaling with no downtime
- Often used for storing session state to maintain a stateless architecture
- Delivers reliable performance at any scale
    - Automatically adjusts the read and write throughput for you
- Runs exclusively on Solid State Drives (SSDs)
- Stores items, based on key-value pairs (not objects)
- Does not support to complex queries and joins
- Best strategy for storing large items and attributes in Dynamo DB
    - Compress large attribute values
    - Store large attributes in S3 and store the Amazon S3 object identifier in your DynamoDB item
- Pricing models are:
    - Provisioned capacity mode
        - You specify the number of reads and writes per second that you expect your application to require
        - You can use auto scaling to automatically adjust your table’s capacity based on the specified utilization rate
    - On-demand capacity mode
        - You do not need to specify how much read and write throughput you expect your application to perform
        - Charges you for the data reads and writes your application performs on your tables
        - DynamoDB instantly accommodates your workloads as they ramp up or down
- Terminology:
    - WCUs - write capacity units
    - rWCUs - replicated write capacity units
- When using Global Tables
    - You are charged based on the resources associated with each replica table
    - Write capacity for Global Tables is represented by replicated write capacity units (rWCUs) instead of standard write capacity units (WCUs)
- Can be used for storing session state for stateless web applications
			
## Amazon DynamoDB Accelerator (DAX)
- Fully managed, highly available, in-memory cache for DynamoDB
- Delivers up to a 10x performance improvement - from milliseconds to microseconds (even at millions of requests per second)
- Does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables without requiring developers to manage cache invalidation, data population, or cluster management
			
## Amazon RDS
- Relational database and is primarily used for transactional workloads
- It is consider a Platform as a Service (PaaS)
- Transactional databases
- You need to select the instance size for the DB
- Supports complex queries and joins and is suitable for a transactional database deployment
- To increase fault tolerance enable multiple Availability Zones as a failover mechanism (database is synchronously replicated)
    - There is no option for multiple region failover of Amazon RDS
    - Standby replica cannot serve read requests
    - They are designed to provide enhanced database availability and durability, rather than read scaling benefits
- For disaster recovery in case the primary region fails use Cross Region Read Replicas
- Read Replicas
    - Used for offloading read traffic from the primary RDS database
    - Replication is asynchronous
    - Can be configured within an AZ, across AZs, and across regions
        - You cannot specify the subnet or data center to deploy a read replica in
        - There are costs for replicating data between AZs and regions
    - Cannot be used for writing and or to failover the primary
- There is no such thing as write replicas
- Supported database engines are
    - SQL Server
    - Oracle
    - MySQL Server
    - PostgreSQL
    - Aurora
    - MariaDB
- You can create read replicas with MySQL, Postgres and Aurora
    - Microsoft SQL enable you to create read replicas
- Offers free backup up to the size of your database
    - RDS Automated Backups are stored in S3
    - Retention period for Amazon RDS automated backups can be between one day and 35 days
- You can restore a DB instance to a specific point in time with a granularity of 5 minutes
    - Uses transaction logs which it uploads to Amazon S3 to do this
- Integrated with KMS encryption
- Cost determined by
    - Type and size of the database
    - Outbound data transfer
    - Deployment type (you pay more for multiple Availabilty Zones)
    - Additional storage of backup (above the DB size)
    - Hours of use (uptime)
    - Number of requests
- DB mirroring, multi-subnet and clustering are NOT options provided by RDS
- Advantages of using Amazon RDS
    -  Easy to scale by increasing your instance type
    - You can also implement fault tolerance and scalability features through multi-AZ and read replicas easily
- Shared responsibilites are
    - Amazon
        - Ensuring database infrastructure
        - Patching of DB instances
        - Storing data
    - Customer
        - Optimizing the database and optimizing queries
        - Optimization of applications using the datase
        - How your applications interface with the RDS endpoints
        - Read/write to the database
- You can reserve RDS's
- Integrated with KMS encryption

## AWS Elastic Beanstalk
- Used to quickly deploy different types of development environments
- The fastest and simplest way to get web applications up and running on AWS
- Developers just need to upload their code to the provisioned environments in AWS Elastic beanstalk
- It is considered a PaaS service (Platform as a Software) and more focused on deploying EC2 applications
- Can be used with .Net, Java or even custom Docker environments
- More AWS expertise is required than for Lightsail because you still need to deploy within a VPC
- Can upload code from a Git repository and have the service handle the end-to-end deployment of the resources

## AWS Database Migration Service (DMS)
- Helps you migrate databases to AWS quickly and securely
- The source database remains fully operational during the migration
- Can migrate data to and from most widely used commercial and open-source databases

## AWS Server Migration Service (SMS)
- Agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS
- Makes it easier for you to coordinate large-scale server migrations.
- Allows you to automate, schedule, and track incremental replications of live server volumes
- The types of servers that can be migrated include
    - VMware vSphere VMs
    - Windows Hyper-V VMs

## AWS Batch
- You package the code for your batch jobs, specify their dependencies, and submit your batch job using:
    - AWS Management Console
    - Command Line Interfaces (CLIs)
    - SDK

## Amazon Lambda
- Fully managed AWS compute service (Just add your function code and AWS will create the infrastructure in the background.)
- Provides serverless functions, not preconfigured servers
- Allows you to run code without provisioning or managing servers
- You pay only for the compute time you consume - there is no charge when your code is not running
- You to implement real-time auditing by using Lambda to scan logs
- Composed of functions triggered by events
- The code you run on AWS Lambda is called a "Lambda function"
- An event source is an AWS service or developer-created application that produces events that trigger Lambda function
    - Supported event sources
        - Amazon DynamoDB
        - Amazon S3 Bucket changes
        - Messages added to an Amazon SQS queue
        - Amazon Kinesis
        - Others
- Has a regional (rather than global) scope
- No persistent storage
- Proprietary (that is NOT opens source)
- Benefits include
    - Continuous scaling (scale out)
    - No servers to manage

## AWS Lambda Scheduled Events
- These events allow you to create a Lambda function and direct AWS Lambda to execute it on a regular schedule
- Can help to automate a company's IT infrastructure

## Amazon VPC (Virtual Private Cloud)
- Virtual Private Cloud that is used to host EC2 resources (The underlying place where the EC2 servers are placed.)
- Provides you with your own dedicated virtual network in the cloud.
- It is logically isolated from other virtual networks in the AWS Cloud
- Can create a secure connection between on-premise and AWS
- Can be used to create the equivalent of a data center on the AWS Cloud
- A VPC spans ALL Availability Zones within a region
- VPCs do not span regions
- Contains a Route Table that is used to control how traffic is routed within the VPC
- VPCs are not limited by subnets
    - Subnets are created within AZs and you can have many subnets in an AZ
- VPC peering is a way of allowing routing between VPCs in different AWS accounts
- From the VPC Management Console you can:
    - Manage subnets
    - Manage endpoints
    - Configure Security Groups
    - Manage the IP CIDR block for the VPC (Classless Inter-Domain Routing)
- You can have multiple CIDR blocks in a VPC
- Can connect to an Amazon VPC from an on-premise data center by
    - Direct Connect
    - VPN CloudHub
- Internet Gateway 
    - Use to connect a public subnet to the Internet (egress)
    - A VPC can have only one Internet Gateway
    - An internet gateway is a horizontally scaled, redundant, and highly available
    - Imposes no availability risks or bandwidth constraints on your network traffic
    - Two purposes: 
        - Provide a target in your VPC route tables for internet-routable traffic
        - Perform network address translation (NAT) for instances that have been assigned public IPv4 addresses
    - You need a Virtual Private Gateway to make VPN connections to a VPC (Cannot use an Internet Gateway)
        - A Virtual Private Gateway is the VPN concentrator on the Amazon side of the VPN connection
        - You create a virtual private gateway and attach it to the VPC from which you want to create the VPN connection
    - Cannot use an Internet Gateway as a bastion host, deploy an EC2 instance in a public subnet for this purpose
    - Cannot connect instances in a private subnet to the Internet using an Internet Gateway
        - NAT instance
            - Allows resources in private subnets to access the Internet
        - NAT Gateways
            - Elastically scalable
            - Managed by AWS
            - Provide automatic HA
            - You cannot assign a NAT Gateway to a security group, use them as bastion hosts, or configure port forwarding
            - A NAT Gateway cannot be used for proxying inbound connections
            - NAT Gateway charges include
                - Price per gateway hour
                - Price per GB processed (regardless of the traffic’s source or destination)
        - Advantages of NAT Gatways over NAT instances include:
            - Managed for you by AWS
            - Highly avialable within each availablility zone
- Network Access Control Lists (NACLs) are stateless firewalls that are applied at the Subnet Level
- The default Network Access Control List (NACL) is set to allow all inbound and outbound traffic
    - If you deploy a custom NACL, then all inbound and outbound traffic is blocked
- VPC endpoints enable private connectivity to services hosted in AWS from within your VPC
        - There is not need for Internet Gateways, VPNs, Network Address Translation (NAT) devices, or firewall proxies
- VPC Wizard options are:
    - VPC with a Single Public Subnet
    - VPC with Public and Private Subnets
    - VPC with Public and Private Subnets and Hardware VPN Access
    - VPC with a Private Subnet Only and Hardware VPN Acces
- Subnets are created in a single Availabity Zones (ie they cannot span multiple Availability Zones)
    - Each subnet in a VPC is mapped to all Availability Zones in the region
- The following can be configured in the VPC section of the AWS Management Console
    - Endpoints
    - Subnet
- Free of charge
	
## AWS VPN (Virtual Private Network)
- Used to also connect your on-premise infrastructure to AWS over the internet
- Can be used to quickly connect from an office to an Amazon VPC
- Not a dedicated connection like Direct Connect
- A private network link to the AWS cloud can be provisioned using an IPSec VPN
- VPC routers are NOT part of the VPN configuration
- A Virtual Private Gateway is the VPN concentrator on the Amazon side of a VPN connection
- A Customer Gateway is a physical device or software application on your side of a VPN connection

## AWS Direct Connect
- Establishes a private dedicated network connection (pipeline) between your on-premises datacenter and AWS (like AWS VPN CloudHub)
- Creates a private connection to a specific region
- Can establish private connectivity between AWS and your data center, office, or co-location environment
- Provides high bandwidth and low latency
- Provides between 1GB and 10Gbps network connectivity
    - Can easily provision multiple connections if you need more capacity
- Avoids the need to utilize VPN hardware that frequently can't support data transfer rates above 4 Gbps
- Takes weeks to months to setup
- Much more expensive than AWS VPN
- Does NOT provide security
- It is NOT part of the configuration of an Amazon Managed VPN connection
- Can create connections for hybrid IT architectures
- An AWS Direct Connect gateway can connect your AWS Direct Connect connection over a private virtual interface to one or more VPCs in your account that are located in the same or different Regions
- The scope of connectivity is
    - Connect to all Availability Zones within the VPC of the local region over a private virtual interface (VIF)
    - You can connect to public services in remote regions using a public VIF and IPSec
    - To connect to private VPCs in other regions you need a Direct Connect Gateway
- When connecting to AWS over AWS Direct Connect
    - You can connect to all of the AZs within the VPC of the local region
    - You can connecto to public servers in remote regions

## AWS Managed VPN
- Type of IPSec VPN
- Uses the public Internet
- Fast to setup
- Uses the public Internet and therefore latency is not as good and is unpredictable (unlike Direct Connect)
		
## AWS VPN CloudHub
- Can connect from your on-premise data center to a VPC (like Direct Connect)
- Can provide multiple VPN connections
- Can provide secure communication between sites
	
## AWS Storage Gateway
- Service that enables hybrid storage between on-premises environments and the AWS Cloud
- Provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services
- Supports three storage interfaces:
### File Gateway
- Provides a virtual on-premises file server
- A file gateway is not a mode but a different type of AWS Storage Gateway that provides a virtual on-premises file server
- Enables you to store and retrieve files as objects in Amazon S3
		
### Volume gateway
- Family of gateways that support block-based volumes
- Previously referred to as gateway-cached and gateway-stored modes
    - Operates in 2 modes:
        - Stored Volume mode 
            - The entire dataset is stored on-site and is asynchronously backed up to S3 (EBS point-in-time snapshots). 
            - Snapshots are incremental and compressed
        - Cached Volume mode
            - The entire dataset is stored on S3 and a cache of the most frequently accessed data is cached on-site
					
### Gateway Virtual Tape Library
- Used for backup with popular backup software such as NetBackup, Backup Exec and Veeam.
- You get one media changer and ten tape drives
- These tape drives and the media changer are available to your existing client backup applications as iSCSI devices
- Virtual Tape Library is not a mode but a gateway that is preconfigured with a media changer and tape drives
		
## Amazon API Gateway
- One of the app-facing component of the AWS Serverless infrastructure (the other is AWS Lambda)
	
## AWS Step Functions
- An orchestration service
- Lets you coordinate multiple AWS services into serverless workflows so you can build and update apps quickly
- Makes it easy to coordinate the components of distributed applications as a series of steps in a visual workflow
- Lets you build visual workflows that enable fast translation of business requirements into technical requirements
		
## Autoscaling
- Automatically scales up resources based on the demand 
- When the demand goes down the instances can be terminated

## Amazon Lightsail
- Provides preconfigured virtual private servers (instances) that include everything required to deploy and application or create a database
- Includes everything you need to launch your project quickly
    - Virtual machine
    - SSD-based storage
    - Data transfer
    - DNS management
    - Static IP
- The product set includes 
    - Virtual private servers (instances)
    - Managed MySQL databases
    - HA storage
    - Load balancing
- You can connect to other AWS services such as S3, DynamoDB, and CloudFront, however these are not part of the Lightsail product range
- Does not require knowledge of how to configure VPCs, security groups, network ACLs etc
- Fixed monthly price
- You can manage your instances using
    - Lightsail console
    - Lightsail API
    - Lightsail command line interface (CLI)

## Amazon SageMaker
- Fully-managed platform that enables developers and data scientists to quickly and easily build, train, and deploy machine learning models at any scale
- Removes all the barriers that typically slow down developers who want to use machine learning

## Amazon Route 53
- Highly available and scalable Domain Name System (DNS) service
- It offers the following functions
    - Domain name registration
    - DNS resolution
    - Health checking of resources (verify Internet connected resources are reachable, available and functiona)
- Can be used to distribute traffic across regions
- A hosted zone is a collection of records for a specified domain in Route 53
- Globally (rather that regionally) scoped
- Transfering domains to Route 53
    - You can transfer domains to Route 53 if the Top Level Domain (TLD) is supported
    - You can transfer Route 53 hosted domain to another registrar by contacting AWS (Not via the console)
	    - It does not migrate the hosted zone by default (optional)
- Supported record types are
    - CNAME records 
	    - Use to resolve a domain name to a target domain name for a record that is hosted externally to AWS
	- Alias records
	    - Used to map resource record sets in your hosted zone to 
	        - Amazon Elastic Load Balancing load balancers
	        - Amazon CloudFront distributions
	        - AWS Elastic Beanstalk environments
	        - Amazon S3 buckets that are configured as websites
    - Others
- An Alias record can be used for resolving apex / naked domain names (e.g. example.com rather than sub.example.com)
- Routing policies include:
    - Simple
    - Weighted 
	    - Allows you to specify a numerical value per IP address, totaling 100, that favors addresses with higher values
    - Latency based
	    - AWS tries to route to the region with the lowest latency
    - Failover
	    - Provides failover to a secondary IP address and is used for active-passive configurations
    - Geo-location
	    - Enables you to direct traffic based on the user's location
	    - Contains users within a particular geography and offers them a customized version of the workload based on their specific needs
	    - Caters to different users in different countries and different languages
    - Geo-Proximity
    - Multi-Value
    - Traffic Flow
- Does not support connecting on-premises data centers to the cloud - this is done by Direct Connect
- Does not support DHCP, routing or caching
	
## Elastic Load Balancer (ELB)
- Automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, and IP addresses)
- Provides fault tolerance for applications by automatically balancing traffic across while ensuring only healthy targets receive traffic
- Can be used to distribute incoming traffic across to resources evenly
- Can distribute incoming traffic across your Amazon EC2 instances in
    - A single Availability Zone
    - Multiple Availability Zones
    - NOT across regions (for regional resilience)
- Capable of handling rapid changes in network traffic patterns
- Primay benefits:
    - Elasticity
    - High availability
- Increases availability and fault tolerance
- Cannot distribute traffic across regions (To do that use Route 53)
- Helps to ensure scalability of the Instances based on demand
- Operates at the connection layer (layer 4) 
- Supports IP addresses as targets
- Elastic Load Balancers can be either
    - Publlic facing
	    - Have public IP addresses
	    - Require an Internet Gateway
	    - Route traffic to the private IP addresses of EC2 instances
    -  Internal only
- It can be used in conjunction with Auto Scaling
- Listener - a process that checks for connection requests, using the protocol and port that you configure
    - Rules - defined for a listener and determine how the load balancer routes requests to the targets in one or more target groups
	    - Each rule consists of:
	        - A priority
	        - One or more actions
	        - An optional host condition
	        - A optional path condition
	    - Each rule action has:
	        - A type
	        - An order
	        - Information required to perform the action
	    - Each listener has a default rule, and you can optionally define additional rules
	    - Supported action types:
	        - ???
	    - Two types of rule conditions:
	        - Host
	        - Path
	    - Each rule can have up to one host condition and up to one path condition
- Public facing Elastic Load Balancers
    - Have public IP addresses
    - Route traffice to the private IP addresses of EC2 instances
			
## Application Load Balancer (ALB)
- Layer 7 (process traffic at the HTTP / HTTPS level based on the content of the request, inlcuding host field or URL path)
- Allows you to assign Static Elastic IP Address per subnet
		

## Network Load Balancer (NLB)
- Layer 4 (Processes traffic at the TCP level)
- Routes traffic based on IP protocol data
	
## Classic Load Balancer (CLB) 
- Layer 4 and Layer 7 (processes traffic at the TCP, SSL, HTTP and HTTPS levels)
- Routes traffic using the TCP, SSL, HTTP and HTTPS protocol information
- The oldest of the three load balancers
		
## Amazon Redshift (database)
- Fully managed, petabyte-scale data warehouse service
- Analytics database
- Specifically designed for Data Warehousing and Business Intelligence (BI) applications
- Particularly suited to analytic and reporting workloads against very large data sets
- Makes it simple and cost-effective to analyze all your data across your data warehouse and data lake
- Uses columnar data storage
- Can aggregate data from multiple sources
- Can start with a few hundred GBs and scale to a petabyte or more
- Can be used for warehousing analytical data
- Ideal for performing back office analysis
- Not for transactional databases
- Operates at less than a tenth the cost of traditional solutions
- Achieves efficient storage and optimum query performance through a combination:
    - Massively parallel processing (MPP)
    - Columnar data storage
    - Targeted data compression encoding schemes
- Can be reserved
	
## Total Cost of Ownership Calculator (TCO Calculator)
- Free tool to estimate the cost savings of using the AWS Cloud vs. using an on-premised data center
- You Should consider:
    - Type of operating system (software licensing)
    - EC2 and/or Database instance sizes
    - The number of servers
	
## AWS Simple Monthly Calculator
- Helps users to work out and estimate their monthly costs for AWS Workloads more efficiently
	
## AWS Budgets
- Gives you the ability to set custom budgets 
- Can set alerts for when your costs or usage exceed your budgeted amount
		
## AWS Identity and Access Management (IAM)
- Enables you to manage access to AWS services and resources securely
- Used for managing users, groups, and roles in AWS
- Allows you to assign permissions via policies to the users
- Authenticate => authorize => gain access
- Managed at a global level (universal) and does not apply to regions
- By default new users are created with NO access to any AWS services – they can only login to the AWS console
- Best practices
    - Create individual IAM users
    - Grant least privilege
        - Determine what users need to do and then craft policies for them that let the users perform only those tasks
    - Use groups to assign permissions to IAM users
    - Avoid embedding access keys in application code
    - Enable MFA for privileged users (not everyone)
- Most policies are stored in AWS as JSON documents
- Password Policies include
    - Complexity level
    - Number of passwords to remember
    - Length of password
- Authentication methods are
    - Server certificates
    - Access keys

### IAM Access Keys
- Key pairs are created in EC2 and are used to login to EC2 instances
- If your access key ID and secret access keys have been compromised then make it inactive using the IAM Console
- A key pair is required to decrypt the Administrator password of a newly launched Amazon EC2 Windows instance
- All you can do with an access key once it has been generated is to make active, make inactive, or delete it
- Best practices for managing access keys:
    - Don't generate an access key for the root account
    - Where possible, use IAM roles with temporary security credentials

### IAM Users
- An entity that represents a person or service
- Enable Multi-Factor Authentication (MFA) and password expiry to secure IAM credentials
- User names should contain alphanumeric characters, or any of the following: _+=,.@-
- You can assign a user
    - A password for access to the management console
    - An access key ID and secret access key for programmatic access to the AWS API, CLI, SDK, and other development tools
- By federating your AWS accounts users can sign in to the AWS Management Console and AWS Command Line Interface (CLI) using credentials from your corporate directory
- To check when a user last logged in
    - In the IAM Console click on User and look under the 'Last Activity' column
- Root account best practices
    - Create a complex password
    - Enable Multi-Factor authentication
    - Lock away access keys (assuming they're even required)
    - Don't share the account details

### IAM Roles
- Enables you to grant access to AWS services to trusted entities
- Also enable your EC2 instance to assume a role that has the permissions required to access Amazon S3
- Roles grant temporary credentials which are managed by AWS
- Role credentials are temporary, not permanent, and are rotated automatically
- Allows secure access to resources instead of using IAM Access keys
- You do not need to worry about rotating access keys or worrying about them getting leaked out to unauthorized entities
- Created and then “assumed” by trusted entities
- Define a set of permissions for making AWS service requests
- You cannot apply multiple roles to a single instance
- Benefits of using IAM roles for applications that run on EC2 instances
    - They are more secure than storing access keys within applications
    - It is easier to manage IAM roles

### IAM Groups (Security Groups)
- Collections of users and have policies attached to them
- A group is not an identity and cannot be identified as a principal in an IAM policy
- Security Groups by default block all inbound traffic
- Only allow rules are supported (not deny)
- Stateful
- Operate at the instance level
- Types of rules that can be defined in a security group are:
    - Outbound
    - Inbound
- You cannot nest groups (groups within groups)
- Use groups to assign permissions to users
- Define rules that the traffic which can flow inside of EC2 Instances
- Stateful meaning that if traffic is allowed in one direction
    - The return traffic is automatically allowed regardless of whether there is a matching rule for the traffic
- You can use these to secure access for Adminstrators from only certain workstations
- In a default configuration
    - Security Groups allow only outbound traffic and block all incoming traffic
        - You need to enable inbound traffic specifying the protocol, port and source
- Security Groups are applied at the Instance level
- Provides a firewall/security layer at the Instance level
- Can be used to enable traffic flow between different types of instances within a subnet itself (which NACLs cannot control)
- Security groups are an instance-level firewall used for controlling access to AWS resources
- Benefits of IAM Groups
    - Enables you to attach IAM permission to more thatn one user at a time
    - Lets you specify permissions for multiple user

### IAM Policies
- Objects that you attach to entities and resources to define their permissions
- Permissions determine whether the request is allowed or denied
- Define permissions and can be applied to users, groups and roles
    - Ex. can use to grant read/write access to an Amazon S3 bucket
- IAM policies are written in JSON
- Use condition elements to build expressions in which you use condition operators (equal, less than, etc.) to match the condition in the policy
    - Condition values can include date, time, the IP address of the requester, etc.
- Tools to create IAM policies include
    - Import a Managed Policy
    - JSON Scripting
    - Visual Editor
		
### IAM console
- Provides information about when IAM users and roles last attempted to access AWS services
    - This information is called last accessed data
    - This data can help you identify unnecessary permissions
    - You can find the data on the Access Advisor tab

## Access Advisor
- enables you to identify unnecessary permissions that have been assigned to users

## AWS Key Management Service (KMS)
- Gives you centralized control over the encryption keys used to protect your data
- Makes it easy for you to create and control the encryption keys that are used to encrypt your data
- You can create, import, rotate, disable, delete, define usage policies for, and audit the use of encryption keys used to encrypt your data
- You get an audit trail to show when your keys were used and who used the keys
		
## Amazon Cognito
- Helps you add user sign-up and sign-in to your mobile and web apps easily
- It is NOT used for connecting corporate directories
- Scales to millions of users
- Supports sign-in with social identity providers, such as:
    - Facebook
    - Google
    - Amazon
    - Enterprise identity providers via SAML 2.0
		
## AWS Security Token Service (STS) 
- Used for requesting temporary credentials
- Enables you to request temporary, limited-privilege credentials for IAM users
- Also lets you provide limited-privilege credentials for federated users (ie. users that you authenticate)
		
## Simple Active Directory (AD)
- An inexpensive Active Directory-compatible service with common directory features
- It is a standalone, fully managed directory in the AWS cloud
- It cannot replicate with an on-premise directory
		
## Active Directory Connector (AD)
- A directory gateway for redirecting directory requests to your on-premise Active Directory
		
## AWS Directory Service for Microsoft Active Directory (aka AWS Managed Microsoft AD)
- Enables your directory-aware workloads and AWS resources to use managed Active Directory in the AWS Cloud
- Eliminates the need for directory synchronization and the cost and complexity of hosting a federation infrastructure
- Connects your existing on-premise AD to AWS
		
## Amazon Rekognition
- Makes it easy to add image and video analysis to your applications.
- You just provide an image or video to the Rekognition API, and the service can identify the objects, people, text, scenes, and activities, as well as detect any inappropriate content
- Can detect, analyze, and compare text, scenes and faces for a wide variety of user verification and identify content that should be removed

## Amazon Comprehend
- A natural language processing (NLP) service that uses machine learning to find insights and relationships in text
- Identifies the language of the text
- Extracts key phrases, places, people, brands, or events
- Understands how positive or negative the text is
- Analyzes text using tokenization and parts of speech
- Automatically organizes a collection of text files by topic
		
## Amazon MQ
- A managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud

## Amazon Transcribe
- Automatic speech recognition (ASR) service that makes it easy for developers to add speech-to-text capability to their applications

## AWS Migration Hub
- Provides a single location to track the progress of application migrations across multiple AWS and partner solutions
		
## AWS CloudTrail
- Web service that records activity made on your account and delivers log files to an Amazon S3 bucket
- For auditing (CloudWatch is for performance monitoring)
- Logs by saving a history of API calls for your AWS account
- Records account activity and service events from most AWS services and logs the following records:
    - The identity of the API caller
    - The time of the API call
    - The source IP address of the API caller
    - The request parameters
    - The response elements returned by the AWS service
    - All other options are metrics that can be recorded using CloudWatch
- Can be used to generate historical configuration change records
- Can be used to track all activites made within a week
- On a per account basis and per region basis but can be aggregated into a single bucket in the paying account
	
## AWS Cloudwatch
- For performance monitoring (CloudTrail is for logging API calls and auditing)
- Used to gain system-wide visibility into resource utilization
- You can use Amazon CloudWatch Logs to monitor, store, and access your log files from:
    - Amazon EC2 instances
    - AWS CloudTrail
    - Route 53
    - Other sources
- Options for storing logs include
    - CloudWatch logs
    - Amazon S3 by using a custom script
    - A centralized logging system such as Splunk
- Collects and tracks metrics for various AWS services
- Can monitor custom metrics generated by applications and the operational health of your AWS resources
- Used to gain system-wide visibility into resource utilization
- Works on the Hypervisor 
- AWS/EC2 namespace includes the following instance metrics
    - CPU (CPUUtilization)
    - Disk (DiskReadOps, DiskWriteOps, DiskReadBytes, DiskWriteBytes)
    - Networking (NetworkIn, NetworkOut, NetworkPacketsIn, NetworkPacketsOut)
    - Status
- Monitoring memory requires a custom CloudWatch metrics
- Infrastructure and data center monitoring is not accessible to AWS customers
- Collect and monitor log files
- Can be accessed via:
    - API
    - Command-line interface
    - AWS SDKs
    - AWS Management Console
- Can set alarms that sends an Amazon Simple Notification Service (Amazon SNS) message
    - Alarms can use cost metrics that trigger the alarm when a certain amount of spend has been reached
- Alarm states are
    - OK
    - Alarm
    - Insufficient_Data
- Automatically react to changes in your AWS resources
- Lets you monitor and troubleshoot your systems and applications using your existing system, application and custom log files
- Default metric interval is 5 minutes
- Comes with two monitoring types
    - Basic Monitoring - collects metrics every 5 minutes
    - Detailed Monitoring - collects metrics every 1 minute
- Can help to automate a company's IT infrastructure

## Amazon Simple Notification Service (SNS)
- Web service that makes it easy to set up, operate, and send notifications (ie alerts) from the cloud
- Highly available, durable, secure, fully managed
- Send automated or manual notifications to:
    - HTTP/HTTPS
    - Email/Email-JSON
    - SQS (Amazon Simple Queue Service)
    - Mobile SMS
- These alerts can be configured whenever an alarm is triggered in Cloudwatch
- Can be used for building and integrating loosely-coupled, distributed applications
- Enables you to decouple microservices, distributed systems, and serverless applications
- The core concepts of SNS are:
    - Topics - How you label and group different endpoints that you send messages to
    - Subscriptions - The endpoints that a topic sends messages to
    - Publishers - The person/alarm/event that gives SNS the message that needs to be sent
		
## Amazon Simple Email Service (Amazon SES)
- Cloud-based email sending service
	
## Amazon Simple Queuing Service (SQS)
- Web service that gives you access to message queues that store messages waiting to be processed.
- Enables decoupling/distributing of application components
- Highly available and scaling of microservices, distributed systems, and serverless applications
- Offers a reliable, highly-scalable, hosted queue for storing messages in transit between computers

## AWS Cloudfront
- Content Delivery Network (CDN) service that securely delivers data, videos, applications, and APIs globally
- Provides reduced latency and high transfer speeds
- Content is cached at the edge locations
- Content is sent from origins to edge locations that are closer to the user
- Integrates with many AWS services (S3, EC2, ELB, Route 53, Lambda)
- Built in Distributed Denial of Service (DDoS) attack protection
- Has a global (rather that regional) scope
- Supported origins are
    - EC2 instance
    - S3 bucket
    - Elastic Load Balancer
    - Route 53
- Use cases:
    - Deliver static content like images globally with low latency and high speed
    - Deliver videos to only paid customers 
    - Serve both static and dynamic website content to users in different locations
- Accessing content via a VPN connection does not lend itself well to CloudFront as users appear to be in the same location
- Supports RTMP distribution for streaming media files using Adobe Flash Media Server’s RTMP protocol
- Charges include
    - Data transfer out
    - Traffic Distribution which varies across geographical areas
    - Number and type of requests (HTTP or HTTPS)
    - Invalidation requests
    - Field-level encryption requests
    - Custom SSL certificates
		
## AWS Edge Locations
- Content Delivery Network (CDN) endpoints for CloudFront
- Caches content locally using Amazon CloudFront
- Used to deliver content to users across the globe
- There are many more edge locations than regions
		
## AWS CloudFormation
- Used for automated provisioning of infrastructure through code
- Provides a common language for you to describe and provision all the infrastructure resources
- Allows you to define infrastructure as code by use of simple text file templates
- Run the templates to create resources in the AWS Cloud
- You can create the templates in JSON and YAML
- Allows for automated  to model and provision resources needed for your applications across all regions and accounts
- Does not charge customers, BUT you pay for the resources you create (ex. EC2 instances and EBS volumes)
- It does not include preconfigured servers
- NOT integrated with KMS encryption 

## AWS Command Line Interface
- A tool which can be used to carry out housekeeping jobs from the command line
- You can create scripts which can be used to work with your AWS resources
		
## Elastic Network Interface (ENI)
- A logical networking component in a VPC that represents a virtual network card
- Every instance in a VPC has a default network interface, called the primary network interface (eth0)
- You cannot detach a primary network interface from an instance
- You can create and attach additional network interfaces
- Additional ENIs can be detached from an instance and attached to another instance
- The attributes of a network interface follow it as it's attached or detached
- When you move a network interface from one instance to another, network traffic is redirected to the new instance
	 
## AWS Trusted Advisor
- Online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment
- Helps you provision your resources and save on costs
- Gives insights and recommendations in five categories
    1. Cost Optimization
    2. Performance (optimize workloads, unused capacity)
    3. Security (ex. security groups that are too wide open)
    4. Fault Tolerance
    5. Service Limits
- Can help improve the overall way you utilize resources in your AWS Account

## AWS Shield
- Managed Distributed Denial of Service (DDoS) protection service
- Safeguards applications running on AWS
- Makes use of edge locations
- AWS WAF can also be used for DDoS protection

## AWS CloudHSM (hardware security module)
- Allows you to easily add secure key storage and high-performance crypto operations to your AWS applications
- Enables you to easily generate and use your own encryption keys on the AWS Cloud
- Uses a highly secure hardware storage device to store encryption keys
- No upfront costs and provides the ability to start and stop HSMs on-demand
- Automates time-consuming administrative tasks, such as hardware provisioning, software patching, high availability, and backups
	
## AWS Inspector
- Automated security assessment service that helps improve the security and compliance of applications deployed on AWS
- An agent is installed on your EC2 Instance and runs analysis to identify vulnerabilities
- Automatically assesses applications for vulnerabilities or deviations from best practices
- Allows you to implement real-time auditing
		
## AWS Artifact
- Self-service audit artifact retrieval portal
- Provides customers with on-demand access to AWS’ compliance documentation and AWS agreements
- Provides on-demand access to AWS’ security and compliance reports and select online agreements
- Can use AWS Artifact Reports to download AWS security and compliance documents
    - AWS ISO certifications
    - Payment Card Industry (PCI) reports
    - System and Organization Control (SOC) reports
    - Certifications from accreditation bodies across geographies and compliance verticals

## AWS WAF (Web Application Firewall)
- Web application firewall that protects against common exploits that could
    - Compromise application availability
    - Compromise security
    - Consume excessive resources
- Managed Distributed Denial of Service (DDoS) protection service (like AWS Shield)
- Works at web application layer 7
- Can be used to identify and prevent any potential exploits like an SQL Injections or cross-site scripting
- Has a global (rather than a regional) scope

## AWS Config
- Service that enables you to assess, audit, and evaluate the configurations of your AWS resources
- Allows you to automate the evaluation of recorded configurations against desired configuration
- Continuously monitors and records your AWS resource configurations
- Provides AWS resource inventory information 
- Enables you to record configuration change history to enable security and governance requirements
- You can discover both existing and deleted resources at any point in time.
- Provides a history of all resources
- Can be used to generate historical configuration change records for your AWS resources

## AWS CodeDeploy
- Fully managed deployment service that automates software deployments
- Can automate to 
    - Amazon EC2 instances
    - Serverless Lambda functions
    - On-premises servers

## AWS Device Farm
- An app testing service
- Lets you test and interact with your Android, iOS, and web apps on many devices at once
- Lets you reproduce issues on a device in real time
		
## AWS AppSync
- Makes it easy to build data-driven mobile and browser-based apps
- Keeps the data updated when devices are connected, enabling the app to use local data when offline
- Synchronizes the data when the devices reconnect
		
## AWS CodeBuild
- Fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy
		
## AWS CodeCommit
- Fully-managed source control service that hosts secure Git-based repositiories
- Makes it easy for teams to collaborate on code in a secure and highly scalable ecosystem
		
## AWS CodeStar
- Provides a unified user interface, enabling you to easily manage your software development activities in one place
- Enables you to quickly develop, build, and deploy applications on AWS
		
## AWS Cloud9
- Cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser
		
## AWS X-Ray
- Collects data about requests that your application uses
- Provides tools to view, filter and gain insights about the data
- Enables you to debug distributed applications to troubleshoot the root cause of performance issues and errors
			
## AWS Cost Explorer
- Free tool to that allows you to view charts of your costs
    - Get the present view for the month on your spending
    - Get a forecast of your future possible spending
    - See detailed breakdown of your current and past spending
- Cost and Usage Reports can be generated
    - Shows all resources and the details of their costs
    - Let's you see past data for your resource usage
    - Provides estimated charges associated with your AWS account
    - The report contains line items for each unique combination of AWS product, usage type, and operation that your AWS account uses
    - Can customize the AWS Cost and Usage report to aggregate the information either by the hour or by the day
- Display distribution of AWS spending
- View cost data for the past 13 months and forecast how much you are likely to spend over the next three months
- Discover patterns in how much you spend on AWS resources over time
- Identify cost problem area

## AWS Organizations
- Offers policy-based management for multiple AWS accounts
- Allows managing of multiple accounts into different organizational units
- You can create security policies which can be assigned to these multiple accounts
- You can configure Policies in AWS Organizations to ensure only certain actions can be performed for certain AWS accounts in Organization Units
- Can be used to maximize their potential volume and return-on-investiment (RI) discounts across multiple accounts
- Provides consolidated billing in both feature sets
    - Allows you set up a single payment method in the organization’s master account
    - But still receive an invoice for individual activity in each member account
- Volume pricing discounts can be applied to resources

## AWS OpsWorks
- Configuration management service that provides managed instances of Chef and Puppet
    - With Chef, you use code templates, or cookbooks, to describe the desired configuration of instances or on-premises server

## AWS Service Catalog
- Allows organizations to create and manage catalogs of IT services that are approved for use on AWS
- You can create a customized portfolio for each type of user in your organization and selectively grant access to the appropriate portfolio
    - When you add a new version of a product to a portfolio, that version is automatically available to all current users
- The IT services used to complete multi-tier application architectures can include:
    - Virtual machine images
    - Servers
    - Software
    - Databases

## Amazon Cloud Directory
- Enables you to build flexible cloud-native directories for organizing hierarchies of data along multiple dimensions
		
## AWS Marketplace
- Online store that helps customers find, buy, and immediately start using the software and services
- Ex. Wordpress AMI
	
## Amazon DevPay
- Simple-to-use online billing and account management service
- Can be used by businesses to sell applications they have built on the AWS cloud
	
## AWS Personal Health Dashboard
- Displays the health of the underlying hardware resources
- Can alert in case of issues in the underlying hardware that hosts the AWS Resources
- Provides alerts and remediation guidance when AWS is experiencing events that may impact you
		
## Amazon WorkSpaces
- Managed desktop computing service running on the AWS cloud
- Allows customers to easily provision cloud-based desktops that allow end-users to access documents and applications
- Cand provision either Windows or Amazon Linux desktops in just a few minutes
- Can quickly scale to provide thousands of desktops to workers across the globe
- Pay either monthly or hourly just for the WorkSpaces you launch
- Helps you eliminate the complexity in managing 
    - Hardware inventory
    - OS versions and patches
    - Virtual Desktop Infrastructure (VDI)
- Offers bundles that come with
    - Windows 7 or Windows 10 desktop experience powered by Windows Server 2008 R2
    - Windows 10 desktop experience powered by Windows Server 2016
		
## Amazon Elastic Map Reduce (EMR)
- Provides a managed Hadoop framework
- Makes it easy, fast, and cost-effective to process vast amounts of data across dynamically scalable Amazon EC2 instances
- Not suitable for transactional databases
- Allow root level access to the operating system
- You to implement real-time auditing by using EMR to scan logs to detect things like 
	
## Amazon Kinesis
- Makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information
- Durably stores, encrypts, and indexes video data in your streams, and allows you to access your data through easy-to-use APIs
- Kinesis Data Stream continuously capture gigabytes of data per second from hundreds of thousands of sources
- Kinesis Data Firehose enables you to load streaming data into data stores and analytics tools
- Consumers can store their results using an AWS service such as:
    - Amazon DynamoDB
    - Amazon Redshift
    - Amazon S3
    - Amazon Elasticsearch Service
    - Splunk
	
## AWS Glue
- Fully managed extract, transform, and load (ETL) service
- Makes it easy for customers to prepare and load their data for analytics
- Prepare and load data for analytics using an extract, transform and load (ETL) process
	
## Amazon Elasticsearch Service
- Allows you to search, explore, filter, aggregate, and visualize your data in near real-time
   - For operational analytics such as application monitoring, log analytics and clickstream analytics
- Allows you to implement real-time auditing by using Elasticsearch Service to scan logs to detect things like 
	
## Amazon Athena
- Interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL
- Helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3 and Glacier
- Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC
		
## Amazon Neptune
- A fast, reliable, fully-managed graph database service
- Makes it easy to build and run applications that work with highly connected datasets.
- You can create sophisticated, interactive graph applications that can query billions of relationships in milliseconds		
	
## Amazon QuickSight
- Provides a fast, cloud-powered business analytics service
- Makes it easy to build stunning visualizations and rich dashboards that can be accessed from any browser or mobile device
		
## Amazon ElastiCache
- Web service that makes it easy to deploy and run Memcached or Redis protocol-compliant server nodes in the clou
- NoSQL type of database
- Data caching service that is used to help improve the speed/performance of web applications running on AWS
- Offers fully managed Redis and Memcached
- Provides in-memory cache and database services
- Can be used to significantly improve latency and throughput for many read-heavy application workloads or compute-intensive workloads
- Can be reserved
		
## Amazon SimpleDB
- NoSQL type of database
		
## Amazon Elastic Container Service
- Used for running software containers like Docker
- Not a managed Kubernetes service
	
## Amazon Elastic Container Service for Kubernetes (EKS)
- Managed Kubernetes service
- Highly scalable, high performance container management service
- Supports Docker containers
- Allows you to easily run applications on a managed cluster of Amazon EC2 instances
- Makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane
		
## EC2 Container Registry (ECR)
- Fully-managed AWS Docker registry service
- Makes it easy for developers to store, manage, and deploy Docker container images
		
## Elastic Transcoder
- Service to convert video and audio files from their source format into versions that will playback on devices like smartphones, tablets and PCs
- Highly scalable, easy to use and cost-effective
		
## Amazon Simple Workflow Service (SWF) 
- Helps developers build, run, and scale background jobs that have parallel or sequential steps
- Can assist with coordinating tasks across distributed application components
- Enables applications for a range of use cases to be designed as a coordination of tasks. These include
    - Media processing
    - Web application back-ends
    - Business process workflows
    - Analytics pipelines
	
## Reserved Instance Marketplace
- Allows other AWS customers to list their Reserved Instances for sale
- Third-party Reserved Instances are often listed at lower prices and shorter terms
	
## AWS IoT Core
- Managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices
- Can support billions of devices and trillions of messages
- Can process and route those messages to AWS endpoints and to other devices reliably and securely
		
---	
#### Globally (rather than regionally) scoped services include:
- Amazon CloudFront
- Amazon Route 53
- AWS IAM
- AWS Web Application Firewall (WAF)

---
# SHARED RESPONSIBILTY MODEL
### Customer - Responsible for Security IN the Cloud
- Customer Data
- Platform, Applications, Identity & Access Management (IAM)
- Operating System, Network & Firewall Configuration
- Client-Side Data / Encryption & Data Integrity / Authentication
- Server-Side Encryption (File System and/or Data)
- Networking Traffic Protection (Encryption, Integrity, Identity)
					
### AWS - Responsible for Security OF the Cloud
- Software
    - Compute / Storage / Database / Networking
- Hardware / AWS Global Infrastructure
    - Regions / Availability Zones / Edge Locations

### Shared Responsibilites include:
- Configuration management
    - AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems databases, and applications
- Patch management
    - WS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications

### Customer Responsibilites include:
- Creating Snapshots of EBS volumes to protect data
- Service and Communications Protection
- Physical and Environmental controls (an inherited control, ie a customer fully inherits from AWS)
- Security IN Cloud
    - Implementing password policies
    - Installing security updates on EC2 instances
    - Configuration of Security Groups
    - Network ACLs
    - Enabling multi-factor authentication (MWF) for privileged users
    - Patching their operating systems
    - Deploying Anti-Virus on Windows Instances
    - Encryption of customer data

### AWS Responsibilites include:	
- Storage system patching
- Security oF Cloud
    - Physical security of the Data Centers
    - Security of the infrastructure upon which customer services run
- Underlying hosts running Xen Hypervisors
		
---
# BILLING
### Consolidated Billing
- Allows you to pay the bills for multiple accounts under one master account
    - One biill is provided per AWS organization
- To segregate costs for different departments in a company create separate accounts
- Paying accounts are indepenpendent and cannot access resources of other accounts
- Volume pricing discounts can be applied across resources in multiple accounts
- Linked accounts can still be managed independently
- Available to all customers
- You can have a maximum 20 linked accounts by default
    - Can be increased by placing a support request with AWS
	
### AWS Pricing Policies
- Pay-as-you-go
- Save when you reserve
- Does not offer Enterprise Level Agreements (ELAs), non-peak hour discounts, or global usage discounts
	
---	
#INSTANCE PRICING
###	On-Demand instances
- Most flexible because you can spin up and terminate resources as needed
- Good for testing environment
- Best choice for this situation as it is the most economical option that will ensure no interruptions
	
### Reserved instances
- Beneficial for production workloads where you know that you are going to be utilizing resources for a longer period of time
- Good for long-term, static requirements as you must lock-in for 1 or 3 years in return for a decent discount
- Types of reserved instances
    - Standard RIs
        - Provides the most significant discount (up to 75% off On-Demand) and are best suited for steady-state usage
    - Convertible RIs
        - Provides a discount (up to 54% off On-Demand) 
        - Provides capability to change the attributes of the RI as long as the exchange results in the creation of RIs Instances of equal or greater value
        - No limits to how many times you perform an exchange
        - Like Standard RIs, Convertible RIs are best suited for steady-state usage
    - Scheduled RIs
        - Available to launch within the time windows you reserve
        - Allows you to match your capacity reservation to a predictable recurring schedule that only requires a fraction of a day, a week, or a month
- You cannot redeem your reserved instances, however, you can sell them on the AWS marketplace
	
### Spot instances
- Use for workloads where the availability of the EC2 instance can be flexible or your applications can be interrupted
- Good for scenarios where you have batch processing needs
- Good for short term requirements as they can be very economical
- Most cost effective EC2 pricing option to use for non-critical overnight workload
- Sometimes AWS may terminate your instance, e.g. when the market price exceeds your bid price.
- You bid on a particular price, known as the bid price
- You will actually pay the spot price which will either be the same as your bid price or lower
    - If the spot price rises above your bid price, then you will lose the instance
- Billing timeframes for on-demand EC2 instances are:
    - Per hour
    - Per second (for some Linux types)
	
### Dedicated hosts
- Dedicated hardware that is fully reserved for the AWS customer
    - Dedicated Instances are also dedicated , but this only at the Instance level, ie the hardware is still shared with other AWS customers.
- Can help reduce your costs as you can utilize your existing server licenses
- Great for licensing which does not support multi-tenancy or cloud deployments
- Expensive

### Dedicated Instances
- Amazon EC2 instances that run in a VPC on hardware that's dedicated to a single customer

---
# DESIGN CONCEPTS
- Design with failure in mind.
    - Look at bottlenecks and the ways that things can fail
    - Deploy application across multiple availability zones
- Decouple - reduce inter-dependencies (non-monolithic)
    - Ensure that components are lightly coupled across distributed components
    - So failures don't impact availaility
    - In tightly coupled system a failure in one component could cause a failure in other components
    - Concept of loose coupling includes "well-defined interfaces" which reduce interdependencies in a system by enabling interaction only through specific, technology-agnostic interfaces (e.g. RESTful APIs)
    - Asynchronous integration is recommended so an interaction does not require an immediate response
    - You should use standard, technology-agnostic interfaces rather than proprietary interfaces where possible
    - DNS names are used for service discovery
        - Disparate resources must have a way of discovering each other without prior knowledge of the network topology
        - Using DNS names for end points instead of using IP Address ensures flexibility for failover
- The maximum level of fault tolerance is having your application distributed across multiple availability zones in 2 regions.
- Least privilege principle - start with a minimum set of permissions and grant additional permissions as necessary
- Elasticity is how flexible your application is to demand (Ability to scale up and down)
		
---		
# CLOUD MODELS
#### Infrastructure as a Service (IaaS)
- The underlying hardware platform and hypervisor are managed for you
    - You are delivered tools and interfaces for working with operating system instances
- Contains the basic building blocks for cloud IT and typically provide access to networking features, computers (virtual or on dedicated hardware), and data storage space
#### Platform as a Service (PaaS)
- You don't need to manage the infrastructure level yourself
- Removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems)
- Allows you to focus on the deployment and management of your applications
#### Software as a Service (SaaS)
- The whole stack is managed for you right up to the application 
    - You are delivered working software that you can customize and populate with data
- Provides you with a completed product that is run and managed by the service provider
- Delivers a managed application
- In most cases, people referring to Software as a Service are referring to end-user applications
#### Database as a Service (DBaaS)
- A type of PaaS in which a managed database is offered for consumption
		
---	
# AWS SUPPORT PLANS
#### Basic
  - Does not provide any technical support
  - You cannot open cases
#### Developer
- Provides business hours access via email by the Cloud Support Associates team
- Lowest support plan that allows you to open unlimited cases
#### Business
- Response time or < 1 hour response time for the failure of a production system
- Provides support via emailb y the Cloud Support Engineers team, chat and phone (like Enterprise)
- Telephone technical support (like Enterprise)
- You can open unlimited cases (like Developer and Enterprise)
#### Enterprise
- Response time or < 1 hour response time for the failure of a production system
- Response time of < 15 minutes for the failure of a business-critical system
- Provides support via email by the Cloud Support Engineers team, chat and phone (like Business)
- Telephone technical support (like Business)
- You can open unlimited cases (like Developer and Business)
- Has the option for operational reviews, recommendations, and reporting
- Has support concierge
#### Available across all support plans
- AWS support forums
- Personal Health Dashboard
- 24x7 access to customer service
- Documentation and white papers
- Support forums
				
---
# DISASTER RECOVERY PLANS
#### Pilot Light
#### Warm Standby
#### Multi-Site
- Have another side ready and you just need to change the URL to point to the backup site
- Shortest recovery time
- Highest cost
#### Backup-Restore
- The restoration of the entire environment will just take the same amount of time as the backup
- Has the highest amount of downtime
- Lowest cost

---
# NETWORKING
- Internet Gateway
    - Used to connect a public subnet to the Internet (egress)
    - You can only have one Internet Gateway per VPC
- A Route Table is part of a VPC and is used to control how traffic is routed within the VPC
- To connect an on-premises network to an Amazon VPC using an Amazon Managed VPN connection you need
    - Virtual Private Gateway (for the VPC side)
    - Customer Gateway (for the on-premises network side)
- **An A record**
    - A simple address record
- **AAAA record**
    - Used for IPv6.
- **CNAME record**
    - Can be used to map a domain name to a target domain name
    - Can be used to map to a target domain external to AWS.
    - Cannot be used for resolving apex / naked domain name.
- **Alias record**
    - Can be used to map a domain name to a target domain name
    - Cannot be used to map to a target domain external to AWS.
    - Used to map resource record sets in your hosted zone to:
        - Amazon Elastic Load Balancing load balancers
        - Amazon CloudFront distributions
        - AWS Elastic Beanstalk environments
        - Amazon S3 buckets that are configured as websites
    - Can be used for resolving apex / naked domain names (e.g. example.com rather than sub.example.com).
- **Network Active Control Lists (ACL)**
    - Provides a firewall/security layer
    - Applied at the subnet level
    - Supports both allow and deny rules
    - You can create a deny rule specifying a specific IP address that you would like to block
    - Stateless so you must create rules in both directions to allow traffic through
    - Processes rules in order
- **NS record**
    - Name Server record that identifies DNS servers
- **SPF record (Sender Policy Framework)**
    - Identifies the mail servers that are allowed to send mail for a domain

- Placement Groups
    - Logical groupings of instances in one of the following configurations:
        - Cluster placement gorup
            - Logical grouping of instances within a single Availability Zone
            - Recommended for applications that benefit from low network latency, high network throughput, or both, and if the majority of the network traffic is between the instances in the group
        - Spread placement group
            - Group of instances that are each placed on distinct underlying hardware
            - Recommended for applications that have a small number of critical instances that should be kept separate from each other
    - Placement groups will not lower your costs

- Penetration Testing
    - Practice of testing one’s own application’s security for vulnerabilities by simulating an attack
    - You need to get prior permission and authorization from AWS before conducting Penetration testing
    - You must complete and submit the AWS Vulnerability / Penetration Testing Request Form to request authorization 
    - There is a limited set of resources on which penetration testing can be performed
    - Permission is required for all penetration tests
	
- The following services make use of edge locations:
    - AWS Cloudfront
    - AWS Shield
	
- Fault Tolerance
    - Method of increasing the availability of your system when components fail
    - To increase fault tolerance:
        - Use multiple availability zones
        - Use Elastic Load Balancer

- Accessing Cloud services through an API allows resources to be manage programmatically

- AWS Account Owner has complete control over an AWS account

- Use Multi-Factor Authentication (MFA) for an extra layer of unauthorized access protection.

- PCI Compliance (Payment Card Industry)
    - Check which AWS services are PCI compliant
    - Make sure your application has the necessary checks for PCI compliance
	
- **AWS Storage Services**
    - Amazon Simple Storage Service (S3)
    - Amazon Elastic Block Storage (EBS)
    - Amazon Glacier
    - AWS Snowball
    - Amazon Elastic File Sytem (EFS)
    - AWS Storage Gateway
	
- **Deployment types**
    - **Cloud-based**
        - Fully deployed in the cloud and all parts of the application run in the cloud
    - **Hybrid Cloud**
        - Enables customers to leverage the benefits of the public cloud and co-existing with on-premises infrastructure
        - Combines public and private
    - **Private Cloud**
        - Resources on-premises, using virtualization and resource management tools
    - **Legacy IT infrastructure**
        - Not a cloud model
        - Typically, this includes systems that either not virtualized or do not have a cloud management layer

---
### OSI Layers
1. Physical Layer
2. Data Link Layer
3. Network Layer
4. Transport Layer
5. Session Layer
6. Presentation Layer (The layer in which the operating system operates with the data.)
7. Application Layer
	
---
### Types of Load Balancers
- **Network Load Balancer (NLB)**
    - Layer 4 load balancer that routes connections based on IP protocol data
    - Supports IP addresses as targets 
- **Application Load Balancer (ALB)**
    - Layer 7 load balancer that routes connections based on the content of the request
    - Supports IP addresses as targets 
- **Classic Load Balancer (CLB)**
    - Provides basic load balancing at both layer 4 and layer 7
    - OIdest of the three

---	
### KeyTypes
- Key pairs are created in EC2 and are used to login to EC2 instances
- Access keys are used to grant programmatic access to resources
- Secret IDs are used to grant programmatic access to resources

- AWS services that are used for analytics
    - Amazon Elastic Map Reduce (EMR)
    - Amazon Athena
	
### Amazon Machine Images (AMI) 
- Store configuration information for Amazon EC2 instances
- There are three main categories:
    - Community AMIs - free to use, generally you just select the operating system you want
    - AWS Marketplace AMIs - pay to use, generally come packaged with additional, licensed software
    - My AMIs - AMIs that you create yourself
- AMIs can be copied to other regions and made available to your colleagues in those regions when they launch new EC2 Instances
	
- **Apache Hadoop* software library is a framework that allows for the distributed processing of large data sets across clusters of computers

- There is no backup console to take full and incremental backups.
- There is no way of taking application-consistent backups using any AWS tools.

- Disposable resources is an architectural principle in which servers and other components are treated as temporary resources and are replaced rather than updated

 - The following services can help to automate a company's IT infrastructure
    - **Amazon Cloudwatch Alarms**
    - **AWS Lambda Scheduled Events**
	
- When choosing a Region consider:
    - Latency
    - Cost
    - Data sovereignty 
    - Regulatory requirements

- Peering
    - VPC peering
        - Helps to facilitate the transfer of data
        - Used to peer VPCs within the same region
        - A way of allowing routing between VPCs in different AWS accounts
        - It does NOT help you to connect from an on-premise network
    - Inter-Region Peering 
        - Allows VPC resources running in different AWS regions to communicate with each other using private IP addresses without requiring gateways, VPN connections or separate network appliances
			
- You cannot peer with an account with a matching (or overlapping) address range.

- You cannot peer subnets.

- **The following Amazon services are free of charge:**
    - Amazon VPC
    - IAM
    - Data transfer into the AWS cloud
    - Data transfer between AWS services within a region
    - Elastic Beanstalk
   - Amazon Cloudformation (but you pay for the resources it creates)
	
- **You are charged for**
	- Storage used
	- Compute time
	- Data transfer out

- Techniques for using automated, repeatable processes when instantiating compute resources include:
    - Infrastructure as code - assets are programmable
        - Can apply techniques, practices, and tools from software development to make your whole infrastructure 
            - Reusable
            - Maintainable
            - Extensible
            - Testable
    - Bootstrapping - execute automated actions to modify default configurations
        - Includes scripts that install software or copy data to bring that resource to a particular state
	
- F5 load balancer is not an Amazon load balancer.

- Auto Scaling
    - Scales horizontally by adding additional compute instances
    - Used to automatically ensure the right number of EC2 instances are available to service current load
    - Automatically balances EC2 instances across zones when you configure multiple zones in you Auto Scaling group settings
    - You can automatically increase (or terminate) instances when the load on your servers reach a particular level
    - Auto Scaling is configured within the EC2 console
    - Scaling policies determine when, if, and how the ASG scales and shrinks
    - Availiable scaling policies
        - Simple
        - Cyclic/Scheduled
        - On-Demand/Dynamic
        - Step
    - Scaling Plans define the triggers and when instances should be provisioned/de-provisioned
    - To enable a working configuration:
        - Create a launch configuration
        - Create an Auto Scaling group

- Listeners, listener rules and target groups are associated with Elastic Load Balancing

- Reservations can be applied to:
    - EC2
    - RDS
    - DynamoDB
    - ElastiCache
    - RedShift
	
#### Load Balance OSI Levels
- **Layer 4**
    - Network Load Balancer (NLB) - routes connections based on IP protocol data
- **Layer 7**
    - Application Load Balancer (ALB) - routes connections based on the content of the request
- **Layer 4 and 7**
    - Classic Load Balancer (CLB) – oldest provides basic load balancing at both layer 4 and layer 7

#### Elastic IP address
- Static IPv4 address designed for dynamic cloud computing
- Associated with your AWS account.
- The Elastic IP address will not change when you reboot the instance
- You can mask the failure of an instance or software by rapidly remapping the address to another instance in your account
- It is a public IP however in the AWS cloud an elastic IP is the construct used to assign a public IP to an EC2 instance
- You can assign it to any EC2 Instance in a public subnet
- You can get 5 Elastic IP addresses per region by default
- You can raise a support request to get additional Elastic IP Addresses
- Can be easily remapped between EC2 instances in the event of a failure to increase fault tolerance

#### Static IP address
- An IP address (public or private) that is statically defined (through DHCP)

#### Dynamic IP address
- An IP address (public or private) that is dynamically obtained (through DHCP)
	
- The following services allow root level access to the operating system:
    - Amazon EC2
    - Amazon EMR

#### Tag
  - A label that you assign to an AWS resource
  - Each tag consists of a key and an optional value, both of which you define
  - You can create multiple Tags on a resource
  - Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment

#### Resource Group
- A collection of resources that share one or more tags or portions of tags
- You can group resources that share one or more tags

- Horizontal scaling takes place through an increase in the number of resources
    - Adding more servers to support an application
    - Adding more hard drives to a storage array
	
- Vertical scaling takes place through an increase in the specifications of an individual resource
    - Changing instance type to one that has more RAM, CPU, IO, or networking capabilities
    - Adding a larger capacity hard drive to a server

#### Golden Image
- A snapshot of a particular state for that resource
- Examples are: 
        - EC2 instances
        - RDS instances
        - EBS volumes
- Enables you to design auto scaling strategies
	
- Bootstrapping enables you to deploy servers without having to configure them with fixed settings
		
- Some services that do not incur costs are:
    - Identity and Access Management (IAM)
    - Amazon VPC
	
- Ways to reduce monthly costs
- Reserve capacity where suitable (will be locked into a 1-3 year contract)
- Turn off resources that are not being used
    - You do not get the option for one-off payments for on-demand resources
    - You can for reserved instances which can be paid all upfront
- There are volume based discounts when you use more services
- Things you DON'T pay for
    - Security Groups
    - Data ingress to the AWS cloud
    - Power
    - There are no termination fees

- The following can be used to configure AWS cloud services
    - AWS and Individual Service Console
    - Command Line Interface (CLI)
    - Application Programming Interface (API)

- Problems associated with using Access Key ID and Secret Access Keys when trying to grant access to AWS services
    - Keys might get leaked and fall into the wrong hands
    - Rotation of keys

- Use a failover routing policy can redirect traffic to a secondary site.

- Real-time audting
    - You can use AWS Lambda, Amazon EMR, the Amazon Elasticsearch Service, or third-party tools from the AWS Marketplace to implement real-time auditing by using Lambda to to scan logs to detect things like 
        - Unused permissions
        - Overuse of privileged accounts
        - Usage of keys
        - Anomalous logins
        - Policy violations
        - System abuse
    -You can also use Amazon Inspector to monitor for compliance

- Amazon Resource Names (ARNs) uniquely identify AWS resources
    - We require an ARN when you need to specify a resource unambiguously across all of AWS, such as
        - IAM policies
        - Amazon Relational Database Service (Amazon RDS) tags
        - API calls

- **AWS Limits**
    - The instance limits are:
        - Running up to a total of 20 On-Demand instances across the instance family
        - Purchasing 20 Reserved Instances
        - Requesting Spot Instances per your dynamic Spot limit per region
    - If a user did not have permissions to launch an instance then it will terminate rather than launs

- An application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software.

- **NAS server is Network Attached Storage.**

- Reliability pillar of the well-architected framework
    - Test recovery procedures
    - Automatically recover from failure
    - Scale horizontally to increase aggregate system availability
    - Stop guessing capacity
    - Manage change in automation
	
  #### Five pillars of the AWS Well-Architected Framework
1. Operational excellence
2. Security
3. Reliability
4. Performance efficiency
5. Cost optimization	
    - Adopt a consumption model
    - Stop spending money on data center operations
    - Analyze and attribute expenditure
    - Use managed services to reduce cost of ownership

- If you have an application that requires access to specialized hardware you need to build it on-premise in a private cloud.

- To block access to a known list of IP addresses you can
    - Configure a local firewall (such as iptables) on the web server
    - Use Network ACL deny rules

- Authenticate using AWS APIs can be accomplished by
    - Server certificates
    - Access keys

- You can connect from your on-premise data center to a VPC via
    - Direct Connect
    - VPN CloudHub

- **HIPAA (U.S. Health Insurance Portability and Accountability Act of 1996) compliance** 
    - Relates to the regulatory requirements of how patient records are stored
    - Allows the AWS environment to process, maintain, and store protected health information

- A server password cannot be used to authenticate with an API.
- 
- Server certificates are SSL/TLS certificates that you can use to authenticate with some AWS services

- Jenkins deploys infrastructure as code but is not an AWS service.
