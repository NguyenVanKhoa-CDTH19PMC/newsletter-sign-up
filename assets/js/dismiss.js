window.onload = function () {
    let dismissBtn = document.getElementById("dismiss");
    console.log('sfas');
    dismissBtn.addEventListener("click", (e) => {
        history.back();
    }
);
}