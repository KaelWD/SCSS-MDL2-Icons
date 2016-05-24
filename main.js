(function ($) {
    // Populate icon grid from JSON file
    $(document).ready(function () {
        $.getJSON('icons.json', function (data) {
            var pattern = '<span class="icon" data-mdl2="%1"><pre class="tooltip"><span class="s0">&lt;span </span><span class="s1">data-mdl2=</span><span class="s2">&quot;%1&quot;</span><span class="s0">&gt;&lt;/span&gt;</span></pre></span>';
            $.each(data.IconList, function (index, iconName) {
                var e = pattern.replace(/%1/g, iconName);
                $('#icon-grid').append(e);
            })
        });
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
