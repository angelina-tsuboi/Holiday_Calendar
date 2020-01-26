$(function () {
    $('#pnlEventCalendar').calendar({months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],onSelect: function (event) {
        $('#lblEventCalendar').text(event.label);
    }});
});