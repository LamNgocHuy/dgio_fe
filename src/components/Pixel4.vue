<template>
    <div id="pixel4" class="frame">
        <div class="header-phone">
            <img class="camera-len" src="../assets/camera_len.png">
            
        </div>
        <div class="screen">
            <div class="header-screen">
                <ul>
                    <li>
                        <p>14:35</p>
                    </li>
                    <li>
                        <div class="battery">

                        <div class="battery-level" style="height:75%;"></div>
                        </div>
                    </li>
                    <li>
                        <p>75%</p>
                    </li>
                    <li>
                        <div class="wifi"></div>
                    </li>
                </ul>
            </div>
            <div class="nav-bar">
                <ul class="full-width">
                    <li>
                        <i class='bx bxs-left-arrow'></i>
                    </li>
                    <li>
                        <i class='bx bxs-circle' ></i>
                    </li>
                    <li>
                        <i class='bx bxs-rectangle'></i>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Pixel4.vue'
}
</script>

<style lang="scss" scoped>
#pixel4{
    width: 100%;
    height: 95%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.95);
    z-index: 2;
}
.frame{
    position: relative;
    top:2.5%;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(65,63,63,1) 5%, rgba(96,88,88,1) 10%, rgba(65,63,63,1) 15%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 73%, rgba(23,22,22,1) 80%, rgba(65,63,63,1) 85%, rgba(107,100,100,1) 90%, rgba(65,63,63,1) 95%, rgba(0,0,0,1) 100%);
    border-radius: 35px;
    align-items: center;
}
.screen{
    width: 95%;
    height: 93%;
    background-color:  #a1b5da;
    border-radius: 35px;
    margin:auto;
    position: relative;
    top: 12px;
}
.nav-bar{
    width: 100%;
    height: 6.8%;    
    background-color:rgba(7, 7, 7, 0.932);
    border-bottom-left-radius: 33px;
    border-bottom-right-radius: 33px;
    position: absolute;
    margin: auto;
    bottom: 0;
    align-items: center;
}
.nav-bar > ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding:0px;
    display: flex;
    flex-direction: row;
}
.nav-bar > ul > li {
    width: 33.3333333333%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.nav-bar > ul > li > i {
    color: #fff;
}

li{
    padding: 0px;
}
  
.header-phone{
    width: 100px;
    height: 20px;
    position: relative;
    top: 5px;
    left: 55px;
    opacity: 0.9;
    margin: 0px;
}
.camera-len{
    width: 50px;
    height: 100%;
}
.stereo{
  width: 45px;
  height: 20px;
  background:rgb(238, 230, 230);
  position: relative;
  left: 70%;
  border-radius: 5px;
}
.header-screen{
    height:35px;
    width: 100%;
    background-color: rgba(119, 116, 116, 0.753);
    position: relative;
    top:-1px;
     border-top-left-radius:35px;   
    border-top-right-radius: 35px;
}
.wifi {
	padding: 2px;
}

.wifi, .wifi:before {
	display: inline-block;
	border: 7px double transparent;
	border-top-color: currentColor;
	border-radius: 50%;
}

.wifi:before {
	content: '';
	width: 0; height: 0;
}
.header-screen > ul {
    display: flex;
    flex-direction: row-reverse;
}
.header-screen > ul > li {
    display: inline;
    position: relative;
    top:8px;
    right: 10px;
    color: white;
    font-size: 0.9rem;
    margin: 2px;
}

.battery {
  border: 2px solid #333;
  width: 12px;
  height: 20px;
  padding: 2px;
  border-radius: 4px;
  position: relative;
  margin: 15px 0;
  top: -15px;
}

.battery-level {
  background: #30b455;  
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;  
}
</style>