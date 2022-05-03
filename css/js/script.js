alert("javascript подключон");

(function() {
    (".colors1:nth-child(1)").click(function () {
        letColor = ["red", "green", "blue"];
        let hasClass;

        for (let i = 0; i <= 3; i++) {
            if (hasClass = (".container").hasClass(letColor[i])) {
                (".container").removeClass(letColor[i]);
            }
        }
        (".container").addClass("red");
    });

    (".colors2:nth-child(2)").click(function () {
        letColor = ["red", "green", "blue"];
        let hasClass;

        for (let i = 0; i <= 3; i++) {
            if (hasClass = (".container").hasClass(letColor[i])) {
                (".container").removeClass(letColor[i]);
            }
        }
        (".container").addClass("green");
    });

    (".colors3:nth-child(3)").click(function () {
        letColor = ["red", "green", "blue"];
        let hasClass;

        for (let i = 0; i <= 3; i++) {
            if (hasClass = (".container").hasClass(letColor[i])) {
                (".container").removeClass(letColor[i]);
            }
        }
        (".container").addClass("blue");
    });

});
