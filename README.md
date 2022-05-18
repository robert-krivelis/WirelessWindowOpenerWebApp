### [Check out the web-app here](https://www.alpha-wave.xyz/)

# Table of Contents
### 1. Overview
### 2. Motivations
### 3. Initial Designs
### 4. Completed Design and Implementation
### 5. Conclusions and Lessons Learned



# 1. Overview
In this post, I'm going to share and reflect on the project I spent several months working on. I'll go over the motivations, stages of design, and results to my final year engineering capstone project: the wireless window opener. 

My responsibilities in the project was the design and development of the software, the design of the enclosure, and integration with the firmware.


My team was sponsored to create a device that:
- Opens windows
- Can be **controlled remotely**
- Is wireless
- Is **solar** powered 

We were successful in creating the device and the accompanying software, which can be seen in the pictures below:

<div float="left">
  <img src="https://user-images.githubusercontent.com/43624936/167225937-6cd48a89-99aa-4b8a-b12d-17819a7def06.gif" alt="website" width="400" /> 
  <img src="https://user-images.githubusercontent.com/43624936/168945665-3706a088-9363-4bce-8acc-a6f774934d7c.gif" alt="rotating" width="400" />
  <img src="https://user-images.githubusercontent.com/43624936/168945542-de3da22f-8070-4cea-bf33-c5f288cf6d68.png" alt="device diagram" width="600" />
  <br>
  <img src="https://user-images.githubusercontent.com/43624936/168948340-63611592-0ed3-4174-8c2e-3099f57f3fe3.PNG" alt="device on window" width="300" />
  <img src="https://user-images.githubusercontent.com/43624936/168945571-82c2e0ee-f556-403f-820c-2335fd5e8801.gif" alt="enclosure" width="300" />
  <img src="https://user-images.githubusercontent.com/43624936/167225569-6abd3468-49f1-46eb-afa6-543c55fc18a9.gif" alt="hovering" width="300" />
</div>


# 2. Motivations
<div float="right"><img align="right" height="450px" src="https://user-images.githubusercontent.com/43624936/168948546-82cd0b3d-038f-4904-bdca-8fae17a0c3e7.png" alt="top-down-view">Our sponsor was looking for an automated solution to open or close windows. 

I was thrilled to work on this project as it presented a great opportunity to keep developing my skills in web development, firmware, and 3D design. </div>
Our capstone solution aimed to satisfy the gap in the market for a device with the following features:


| Existing Solutions      | Our solution |
| ----------- | ----------- |
| Not solar powered      | Solar powered       |
| Only for push-style windows   | Works on crank-style windows        |
| Has to be wired   | Works wirelessly       |
| Operated by remote only   | Operated by remote and  app        |
| Remote operates max 1 window   | App operates many windows         |


</div>


# 3. Design
I made initial design renderings in blender, though they were slightly different from the final physical result:


<img src="https://user-images.githubusercontent.com/43624936/168958739-dbc01cac-fe16-48a4-819b-c94326e4a0a0.png" alt="blender_render" width="400" />

The website was planned to be done (and ended up being done) serverlessly using AWS:

<img src="https://user-images.githubusercontent.com/43624936/168958817-ac1ef970-dfb8-4477-8359-6a2f934baaed.png" alt="aws_diagram" width="400" />


### Tech stack:
Frontend:

I planned to use **Vue.js** to create a progressive web app which would work across all devices. The styling would be done using **TailwindCSS**. 


Backend:

The backend for this project was "serverless" by building it on AWS. This project gave me lots of experience build on AWS's most popular tools such as Lambda, API Gateway, and DynamoDB. To get started, I found the [serverless framework](https://www.serverless.com/) valuable to get up and running quickly.


AWS's IoT Core was valuable in providing secure communcation to and from our device's microprocessor, which was an ESP32.  I explored using Cognito as authentication for our App, but decided I would simply authorize using **google's OAuth authentication API** for google accounts.  



# 4. Completed Design and Implementation
## 4.1 Progressive Web App Design and Implementation
As planned, I created a ***cross-platform*** app created in Vue.js to control the window opener remotely and allow for smart features like temperature monitoring and scheduling.

