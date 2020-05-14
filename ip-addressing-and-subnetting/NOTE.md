# IP Addressing and Subnetting 

- Udemy
- Instructor: sikandar Shaik
- Completed Jun 16, 2019

---
# Chapter 1 - TCP-IP Addressing

Protocol is a set of rules to follow ot have proper communication.

### Network protocols
- TCP/IP     - developed by the Department of Defense
- IPx/SPx    - developed by Novell
- Appletalk  - developed b Apple
- Netbios    - developed by Microsoft
- OSI        - developed by ISO
	
You can think of each protocol as a language to talk to each other.

### TCP/IP
- Has been made a standard protocol which everyone supports.
- Used beteween computers and network devices.
- The internet is based entired on TCP/IP protocols.
	
### TCP/IP Address
- A logical address given to each and every device on a network.
- OSI Network Layer address (Layer 3)
    - The 7 OSI layers are:
        - Layer 7 - Application
        - Layer 6 - Presentation
        - Layer 5 - Session
        - Layer 4 - Transport
        - Layer 3 - Network <===
        - Layer 2 - Data Link
        - Layer 1 - Physical
- Two versions of IP:
    - IP version 4 (initial version)
        - Introduced in the 1980s
        - 32 bit
        - Supports about 4.3 billion addresses
    - IP version 6
        - Introduced around June 1999
        - 128 bit (hexadecimal format)
        - Supports 3.4×1038 addresses (theoretically)
        - Because of introduction of NAT we are still primarily using IPv4
	
### NAT (Network Area Translation)
- Allows us to expand the number of users for IPv4
- Before NAT 
    - If you had 1000 users you needed 1000 ip addresses
- After NAT
    - 60,000 users can use one IP address
- Extended use of IPv4 (Hiding use of IPv6)

### IPv4 Address
- Bit is represented by 0 or 1 (i.i. binarry)
- Example:
    - 01010101.00000101.10111111.00000001
- The IP address is divided into octets. (or portions)
    - In binary:
```
01010101.00000101.10111111.00000001
first    second   third    fourth
octet    octet    octet    octet
```
- In hexadecimal:
```
85.5.191.1
```
#### To assign the IP address on your computer do one of the following:
- Add your IP address manually
    - Do this if you have an ip assigned to you.
- Select "Obtain an IP address automatically"
    - This will use a dynamically assigned IPv4 address.
    - A DHCP server generates and assigns an IP to your computer.
        - The DHCP will have a range of IP addresses that it can use.

### DHCP
- Preferred method of "leasing" IPv4 addresses to hosts on large networks.
- Reduces the burden on network support staff and virtually eliminates entry errors.
		
### ipconfig
- Command line tool to check your IP configuration settings.
- Sample output:
```
	...
	Ethernet adapter Ethernet:

		Connection-specific DNS Suffix  . : questarai.com
		Link-local IPv6 Address . . . . . : fe80::2871:1f94:775a:b1b6%21
		IPv4 Address. . . . . . . . . . . : 10.6.64.86
		Subnet Mask . . . . . . . . . . . : 255.255.254.0
		Default Gateway . . . . . . . . . : 10.6.64.1
	...
```
- Where Default Gateway is the address of the router.

### Range of IPv4 Addresses
- What are the minimum and maximum IP addresses?
    - Each octet has 8 bits so
        - Minimum is 0   (00000000)
        - Maximum is 255 (11111111)
		
### IP Address Classifications
- The class is determined by the first octet.
- IP Addresses are divided into five classes
```
CLASS A     0-127    - Used in LAN and WAN
CLASS B     128-191  - Used in LAN and WAN
CLASS C     192-223  - Used in LAN and WAN
CLASS D     224-239  - Reserved for Multicasting
CLASS E     240-255  - Reserved for Research and Development
```

