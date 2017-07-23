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

  clickOutsideModal: function(){
    $("modal").on("click")
  }

  init: function() {
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
