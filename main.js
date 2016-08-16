(function ($) {
    // Populate icon grid from JSON file
    $(document).ready(function () {
        $.getJSON('icons.json', function (data) {
            var pattern =
                '<span class="icon" data-mdl2="%1">' +
                '   <pre class="tooltip">' +
                '       <span class="s0">&lt;span </span><span class="s1">data-mdl2=</span><span class="s2">&quot;%1&quot;</span><span class="s0">&gt;&lt;/span&gt;</span>' +
                '   </pre>' +
                '</span>';
            $.each(data.IconList, function (index, iconName) {
                var e = pattern.replace(/%1/g, iconName);
                $('#icon-grid').append(e);
            });
        }).done(fixOverflow);
    });

    $(window).on('resize', function () {
        fixOverflow();
    });

    function fixOverflow() {
        // Make sure the labels don't go off the sides of the screen
        //
        $('.tooltip').each(function () {
            var self = $(this);
            self.addClass('fullsize');

            var offset = self.offset();
            var width = self.width();
            var top = offset.top;
            var left = offset.left - 68;
            var right = left + width;

            if (left < 0) {
                self.offset({ top: top, left: 68 });
            } else if (right > $('main').width() - 68) {
                self.offset({ top: top, left: $('main').width() - width + 32 })
            } else {
                self.css({top: '', left: ''});
            }

            self.removeClass('fullsize');
        });
    }

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $('#icon-grid').on('click', '.icon', function () {
        copyToClipboard($(this).find('.tooltip'));
    });

    $(".nav-expander").click(function () {
        var container = $("nav");

        if (container.hasClass("open")) {
            container.removeClass("open");
        } else {
            container.addClass("open");
        }
    });

    // Hide nav when clicked out of
    $(document).mouseup(function (e) {
        var container = $("nav.open");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.removeClass("open");
        }
    });
})(jQuery);
