
id_list = [1]

$(".nav-tabs").on("click", "a", function (e) {
    e.preventDefault();
    if (!$(this).hasClass('add-contact')) {
        $(this).tab('show');
    }
})
.on("click", "span", function () {
    var anchor = $(this).siblings('a');
    $(anchor.attr('href')).remove();
    $(this).parent().remove();
    $(".nav-tabs li").children('a').first().click();
});

$('.add-fundus').click(function (e) {
e.preventDefault();

var id = $(".nav-tabs").children().length;
var tabId = 'fundus_' + id;
$(this).closest('li').before('<li><a href="#fundus_' + id + '">New Fundus</a> <span> x </span></li>');
$('.tab-content').append('<div class="tab-pane" id="' + tabId + '">Contact Form: New Contact ' + id + '</div>');
$('.nav-tabs li:nth-child(' + id + ') a').click();
});