### Types of Communication
- In an IPv4 network, the hosts can communicate in one of three different ways:
    - Unicast
        - One to One
        - Only two devices participating
    - Broadcast
    - One to All
        - One device is sending to all devices
        - Example: Switches
    - Multicast
        - One to Many/Group
        - Only a set of devices are participating
        - Examples: Live conferencing, Distance learning, Live TV
        - Only users who send a request recieve it.
        - Reduces traffic.
        - Devices can be on different networks.
        - Class D address range:
            - 224.0.0.0 to 239.255.255.255

### Private IP
- Used withe the LAN or within an organization
- Not recognized on the internet
- Given by the administrator
- Unique within the network or organization
- Free
- Unregistered IP

### Public IP
- Used on public network (Internet)
- Recognized on the internet
- Given by the service provider (from IANA)
- Globally unique
- Pay to service provider (or IANA)
- Registered

#### Routers can translate private IP addresses to a public IP addresses to access the internet.
- This process is called Network Address Translation (NAT)

### Private IP Address
- There are certain addresses in each class of IP address that are reserved for private networks.
- These address are called private addresses
```
Class A (1-126)
10.0.0.0 to 10.255.255.255       (10.x.x.x)

Class B (128-191)
172.16.0.0 to 172.31.255.255

Class C (192-223)
192.168.0.0 to 192.168.255.255   (192.168.x.x)
```

