//what is cloud?
 //"The cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers. 
 //Cloud servers are located in data centers all over the world.
   
 //Why we need Cloud?
   //onDemand Avaialibility
   //Flexibility
   //Possibility to experiment
   //Ability to start small

//What great things introduce in cloud
  //ability to Automate
  //ability to programm and get things

//All service providers brings everything in the form of Api, thats the biggest thing.
  //e.g you want a database call an Api, you want a server call an Api.

//Learning only cloud is not going to help. need to have coding skills also.
  //you also need to learn network protocols, their usage, advantages, disadvantages.
  //you need to learn how diff DBs (relational/NoSql) actually work.

//What Organization expect from you in Cloud?
  //Those who open to learn and work on any cloud platform. you should be able to really understand and compare diff
   //cloud venders and services in that case.
  //Those who can adapt a process to a factory model. A model where all checks and balances are embedded in the process 
    //and things do not go wrong.and if something goes wrong. it gets handled gracefully.
  //in software industries, its very important to allow or taking care of creating required instances for any resources.

//How should you start learning Cloud?
  //Important points while reading any services.
    //cost and optimization
    //Security
    //Performance Optimization
    //Reliability
    //Operations.
//industry Senario: What is my Architecture?
//Keeping yourself updated.  e.g follow Aws blog etc.
//Do community work, but spend more time on yourself and make your foundation very strong.
//Try to understand the underlying reason for a perticular behaviour of the service e.g working of dedicated host.


//Creating AWS account
 //root user is nothing but you email address.
 //when you create a AWS account, you login as "root user" and then create "I am user" and use it for your day to day activity.
 //use "root user" in some scenario where it required and mention in AWS blog for its usage. 

 ///SESSION 01
   //How Cloud come into the picture?
     //Virtualization
     //Infrastructure as Code
     //Need for speed and agility.
     //Culture of startups and small organizations
     //Maintaining data Center is tough, its not joke.
     //Another opportunity of business for some brainy guys.

  //Public, Private and Hybrid Cloud
    //Public: a customer organization does not own the hardware. e.g: AWS, AZURE, GOOGLE CLOUD ETC...
    //Private: A customer organization own the hardware.
    //Hybrid: A mix of public and private cloud usage.

  //Some of the largest player in the private cloud market includes:
    //VMware, Oracle, IBM, Red Hat.

  //Cloud Security: Shared Responsibilty
    //Customer: responsibilty for security 'IN' the cloud.
      //Customer Data: Platform, Applications, Identity and access management.
      //Operating System, network and firewall Configuration. 
    //AWS: responsibilty for security 'OF' the cloud.
     //Software: compute, Storage, Database, Networking.
    //hardware/AWS Global Infrastructure
     //Regions, Availabilty Zones, Edge Locations

  ///Types of Services.
    //apart from PAAS, SAAS, IAAS, Aws from diff services within it like EC2 is a IAAS service.

  ///AWS global Infrastructure
   //Regions: data centers available in some place e.g: Mumbai, Sydney, Tokyo etc.
   //Connectivity: two data centers connected through public by default
   //availability zone: collections of data centers.
   //Edge Location: Edge locations are AWS data centers designed to deliver services with the lowest latency possible.

   ///SESSION 02
     //EC2: Amazon Elastic Compute Cloud is a part of Amazon.com's cloud-computing platform, Amazon Web Services, 
       //that allows users to rent virtual computers on which to run their own computer applications.
    //EC2: Internal Diagram:
      //It contains CPU's, RAM, Instance Store(Ephemeral):
        //Ephemeral means data will not persist for long.
     //when we create an instance of EC2, its creates a disk called amazon EBS and it is persistence.
       //EBS is connected to VM through network only it is not on the physical host.

     //Root Device
       //Root device is the volume where Operating System get Stored. 
