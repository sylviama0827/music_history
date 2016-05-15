// $(document).ready(function(){

  //before click "more", default as hide
  $("#addedSongs4").hide();
  //Load song1.json file and loop to the song list(index.html)
  
  function getJSON1Data(){
    $.ajax({
      url: "https://trying-out.firebaseio.com/songs/.json",
      type: "GET"
    }).done(function(data){
      loopThrough(data);
    });
  }

  getJSON1Data();

  //this is the loop through with firebase change from array to objects
  let loopThrough=(data)=>{
    for (let key in data){
      $("#addedSongs3").append("<ul><li class='songNameSpecial'>"+data[key].songName+"</li>"+"<li>"+data[key].artist+"</li><li>"+data[key].album+"</li><a class='deleteBtn' href='#' id="+key+">Delete</a></ul>");
    }
  }

  // function loopThrough(data){
  //   $(data).each(function(i, element){
  //     $("#addedSongs3").append("<ul><h1>"+element.songName+"</h1>"+"<li>"+element.artist+"</li><li>"+element.album+"</li><button>Delete</button></ul>");
  //   });
  // };

  getJSON2Data=()=>{
    //load songs2.json file, (but hide until click "more" button)
    $.ajax({
      url:"https://blistering-heat-1448.firebaseio.com/songs/.json" //my first firebase
    }).done(function(data){
      loadJson2(data);
    });
  }

  let loadJson2=(data)=>{
    for(let key in data){
      $("#addedSongs4").append("<ul><li class='songNameSpecial'>"+data[key].songName+"</li><li>"+data[key].artist+"</li><li>"+data[key].album+"</li><a  class='deleteBtn' href='#' id="+key+">Delete</a></ul>");

    };
  };

  getJSON2Data();
  

  //When click "more" button, load the second json file
  $("#more").click(function(){
    $("#addedSongs4").show();
    //when click more, hide "more" btn and show "less" btn
    $("#more").hide();
    $("#less").show();
  });

  //less function: hide the songs in addedSongs4, and the "less" btn, show "more" btn
  $("#less").click(lessfunction);

  function lessfunction(){
    $("#addedSongs4").hide();
    $("#more").show();
    $("#less").hide();
  };

    // delete each song function
    $("#addedSongs3").click((event)=>{
      var deletekey=event.target.id;
      var urlLink= "https://trying-out.firebaseio.com/songs/"+deletekey+"/.json";
      $.ajax({
        url: urlLink,
        type:"DELETE"
      }).done(function(){
        //"refresh the page" by empty it then reload
        $("#addedSongs3").empty();
        getJSON1Data();
      });


    });

    $("#addedSongs4").click(function(event){
      var deletekey=event.target.id;
      var urlLink= "https://blistering-heat-1448.firebaseio.com/songs/"+deletekey+"/.json";
      $.ajax({
        url: urlLink,
        type:"DELETE"
      }).done(function(){
        //"refresh the page" by empty it then reload
        $("#addedSongs4").empty();
        getJSON2Data();
      });
    });
// });

