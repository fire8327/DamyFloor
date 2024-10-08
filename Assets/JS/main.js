/* tabs */
$(".tab-main").each(function(index) {
    let $this = $(this);
    let prefix = "tabs-" + index;
  
    $this.find("ul a").each(function(tabIndex) {
      let $tab = $(this);
      let tabId = prefix + "-tab-" + tabIndex;
      let panelId = prefix + "-panel-" + tabIndex;
  
      $tab.attr("href", "#" + panelId);
      $tab.closest("li").attr("id", tabId);
    });
  
    $this.find(".tab-card").each(function(panelIndex) {
      $(this).attr("id", prefix + "-panel-" + panelIndex);
    });
  
    $this.tabs();
});


/* cart */
$('#cartToggler').click(() => {
  $("#cartList").toggle(300)
})