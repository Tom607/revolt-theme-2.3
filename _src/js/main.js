AOS.init({
  duration: 600,
});

// Sticky Footer
var bumpIt = function() {
    $("body").css("padding-bottom", $(".footer").outerHeight(true));
    $(".footer").addClass("sticky-footer");
  },
  didResize = false;

$(window).resize(function() {
  didResize = true;
});
setInterval(function() {
  if (didResize) {
    didResize = false;
    bumpIt();
  }
}, 250);

//   // Sticky footer
//   bumpIt();

//   $("#open-button").click(function() {
//     $("body").toggleClass("stop-scrolling"), $(".overlay").fadeIn("slow");
//   });

//   $("#close-button").click(function() {
//     $("body").toggleClass("stop-scrolling"), $(".overlay").fadeOut("slow");
//   });

//   $(".three_pillars .container").each(function() {
//     $(this)
//       .find(".accordion_title")
//       .on("click", function() {
//         $(this)
//           .parent()
//           .parent()
//           .next()
//           .slideToggle(300);
//       });
//   });

//   if ($(".full_width_video").length) {
//     var video_src = $("iframe").attr("src");

//     if (video_src) {
//       var video_type = "";
//       var isPlay = false;
//       var iframe = $(".full_width_video iframe")[0];

//       if (video_src.indexOf("vimeo") >= 0) {
//         video_type = "vimeo";
//       }

//       if (video_type == "vimeo") {
//         var player = $f(iframe);

//         $(".full_width_video").on("click", function(e) {
//           player.api("play");
//           $("#custom-cursor span").text("PAUSE");

//           if (isPlay) {
//             player.api("pause");
//             $("#custom-cursor span").text("PLAY");
//           }
//           isPlay = !isPlay;
//         });

//         $(".full_width_video")
//           .mouseenter(function() {
//             var _title = isPlay ? "PAUSE" : "PLAY";
//             $("#custom-cursor span").text(_title);
//           })
//           .mouseleave(function() {
//             $("#custom-cursor span").text("");
//           });
//       }
//     }

//     if ($(".full_width_video").hasClass("revolt-video")) {
//       $(".full_width_video")
//         .mouseenter(function() {
//           var _title = isPlay ? "PAUSE" : "PLAY";
//           $("#custom-cursor span").text(_title);
//         })
//         .mouseleave(function() {
//           $("#custom-cursor span").text("");
//         });

//       $(".full_width_video").on("click", function(e) {
//         if (isPlay) {
//           $("video").trigger("play");
//           $("#custom-cursor span").text("PAUSE");
//         } else {
//           $("video").trigger("pause");
//           $("#custom-cursor span").text("PLAY");
//         }
//         isPlay = !isPlay;
//       });
//     }
//   }
// });

//balancetext http://www.pagetoscreen.net/journal/item/balancing_long_lines_in_headings

!(function(a) {
  "use strict";
  function d() {
    this.reset();
  }
  function k() {
    a(".balance-text").balanceText();
  }
  var b = document.documentElement.style,
    c =
      b.textWrap ||
      b.WebkitTextWrap ||
      b.MozTextWrap ||
      b.MsTextWrap ||
      b.OTextWrap;
  d.prototype.reset = function() {
    (this.index = 0), (this.width = 0);
  };
  var e = function(a) {
      return Boolean(a.match(/^\s$/));
    },
    f = function(b) {
      b.find('br[data-owner="balance-text"]').replaceWith(
        document.createTextNode(" ")
      );
      var c = b.find('span[data-owner="balance-text"]');
      if (c.length > 0) {
        var d = "";
        c.each(function() {
          (d += a(this).text()), a(this).remove();
        }),
          b.html(d);
      }
    },
    g = function(a) {
      return (
        (b = a.get(0).currentStyle || window.getComputedStyle(a.get(0), null)),
        "justify" === b.textAlign
      );
    },
    h = function(b, c, d) {
      c = a.trim(c);
      var e = c.split(" ").length;
      if (((c += " "), 2 > e)) return c;
      var f = a("<span></span>").html(c);
      b.append(f);
      var g = f.width();
      f.remove();
      var h = Math.floor((d - g) / (e - 1));
      return (
        f.css("word-spacing", h + "px").attr("data-owner", "balance-text"),
        a("<div></div>")
          .append(f)
          .html()
      );
    },
    i = function(a, b) {
      return (
        0 === b || b === a.length || (e(a.charAt(b - 1)) && !e(a.charAt(b)))
      );
    },
    j = function(a, b, c, d, e, f, g) {
      for (var h; ; ) {
        for (; !i(b, f); ) f += e;
        if (
          (a.text(b.substr(0, f)),
          (h = a.width()),
          0 > e
            ? d >= h || 0 >= h || 0 === f
            : h >= d || h >= c || f === b.length)
        )
          break;
        f += e;
      }
      (g.index = f), (g.width = h);
    };
  (a.fn.balanceText = function() {
    return c
      ? this
      : this.each(function() {
          var b = a(this),
            c = 5e3;
          f(b);
          var e = "";
          b.attr("style") &&
            b.attr("style").indexOf("line-height") >= 0 &&
            (e = b.css("line-height")),
            b.css("line-height", "normal");
          var i = b.width(),
            k = b.height(),
            l = b.css("white-space"),
            m = b.css("float"),
            n = b.css("display"),
            o = b.css("position");
          b.css({
            "white-space": "nowrap",
            float: "none",
            display: "inline",
            position: "static",
          });
          var p = b.width(),
            q = b.height(),
            r = "pre-wrap" === l ? 0 : q / 4;
          if (i > 0 && p > i && c > p) {
            for (
              var s = b.text(),
                t = "",
                u = "",
                v = g(b),
                w = Math.round(k / q),
                x = w;
              x > 1;

            ) {
              var y = Math.round((p + r) / x - r),
                z = Math.round((s.length + 1) / x) - 1,
                A = new d();
              j(b, s, i, y, -1, z, A);
              var B = new d();
              (z = A.index),
                j(b, s, i, y, 1, z, B),
                A.reset(),
                (z = B.index),
                j(b, s, i, y, -1, z, A);
              var C;
              (C =
                0 === A.index
                  ? B.index
                  : i < B.width || A.index === B.index
                  ? A.index
                  : Math.abs(y - A.width) < Math.abs(B.width - y)
                  ? A.index
                  : B.index),
                (u = s.substr(0, C)),
                v
                  ? (t += h(b, u, i))
                  : ((t += u.trimRight()),
                    (t += '<br data-owner="balance-text" />')),
                (s = s.substr(C)),
                x--,
                b.text(s),
                (p = b.width());
            }
            v ? b.html(t + h(b, s, i)) : b.html(t + s);
          }
          b.css({
            position: o,
            display: n,
            float: m,
            "white-space": l,
            "line-height": e,
          });
        });
  }),
    a(window).ready(k),
    a(window).resize(k);
})(jQuery);