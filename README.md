### [Check out the web-app I made by clicking here](https://www.alpha-wave.xyz/)

# Table of Contents
### 1. Overview
### 2. Motivations
### 3. Initial Designs
### 4. Completed Design and Implementation
### 5. Conclusions and Lessons Learned


# 1. Overview
In this post, I'm going to share and reflect on the project I spent several months working on. I'll go over the motivations, stages of design, and results to my final year engineering capstone project: the wireless window opener. My responsibilities in the project was the design and development of the software, the design of the enclosure, and integration with the firmware.


My team was sponsored to create a device that:
- Opens windows
- Can be controlled remotely
- Is wireless
- Is solar powered 

We were successful in creating the device and the accompanying software, which can be seen in the pictures below:

<div float="left">
  <img src="https://user-images.githubusercontent.com/43624936/167225937-6cd48a89-99aa-4b8a-b12d-17819a7def06.gif" alt="website" width="400" /> 
  <img src="https://user-images.githubusercontent.com/43624936/168945665-3706a088-9363-4bce-8acc-a6f774934d7c.gif" alt="device" width="400" />
  <img src="https://user-images.githubusercontent.com/43624936/168945542-de3da22f-8070-4cea-bf33-c5f288cf6d68.png" alt="device on window" width="800" />
<!--   <img src="https://user-images.githubusercontent.com/43624936/168945502-122aa791-0790-467f-bdbc-f2fd60c06622.gif" alt="device on window" width="400" /> -->
  <img src="https://user-images.githubusercontent.com/43624936/168948340-63611592-0ed3-4174-8c2e-3099f57f3fe3.PNG" alt="device on window" width="800" />
  <img src="https://user-images.githubusercontent.com/43624936/168945571-82c2e0ee-f556-403f-820c-2335fd5e8801.gif" alt="device on window" width="400" />
  <img src="https://user-images.githubusercontent.com/43624936/167225569-6abd3468-49f1-46eb-afa6-543c55fc18a9.gif" alt="device on window" width="400" />
  
</div>


# 2. Motivations


![Wireless Device](https://user-images.githubusercontent.com/43624936/167225569-6abd3468-49f1-46eb-afa6-543c55fc18a9.gif)

## Features: 
  - **Solar** powered.
  - Motor lasts for hundreds of cycles.
  - Controllable from any device.

https://user-images.githubusercontent.com/43624936/167225937-6cd48a89-99aa-4b8a-b12d-17819a7def06.gif - website
https://user-images.githubusercontent.com/43624936/167225569-6abd3468-49f1-46eb-afa6-543c55fc18a9.gif - device
# A ***cross-platform*** app created in Vue.js to control your windows automatically.
![webappdemo](https://user-images.githubusercontent.com/43624936/167225937-6cd48a89-99aa-4b8a-b12d-17819a7def06.gif)
![rotating_pcb](https://user-images.githubusercontent.com/43624936/168945502-122aa791-0790-467f-bdbc-f2fd60c06622.gif)
![high level design](https://user-images.githubusercontent.com/43624936/168945542-de3da22f-8070-4cea-bf33-c5f288cf6d68.png)
![enclosure_alone](https://user-images.githubusercontent.com/43624936/168945571-82c2e0ee-f556-403f-820c-2335fd5e8801.gif)
![enclosure_with_equpment](https://user-images.githubusercontent.com/43624936/168945665-3706a088-9363-4bce-8acc-a6f774934d7c.gif)
![on_actual_window](https://user-images.githubusercontent.com/43624936/168945775-bcc9d35f-2f5e-45e0-8ab1-f6616c0cb929.JPG)

![top down](https://user-images.githubusercontent.com/43624936/168948546-82cd0b3d-038f-4904-bdca-8fae17a0c3e7.png)

![onwindow](https://user-images.githubusercontent.com/43624936/168948340-63611592-0ed3-4174-8c2e-3099f57f3fe3.PNG)

