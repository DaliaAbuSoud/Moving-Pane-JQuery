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
        $(".message").css({
            color: `rgb(${newFontColor}, ${newFontColor}, ${newFontColor})`,
        });
        let newBorderColor = 0 + (705 - positionX);
        $(".container").css({
            border: `5px solid rgb(${newBorderColor}, ${newBorderColor}, ${newBorderColor})`,
        });

        if (newLeft <= 100) {
            $(".top-image-1").css({
                display: "none",
            });
            $(".top-image-2").css({
                display: "block",
            });
            $(".bottom-image-1").css({
                display: "none",
            });
            $(".bottom-image-2").css({
                display: "block",
            });

            $(".title").css({
                color: "white",
            });
            $(".message").css({
                display: "block",
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
