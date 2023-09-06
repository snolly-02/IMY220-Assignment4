$(document).ready(function () {
  $(".submit").on("click", function () {
    const messageText = $("#message").val().trim();

    if (messageText !== "") {
      const messageDiv = $("<div>").addClass("col-4 rounded mb-2");

      const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w-]+)/gi;
      const matches = messageText.match(youtubeRegex);

      if (matches) {
        matches.forEach(function (match) {
          const videoId = match.split("=")[1] || match.split("/").slice(-1)[0];
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;

          const link = $("<a>")
            .attr("href", match)
            .attr("target", "_blank")
            .text(match); 

          messageDiv.append(link);

          const iframe = $("<iframe>")
            .attr("width", "100%")
            .attr("height", "315px")
            .attr("src", embedUrl)
            .attr("frameborder", "0")
            .attr("allowfullscreen", true);
          messageDiv.append(iframe);
        });
      }
      
      if ($(this).attr("id") === "right") {
        messageDiv.css("background-color", "lightblue");
      } else if ($(this).attr("id") === "left") {
        messageDiv.css("background-color", "lightgreen");
      }

      $(".messages").append(messageDiv);

      $("#message").val("");
    }
  });
});
