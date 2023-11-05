

async function shellSort() {
    let bars = document.querySelectorAll('.baritem');
    const n = bars.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = parseInt(bars[i].style.height);
            let j;
            bars[i].style.background='red';
            for (j = i; j >= gap && parseInt(bars[j - gap].style.height) > temp; j -= gap) {
                bars[j].style.height = bars[j - gap].style.height;
                await delay(time);
                bars[j].style.background='green';
            }
            bars[j].style.height = temp + "px";
            bars[j].style.background='green';
        }
    }
}





document.getElementById("shell").addEventListener("click", async function () {



    disableSizeSlider();
    disableSortingBtn();
    await shellSort();
    enableSizeSlider();
    enableSortingBtn();
});