The webapp has the following features:
1. Cross-platform: the app can be downloaded on Android, iOS, or simply used in a browser on any device.
<img src="https://user-images.githubusercontent.com/43624936/169145192-337e5445-f8fa-4503-9878-e015b3506b3f.gif" alt="crossplatform" width="400" />


2. Secure with google authentication: by using a google account, the user's credentials are stored securely by google. This protects the device from being controlled by unauthorized users.
<img src="https://user-images.githubusercontent.com/43624936/169145196-59acdc8b-d7de-46e5-b3ee-1e51d6d0676e.gif" alt="authentication" width="400" />


3. Can control multiple devices from a single app: by adding the devices through a unique code, a user can control multiple devices from a single page. They can rename the devices for easier identification of which device they are controlling. 
<img src="https://user-images.githubusercontent.com/43624936/169145196-59acdc8b-d7de-46e5-b3ee-1e51d6d0676e.gif" alt="adding devices" width="400" />


4. Shows realtime data about the devices state and sensors: The device measures temperature and always reports whether it's open or closed, which can be seen in the dashboard.
<img src="https://user-images.githubusercontent.com/43624936/169145212-ba4c9090-22f0-455e-a157-53cceeaf05eb.PNG" alt="seeing dashboard" width="400" />


5. The device can be scheduled to open or close at any time using a time selector.
<img src="https://user-images.githubusercontent.com/43624936/169145224-87151ac4-17a4-4f53-9204-5c9e350a0583.gif" alt="seeing dashboard" width="400" />


## 4.2 Enclosure Design and Implementation
The enclosure was designed by me in fusion360. 

The enclosure had to satisfy the following objectives:

| Objective      | Solution |
| ----------- | ----------- |
| Easy to access internals     | Sliding front cover       |
| Securely fastened to window   | Screw holes on sides of enclosure        |
| Needs to hold solar panel   | Solar panel spot angled towards window       |
| Motor needs to be secured   | Designed with motor attachment spot in place        |
| Cheap to produce   | 3D Printed        |


<p align="left">
  <img align="left" src="https://user-images.githubusercontent.com/43624936/169139444-ecd221a7-b19b-450e-8fe1-acf8f32b4d34.PNG" alt="enclosure v1" width="300" />
  <br clear="left"/> 
  The first version of the enclosure. Designed quickly as a test to test 3D printing capabilities and get a rough idea of what we'd need. <br clear="right"/>
  
  <img align="middle" src="https://user-images.githubusercontent.com/43624936/169139455-5d959c3c-b9d7-4e6a-b2f6-ec8c24c277f9.PNG" alt="enclosure v2" width="300" />
  
  Version 2. The first version showed me the tolerances I had left for the sliding door were not enough. Fixing that and a few similar issues gave me more experience performing rapid iteration on my design. 
  <br clear="right"/> 
  
  <img align="middle" src="https://user-images.githubusercontent.com/43624936/169139466-13250bf3-3321-4cca-a504-f98c964a77dc.PNG" alt="enclosure v3" width="300" />
  
  The final version (version 3). By this point in the project, our team had made final decisions on the parts we were using, allowing me to make precise measurements on the dimensions for the final enclosure. I incorporated feedback from our sponsor in this version to make the screw holes on the sides a longer slot so that it would work on different sized windowsills. Although these changes were the largest from the original version, I was able to finish this version in minimal time due to the knowledge I had gained through making the earlier versions.
  
  <br clear="right"/>
</p>



### 5. Conclusions and Lessons Learned

I found this project to be immensely successful and rewarding. Our team was able to deliver a useful IoT device that integrates with a full-stack application.  

I had a great time working on this project as I learned a lot of valuable skills. From frontend design with modern javascript frameworks to integrating it with AWS and making it all work with the device itself, I was able to use this project to apply what I've learned in software, firmware, and design courses I have taken during my degree. 


Working together with others in a team had a lot of advantages in this project -- by having others coordinate meetings and work on hardware design, I was able to focus on the application and the enclosure without worrying about other parts of the project. Working with a team also has difficulties sometimes in  coordinating everyone and communicating often between teammates and our sponsors, especially since this project was done largely online due to COVID restrictions at the university.

