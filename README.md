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
- Can be controlled remotely
- Is wireless
- Is solar powered 

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


I created a ***cross-platform*** app created in Vue.js to control the window opener remotely and allow for smart features like temperature monitoring and scheduling.


# ------section not completed, check back later-----
# 4. Completed Design and Implementation
- add gifs and descriptions of features of website here
- STL renderings of iterating over the enclosure

### 5. Conclusions and Lessons Learned
- creating a useful, full-stack app is a lot of fun
- working together in a team has its advantages in having other people do stuff you're not as interested in (coordinating meetings, hardware design) and some drawbacks (difficulty of coordinating everyone and sharing workloads evenly)

