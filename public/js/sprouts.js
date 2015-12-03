// YOUR CODE GOES HERE
var currentPage = 1;

$('.more-sprouts').on('click', function(event){
 event.preventDefault();

currentPage++;
var request = $.ajax({
  method: "GET",
  url: "/tweets.json?page=" + currentPage
});

request.done(function(data) {
  data.forEach(function(tweet) {
    $('.tweets').append("<li class='tweet'><div class='body'>" + tweet['text'] + "</div><div class='user'>" + tweet['username'] + "</li>");
  });
});
});
 $('.more-sprouts').remove();

$(window).scroll(function() {
    if($(window).scrollTop() + 100 > $(document).height() - $(window).height()) {
      currentPage++;
      var request = $.ajax({
        method: "GET",
        url: "/tweets.json?page=" + currentPage
      });

      request.done(function(data) {
        data.forEach(function(tweet) {
          $('.tweets').append("<li class='tweet'><div class='body'>" + tweet['text'] + "</div><div class='user'>" + tweet['username'] + "</li>");
        });
      });
    }
  });

// another way to do the above
// $.get("/tweets.json?page=" + currentPage, function(data){
//   currentPage++;
//   data.forEach(function(tweet){
//     $('.tweets').append("<li class='tweet'><div class='body'>" + tweet.text + "</div><div class='user'>" + tweet.username + "</li>");
//     });
//   });
// });
