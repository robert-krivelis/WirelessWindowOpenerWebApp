### [Check out the web-app I made by clicking here](https://www.alpha-wave.xyz/)

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
- Can be controlled remotely
- Is wireless
- Is solar powered 

We were successful in creating the device and the accompanying software, which can be seen in the pictures below:

<div float="left">
  <img src="https://user-images.githubusercontent.com/43624936/167225937-6cd48a89-99aa-4b8a-b12d-17819a7def06.gif" alt="website" width="400" /> 
  <img src="https://user-images.githubusercontent.com/43624936/168945665-3706a088-9363-4bce-8acc-a6f774934d7c.gif" alt="rotating" width="400" />
  <img src="https://user-images.githubusercontent.com/43624936/168945542-de3da22f-8070-4cea-bf33-c5f288cf6d68.png" alt="device diagram" width="800" />
  <img src="https://user-images.githubusercontent.com/43624936/168948340-63611592-0ed3-4174-8c2e-3099f57f3fe3.PNG" alt="device on window" width="800" />
  <img src="https://user-images.githubusercontent.com/43624936/168945571-82c2e0ee-f556-403f-820c-2335fd5e8801.gif" alt="enclosure" width="400" />
  <img src="https://user-images.githubusercontent.com/43624936/167225569-6abd3468-49f1-46eb-afa6-543c55fc18a9.gif" alt="hovering" width="400" />
</div>


# 2. Motivations
<div float="right"><img align="right"src="https://user-images.githubusercontent.com/43624936/168948546-82cd0b3d-038f-4904-bdca-8fae17a0c3e7.png" alt="top-down-view">Our sponsor was looking for an automated solution to open or close windows. 

I was thrilled to work on this project as it presented a great opportunity to keep developing my skills in web development, firmware, and 3D design. </div>
Our capstone solution aimed to satisfy the gap in the market for a device with the following features:


| Existing Solutions      | Our solution |
| ----------- | ----------- |
| Not solar powered      | Solar powered       |
| Attachable only to push-style windows   | Works on crank-style windows        |
| Has to be wired   | Works wirelessly       |
| Operated by remote only   | Operated by remote and  app        |
| Remote operates on one window   | One remote operates many windows        |


</div>

# 3. Design
A cr

I created a ***cross-platform*** app created in Vue.js to control the window opener remotely and allow for smart features like temperature monitoring and scheduling.
