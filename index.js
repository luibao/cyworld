// 3개의 함수 필요
const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src","home.html");
  document.getElementById("menuHome").style = "color : black; background-color: white";
    //나머지 초기화
    document.getElementById("menuJukebox").style= "color: white; background-color: #298eb5";
    document.getElementById("menuGame").style= "color: white; background-color: #298eb5";
};

const menuJukebox = () => {
    document.getElementById("contentFrame").setAttribute("src","jukebox copy.html");
    document.getElementById("menuJukebox").style = "color : black; background-color: white";   
      //나머지 초기화
      document.getElementById("menuHome").style= "color: white; background-color: #298eb5";
      document.getElementById("menuGame").style= "color: white; background-color: #298eb5";
};

const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src","game.html");
    document.getElementById("menuGame").style = "color : black; background-color: white";  
      //나머지 초기화
      document.getElementById("menuJukebox").style= "color: white; background-color: #298eb5";
      document.getElementById("menuHome").style= "color: white; background-color: #298eb5";
};