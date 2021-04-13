
function btn1Click(){
  document.getElementById("firstPage").style.display = "none";
  createForm("1");
  document.getElementById("storyForm").style.display = "block";
  //Mission"
  
}

function btn2Click(){
  document.getElementById("firstPage").style.display = "none";
  createForm("2");
  document.getElementById("storyForm").style.display = "block";
  //Lunch"
  
}

function btn3Click(){
  document.getElementById("firstPage").style.display = "none";
  createForm("3");
  document.getElementById("storyForm").style.display = "block";
  //Weather"
  
}

function btn4Click(a){
  let topic = "";
    if(a == "1"){
      topic = "Mission";
    }
    else if(a == "2"){
      topic = "Lunch";
    }
    else if(a == "3"){
      topic = "Weather";
    }
  output();
  document.getElementById("firstPage").style.display = "none";
  document.getElementById("fullStory").style.display = "block";
  document.getElementById("one").innerHTML =  document.getElementById("Adjective").value;
  document.getElementById("two").innerHTML =  document.getElementById("Verb1").value;
  document.getElementById("three").innerHTML =  document.getElementById("Verb2").value;
  document.getElementById("four").innerHTML =  document.getElementById("Plural1").value;
  document.getElementById("five").innerHTML =  document.getElementById("Plural2").value;
  document.getElementById("six").innerHTML =  document.getElementById("Plural3").value;
  document.getElementById("topic").innerHTML = topic;
  document.getElementById("storyForm").reset();
  document.getElementById("storyForm").remove();
}

function btn5Click(){
  document.getElementById("fullStory").remove();
    document.getElementById("firstPage").style.display = "block";
    document.getElementById("fullStory").style.display = "none";
    document.getElementById("storyForm").style.display = "none";
  }

  function createForm(x) {
    
    let br = document.createElement("br");
    // Create a form synamically
    let form = document.createElement("form");
    form.setAttribute("id", "storyForm");
    form.setAttribute("class", "container mt-4 mb-4");
  
    // Create an input element for Full Name
    let adj = document.createElement("input");
    adj.setAttribute("type", "text");
    adj.setAttribute("name", "");
    adj.setAttribute("class", "form-control mb-2");
    adj.setAttribute("id", "Adjective");
    adj.setAttribute("placeholder","Adjective");
  
    let m1 = document.createElement("input");
    m1.setAttribute("type", "text");
    m1.setAttribute("name", "");
    m1.setAttribute("class", "form-control mb-2");
    m1.setAttribute("id", "Verb1");
    m1.setAttribute("placeholder","Verb 1");

    let n2 = document.createElement("input");
    n2.setAttribute("type", "text");
    n2.setAttribute("name", "");
    n2.setAttribute("class", "form-control mb-2");
    n2.setAttribute("id", "Verb2");
    n2.setAttribute("placeholder","Verb 2");

    let variable1 = document.createElement("input");
    variable1.setAttribute("type", "text");
    variable1.setAttribute("name", "");
    variable1.setAttribute("class", "form-control mb-2");
    variable1.setAttribute("id", "Plural1");
    variable1.setAttribute("placeholder","Plural Noun 1");

    let variable2 = document.createElement("input");
    variable2.setAttribute("type", "text");
    variable2.setAttribute("name", "");
    variable2.setAttribute("class", "form-control mb-2");
    variable2.setAttribute("id", "Plural2");
    variable2.setAttribute("placeholder","Plural Noun 2");

    let variable3 = document.createElement("input");
    variable3.setAttribute("type", "text");
    variable3.setAttribute("name", "");
    variable3.setAttribute("class", "form-control mb-2");
    variable3.setAttribute("id", "Plural3");
    variable3.setAttribute("placeholder","Plural Noun 3");

    let variable4 = document.createElement("input");
    variable4.setAttribute("type", "button");
    variable4.setAttribute("name", "");
    variable4.setAttribute("class", "btn btn-primary btn-lg btn-block storyBtn");
    variable4.setAttribute("id", "btn4");
    variable4.setAttribute("Value", "Create a Story");
    variable4.setAttribute("onclick", 'btn4Click(' + x + ')');
    


    form.appendChild(adj);
    form.appendChild(br.cloneNode());
          
    form.appendChild(m1);
    form.appendChild(br.cloneNode());
          
    form.appendChild(n2);
    form.appendChild(br.cloneNode());
          
    form.appendChild(variable1);
    form.appendChild(br.cloneNode());
          
    form.appendChild(variable2);
    form.appendChild(br.cloneNode());

    form.appendChild(variable3);
    form.appendChild(br.cloneNode());

    form.appendChild(variable4);
    form.appendChild(br.cloneNode());

    document.getElementsByTagName("body")[0]
        .appendChild(form);
        }


  function output(){
    let iDiv = document.createElement('div');
      iDiv.id = 'fullStory';
      iDiv.className = 'mt-4 mb-4 container';

      
      const text = '<center><div class="box"><h2>Our <span id="topic">Mission</span> is to <u id="one">cook</u> our <u id="two">winners</u> with <u id="three">Obedient</u> <u id="four">Politics</u> that will <u id="five">Strike</u> their <u id="six">Birds.</u></h2></div><button type="button" class="btn btn-danger btn-lg btn-block storyBtn" id="btn5" onclick="btn5Click()">Create a New Story</button></center>';
        iDiv.innerHTML = text;


      
      document.getElementsByTagName('body')[0].appendChild(iDiv);
  }