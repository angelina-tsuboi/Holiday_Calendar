let date;

const getHolidayFromAPI = (date)=>{

    $.ajax({
        dataType: "json",
        url: `https://holidayapi.com/v1/holidays?key=c9bd09c4-8c1d-41ba-9c10-d03561a3b9f7&country=US&year=${parseInt(date[2])}&month=${parseInt(date[1])}&day=${parseInt(date[0])}`,
      }).done(function(data) {
        $('#holidayList').empty()
          var holidays = data.holidays
          for(var i = 0; i < holidays.length; i++){
              $('#holidayList').append(`<h1>${holidays[i].name}</h1>`)
          }
      })

}

$(function () {
    $('#pnlEventCalendar').calendar({months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],onSelect: function (event) {
        $('#lblEventCalendar').text(event.label);
        date = event.label.split('.')
        console.log(date)
        getHolidayFromAPI(date);
    }});
});



