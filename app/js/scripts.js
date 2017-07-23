var model = {
 recordUrls: [],
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

  init: function() {
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
  }
}

$(document).ready(function() {
  controller.init();
});