### Assignment of IP Addresses
- [IANA.org](https://www.iana.org/) (Internet Assigned Numbers Authority)
- Regional Internet Registries (RIRs)
- The major registries are:
    - ARIN (American Registry for Internet Numbers)
    - LACNIC (Latin America and Caribbean Network Information Centre)
    - RIPE NCC (Réseaux IP Européens)
    - AFRINIC (African Network Information Centre)
    - APNIC(Asia-Pacific Network Information Centre)

---

# Chapter 2 - Subnetting - FLSM

### Subnetting
- The process of dividing a single network into multiple smaller ones.
- Subnetting helps in minimizing the wasting of IP addresses.
	
### FLSM & VLSM
- Subnetting can be performed in two ways
    - FLSM - Fixed Length Subnet Mask
        - All subnets will be of equal size
    - VLSM - Variable Length Subnet Mask
        - Subnets may not be the same sizes
        - More common than FLSM

- Subnetting can be done based on requirement.
    - Requirements of Hosts?      
        - 2**h - 2 >= requirement
        - Like when basing on the number of users
        - Note that we subtract two because we can't use the first and the last address.
    - Requirements of Networks?   
        - 2**n >= requirement
        - Like when basing on the number of departments
```
H = host bits, N = network bits
```
- What we do in Subnetting
    - Customize the bits based on the size that we require.
    - Converting Host bits into Network Bits (reducing number of host bits)
        - i.e. Converting 0's into 1's
        - For example a C Class has 24 network bits and 8 host bits.
        - We can change to any of the following:
            - 26|6  => 64 hosts (2**6)
            - 27|5  => 32 hosts (2**5)
            - 28|4  => 16 hosts (2**4)
            - 29|3  => 8 hosts (2**3)
            - 30|2  => 4 hosts (2**2)
    - This will reduce the size of the network.
---
### FLSM C-Class Example 1
- Requirement is a C-Class where we want 50 devices.
- Formula: 2**h - 2 >= 50
    - So we will choose 2**6 - 2 which will give us 62 devices.
    - Therefore the required hosts bits is 6.
        - 11111111.11111111.11111111.00000000
    - We will keep the last 6 bits as host bits and convert the other two to network bits.
        - 11111111.11111111.11111111.11000000
    - The total network bits will be 24 + 2 = 26.
    - Therefore our subnet mask will be:
        - 11111111.11111111.11111111.11000000 or 255.255.255.192 in hexadecimal
    - Note that the subnet mask changes because the size of your network changed.
- We need to calculate the range
    - 2**6 = 64 devices
    - Number of networks = 256 / 64 = 4
    - So our network ranges will be:
```
Network 1 - 192.168.1.0 to 192.168.1.63
Network 2 - 192.168.1.64 to 192.168.1.127
Network 3 - 192.168.1.128 to 192.168.1.191
Network 4 - 192.168.1.192 to 192.168.1.255
```
---
### FLSM C-Class Example 2
- Requirement is a C-Class where we want 30 devices.
- Formula: 2**h - 2 >= 30
    - So we will choose 2**5 - 2 which will give us 30 devices.
    - Therefore the required hosts bits is 5.
        - 11111111.11111111.11111111.00000000
    - We will keep the last 5 bits as host bits and convert the other two to network bits.
        - 11111111.11111111.11111111.11100000
    - The total network bits will be 24 + 3 = 27.
    - Therefore our subnet mask will be:
        - 11111111.11111111.11111111.11100000 or 255.255.255.224 in hexadecimal
    - Note that the subnet mask changes because the size of your network changed.
- We need to calculate the range
    - 2**6 = 64 devices
    -Number of networks = 256 / 32 = 8
    - So our network ranges will be:
```
Network 1 - 192.168.1.0 to 192.168.1.31
Network 2 - 192.168.1.32 to 192.168.1.63
Network 3 - 192.168.1.64 to 192.168.1.95
Network 4 - 192.168.1.96 to 192.168.1.127
Network 5 - 192.168.1.128 to 192.168.1.159
Network 6 - 192.168.1.160 to 192.168.1.191
Network 7 - 192.168.1.192 to 192.168.1.223
Network 8 - 192.168.1.224 to 192.168.1.255
```
- Whenever you change the subnet mask it will change the range of the IPs (and therefore the network size).
---	
### FLSM B-Class Example
- Requirement is a C-Blass where we want 1000 devices.
- Formula: 2**h - 2 >= 1000
    - So we will choose 2**10 - 2 which will give us 1022 devices.
    - Therefore the required hosts bits is 5.
        - 11111111.11111111.00000000.00000000
        - 11111111.11111111.11111100.00000000
    - Converted network bits = 16 - 10 = 6
    - Total network bits will be 16 + 6 = 22.
    - Subnets = 2**n = 2**6 = 64.
    - Therefore our subnet mask will be:
        - 11111111.11111111.11111100.0000000 or 255.255.255.252 in hexadecimal
- We need to calculate the range
    - 2**10 = 1024 devices
    - Number of networks = 256 / 32 = 8
    - So our network ranges will be:
```
Network 1 - 192.168.0.0 to 192.168.3.255
Network 2 - 192.168.4.0 to 192.168.7.255
Network 3 - 192.168.8.0 to 192.168.11.255
Network 4 - 192.168.12.0 to 192.168.15.255
...
Network 5 - 192.168.240.0 to 192.168.243.255
Network 6 - 192.168.244.0 to 192.168.247.255
Network 62 - 192.168.248.0 to 192.168.251.255
```		
- Any number that is >= 256 we must think in terms of blocks.
---
### FLSM A-Class Example
- Requirement is a A-Blass where we want 16,000 devices.
- Formula: 2**h - 2 >= 16,000
    - So we will choose 2**14 - 2 which will give us 16382 devices.
    - Therefore the required hosts bits is 5.
        - 11111111.00000000.00000000.00000000
        - 11111111.11111111.11000000.00000000
    - Converted network bits = 24 - 14 = 10
    - Total network bits will be 8 + 10 = 18.
    - Subnets = 2**n = 2**10 = 1024.
    - Therefore our subnet mask will be:
        - 11111111.11111111.11000000.0000000 or 255.255.255.192 in hexadecimal
- We need to calculate the range
    - 2**h = 2**14 = 16,384
        - 16,384 / 256 = 64 blocks
    - Number of networks = 256 / 32 = 8
    - So our network ranges will be:
```
10.0.0.0 to 10.0..63.255
10.0.64.0 to 10.0.127.255
10.0.128.0 to 10.0.191.255
10.0.128.0 to 10.0.191.255
10.0.192.0 to 10.0.255.255

10.1.0.0 to 10.1.63.255
10.1.64.0 to 10.1.127.255
10.1.128.0 to 10.1.191.255
10.1.128.0 to 10.1.191.255
10.1.192.0 to 10.1.255.255

...

10.255.0.0 to 10.255.63.255
10.255.64.0 to 10.255.127.255
10.255.128.0 to 10.255.191.255
10.255.128.0 to 10.255.191.255
10.255.192.0 to 10.255.255.255
```
#### Note that the Range depends on the size of the network, NOT the class type.
```
Range <= 128   -> x x x X
		>= 256   -> x x X x
		>= 65536 -> x x X x
```
---
# Chapter 3 - Subnetting - VLSM
### Slash value
- Represents the total number of bits
- Another way of writing subnet mask information

- You must include both the ip address and the subnet mask.
    - Need to determine the size and range of the network.
    - Unless there is no subnet.

#### Example:
- 192.168.1.100/27
- The 27 represents the number of network bits so:
    - 5 host bits
    - 11111111.11111111.11111111.11100000
    - 255.255.255.224
#### More examples:
```
/20 - 255.255.240.0
/22 - 255.255.252.0
/25 - 255.255.255.128
/27 - 255.255.255.224
/28 - 255.255.255.240
/30 - 255.255.255.252
```
### VLSM C-class
- Dividing networks into variable sizes.
- Start with the largest network and work your way down.
- Example network sizes (100, 40, 20, 10) C-Class:
```
First Network
-------------
>= 100 => 2*7 - 2 = 126 => 8.8.8.1 => 255.255.255.128 = /25
Range: 2**h = 2**7 = 128
	192.168.1.0/25   ->  192.168.1.127/25  (1st Network - size 128)

Second Network
--------------
>= 40 => 2*6 -2 = 62 => 8.8.8.2 => 255.255.255.192 = /26
Range: 2**h = 2**6 = 64 
	192.168.1.128/26   ->  192.168.1.191/26  (2nd Network - size 64)

Third Network
-------------
>= 20 => 2*5 -2 = 30 => 8.8.8.3 = 255.255.255.224 = /27
Range: 2*h = 2*5 = 32
	192.168.1.192/27   ->  192.168.1.223/27  (3rd Network - size 32)

Fourth Network
--------------
>= 10 => 2*4 -2 = 16 => 8.8.8.3 = 255.255.255.240 = /28
Range: 2*h = 2*4 = 16
	192.168.1.224/28   ->  192.168.1.239/28  (4th Network - size 16)

- You have 16 left over so you can add a 16 device network or two 8 device networks.
```
### VLSM C-class shortcut
- Same answer as above, we just calculate it differently.
- Example network sizes (100, 40, 20, 10) C-Class:
```
First Network
-------------
>= 100 => 2**7 = 128; slash value = 32 - 7 = 25
	192.168.1.0/25     -> 192.168.127/25
Second Network
--------------
>= 40 => 2**6 = 64; slash value = 32 - 6 = 26
	192.168.1.128/26     -> 192.168.1.191/26
Third Network
-------------
>= 20 => 2**5 = 32; slash value = 32 - 5 = 27
	192.168.1.192/27     -> 192.168.1.223/27
Fourth Network
--------------
>= 10 => 2**4 = 16; slash value = 32 - 4 = 28
	192.168.1.224/28     -> 192.168.1.239/28
```
### VLSM B-class
- Example requirement (4000, 1000, 500, 200) B-Class:
```
First Network
-------------
>= 4000 => 2**12 = 4096; slash value = 32 - 12 = 20
Number of blocks of addresses = 2**h / 256 = 2**12 / 256 = 4096/256 = 16 
	172.16.0.0/20     -> 172.16.15.255/20
Second Network
--------------
>= 1000 => 2**10 = 1024; slash value = 32 - 10 = 22
Number of blocks of addresses = 2**h / 256 = 2**10 / 256 = 1024/256 = 4 
	172.16.16.0/22    -> 172.16.19.255/22
Third Network
-------------
>= 500 => 2**9 = 512; slash value = 32 - 9 = 23
Number of blocks of addresses = 2**h / 256 = 2**9 / 256 = 512/256 = 2 
	172.16.20.0/23    -> 172.16.21.255/23
Fourth Network
--------------
>= 200 => 2**8 = 512; slash value = 32 - 8 = 24
Number of blocks of addresses = 2**h / 256 = 2**8 / 256 = 256/256 = 1 
	172.16.22.0/24    -> 172.16.22.255/24
	- Note that after subnetting the size is the same a C-Class.
```
- Incrementing is based on the size of the network:
```
<=128  => x.x.x.O     128 => 0     to 255
>=256  => x.x.O.x     256 => 0.0   to 0.255
>=6553 => x.O.x.x    6553 => 0.0.0 to 0.255.255
```
---
# Chapter 4 - Subnetting Questions
### Subnetting question 1
- Given 210.10.10.145/26
    - 210 indicates C-Class so 24 network bits
    - converted network bits = 2 since we have a subnet value of 26.
    - host bits (h) = (total bits) - (subnet mask) = 32 - 26 = 6
	- subnet mask = 255.255.255.192
	- hosts/subnet = 2**(host bits) - 2 = 2**6 - 2 = 64 - 2 = 62
	- subnets = 2**(converted network bits) = 2**2 = 4
	- network ID = 
        - Range = 2**(host bits) = 2**6 = 64
        - Therefore the address ranges are:
            - 0 to  63
            - 64 to 127
            - 128 to 191  <== 145 falls in this range
            - 192 to 255
        - So for 145 the network range would be 128 to 191
        - So the network ID would be 210.10.10.128/26/
    - broadcast ID =
        - From above the network range would be 128 to 191
        - So the broadcast ID would be 210.10.10.191/26
### Subnetting question 2
- Given 195.10.10.194/28
    - 195 indicates C-Class so 24 network bits
    - converted network bits = 4 since we have a subnet value of 28.
    - host bits (h) = (total bits) - (subnet mask) = 32 - 28 = 4
    - subnet mask = 255.255.255.240
    - hosts/subnet = 2**(host bits) - 2 = 2**4 - 2 = 16 - 2 = 14
    - subnets = 2**(converted network bits) = 2*4 = 16
    - network ID =
        - Range = 2**(host bits) = 2**4 = 16
        - Therefore the address ranges are:
            - 0 to  15
            - 16 to  31
            - 32 to  27
            -   ...
            - 192 to 207  <== 195 falls in this range
            - 208 to 223
            - 224 to 239
            - 240 to 255
        - So for 195 the network range would be 192 to 207
        - So the network ID would be 195.10.10.12/28
    - broadcast ID =
        - From above the network range would be 192 to 207
        - So the broadcast ID would be 195.10.10.207/28

### Subnetting question 3
- Given 150.12.125.10/22
    - 150 indicates B-Class so 16 network bits
    - converted network bits = 6 since we have a subnet value of 22.
    - host bits (h) = (total bits) - (subnet mask) = 32 - 22 = 10
    - subnet mask = 255.255.252.0
    - hosts/subnet = 2**(host bits) - 2 = 2**10 - 2 = 1024 - 2 = 1022
    - subnets = 2**(converted network network bits) = 2**6 = 64
    - network ID = 
        - Range = 2**(host bits) / 256 = 2**10 / 256 = 1024 / 256 = 4
        - Therefore the address ranges are:
            - 0.0 to   3.255
            - 4.0 to   7.255
            - 8.0 to  11.255
            - ...
            - 120.0 to 123.255
            - 124.0 to 127.255  <== 125.10 falls in this range
            - 128.0 to 131.255
            - ...
        - So for 10 the network range would be 124.0 to 127.255
        - So the network ID would be 150.12.124.0/22
    - broadcast ID =
        - From above the network range would be 124.0 to 127.255
        - So the broadcast ID would be 150.112.127.255/22
