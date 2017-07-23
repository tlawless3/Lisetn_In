var model = {
 recordURLs: [],
 recordTitles: [],
}

var controller = {
  addRecordListener: function() {
    $("#addRecord").on("click", function(){
      view.addRecordMenu();
    });
  },

  clickOnModalX: function(){
    $("#modalX").on("click",function(){
      view.hideRecordMenu();
    });
  },

  addNewRecord: function(){
    $("#newRecord").submit(function(){
      if($("#URL").val() !== "" && $("#name").val() !== ""){
        model.recordURLs.push($("#URL").val());
        model.recordTitles.push($("#name").val());
        view.displayRecords();
      } else if($("#URL").val() === "" && $("#name").val() !== ""){
        model.RecordURLS.push("images\\record.png");
        model.recordTitles.push($("#name").val());
      } else {
        alert("Please Fill Out Record Name");
      }
    });
  },

  init: function() {
    this.addNewRecord();
    this.clickOnModalX();
    this.addRecordListener();
  },
}

var view = {
  addRecordMenu: function() {
    $(".modal").css("display", "inline");
  },

  hideRecordMenu: function(){
    $(".modal").css("display", "none");
  },

  displayRecords: function(){
    if(model.recordURLs.length === model.recordTitles.length){
      for(var i = 0; i < model.recordUrls.length; i++){
        $(".recordContainer").append('<div class="record"> \
          <img src='+ recordURLs[i] + ' alt="a record" class="recordImg"></img> \
          <p class="recordTxt">'+ recordTitles[i] + '</p> \
        </div>')
      }
    }
  }
}

$(document).ready(function() {
  controller.init();
});
