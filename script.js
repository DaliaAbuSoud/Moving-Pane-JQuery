$(".bar").on("mousedown", function mouseDown() {
    $(".bar").css({
        cursor: "grabbing",
    });
    $(".container").on("mousemove", function (event) {
        event.preventDefault();
        $(".container").on("mouseup", function () {
            $(".bar").css({
                cursor: "grab",
            });
            $(".container").off("mousemove");
        });
        let barOffsetWidth = $(".bar").outerWidth();
        let barOffsetLeft = $(".bar").offset().left;
        let containerOffsetWidth = $(".container").outerWidth();
        let containerOffsetLeft = $(".container").offset().left;
        console.log("barOffSetWidth :", barOffsetWidth);
        console.log("barOffsetLeft:", barOffsetLeft);
        console.log("containerOffsetWidth: ", containerOffsetWidth);
        console.log("containerOffsetLeft :", containerOffsetLeft);

        let positionX = event.clientX;
        console.log("PositionX: ", positionX);

        let newLeft = positionX - barOffsetWidth - containerOffsetLeft;
        console.log("newLeft: ", newLeft);

        $(".bar").css({
            left: newLeft + "px",
        });
        $(".top-image").css({
            width: newLeft + "px",
        });
        console.log("***: ", 705 - positionX);
        let newBodyColor = 230 - (705 - positionX);
        $("body").css({
            backgroundColor: `rgb(${newBodyColor}, ${newBodyColor}, ${newBodyColor})`,
        });

        let newFontColor = 0 + (705 - positionX);
        $(".title").css({
            color: `rgb(${newFontColor}, ${newFontColor}, ${newFontColor})`,
        });

        if (newLeft <= 100) {
            $(".top-image").css({
                display: "none",
            });
            $(".bottom-image").css({
                display: "none",
            });
            $(".bar").css({
                display: "none",
            });
            $(".final-image").css({
                display: "block",
            });
            $(".title").css({
                color: "rgb(51, 24, 24)",
            });
            $(".message").css({
                display: "block",
                color: "rgb(51, 24, 24)",
            });

            $("body").css({
                backgroundColor: "rgba(243, 163, 57, 0.84)",
            });
        } else if (newLeft <= 0) {
            $(".top-image").css({
                width: 0,
            });
            $(".bar").css({
                left: "0px",
            });
        } else if (newLeft >= $(".container").outerWidth() - 40) {
            $(".bar").css({
                left: $(".container").outerWidth() - 40 + "px",
            });
        }
    });
});
