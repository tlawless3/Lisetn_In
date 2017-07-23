var model = {
 recordURLs: localStorage.recordURLs,
 recordTitles: localStorage.recordTitles,
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

  initLocalStorage: function(){
    localStorage.setItem("recordURLs", []);
    localStorage.setItem("recordTitles", []);
  },

  addNewRecord: function(){
    $("#newRecord").submit(function(){
      localStorage.recordURLs.push($("#URL").val());
      localStorage.recordTitles.push($("#name").val());
    });
  },

  init: function() {
    this.initLocalStorage();
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
  }
}

$(document).ready(function() {
  controller.init();
});
