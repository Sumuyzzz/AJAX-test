getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //构造一个对象
  request.open("GET", "/0.css"); //
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
}; //获取这个ID的onclick属性

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("get", "/2.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
